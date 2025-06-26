import { Card, CardContent } from '@/components/ui/card';
import { ClipboardListIcon, HandshakeIcon, School2Icon } from 'lucide-react';

const services = [
    {
        id: 1,
        icon: <School2Icon className="size-14 text-blue-600" />,
        title: 'Educational Solutions',
        description:
            'From curriculum development to digital learning tools, we help schools, NGOs, and government bodies deliver quality education that works.',
    },
    {
        id: 2,
        icon: <ClipboardListIcon className="size-14 text-green-600" />,
        title: 'Logistics Support',
        description: 'We streamline supply chains for educational programs—getting the right materials to the right places, on time and on budget.',
    },
    {
        id: 3,
        icon: <HandshakeIcon className="size-14 text-yellow-500" />,
        title: 'Partnership Building',
        description: 'We connect stakeholders across sectors to collaborate, innovate, and scale impact.',
    },
];

const WhatWeDo = () => {
    return (
        <section className="relative pb-20">
            <div className="mx-auto max-w-screen-xl space-y-8 text-center">
                <div className="grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <Card key={service.id} className="shadow-lg dark:bg-primary/15 transform rounded-xl border border-border/50 transition-all duration-300 hover:scale-105">
                            <CardContent className="flex flex-col items-center space-y-4 py-0 text-center">
                                {service.icon}
                                <h3 className="text-foreground text-2xl font-semibold">{service.title}</h3>
                                <p className="line-clamp-3 text-lg text-gray-500">{service.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
