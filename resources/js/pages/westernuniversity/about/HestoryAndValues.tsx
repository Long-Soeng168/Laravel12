import MyTopMenu from '../components-wu/my-top-menu';
import MyLayoutWestern from '../layout/layout';
import MyHero from './components/my-hero';
import { MyMainSlide } from './components/my-main-slide';
import MyTimeLine from './components/my-time-line';
import MyWiscare from './components/my-wiscare';

const HestoryAndValues = () => {
    return (
        <MyLayoutWestern>
            <div>
                <div className="aspect-[21/9] w-full bg-[url('/assets/demo-images/02TopBackground/01_history.jpg')] bg-cover bg-center bg-no-repeat lg:aspect-[21/9]">
                    <MyTopMenu />
                    <div className="py-20">
                        <p className="text-center text-5xl text-white [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]">Our Hestory</p>
                        <div className="flex items-center justify-center">
                            <div className="mx-auto grid w-full max-w-screen-2xl gap-12 px-4 py-12 sm:px-10 md:px-20 lg:grid-cols-2">
                                <div className="bg-accent aspect-video h-full w-full rounded-2xl">
                                    <MyMainSlide />
                                </div>
                                <div className="rounded-2xl bg-[#3d5536]/50 p-4 text-white">
                                    <p className="mt-6 max-w-[60ch] text-xl">
                                        Western International School (WIS) first opened its doors on September 1, 2003, and has experienced
                                        exponential growth every year. In 2003, we recruited 262 students from kindergarten to grade 11 with only 1
                                        campus. For the Academic Year 2019-2020, nearly 7,561 students enrolled from Nursery to Grade 12 and we have
                                        16 Campuses in Phnom Penh Takhmao and Sihanouk Branch.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MyTimeLine />
            <MyHero />
            <MyWiscare />
        </MyLayoutWestern>
    );
};

export default HestoryAndValues;
