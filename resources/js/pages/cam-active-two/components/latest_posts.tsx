import { Card, CardContent, CardHeader } from '@/components/ui/card';

const LatestPosts = () => {
    return (
        <div className="mx-auto max-w-screen-xl px-6 pb-20 xl:px-6">  
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[0, 1, 2].map((i) => (
                    <Card key={i} className="overflow-hidden p-0 border-none rounded-none gap-2">
                        <CardHeader className="p-0">
                            <div className="bg-muted aspect-video w-full rounded-md border-b" />
                        </CardHeader>
                        <CardContent className="p-0">
                            <h3 className="text-[1.35rem] font-semibold tracking-tight m-0">A beginner&apos;s guide to blackchain for engineers</h3>
                            <p className="text-muted-foreground mt-1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default LatestPosts;
