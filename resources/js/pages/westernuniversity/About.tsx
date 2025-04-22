import { Link } from '@inertiajs/react';
import MyEnroll from './components-wu/my-enroll';
import MyHeroBottom from './components-wu/my-hero-bottom';
import MyHeroSection from './components-wu/my-hero-section';
import MyStats from './components-wu/my-stats';
import { MyContentWithSlide } from './components-wu/my-content-with-image-slide';

import MyLayoutWestern from './layout/layout';
import MyTopMenu from './components-wu/my-top-menu';
import MyVideo from './components-wu/my-video';

const About = () => {
    return (
        <MyLayoutWestern>
            {/* Header */}
            <div className="font-now-alt-medium">
                <div className="aspect-[21/8] w-full bg-[url('/assets/demo-images/Homepage/02_flag_ceremony_at_wis_main_campus.png')] bg-cover bg-center bg-no-repeat">
                   <MyTopMenu/>
                    <div className="mx-auto flex h-full w-full flex-col items-center justify-center px-4 py-10 text-center md:w-4/5 lg:w-3/5">
                        <p className="font-now-black text-3xl text-white uppercase sm:text-5xl md:text-7xl xl:text-8xl">
                            Start your future today!
                        </p>
                        <Link
                            href="/admissions"
                            className="mt-2 md:mt-8 rounded-full bg-white px-5 py-1 sm:py-3 text-base md:text-lg font-bold text-[#272766] transition-transform duration-300 hover:-translate-y-1 sm:px-16 sm:text-xl"
                        >
                            Enroll Now
                        </Link>
                    </div>
                </div>
            </div>
            {/*End Header */}
            <MyHeroSection />
            <MyStats />
            <MyVideo/>
            <MyContentWithSlide/>
            <MyHeroBottom />
            <MyEnroll />
            </MyLayoutWestern>
    );
};

export default About;
