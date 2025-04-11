import MyLanguageSwitcherAndSerchInput from '@/components/my-language-switcher-and-search-input';
import { Link } from '@inertiajs/react';
import MyEnroll from './components-wu/my-enroll';
import MyFooter from './components-wu/my-footer';
import MyHeroBottom from './components-wu/my-hero-bottom';
import MyHeroSection from './components-wu/my-hero-section';
import { MyNavbar } from './components-wu/my-navbar';
import MyStats from './components-wu/my-stats';
import MyVideo from './components-wu/my-video';
import { MyContentWithSlide } from './components-wu/my-content-with-image-slide';
import { Sheet, SheetContent, SheetTrigger } from './components-wu/ui/sheet';
import { Button } from './components-wu/ui/button';
import { AlignRight } from 'lucide-react';

const About = () => {
    return (
        <>
            {/* Header */}
            <div className="font-now-alt-regular">
                <MyLanguageSwitcherAndSerchInput />
                <div className="aspect-[21/8] w-full bg-[url('/assets/demo-images/Homepage/02_flag_ceremony_at_wis_main_campus.png')] bg-cover bg-center bg-no-repeat">
                    <header className="flex flex-wrap items-center px-4 py-6 lg:px-16">
                        <div className="flex flex-1 items-center text-white">
                            <Link href="/" className="flex items-center gap-2 md:gap-4">
                                <img src="/assets/demo-images/Homepage/01_Logo_WIS.png" className="w-15 md:w-20" />
                                <div className="flex flex-col items-center justify-center">
                                    <p className="font-moul-regular text-base md:text-2xl">សាលាវេស្ទើនអន្តរជាតិ</p>
                                    <p className="font-now-alt-bold md:mt-1 text-[5px] md:text-[10px] tracking-[2px]">WESTERN INTERNATIONAL SCHOOL</p>
                                </div>
                            </Link>
                        </div>

                        <div className="pointer-cursor block xl:hidden">
                        <Sheet>
                            <SheetTrigger asChild className="ml-4 flex items-center xl:hidden">
                                <Button
                                    type="button"
                                    className="inline-flex items-center bg-blue-900 justify-center rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-100 focus:outline-none focus:ring-inset"
                                    aria-expanded="false"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    <AlignRight stroke="white" className="h-7 w-7" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="bg-blue-900">
                                <h1 className="mt-5 text-center text-xl text-white">Menu</h1>
                                {/* <div className="flex flex-col space-y-8 p-4">
                                    <a href="/" className="offset-2 text-sm font-medium text-white hover:border-blue-900 hover:underline">
                                        Home
                                    </a>
                                    <a href="/about" className="offset-2 border-blue-900 text-sm font-medium text-white underline underline-offset-4">
                                        About
                                    </a>
                                    <a
                                        href="/services"
                                        className="offset-2 text-sm font-medium text-white underline-offset-4 hover:border-blue-900 hover:underline"
                                    >
                                        Services
                                    </a>
                                    <a
                                        href="/blog"
                                        className="offset-2 text-sm font-medium text-white underline-offset-4 hover:border-blue-900 hover:underline"
                                    >
                                        Blogs
                                    </a>
                                    <a
                                        href="/contact"
                                        className="offset-2 text-sm font-medium text-white underline-offset-4 hover:border-blue-900 hover:underline"
                                    >
                                        Contact
                                    </a>
                                </div> */}
                                <MyNavbar />
                            </SheetContent>
                        </Sheet>
                        </div>
                        <input className="hidden" type="checkbox" id="menu-toggle" />

                        <div className="hidden w-full xl:flex xl:w-auto xl:items-center" id="menu">
                            <MyNavbar />
                        </div>
                    </header>

                    <div className="mx-auto flex h-full w-full flex-col items-center justify-center px-4 py-10 text-center md:w-4/5 lg:w-3/5">
                        <p className="font-now-alt-medium text-3xl leading-tight text-white uppercase sm:text-5xl md:text-6xl lg:text-8xl">
                            Start your future today!
                        </p>
                        <Link
                            href="/admissions"
                            className="md:mt-8 rounded-full bg-white px-5 py-1 sm:py-3 text-base md:text-lg font-bold text-[#272766] transition-transform duration-300 hover:-translate-y-1 sm:px-16 sm:text-xl"
                        >
                            Enroll Now
                        </Link>
                    </div>
                </div>
            </div>
            {/*End Header */}
            <MyHeroSection />
            <MyStats />
            <MyVideo />
            <MyContentWithSlide/>
            <MyHeroBottom />
            <MyEnroll />
            <MyFooter />
        </>
    );
};

export default About;
