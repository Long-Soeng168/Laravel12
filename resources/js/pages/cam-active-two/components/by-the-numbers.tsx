import { BookIcon, HandshakeIcon, MapIcon, School2Icon } from 'lucide-react';

const stats = [
    {
        icon: School2Icon,
        value: '50+',
        label: 'Schools supported with curriculum and training',
        color: 'text-blue-600',
    },
    {
        icon: BookIcon,
        value: '100,000+',
        label: 'Educational materials delivered across Cambodia',
        color: 'text-green-600',
    },
    {
        icon: HandshakeIcon,
        value: '30+',
        label: 'Partnerships with NGOs, agencies, and suppliers',
        color: 'text-yellow-600',
    },
    {
        icon: MapIcon,
        value: '15+',
        label: 'Provinces reached through logistics and learning',
        color: 'text-red-600',
    },
];

const ByTheNumbers = () => {
    return (
        <section className="relative py-20">
            <div className="mx-auto max-w-screen-xl space-y-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900">By the Numbers</h2>
                <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-2">
                    {stats.map(({ icon: Icon, value, label, color }, i) => (
                        <div key={i} className="bg-primary/10 transform rounded-xl border-none px-4 transition-all duration-300">
                            <div className="flex flex-row items-center gap-4 py-6">
                                <Icon className={`size-14 shrink-0 ${color}`} />
                                <div className="text-foreground text-start">
                                    <span className="text-2xl font-bold md:text-4xl">{value}</span>
                                    <p className="mt-2 text-lg font-medium">{label}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ByTheNumbers;
