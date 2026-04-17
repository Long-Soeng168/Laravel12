import { formatToKhmerDateTime } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { ChevronRight, Globe, Play } from 'lucide-react';

const ASSET_URL = 'https://news-app.redcross.org.kh/assets/images';

export function PostCard({ post }: any) {
    // Helper to extract YouTube ID from different URL formats
    const getYouTubeID = (url: string) => {
        try {
            if (!url) return null;
            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
            const match = url.match(regExp);
            return match && match[2].length === 11 ? match[2] : null;
        } catch (e) {
            return null;
        }
    };

    const videoId = post?.type === 'video' ? getYouTubeID(post?.link) : null;

    return (
        <div className="group border-border bg-card text-card-foreground flex h-full flex-col overflow-hidden rounded-2xl border shadow-sm transition-all hover:shadow-md">
            {/* Media Section (Video Frame or Image) */}
            <div className="bg-muted relative aspect-[16/10] overflow-hidden">
                {post?.type === 'video' && videoId ? (
                    <div className="h-full w-full bg-black">
                        <iframe
                            className="h-full w-full"
                            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                            title={post.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                ) : (
                    <Link href={`/posts/${post?.id}`} className="block h-full w-full">
                        {post.images?.[0]?.image ? (
                            <img
                                src={`${ASSET_URL}/posts/${post.images[0].image}`}
                                alt=""
                                loading="lazy"
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        ) : (
                            <div className="text-muted-foreground flex h-full w-full items-center justify-center">
                                <Globe size={48} />
                            </div>
                        )}
                        {/* Play Overlay for Video Type if thumbnail is used instead of frame */}
                        {post?.type === 'video' && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/40">
                                <div className="rounded-full bg-[#e62129] p-3 text-white shadow-xl">
                                    <Play size={32} fill="currentColor" />
                                </div>
                            </div>
                        )}
                    </Link>
                )}
            </div>

            {/* Content Body */}
            <div className="flex flex-1 flex-col p-4">
                <Link href={`/posts/${post?.id}`}>
                    <div
                        className="text-foreground group-hover:text-primary mb-4 line-clamp-2 text-xl leading-8 font-semibold transition-colors"
                        dangerouslySetInnerHTML={{ __html: post.title }}
                    />
                </Link>

                {/* Footer Section */}
                <div className="border-border mt-auto flex flex-nowrap items-center justify-between overflow-hidden border-t pt-4 text-sm">
                    {post.source_detail?.link && (
                        <a
                            href={post.source_detail?.link}
                            target="_blank"
                            className="text-muted-foreground hover:text-foreground flex items-center gap-2 font-bold transition-all hover:underline"
                        >
                            <img
                                src={`${ASSET_URL}/links/thumb/${post.source_detail.image}`}
                                className="h-8 w-8 object-contain dark:brightness-90"
                                alt="source"
                            />
                            <span>{post.source_detail?.title}</span>
                        </a>
                    )}

                    <span className="text-muted-foreground font-bold">{formatToKhmerDateTime(post.post_date, false)}</span>

                    <Link href={`/posts/${post?.id}`}>
                        <button className="text-primary flex items-center gap-1 font-bold transition-all hover:underline active:scale-95">
                            Read More
                            <ChevronRight size={20} />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
