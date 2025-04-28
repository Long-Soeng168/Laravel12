import MySlideCareer from '@/components/my-slide-career';
import { ContactSection } from './components/contact-section';
import WestecLayout from './layout/layout';
import CareerList from './components/career-list';
const Career = () => {
    return (
        <WestecLayout>
            <h1 className="text-color px-4 py-4 text-2xl font-semibold sm:px-8 lg:px-16 lg:py-8">Employee Highlights</h1>
            <MySlideCareer />

            <ContactSection />
            <CareerList />
        </WestecLayout>
    );
};

export default Career;
