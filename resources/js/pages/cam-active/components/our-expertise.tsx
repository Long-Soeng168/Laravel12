import { Card, CardContent } from '@/components/ui/card';
import { BookOpenCheck, Globe2 } from 'lucide-react';
import SectionHeader from './section-header';

const OurExpertise = () => {
    return (
        <div className="mx-auto my-20 max-w-7xl space-y-10 p-8">
            {/* Headline */}
            <SectionHeader
                label="Our Expertise"
                title="Comprehensive Solutions, Tailored to Your Needs"
                subtitle="We combine academic support services with a global procurement network to empower learners and institutions worldwide."
            />

            {/* Expertise Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {/* Educational Support Services */}
                <Card className="rounded-2xl p-0 shadow transition hover:shadow-lg">
                    <CardContent className="flex h-full flex-col justify-between space-y-4 p-6">
                        <div className="space-y-4">
                            <BookOpenCheck className="h-10 w-10 text-blue-600" />
                            <h2 className="text-xl font-semibold">Educational Support Services</h2>
                            <p className="text-muted-foreground">
                                <strong>From personalized tutoring to professional development:</strong> We nurture growth at every stage, offering
                                comprehensive academic services tailored to students and educators alike.
                            </p>
                        </div>
                        <div className="bg-muted aspect-video w-full rounded-xl" />
                    </CardContent>
                </Card>

                {/* Global Resource Procurement */}
                <Card className="rounded-2xl p-0 shadow transition hover:shadow-lg">
                    <CardContent className="flex h-full flex-col justify-between space-y-4 p-6">
                        <div className="space-y-4">
                            <Globe2 className="h-10 w-10 text-green-600" />
                            <h2 className="text-xl font-semibold">Global Resource Procurement</h2>
                            <p className="text-muted-foreground">
                                <strong>Access a world of high-quality study materials and office supplies:</strong> Delivered efficiently through our
                                trusted international logistics network.
                            </p>
                        </div>
                        <div className="bg-muted aspect-video w-full rounded-xl" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default OurExpertise;
