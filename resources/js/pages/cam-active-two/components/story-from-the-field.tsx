import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Link } from '@inertiajs/react';

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
];

const StoryFromTheField = () => {
    return (
        <div className="mx-auto mb-20 flex max-w-screen-xl flex-col items-start gap-12 px-6 lg:flex-row">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Stories from the Field</h2>

                <div className="mt-4 space-y-4">
                    {caseStudies.map((item) => (
                        <Card
                            key={item.id}
                            className="bg-primary/10 flex flex-row gap-0 overflow-hidden rounded-xl border border-none border-gray-200 shadow-none transition sm:flex-row"
                        >
                            <CardHeader>
                                <div className="bg-primary/20 aspect-square w-20 shrink-0 rounded-lg lg:w-20" />
                            </CardHeader>

                            <CardContent className="flex flex-col justify-center p-0 pr-4">
                                <h3 className="text-foreground line-clamp-2 text-lg leading-snug font-semibold tracking-tight lg:text-xl">
                                    {item.title}
                                </h3>
                                <p className="text-foreground mt-2 line-clamp-3 text-xs lg:text-sm">{item.short_description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
            <aside className="w-full shrink-0 lg:max-w-lg">
                <h3 className="text-3xl font-bold tracking-tight">Voices of Impact</h3>
                <div className="mt-4 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
                    {[0, 1].map((i) => (
                        <Card
                            key={i}
                            className="flex flex-row gap-4 overflow-hidden rounded-xl border border-none border-gray-200 p-2 shadow-none transition hover:shadow-md sm:flex-row"
                        >
                            <CardHeader className="px-0">
                                <div className="bg-primary/10 aspect-square w-16 shrink-0 rounded-full lg:w-16" />
                            </CardHeader>

                            <CardContent className="flex flex-col justify-center p-0">
                                <p className="text-foreground text-base whitespace-pre-line">
                                    “Cam-Active helped us rethink how we deliver education. Their team is responsive, innovative, and deeply
                                    committed.”
                                    <span className="block"> — NGO Program Manager</span>
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <Card className="bg-primary/10 mt-8 flex flex-col gap-0 overflow-hidden rounded-xl border border-none border-gray-200 px-6 shadow-none transition sm:flex-col">
                    <CardContent className="flex flex-col justify-center p-0">
                        <h3 className="text-foreground line-clamp-2 text-lg leading-snug font-semibold tracking-tight lg:text-xl">What’s Next</h3>
                        <p className="text-foreground mt-2 text-sm lg:text-base">
                            We're expanding our reach, deepening our partnerships, and exploring new ways to use technology and collaboration to drive
                            impact.
                        </p>
                    </CardContent>
                    <CardFooter className="mt-4 gap-4 px-0">
                        <Link href={`/contact`} prefetch>
                            <Button>Partner With Us</Button>
                        </Link>
                        <Link href={`/careers`}>
                            <Button variant="outline">Join Our Team</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </aside>
        </div>
    );
};

export default StoryFromTheField;
