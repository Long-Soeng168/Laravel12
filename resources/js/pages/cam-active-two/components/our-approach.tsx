import { Card, CardContent } from '@/components/ui/card';

const reasons = [
    {
        id: 1,
        image: 'group.png',
        title: 'Human-Centered',
        description: 'We listen first, design with empathy, and build solutions that reflect the realities of the people we serve.',
    },
    {
        id: 2,
        image: 'collaborative.png',
        title: 'Collaborative',
        description: 'We bring together diverse partners to co-create and scale impact.',
    },
    {
        id: 3,
        image: 'growth.png',
        title: 'Data-Informed',
        description: 'We use evidence to guide decisions and continuously improve.',
    },
    {
        id: 4,
        image: 'global.png',
        title: 'Locally Rooted, Globally Aware',
        description: 'We combine deep local knowledge with global best practices.',
    },
];

const OurApproach = () => {
    return (
        <section className="relative my-20">
            <div className="mx-auto max-w-screen-xl space-y-8">
                <h2 className="px-6 text-3xl font-bold tracking-tight">Our Approach</h2>
                <div className="grid grid-cols-1 gap-4 px-4 text-center sm:grid-cols-2 lg:grid-cols-4">
                    {reasons.map((item) => (
                        <Card
                            key={item.id}
                            className="dark:bg-primary/15 border-border/50 transform rounded-xl border-none transition-all duration-300 hover:scale-105"
                        >
                            <CardContent className="flex flex-col items-center space-y-4 py-0 text-center">
                                <div className="flex size-20 shrink-0 justify-center rounded-lg md:justify-start">
                                    <img src={`/assets/cam-active/about/${item.image}`} className="mb-2 size-20 shrink-0 object-contain" alt="" />
                                </div>
                                <h3 className="text-foreground text-2xl font-semibold">{item.title}</h3>
                                <p className="line-clamp-5 text-lg text-gray-500">{item.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurApproach;
