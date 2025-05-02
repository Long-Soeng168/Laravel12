import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Briefcase, GraduationCap, Users } from 'lucide-react';
import SectionHeader from './section-header';

const OurServices = () => {
    return (
        <div className="mx-auto my-20 max-w-7xl space-y-12 p-8">
            {/* Headline */}
            <SectionHeader
                label="Our Services"
                title="Expert Support to Foster Academic Success"
                subtitle=" Nurturing Growth at Every Stage: We offer a holistic spectrum of support tailored for every level of education."
            />

            {/* Services Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {/* K-12 */}
                <Card className="rounded-2xl p-0 shadow transition hover:shadow-lg">
                    <CardContent className="flex h-full flex-col justify-between space-y-4 p-6">
                        <div className="space-y-4">
                            <BookOpen className="h-10 w-10 text-yellow-600" />
                            <h2 className="text-xl font-semibold">K-12 Student Support</h2>
                            <p className="text-muted-foreground">
                                <strong>Cultivating Foundational Success:</strong> We provide personalized tutoring, mentoring programs, and academic
                                coaching to foster holistic development.
                            </p>
                        </div>
                        <div className="bg-muted aspect-video w-full rounded-xl" />
                    </CardContent>
                </Card>

                {/* Higher Education */}
                <Card className="rounded-2xl p-0 shadow transition hover:shadow-lg">
                    <CardContent className="flex h-full flex-col justify-between space-y-4 p-6">
                        <div className="space-y-4">
                            <GraduationCap className="h-10 w-10 text-blue-600" />
                            <h2 className="text-xl font-semibold">Higher Education Student Support</h2>
                            <p className="text-muted-foreground">
                                <strong>Empowering Academic and Career Aspirations:</strong> Extensive tutoring, academic support centers, and
                                personalized advising to illuminate pathways to success.
                            </p>
                        </div>
                        <div className="bg-muted aspect-video w-full rounded-xl" />
                    </CardContent>
                </Card>

                {/* Educators */}
                <Card className="rounded-2xl p-0 shadow transition hover:shadow-lg">
                    <CardContent className="flex h-full flex-col justify-between space-y-4 p-6">
                        <div className="space-y-4">
                            <Users className="h-10 w-10 text-purple-600" />
                            <h2 className="text-xl font-semibold">Educator Support</h2>
                            <p className="text-muted-foreground">
                                <strong>Inspiring Excellence in Teaching:</strong> Engaging workshops, training programs, and mentoring initiatives to
                                revolutionize pedagogy and cultivate leadership.
                            </p>
                        </div>
                        <div className="bg-muted aspect-video w-full rounded-xl" />
                    </CardContent>
                </Card>

                {/* Corporate Training */}
                <Card className="rounded-2xl p-0 shadow transition hover:shadow-lg">
                    <CardContent className="flex h-full flex-col justify-between space-y-4 p-6">
                        <div className="space-y-4">
                            <Briefcase className="h-10 w-10 text-orange-600" />
                            <h2 className="text-xl font-semibold">Corporate Training</h2>
                            <p className="text-muted-foreground">
                                <strong>Workforce Development:</strong> Blended learning solutions for employee onboarding and skill development,
                                enhancing workforce capability and productivity.
                            </p>
                        </div>
                        <div className="bg-muted aspect-video w-full rounded-xl" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default OurServices;
