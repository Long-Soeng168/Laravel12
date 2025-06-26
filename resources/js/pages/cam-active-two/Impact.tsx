import ByTheNumbers from './components/by-the-numbers';
import SectionHeader from './components/section-header';
import StoryFromTheField from './components/story-from-the-field';
import CamActiveLayout from './layouts/CamActiveLayout';

const Impact = () => {
    return (
        <CamActiveLayout>
            <div className="bg-primary/10 py-10">
                <SectionHeader title="Our Impact" subtitle="Real solutions. Lasting change." />
            </div>
            <ByTheNumbers />
            <div>
                <StoryFromTheField />
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

export default Impact;
