import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

const features = [
    {
        category: 'Marketing and Sales',
        title: 'Collect and enrich leads your way',
        details:
            'Take control over how and when to follow up with your leads. Store and reference leads in multiple tables and, from there, automatically send them personalized emails.',
        tutorialLink: '#',
    },
    {
        category: 'Project Management',
        title: 'Streamline your workflows effortlessly',
        details:
            'Organize tasks, deadlines, and team collaboration in one place. Use customizable boards to manage projects efficiently and automate routine updates.',
        tutorialLink: '#',
    },
    {
        category: 'Customer Support',
        title: 'Deliver seamless customer experiences',
        details:
            'Track and resolve customer queries faster with an integrated ticketing system. Set priorities, automate follow-ups, and enhance satisfaction with personalized responses.',
        tutorialLink: '#',
    },
];

const FeaturedSolutions = () => {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="w-full max-w-7xl px-6 py-10">
                <h2 className="max-w-xl text-4xl font-bold tracking-tight md:mx-auto md:text-center md:text-5xl md:leading-[3.5rem]">
                    Featured Solutions
                </h2>
                <div className="mx-auto mt-8 w-full space-y-20 md:mt-16">
                    {features.map((feature) => (
                        <div key={feature.category} className="flex flex-col items-center gap-x-20 gap-y-6 md:flex-row md:odd:flex-row-reverse">
                            <div className="bg-muted border-border/50 aspect-[6/4] w-full basis-1/2 rounded-xl border" />
                            <div className="shrink-0 basis-1/2">
                                <span className="text-muted-foreground text-sm font-semibold uppercase">{feature.category}</span>
                                <h4 className="my-3 text-3xl font-semibold tracking-tight">{feature.title}</h4>
                                <p className="text-muted-foreground text-[17px]">{feature.details}</p>
                                <Button asChild className="mt-6 min-w-40 rounded-full text-[15px]">
                                    <Link href={feature.tutorialLink}>
                                        Learn More <ArrowRight />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedSolutions;
