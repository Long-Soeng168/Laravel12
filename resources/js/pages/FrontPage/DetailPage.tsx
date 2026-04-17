import FrontPageLayout from '@/pages/layouts/FrontPageLayout';
import { Head, usePage } from '@inertiajs/react';

const ASSET_URL = 'https://news-app.redcross.org.kh/assets/images';

const Index = () => {
    const { showData } = usePage<any>().props;

    // Determine titles and descriptions based on available locale logic
    const title = showData?.title;
    const content = showData?.long_description;

    // Helper to extract YouTube ID
    const getYouTubeID = (url: string) => {
        try {
            const urlObj = new URL(url);
            return urlObj.searchParams.get('v');
        } catch (e) {
            return null;
        }
    };

    return (
        <FrontPageLayout>
            <Head title={title} />

            <div className="section-container px-4">
                {/* 1. Page Title Header */}
                <div className="my-8 flex items-center gap-3">
                    <div className="h-8 w-1.5 rounded-full bg-[#e62129]" />
                    <h1 className="text-foreground text-2xl font-bold md:text-3xl">{title}</h1>
                </div>

                <div className="space-y-10">
                    {/* 2. Main HTML Content - Full Width */}
                    {content && content != `<p>&nbsp;</p>` && (
                        <div className="prose dark:prose-invert max-w-none">
                            <div
                                className="text-muted-foreground text-base leading-relaxed font-bold"
                                dangerouslySetInnerHTML={{ __html: content }}
                            />
                        </div>
                    )}

                    {/* 3. Video Section - Only shows if active */}
                    {showData?.video_link_status === 'active' && showData?.video_link && (
                        <div className="border-border bg-card overflow-hidden rounded-2xl border shadow-sm">
                            <div className="aspect-video w-full bg-black">
                                <iframe
                                    className="h-full w-full"
                                    src={`https://www.youtube.com/embed/${getYouTubeID(showData.video_link)}`}
                                    title="Video content"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    )}

                    {/* 4. Image Gallery - Full Width Grid */}
                    {showData?.images?.length > 0 && (
                        <div className="space-y-6 pt-4">
                            <div>
                                {showData.images.map((img: any) => (
                                    <img
                                        src={`${ASSET_URL}/pages/${img.image}`}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        alt="Gallery image"
                                        loading="lazy"
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </FrontPageLayout>
    );
};

export default Index;
