import { MySlide } from '@/components/my-slide';
import { MyBottomContent } from './components/my-bottom-content';
import { MyHeroSection } from './components/my-hero-section';
import MyLayout from './layout/layout';
import MyBoosters from './components/my-boosters';
import { MyPartner } from '@/components/my-partner';
import MyFeature from './components/my-feature';

const Index = () => {
    return (
        <MyLayout>
            <MySlide />
            <MyHeroSection />
            <MyBottomContent />
            <MyBoosters/>
            <MyPartner/>
<div>
            <MyFeature/>
            </div>
        </MyLayout>
    );
};

export default Index;
