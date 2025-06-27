import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { EarthIcon, TargetIcon } from 'lucide-react';
import CurrentOpportunities from './components/current-opportunities';
import OurApproach from './components/our-approach';
import SectionHeader from './components/section-header';
import CamActiveLayout from './layouts/CamActiveLayout';
import OurTeam from './components/our-team';

const Careers = () => {
    return (
        <CamActiveLayout>
            <div className="bg-primary/10 py-10">
                <SectionHeader title="Who We Are" subtitle="Creating impact through education, logistics, and collaboration." />
            </div>
            <div className="mx-auto max-w-screen-xl mt-20">
                <Card className="flex flex-row justify-start gap-0 overflow-hidden rounded-xl border border-none border-gray-200 px-4 shadow-none transition sm:flex-row">
                    <CardHeader className="pl-0">
                        <div className="bg-primary/20 flex aspect-square w-24 shrink-0 items-center justify-center rounded-2xl shadow-md lg:w-28">
                            <TargetIcon className="text-primary size-20" />
                        </div>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-center p-0">
                        <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
                        <p className="text-foreground mt-2 line-clamp-3 max-w-[70ch] text-base lg:text-lg">
                            To empower communities by delivering practical, scalable solutions in education and logistics—driven by collaboration,
                            innovation, and a deep understanding of local needs.
                        </p>
                    </CardContent>
                </Card>
                <Card className="flex flex-row justify-start gap-0 overflow-hidden rounded-xl border border-none border-gray-200 px-4 shadow-none transition sm:flex-row">
                    <CardHeader className="pl-0">
                        <div className="bg-primary/20 flex aspect-square w-24 shrink-0 items-center justify-center rounded-2xl shadow-md lg:w-28">
                            <EarthIcon className="text-primary size-20" />
                        </div>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-center p-0">
                        <h2 className="text-3xl font-bold tracking-tight">Our Vision</h2>
                        <p className="text-foreground mt-2 line-clamp-3 max-w-[70ch] text-base lg:text-lg">
                            A Cambodia where every learner has access to quality education, and every organization has the tools to deliver impact
                            efficiently and sustainably.
                        </p>
                    </CardContent>
                </Card>
            </div>
            <div>
                <OurApproach />
                <OurTeam/>
            </div>
            {/* <HeroTwo />
            <OurServices />
            <OurResources />
            <CatalogFunctionality />
            <OurIntegratedSolutions />
            <TechnologyBasedSolutions />
            <WhyChooseUs /> */}
        </CamActiveLayout>
    );
};

export default Careers;
