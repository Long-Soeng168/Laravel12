import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link, usePage } from '@inertiajs/react';
import { ChevronRight, Search } from 'lucide-react';
import NokorTechLayout from '../layouts/nokor-tech-layout';

const Index = () => {
    const { blogsData } = usePage().props;
    return (
        <NokorTechLayout>
            <div className="mx-auto max-w-screen-xl px-6 py-16 xl:px-0">
                <div className="flex flex-wrap items-end justify-between gap-4">
                    <h2 className="text-3xl font-bold tracking-tight">Posts</h2>
                    <div className="flex w-full flex-wrap items-center justify-end gap-4 md:w-auto">
                        <div className="relative block flex-1">
                            <Search className="absolute inset-y-0 left-2.5 my-auto h-5 w-5" />
                            <Input
                                className="w-full flex-1 rounded border-none bg-slate-100/70 pl-10 shadow-none md:w-[280px] dark:bg-slate-800"
                                placeholder="Search"
                            />
                        </div>
                        <Select defaultValue="recommended">
                            <SelectTrigger className="w-[180px]">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="recommended">Recommended</SelectItem>
                                <SelectItem value="latest">Latest</SelectItem>
                                <SelectItem value="popular">Popular</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="mt-4 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {blogsData?.data?.map((item, i) => (
                        <Link href={'/blogs/1'} prefetch>
                            <Card key={i} className="h-full overflow-hidden rounded-md p-0 shadow-none">
                                <CardHeader className="p-0">
                                    <div className="bg-muted aspect-video w-full border-b" />
                                </CardHeader>
                                <CardContent className="flex h-full flex-col items-start justify-between pb-6">
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <Badge className="bg-primary/5 text-primary hover:bg-primary/5 shadow-none">Technology</Badge>
                                            <span className="text-muted-foreground text-xs font-medium">05-Jan-2025</span>
                                        </div>

                                        <h3 className="mt-4 line-clamp-2 text-[1.35rem] font-semibold tracking-tight">{item?.title}</h3>
                                        <p className="text-muted-foreground mt-2 line-clamp-3">{item?.short_description}</p>
                                    </div>
                                    <button className="group mt-8 relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border-2 border-[#394481] font-medium dark:border-[#656fe2]">
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
            </div>
        </NokorTechLayout>
    );
};

export default Index;
