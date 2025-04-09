import { Link } from '@inertiajs/react';
import { MyNavbar } from '../components-wu/my-navbar';
import { MyMainSlide } from './components/my-main-slide';
import MyTimeLine from './components/my-time-line';
import MyHero from './components/my-hero';
import MyWiscare from './components/my-wiscare';
import MyLayoutWestern from '../layout/layout';

const HestoryAndValues = () => {
    return (
        <MyLayoutWestern>
            <div className="font-now-alt-regular">
                <div className="aspect-[16/9] w-full bg-[url('/assets/demo-images/02TopBackground/01_history.jpg')] bg-cover bg-center bg-no-repeat lg:aspect-[20/9]">
                    <header className="flex flex-wrap items-center px-4 py-6 lg:px-16">
                        <div className="flex flex-1 items-center text-white">
                            <Link href="/" className="flex items-center gap-4 text-2xl">
                                <img src="assets/demo-images/Homepage/01_Logo_WIS.png" className="w-20" />
                                <div className="flex flex-col items-center justify-center">
                                    <p className="font-moul-regular text-2xl">សាលាវេស្ទើនអន្តរជាតិ</p>
                                    <p className="font-now-alt-bold mt-1 text-[10px] tracking-[2px]">WESTERN INTERNATIONAL SCHOOL</p>
                                </div>
                            </Link>
                        </div>

                        <div className="pointer-cursor block md:hidden">
                            <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <title>menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </div>
                        <input className="hidden" type="checkbox" id="menu-toggle" />

                        <div className="hidden w-full md:flex md:w-auto md:items-center" id="menu">
                            <MyNavbar />
                        </div>
                    </header>
                    <p className='text-5xl text-white text-center'>Our Hestory</p>
                    <div className="flex items-center justify-center">
                        <div className="mx-auto grid w-full max-w-screen-2xl sm:px-10 md:px-20 gap-12 px-4 py-12 lg:grid-cols-2">
                            
                            <div className="bg-accent aspect-video w-full h-full rounded-2xl" >
                                <MyMainSlide/>
                            </div>
                            <div className='text-white bg-green-700/50 p-4 rounded-2xl'>
                                <p className="mt-6 max-w-[60ch] text-xl">
                                    Explore a collection of Shadcn UI blocks and components, ready to preview and copy. Streamline your development
                                    workflow with easy-to-implement examples.
                                    Explore a collection of Shadcn UI blocks and components, ready to preview and copy. Streamline your development
                                    workflow with easy-to-implement examples.
                                    Explore a collection of Shadcn UI blocks and components, ready to preview and copy. Streamline your development
                                    workflow with easy-to-implement examples.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MyTimeLine/>
            <MyHero/>
            <MyWiscare/>
        </MyLayoutWestern>
    );
};

export default HestoryAndValues;
