import { Card, CardContent } from '@/components/ui/card';

const reasons = [
    {
        id: 1,
        image: 'mission.png',
        title: 'Mission-Driven Culture',
        description: 'Every project we take on is rooted in impact. Your work will help improve education and logistics systems across Cambodia.',
    },
    {
        id: 2,
        image: 'collaborative.png',
        title: 'Collaborative Environment',
        description: 'We value teamwork, open communication, and shared success. You’ll work alongside educators, logisticians, and innovators.',
    },
    {
        id: 3,
        image: 'growth.png',
        title: 'Growth & Learning',
        description: 'We invest in your development through training, mentorship, and hands-on experience.',
    },
    {
        id: 4,
        image: 'inclusive.png',
        title: 'Inclusive & Supportive',
        description: 'We celebrate diversity and create space for everyone to thrive.',
    },
];

const WhyWorkWithUs = () => {
    return (
        <section className="relative my-20">
            <div className="mx-auto max-w-screen-xl space-y-8 px-6">
                <h2 className="text-foreground mb-2 text-3xl font-bold">Why Work With Us?</h2>
                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2 lg:grid-cols-4 mt-4">
                    {reasons.map((item) => (
                        <Card
                            key={item.id}
                            className="dark:bg-primary/15 border-border/50 p-2 pt-4 transform rounded-xl border-none transition-all duration-300 hover:scale-105"
                        >
                            <CardContent className="flex px-0 flex-col items-center space-y-4 py-0 text-center">
                                <div className="flex shrink-0 size-20 justify-center rounded-lg md:justify-start">
                                    <img
                                        src={`/assets/cam-active/why-work-with-us/${item.image}`}
                                        className="mb-2 size-20 shrink-0 object-contain"
                                        alt=""
                                    />
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

export default WhyWorkWithUs;
