import { usePage } from '@inertiajs/react';
import { Blocks, Bot, ChartPie, Film, MessageCircle, Settings2 } from 'lucide-react';

const SectionCards = () => {
  const {featureDatas} = usePage().props;
    const features = [
        {
            icon: ,
            title: 'Customizable Layouts',
            description: `Total Post : ${featureDatas?.post_counts}`,
        }, 
    ];

    return (
        <div>
            <div className="mx-auto grid max-w-full gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
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
    );
};

export default SectionCards;
