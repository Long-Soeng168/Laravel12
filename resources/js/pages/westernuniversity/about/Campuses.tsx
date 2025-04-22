import MyTopMenu from '../components-wu/my-top-menu';
import MyLayoutWestern from '../layout/layout';
import MyCampusesCard from './components/my-campuses-card';

const Campuses = () => {
    return (
        <MyLayoutWestern>
            <div>
                <div className="aspect-[21/5] w-full bg-cover bg-center bg-no-repeat lg:aspect-[21/5] bg-[url('/assets/demo-images/02TopBackground/03Campuses.jpg')] ">
                    <MyTopMenu />
                    <div className="mx-auto flex h-full w-[55%] flex-col items-center justify-center pb-10 text-center">
                        <p className="text-2xl text-white xl:text-5xl">Camposes</p>
                    </div>
                </div>
            </div>
            <div className="bg-blue-50">
                <MyCampusesCard />
            </div>
        </MyLayoutWestern>
    );
};

export default Campuses;
