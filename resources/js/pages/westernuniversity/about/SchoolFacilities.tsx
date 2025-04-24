import MyLayoutWestern from '../layout/layout';
import MyFacilities from './components/my-facilities';
import MyTopMenu from '../components-wu/my-top-menu';

const SchoolFacilities = () => {
    return (
        <MyLayoutWestern>
            <div className="font-now-alt-regular">
                <div className="aspect-[21/5] w-full bg-[url('/assets/demo-images/02TopBackground/02_school_facilities.jpg')] bg-cover bg-center bg-no-repeat lg:aspect-[21/5]">
                 <MyTopMenu/>
                    <div className="mx-auto flex flex-col h-full w-[55%] items-center justify-center pb-10 text-center">
                    <p className=" text-white text-2xl xl:text-5xl">School Facilities</p>
                </div>
                </div>
            </div>
            <MyFacilities/>
        </MyLayoutWestern>
    );
};

export default SchoolFacilities;
