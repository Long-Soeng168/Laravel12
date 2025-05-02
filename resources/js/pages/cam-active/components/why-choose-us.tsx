import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, BadgeCheck, Globe2, Layers, Lightbulb, Settings, Users } from 'lucide-react';
import SectionHeader from './section-header';

const WhyChooseUs = () => {
    return (
        <div className="mx-auto my-20 max-w-7xl space-y-12 p-8">
            {/* Headline */}
            <SectionHeader
                label="Why Choose Us"
                title="The CamActive Advantage"
                subtitle="Choosing CamActive means choosing a partner dedicated to your success. Here's why we stand apart:"
            />

            {/* Advantages Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Integrated Solutions */}
                <Card className="rounded-2xl shadow transition hover:shadow-lg">
                    <CardContent className="space-y-4 p-6">
                        <BadgeCheck className="h-10 w-10 text-blue-600" />
                        <h2 className="text-xl font-semibold">Truly Integrated Solutions</h2>
                        <p>Experience the power of a unified approach with comprehensive, connected services that work seamlessly together.</p>
                    </CardContent>
                </Card>

                {/* Global Reach */}
                <Card className="rounded-2xl shadow transition hover:shadow-lg">
                    <CardContent className="space-y-4 p-6">
                        <Globe2 className="h-10 w-10 text-green-600" />
                        <h2 className="text-xl font-semibold">Unrivaled Global Reach</h2>
                        <p>Tap into a world of resources and opportunities through our expansive international network and partnerships.</p>
                    </CardContent>
                </Card>

                {/* Tailored Offerings */}
                <Card className="rounded-2xl shadow transition hover:shadow-lg">
                    <CardContent className="space-y-4 p-6">
                        <Settings className="h-10 w-10 text-purple-600" />
                        <h2 className="text-xl font-semibold">Tailored & Flexible Offerings</h2>
                        <p>We understand your unique needs and deliver customized, adaptable solutions designed to fit your goals.</p>
                    </CardContent>
                </Card>

                {/* Commitment to Excellence */}
                <Card className="rounded-2xl shadow transition hover:shadow-lg">
                    <CardContent className="space-y-4 p-6">
                        <Award className="h-10 w-10 text-orange-600" />
                        <h2 className="text-xl font-semibold">Unwavering Commitment to Excellence</h2>
                        <p>We prioritize quality in every aspect of our services, resources, and customer experiences.</p>
                    </CardContent>
                </Card>

                {/* Dedicated Support */}
                <Card className="rounded-2xl shadow transition hover:shadow-lg">
                    <CardContent className="space-y-4 p-6">
                        <Users className="h-10 w-10 text-cyan-600" />
                        <h2 className="text-xl font-semibold">Dedicated Partnership & Support</h2>
                        <p>Our passionate team is committed to providing responsive, exceptional service and ongoing support.</p>
                    </CardContent>
                </Card>

                {/* Streamlined Efficiency */}
                <Card className="rounded-2xl shadow transition hover:shadow-lg">
                    <CardContent className="space-y-4 p-6">
                        <Layers className="h-10 w-10 text-rose-600" />
                        <h2 className="text-xl font-semibold">Streamlined Efficiency</h2>
                        <p>Simplify procurement processes and reduce administrative overhead with our efficient, scalable solutions.</p>
                    </CardContent>
                </Card>

                {/* Innovation */}
                <Card className="rounded-2xl shadow transition hover:shadow-lg lg:col-span-3">
                    <CardContent className="space-y-4 p-6">
                        <Lightbulb className="h-10 w-10 text-yellow-500" />
                        <h2 className="text-xl font-semibold">Forward-Thinking Innovation</h2>
                        <p>
                            Embrace the future of education with our commitment to continuous exploration and integration of the latest technologies
                            and methodologies.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default WhyChooseUs;
