// const blogs = [
//     {
//         id: 1,
//         title: 'Exploring the Beauty of Modern Design',
//         description: 'An insight into how modern design trends shape user experiences.',
//         image: '/assets/nokor-tech/images/slides/slide7.png',
//         date: 'Dec 1, 2024',
//     },
//     {
//         id: 2,
//         title: 'The Rise of AI in Everyday Applications',
//         description: 'Learn how artificial intelligence is being integrated into daily tools.',
//         image: '/assets/nokor-tech/images/slides/slide5.png',
//         date: 'Nov 25, 2024',
//     },
//     {
//         id: 3,
//         title: 'Sustainability in Web Development',
//         description: 'Discover eco-friendly approaches in software and web development.',
//         image: '/assets/nokor-tech/images/slides/slide8.png',
//         date: 'Nov 18, 2024',
//     },
//     {
//         id: 4,
//         title: 'Innovations in Mobile Technology',
//         description: 'A look at the latest breakthroughs in mobile devices and platforms.',
//         image: '/assets/nokor-tech/images/slides/slide6.png',
//         date: 'Nov 10, 2024',
//     },
// ];
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

const MyBlogList = ({ posts }: { posts: any }) => {
    return (
        <div className="mt-8 grid grid-cols-1 gap-8 px-2 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((item, i) => (
                <Link href={`/blogs/${item?.id}`} prefetch>
                    <Card key={i} className="h-full overflow-hidden rounded-md p-0 shadow-none">
                        <CardHeader className="p-0">
                            <div className="bg-muted aspect-video w-full border-b">
                                <img
                                    className="h-full w-full object-cover"
                                    src={`/assets/images/posts/thumb/${item?.images && item?.images[0]?.image}`}
                                    alt=""
                                />
                            </div>
                        </CardHeader>
                        <CardContent className="flex h-full flex-col items-start justify-between pb-6">
                            <div>
                                <div className="flex items-center gap-3">
                                    <Badge className="bg-primary/5 text-primary hover:bg-primary/5 shadow-none">{item?.category?.name}</Badge>
                                    <span className="text-muted-foreground text-xs font-medium">
                                        {new Date(item?.post_date).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}
                                    </span>
                                </div>

                                <h3 className="mt-4 line-clamp-2 text-[1.35rem] font-semibold tracking-tight">{item?.title}</h3>
                                <p className="text-muted-foreground mt-2 line-clamp-3">{item?.short_description}</p>
                            </div>
                            <button className="group cursor-pointer relative mt-8 inline-flex h-12 items-center justify-center overflow-hidden rounded-md border-2 border-[#394481] font-medium dark:border-[#656fe2]">
                                <div className="inline-flex h-12 translate-y-0 items-center justify-center bg-gradient-to-r from-[#f7f8ff] to-[#ffffff] px-6 text-black transition group-hover:-translate-y-[150%] dark:from-[#070e41] dark:to-[#263381] dark:text-white">
                                    Read more <ChevronRight />
                                </div>
                                <div className="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center bg-[#394481] px-6 text-neutral-50 transition duration-300 group-hover:translate-y-0 dark:bg-[#656fe2]">
                                    Read more <ChevronRight />
                                </div>
                            </button>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </div>
    );
};

export default MyBlogList;
