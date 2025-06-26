import CurrentOpportunities from './components/current-opportunities';
import SectionHeader from './components/section-header';
import WhyWorkWithUs from './components/why-work-with-us';
import CamActiveLayout from './layouts/CamActiveLayout';

const Careers = () => {
    return (
        <CamActiveLayout>
            <div className="bg-primary/10 py-10">
                <SectionHeader title="Careers at Cam-Active" subtitle="Join us in creating impact through education and logistics." />
            </div>
            <WhyWorkWithUs />
            <div>
                <CurrentOpportunities />
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
