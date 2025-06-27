import { Card, CardContent } from '@/components/ui/card';
import { BarChart2Icon, GlobeIcon, HandIcon, Users2Icon } from 'lucide-react';

const reasons = [
    {
        id: 1,
        icon: <HandIcon className="size-14" />,
        title: 'Human-Centered',
        description: 'We listen first, design with empathy, and build solutions that reflect the realities of the people we serve.',
    },
    {
        id: 2,
        icon: <Users2Icon className="size-14" />,
        title: 'Collaborative',
        description: 'We bring together diverse partners to co-create and scale impact.',
    },
    {
        id: 3,
        icon: <BarChart2Icon className="size-14" />,
        title: 'Data-Informed',
        description: 'We use evidence to guide decisions and continuously improve.',
    },
    {
        id: 4,
        icon: <GlobeIcon className="size-14" />,
        title: 'Locally Rooted, Globally Aware',
        description: 'We combine deep local knowledge with global best practices.',
    },
];

const OurApproach = () => {
    return (
        <section className="relative my-20">
            <div className="mx-auto max-w-screen-xl space-y-8">
                <h2 className="text-3xl font-bold tracking-tight px-6">Our Approach</h2>
                <div className="grid grid-cols-1 gap-4 px-4 text-center sm:grid-cols-2 lg:grid-cols-4">
                    {reasons.map((reason) => (
                        <Card
                            key={reason.id}
                            className="dark:bg-primary/15 border-border/50 transform rounded-xl border-none transition-all duration-300 hover:scale-105"
                        >
                            <CardContent className="flex flex-col items-center space-y-4 py-0 text-center">
                                <span className="bg-primary/10 text-primary rounded-full p-4">{reason.icon}</span>
                                <h3 className="text-foreground text-2xl font-semibold">{reason.title}</h3>
                                <p className="line-clamp-5 text-lg text-gray-500">{reason.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurApproach;
