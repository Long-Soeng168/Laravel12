import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Link } from '@inertiajs/react';
import { ArrowRightIcon, ChevronRightIcon } from 'lucide-react';

const caseStudies = [
    {
        id: 1,
        title: 'Case Study: Digital Learning in Rural Schools',
        short_description:
            'In partnership with local educators, we introduced tablet-based learning in remote areas, improving student engagement and test scores by over 40%.',
    },
    {
        id: 2,
        title: 'Case Study: Efficient Supply Chains for NGOs',
        short_description: 'We helped streamline logistics for a major NGO, reducing delivery times by 60% and cutting costs by 25%.',
    },
    {
        id: 3,
        title: 'Case Study: Building Bridges Between Sectors',
        short_description:
            'Our partnership-building workshops brought together educators, government officials, and suppliers to co-design scalable education programs.',
    },
    {
        id: 4,
        title: 'Case Study: Efficient Supply Chains for NGOs',
        short_description: 'We helped streamline logistics for a major NGO, reducing delivery times by 60% and cutting costs by 25%.',
    },
    {
        id: 5,
        title: 'Case Study: Building Bridges Between Sectors',
        short_description:
            'Our partnership-building workshops brought together educators, government officials, and suppliers to co-design scalable education programs.',
    },
];

const FeaturedMedia = () => {
    return (
        <div className="mx-auto mb-20 flex max-w-screen-xl flex-col items-start gap-8 px-6 lg:flex-row">
            <div className="w-full max-w-full flex-1 rounded-md whitespace-nowrap lg:min-w-2xl">
                <div className="z-30 flex justify-between">
                    <h2 className="text-3xl font-bold tracking-tight">Featured Media</h2>
                    <Link href={`/posts`}>
                        <Button size="sm" variant="outline">
                            See More <ArrowRightIcon />
                        </Button>
                    </Link>
                </div>
                <div className="relative">
                    <div className="from-background absolute top-0 right-0 bottom-0 z-10 w-12 bg-gradient-to-l to-transparent"></div>
                    <ScrollArea className="w-full">
                        <div className="flex space-x-4 p-4 pb-6">
                            {caseStudies.map((item) => (
                                <Link href={'/posts/1'} key={item.id}>
                                    <Card className="w-60 gap-2 overflow-hidden rounded-none border-none p-0 transition-all duration-300 hover:scale-105">
                                        <CardHeader className="p-0">
                                            <div className="flex aspect-video w-full shrink-0 justify-center overflow-hidden rounded-lg md:justify-start">
                                                <img
                                                    src={`/assets/cam-active/posts/image2.jpg`}
                                                    className="mb-2 size-full shrink-0 object-cover"
                                                    alt=""
                                                />
                                            </div>
                                        </CardHeader>
                                        <CardContent className="p-0 whitespace-normal">
                                            <h3 className="m-0 line-clamp-2 text-[1.35rem] font-semibold tracking-tight">
                                                A beginner&apos;s guide to blackchain for engineers
                                            </h3>
                                            <p className="text-muted-foreground mt-1 line-clamp-3">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </div>
            </div>
            <aside className="w-full shrink-0 lg:max-w-xs">
                <h3 className="text-3xl font-bold tracking-tight">Resources & Reports</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
                    {['Annual Impact Report 2024', 'Toolkits & Guides', 'Policy Briefs'].map((item) => (
                        <Link href={`/posts`} className="text-primary flex text-base whitespace-pre-line hover:underline" key={item}>
                            <ChevronRightIcon /> {item}
                        </Link>
                    ))}
                </div>
            </aside>
        </div>
    );
};

export default FeaturedMedia;
