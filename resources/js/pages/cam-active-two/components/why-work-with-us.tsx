import { Card, CardContent } from '@/components/ui/card';
import { BarChart2Icon, HeartHandshakeIcon, TargetIcon, Users2Icon } from 'lucide-react';

const reasons = [
    {
        id: 1,
        icon: <TargetIcon className="size-14" />,
        title: 'Mission-Driven Culture',
        description: 'Make a real impact improving education and logistics systems across Cambodia.',
    },
    {
        id: 2,
        icon: <Users2Icon className="size-14" />,
        title: 'Collaborative Environment',
        description: 'Work with educators, logisticians, and innovators in an open, team-first culture.',
    },
    {
        id: 3,
        icon: <BarChart2Icon className="size-14" />,
        title: 'Growth & Learning',
        description: 'Gain hands-on experience, mentorship, and continuous professional development.',
    },
    {
        id: 4,
        icon: <HeartHandshakeIcon className="size-14" />,
        title: 'Inclusive & Supportive',
        description: 'Join a diverse, welcoming team where everyone’s voice is valued and supported.',
    },
];

const WhyWorkWithUs = () => {
    return (
        <section className="relative my-20">
            <div className="mx-auto max-w-screen-xl space-y-8 text-center">
                <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4">
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

export default WhyWorkWithUs;
