import { Card, CardContent, CardHeader } from '@/components/ui/card';
import OurApproach from './components/our-approach';
import OurTeam from './components/our-team';
import SectionHeader from './components/section-header';
import CamActiveLayout from './layouts/CamActiveLayout';

const Careers = () => {
    return (
        <CamActiveLayout>
            <div className="bg-primary/10 py-10">
                <SectionHeader title="Who We Are" subtitle="Creating impact through education, logistics, and collaboration." />
            </div>
            <div className="mx-auto mt-20 max-w-screen-xl">
                <Card className="flex flex-row justify-start gap-0 overflow-hidden rounded-xl border border-none border-gray-200 px-4 shadow-none transition sm:flex-row">
                    <CardHeader className="pl-0">
                        <div className="flex size-16 shrink-0 justify-center rounded-lg md:justify-start">
                            <img src={`/assets/cam-active/about/mission.png`} className="mb-2 size-16 shrink-0 object-contain" alt="" />
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
                        <div className="flex size-16 shrink-0 justify-center rounded-lg md:justify-start">
                            <img src={`/assets/cam-active/about/vision.png`} className="mb-2 size-16 shrink-0 object-contain" alt="" />
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
                <OurTeam />
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
