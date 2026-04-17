import { PostCard } from '@/components/Card/PostCard';
import PostmagesGallery from '@/components/GalleryViewer/PostmagesGallery';
import { ContentHeader } from '@/components/Header/ContentHeader';
import useTranslation from '@/hooks/use-translation';
import FrontPageLayout from '@/pages/layouts/FrontPageLayout';
import { Head, usePage } from '@inertiajs/react';
import { CheckIcon, FacebookIcon, Link2Icon, SendIcon, Share2Icon } from 'lucide-react';
import { useState } from 'react';

const ASSET_URL = 'https://news-app.redcross.org.kh/assets/images';
const APP_URL = 'https://news-app.redcross.org.kh';

const Show = () => {
    const { showData, relatedData, app_url } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();

    const description = currentLocale === 'kh' ? showData?.short_description || showData?.short_description : showData?.short_description;

    // Get the raw title string
    const rawTitle = currentLocale === 'kh' ? showData?.title || showData?.title : showData?.title;

    // Helper to strip HTML tags for Meta Tags (SEO needs plain text)
    const cleanTitle = rawTitle?.replace(/<[^>]*>?/gm, '') || '';

    const image = `${ASSET_URL}/posts/thumb/${showData?.images[0]?.image}`;

    // Share Logic
    const [copied, setCopied] = useState(false);
    const shareUrl = APP_URL + `/posts/${showData?.id}`;

    const handleCopyLink = () => {
        navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <FrontPageLayout>
            <Head>
                {/* Basic Meta - Use cleanTitle for plain text */}
                <title>{cleanTitle}</title>
                <meta name="description" content={description} />

                {/* Open Graph */}
                <meta property="og:title" content={cleanTitle} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={app_url} />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={cleanTitle} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />
            </Head>

            <div className="section-container">
                <div className="relative z-10 mx-auto flex lg:border-0">
                    <main className="prose dark:prose-invert prose-h2:mb-0.5 prose-h3:mb-0.5 prose-p:m-0 prose-ul:m-0 w-full max-w-none">
                        <div>
                            {/* Title rendered as HTML */}
                            <h1 className="text-primary mt-6 text-2xl leading-tight md:text-3xl" dangerouslySetInnerHTML={{ __html: rawTitle }} />

                            <div className="border-border my-6 flex flex-wrap items-center gap-3 border-y py-4">
                                <span className="text-muted-foreground flex items-center gap-2 text-base font-bold">
                                    <Share2Icon size={18} />
                                    {t('Share')}:
                                </span>

                                {/* Telegram */}
                                <a
                                    href={`https://t.me/share/url?url=${shareUrl}&text=${cleanTitle}`}
                                    target="_blank"
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#24A1DE] text-white transition-transform hover:scale-110"
                                    title="Share on Telegram"
                                >
                                    <SendIcon size={20} className="mt-0.5 mr-0.5" />
                                </a>

                                {/* Facebook */}
                                <a
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                                    target="_blank"
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white transition-transform hover:scale-110"
                                    title="Share on Facebook"
                                >
                                    <FacebookIcon size={20} fill="currentColor" />
                                </a>

                                {/* X (Twitter) */}
                                <a
                                    href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${cleanTitle}`}
                                    target="_blank"
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-110 dark:bg-slate-800"
                                    title="Share on X"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>

                                {/* Copy Link */}
                                <button
                                    onClick={handleCopyLink}
                                    className={`flex h-10 items-center gap-2 rounded-full px-4 text-base font-bold transition-all active:scale-95 ${
                                        copied ? 'bg-green-600 text-white' : 'bg-muted text-foreground hover:bg-slate-200 dark:hover:bg-slate-800'
                                    }`}
                                >
                                    {copied ? <CheckIcon size={18} /> : <Link2Icon size={18} />}
                                    {copied ? t('Copied') : t('Copy Link')}
                                </button>
                            </div>
                            {/* Body Content */}
                            <div
                                dangerouslySetInnerHTML={{
                                    __html:
                                        currentLocale == 'kh' ? (showData.long_description ?? showData.long_description) : showData.long_description,
                                }}
                            ></div>
                        </div>
                    </main>
                </div>
                {showData?.images?.length > 0 && (
                    <PostmagesGallery containerClassName="mt-4" label={t('Images')} images={showData?.images} basePath={`${ASSET_URL}/posts/`} />
                )}
            </div>

            {relatedData?.length > 0 && (
                <section className="bg-slate-50 py-10 dark:bg-slate-900/50">
                    <div className="section-container">
                        <ContentHeader link={`/posts?category_code=${showData?.category_code}&page=1`} title={t('Related Posts')} />
                        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {relatedData?.map((item: any) => <PostCard key={item.id} post={item} />)}
                        </div>
                    </div>
                </section>
            )}
        </FrontPageLayout>
    );
};

export default Show;
