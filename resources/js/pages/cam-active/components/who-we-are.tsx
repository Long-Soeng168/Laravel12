import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Globe, Users } from 'lucide-react';
import { BackgroundPattern } from './background-pattern';

const WhoWeAre = () => {
    return (
        <section className="relative py-16">
            {/* <BackgroundPattern /> */}

            <div className="mx-auto max-w-7xl space-y-8 px-4 text-center">
                {/* Headline */}
                <h1 className="text-5xl font-extrabold text-gray-800">Who We Are</h1>
                <p className="mx-auto max-w-2xl text-xl text-gray-600">
                    At <strong>CamActive</strong>, we believe that quality education should be accessible worldwide. We are architects of learning
                    journeys, creating comprehensive solutions that empower both learners and educators. With a passion for education, we seamlessly
                    integrate technology, resources, and services to transform academic experiences.
                </p>

                {/* Core Values */}
                <div className="grid grid-cols-1 gap-16 px-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Empowering Communities */}
                    <Card className="transform rounded-3xl shadow-lg transition-all duration-300 hover:scale-105">
                        <CardContent className="flex flex-col items-center space-y-4 py-8 text-center">
                            <Users className="h-12 w-12 text-blue-600" />
                            <h3 className="text-2xl font-semibold text-gray-800">Empowering Communities</h3>
                            <p className="text-lg text-gray-500">
                                We foster inclusive learning environments that uplift communities and nurture academic success at every level.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Global Accessibility */}
                    <Card className="transform rounded-3xl shadow-lg transition-all duration-300 hover:scale-105">
                        <CardContent className="flex flex-col items-center space-y-4 py-8 text-center">
                            <Globe className="h-12 w-12 text-green-600" />
                            <h3 className="text-2xl font-semibold text-gray-800">Global Accessibility</h3>
                            <p className="text-lg text-gray-500">
                                Making quality education resources and services accessible to learners and educators around the world through
                                innovation and technology.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Learning Innovation */}
                    <Card className="transform rounded-3xl shadow-lg transition-all duration-300 hover:scale-105">
                        <CardContent className="flex flex-col items-center space-y-4 py-8 text-center">
                            <BookOpen className="h-12 w-12 text-yellow-500" />
                            <h3 className="text-2xl font-semibold text-gray-800">Learning Innovation</h3>
                            <p className="text-lg text-gray-500">
                                We integrate modern tools, pedagogical practices, and adaptive resources to create dynamic and effective educational
                                solutions.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
