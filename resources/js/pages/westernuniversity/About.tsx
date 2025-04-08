import MyLanguageSwitcherAndSerchInput from '@/components/my-language-switcher-and-search-input';
import { Link } from '@inertiajs/react';
import { MyNavbar } from './components-wu/my-navbar';
import MyHeroSection from './components-wu/my-hero-section';

const About = () => {
    return (
        <>  
        {/* Header */}
        <div className='font-now-alt-regular'>
            <MyLanguageSwitcherAndSerchInput />

            <div className="aspect-[21/7] w-full bg-[url('assets/demo-images/Homepage/02_flag_ceremony_at_wis_main_campus.png')] bg-cover bg-center bg-no-repeat">
                <header className="flex flex-wrap items-center py-6 px-4 lg:px-16">
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

                <div className="mx-auto flex flex-col h-full w-[55%] items-center justify-center py-10 text-center">
                    <p className="font-now-alt-medium text-8xl text-white uppercase">Start your future today !</p>
                    <Link href='/admissions' className="transform text-xl rounded-full bg-white  px-20 py-3 mt-10 font-bold text-[#272766] transition duration-400 hover:-translate-y-1">
                        Enroll Now
                    </Link>
                </div>
            </div>
        </div>
        {/*End Header */}
        <MyHeroSection/>

        </>
    );
};

export default About;
