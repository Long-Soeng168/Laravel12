import { PostCard } from '@/components/Card/PostCard';
import { Link, usePage } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';
import FrontPageLayout from './layouts/FrontPageLayout';

const ASSET_URL = 'https://news-app.redcross.org.kh/assets/images';

export default function CRCWebsite() {
    const { banners = [], recent_posts = [], post_categories = [], links = [] }: any = usePage().props;

    const topBanner = banners.find((b: any) => b.position_code === 'TOP_HOMEPAGE') || banners[0];
    const menuLinks = links.filter((l: any) => l.type === 'menu' || l.title == 'E-Learning');

    return (
        <main className="section-container mx-auto px-4 py-6 md:py-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                <div className="space-y-8 lg:col-span-8">
                    {/* Hero Banner */}
                    {topBanner?.image && (
                        <div className="group relative aspect-video overflow-hidden rounded-2xl bg-slate-200 shadow-lg">
                            <img
                                src={`${ASSET_URL}/banners/${topBanner.image}`}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                alt="Hero"
                            />
                        </div>
                    )}

                    {/* News Feed */}
                    <section>
                        <SectionHeader title="Latest News" />
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            {recent_posts.map((post: any) => (
                                <PostCard key={post.id} post={post} />
                            ))}
                        </div>
                        <div className="mt-10 flex justify-center">
                            <Link
                                prefetch
                                href="/posts?category_code=NEWS&page=1"
                                className="group relative flex items-center gap-3 overflow-hidden rounded-full border-2 border-[#e62129] px-10 py-3 text-base font-bold text-[#e62129] shadow-sm transition-all hover:bg-[#e62129] hover:text-white hover:shadow-red-200 active:scale-95 dark:hover:shadow-none"
                            >
                                <span>See More News</span>
                                <ChevronRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />

                                {/* Subtle shine effect on hover */}
                                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                            </Link>
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <aside className="space-y-6 lg:col-span-4">
                    <div className="border-border bg-card rounded-2xl border p-6 shadow-sm transition-colors">
                        <div className="mb-4 flex items-center gap-2">
                            <div className="h-5 w-1 rounded-full bg-[#e62129]" />
                            <h4 className="text-foreground text-base font-bold">Categories</h4>
                        </div>
                        <div className="space-y-1">
                            {post_categories.map((cat: any) => (
                                <a
                                    key={cat.id}
                                    href={`/posts?category_code=${cat.code || cat.name}&page=1`}
                                    className="group flex items-center justify-between rounded-xl px-2 py-2 transition-all hover:bg-red-50 dark:hover:bg-red-950/30"
                                >
                                    {/* Left side: Image and Label */}
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white transition-colors">
                                            <img
                                                src={`${ASSET_URL}/post_categories/thumb/${cat.image}`}
                                                className="size-10 object-contain"
                                                alt={cat.name}
                                            />
                                        </div>
                                        <span className="text-muted-foreground text-base font-bold transition-colors group-hover:text-[#e62129]">
                                            {cat.name}
                                        </span>
                                    </div>

                                    {/* Right side: Arrow */}
                                    <ChevronRight
                                        size={20}
                                        className="text-muted-foreground/50 mr-2 transition-transform group-hover:translate-x-1 group-hover:text-[#e62129]"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="border-border bg-card rounded-2xl border p-6 shadow-sm transition-colors">
                        <div className="space-y-2">
                            {menuLinks.map((link: any) => (
                                <a
                                    key={link.id}
                                    href={link.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex items-center gap-4 rounded-xl p-2 transition-all hover:bg-red-50 dark:hover:bg-red-950/30"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white transition-colors">
                                        <img src={`${ASSET_URL}/links/thumb/${link.image}`} className="size-10 object-contain" alt={link.title} />
                                    </div>
                                    <span className="text-muted-foreground text-base font-bold transition-colors group-hover:text-[#e62129]">
                                        {link.title}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
}

// Add the Layout to the page
CRCWebsite.layout = (page: any) => <FrontPageLayout children={page} />;

// --- Helper Components ---
function SectionHeader({ title }: any) {
    return (
        <div className="mb-6 flex items-center gap-3">
            <span className="h-8 w-1.5 rounded-full bg-[#e62129]"></span>
            <h3 className="text-2xl font-bold text-foreground">{title}</h3>
        </div>
    );
}

function ResourceLink({ link }: any) {
    return (
        <a href={link.link} target="_blank" className="group flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-red-50">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-50">
                <img src={`${ASSET_URL}/links/thumb/${link.image}`} className="h-8 w-8 object-contain" />
            </div>
            <span className="text-base font-bold text-slate-700 group-hover:text-red-600">{link.title}</span>
        </a>
    );
}
