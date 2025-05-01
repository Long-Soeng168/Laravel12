import FeaturedSolutions from './components/featured-solutions';
import HeroOne from './components/hero';
import OurExpertise from './components/our-expertise';
import Testimonials from './components/testimonials';
import CamActiveLayout from './layouts/CamActiveLayout';

const Index = () => {
    return (
        <CamActiveLayout>
            <HeroOne />
            <OurExpertise />
            <FeaturedSolutions />
            <Testimonials />
        </CamActiveLayout>
    );
};

export default Index;
