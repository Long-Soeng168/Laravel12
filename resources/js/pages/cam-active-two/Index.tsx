import HeroOne from './components/hero-one';
import LatestPosts from './components/latest_posts';
import WhatWeDo from './components/what-we-do';
import WhyPartnerWithUs from './components/why-partner-with-us';
import CamActiveLayout from './layouts/CamActiveLayout';

const Index = () => {
    return (
        <CamActiveLayout>
            <HeroOne />
            <WhatWeDo />
            <WhyPartnerWithUs />
            <div className="mx-auto flex max-w-screen-xl flex-wrap items-end justify-between gap-4 px-6">
                <h2 className="text-3xl font-bold tracking-tight">Latest Posts</h2>
            </div>
            <LatestPosts />

            {/* <OurExpertise />
            <FeaturedSolutions />
            <WhyChooseUs />
            <Testimonials /> */}
        </CamActiveLayout>
    );
};

export default Index;
