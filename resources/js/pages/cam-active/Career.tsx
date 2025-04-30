import CareerList from './components/career-list';
import MySlideCareer from './components/my-slide-career';
import CamActiveLayout from './layouts/CamActiveLayout';

const Company = () => {
    return (
        <CamActiveLayout>
            <h1 className="text-color px-4 py-4 text-2xl font-semibold sm:px-8 lg:px-16 lg:py-8">Employee Highlights</h1>
            <MySlideCareer />
            <CareerList />
        </CamActiveLayout>
    );
};

export default Company;
