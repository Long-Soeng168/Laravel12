import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from '@inertiajs/react';
import { Search } from 'lucide-react';

const BlogPosts = () => {
    return (
        <div className="mx-auto max-w-screen-xl px-6 py-16 xl:px-6">
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
                        <SelectTrigger className="w-[120px]">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="recommended">Articles</SelectItem>
                            <SelectItem value="latest">Videos</SelectItem>
                            <SelectItem value="popular">Audio</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select defaultValue="recommended">
                        <SelectTrigger className="w-[220px]">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="recommended">Annual Impact Report</SelectItem>
                            <SelectItem value="latest">Toolkits & Guides</SelectItem>
                            <SelectItem value="popular">Policy Briefs</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                    <Link href={`/posts/1`} prefetch key={i}>
                        <Card className="gap-2 overflow-hidden rounded-none border-none p-0">
                            <CardHeader className="p-0">
                                <div className="bg-muted aspect-video w-full rounded-md border-b" />
                            </CardHeader>
                            <CardContent className="p-0">
                                <h3 className="m-0 text-[1.35rem] font-semibold tracking-tight">
                                    A beginner&apos;s guide to blackchain for engineers
                                </h3>
                                <p className="text-muted-foreground mt-1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                </p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BlogPosts;
