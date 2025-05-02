import { Globe, HandshakeIcon, MapPin, Users } from 'lucide-react';
import SectionHeader from './section-header';

const OurGlobalReach = () => {
    const features = [
        {
            icon: MapPin,
            title: 'Sourcing Niche Educational Materials',
            desc: 'We navigate global markets to source rare and specialized learning materials for unique curricula.',
        },
        {
            icon: HandshakeIcon,
            title: 'Facilitating International Exchange',
            desc: 'We empower cross-border academic collaboration through streamlined resource exchange programs.',
        },
        {
            icon: Users,
            title: 'Customized Procurement Services',
            desc: 'Acting as your dedicated procurement partner, we tailor our services to meet specific institutional needs.',
        },
        {
            icon: Globe,
            title: 'Fostering Global Educational Partnerships',
            desc: 'Building strategic alliances that expand educational opportunities and impact worldwide.',
        },
    ];

    return (
        <section className="bg-white py-16">
            <SectionHeader
                label="Our Global Reach"
                title="Extending Our Impact Across the Globe"
                subtitle="Our commitment to global education is deeply embedded in our import and export capabilities, providing you with unparalleled
                    access and opportunities."
            />

            <div className="mx-auto mt-12 max-w-6xl px-4">
                {/* World Map Placeholder */}
                <div className="bg-muted mb-12 aspect-video w-full rounded-xl" />

                <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {features.map(({ icon: Icon, title, desc }) => (
                        <li key={title} className="flex space-x-4">
                            <div className="flex-shrink-0">
                                <div className="bg-primary/10 inline-flex rounded-full p-3">
                                    <Icon className="text-primary h-6 w-6" aria-hidden="true" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                                <p className="text-muted-foreground">{desc}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default OurGlobalReach;
