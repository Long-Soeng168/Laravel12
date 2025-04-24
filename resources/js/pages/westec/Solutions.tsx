import { MySlide } from '@/components/my-slide';
import WestecLayout from './layout/layout';
import { SolutionSection } from './components/solutions-section';
import { HeroSection } from './components/hero-section';
import { ContactSection } from './components/contact-section';

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
