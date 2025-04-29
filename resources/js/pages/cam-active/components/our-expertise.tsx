import { Blocks, Bot, ChartPie, Film, MessageCircle, Settings2 } from 'lucide-react';

const features = [
    {
        icon: Settings2,
        title: 'Customizable Layouts',
        description: 'Design your space with drag-and-drop simplicity—create grids, lists, or galleries in seconds.',
    },
    {
        icon: Blocks,
        title: 'Interactive Widgets',
        description: 'Embed polls, quizzes, or forms to keep your audience engaged.',
    },
    {
        icon: Bot,
        title: 'AI-Powered Tools',
        description: 'Generate summaries, auto-format content, or translate into multiple languages seamlessly.',
    },
    {
        icon: Film,
        title: 'Media Integrations',
        description: 'Connect with Spotify, Instagram, or your own media library for dynamic visuals and sound.',
    },
    {
        icon: ChartPie,
        title: 'Advanced Analytics',
        description: 'Track engagement, clicks, and user activity with intuitive charts and reports.',
    },
    {
        icon: MessageCircle,
        title: 'Seamless Collaboration',
        description: 'Comment, tag, and assign tasks directly within your documents.',
    },
];

const OurExpertise = () => {
    return (
        <div className="flex min-h-screen items-center justify-center py-12">
            <div>
                <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">Our Expertise</h2>
                <div className="mx-auto mt-10 grid max-w-7xl gap-6 px-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                        <div key={feature.title} className="flex flex-col rounded-xl border px-5 py-6">
                            <div className="bg-muted mb-3 flex h-10 w-10 items-center justify-center rounded-full">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <span className="text-lg font-semibold">{feature.title}</span>
                            <p className="text-foreground/80 mt-1 text-[15px]">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurExpertise;
