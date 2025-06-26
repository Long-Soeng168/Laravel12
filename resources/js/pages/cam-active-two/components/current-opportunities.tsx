import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Link } from '@inertiajs/react';
import HowToApply from './how-to-apply';

const data = [
    {
        id: 1,
        title: 'Education Program Officer',
        short_description: 'Help design and implement learning initiatives in partnership with schools and NGOs.',
    },
    {
        id: 2,
        title: 'Logistics Coordinator',
        short_description: 'Manage supply chains and ensure timely delivery of educational resources.',
    },
    {
        id: 3,
        title: 'Partnership Development Lead',
        short_description: 'Build relationships with stakeholders and lead collaborative projects.',
    },
    {
        id: 4,
        title: 'Communications & Content Specialist',
        short_description: 'Share our story through writing, media, and digital platforms.',
    },
];

const CurrentOpportunities = () => {
    return (
        <div className="mx-auto mb-20 flex max-w-screen-xl flex-col items-start gap-12 px-6 lg:flex-row">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Stories from the Field</h2>

                <div className="mt-4 space-y-4">
                    {data.map((item) => (
                        <Card
                            key={item.id}
                            className="bg-primary/10 flex flex-row justify-between gap-0 overflow-hidden rounded-xl border border-none border-gray-200 px-4 shadow-none transition sm:flex-row"
                        >
                            {/* <CardHeader>
                                <div className="bg-primary/20 aspect-square w-20 shrink-0 rounded-lg lg:w-20" />
                            </CardHeader> */}

                            <CardContent className="flex flex-col justify-center p-0">
                                <h3 className="text-foreground line-clamp-2 text-lg leading-snug font-semibold tracking-tight lg:text-xl">
                                    {item.title}
                                </h3>
                                <p className="text-foreground mt-2 line-clamp-3 text-xs lg:text-sm">{item.short_description}</p>
                            </CardContent>
                            <Button size="sm">Apply Now</Button>
                        </Card>
                    ))}
                </div>
            </div>
            <aside className="w-full shrink-0 lg:max-w-lg">
                <Card className="bg-primary/10 mt-12 flex flex-col gap-0 overflow-hidden rounded-xl border border-none border-gray-200 px-6 shadow-none transition sm:flex-col">
                    <CardContent className="flex flex-col justify-center p-0">
                        <h3 className="text-foreground line-clamp-2 text-lg leading-snug font-semibold tracking-tight lg:text-xl">
                            Internships & Volunteering
                        </h3>
                        <p className="text-foreground mt-2 text-sm lg:text-base">
                            We offer hands-on opportunities for students and professionals to gain experience while contributing to meaningful work.
                        </p>
                    </CardContent>
                    <CardFooter className="mt-4 gap-4 px-0">
                        <Link href={`#`} prefetch>
                            <Button>Partner With Us</Button>
                        </Link>
                    </CardFooter>
                </Card>
                <h3 className="mt-10 text-3xl font-bold tracking-tight">How to Apply</h3>
                <HowToApply />
            </aside>
        </div>
    );
};

export default CurrentOpportunities;
