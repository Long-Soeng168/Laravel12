import WestecLayout from './layout/layout';
import { SolutionSection } from './components/solutions-section';
import { HeroSection } from './components/hero-section';
import { ContactSection } from './components/contact-section';
import MySlide from '@/components/my-slide';

const Solutions = () => {
    return (
        <WestecLayout>
            <MySlide />

            <SolutionSection />

            <HeroSection />

            <ContactSection />

            <HeroSection />
            <HeroSection />

            <ContactSection />
        </WestecLayout>
    );
};

export default Solutions;
