import FeaturedSolutions from './components/featured-solutions';
import Footer from './components/footer';
import HeroOne from './components/hero';
import { Navbar } from './components/navbar';
import OurExpertise from './components/our-expertise';
import Testimonials from './components/testimonials';
import CamActiveLayout from './layouts/CamActiveLayout';

const Index = () => {
    return (
        <CamActiveLayout>
            <header className="mx-auto max-w-7xl px-2">
                <Navbar />
            </header>
            <main>
                <HeroOne />
                <OurExpertise />
                <FeaturedSolutions />
                <Testimonials />
            </main>
            <Footer />
        </CamActiveLayout>
    );
};

export default Index;
