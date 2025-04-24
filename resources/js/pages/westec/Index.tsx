import { MyPartner } from '@/components/my-partner';
import { MySlide } from '@/components/my-slide';
import MyBoosters from './components/my-boosters';
import { MyBottomContent } from './components/my-bottom-content';
import MyFeature from './components/my-feature';
import { MyHeroSection } from './components/my-hero-section';
import WestecLayout from './layout/layout';

const Index = () => {
    return (
        <WestecLayout>
            <MySlide />
            <MyHeroSection />
            {/* <MyBottomContent /> */}
            <MyBoosters />
            <MyPartner />
            <div>
                <MyFeature />
            </div>
        </WestecLayout>
    );
};

export default Index;
