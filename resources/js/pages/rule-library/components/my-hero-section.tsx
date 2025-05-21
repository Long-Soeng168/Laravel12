const MyHeroSection = () => {
    return (
        <div className="mx-auto mt-3 max-w-screen-2xl overflow-hidden bg-white px-3 sm:px-10 md:mt-10 lg:px-20">
            <div className="md:flex">
                <div className="md:shrink-0">
                    <img className="aspect-video max-h-56 w-full object-cover" src="/assets/demo-images/rule-images/image1.webp" alt="Hero Image" />
                </div>
                <div className="mt-2 md:mt-0 md:px-8">
                    <div className="text-xl font-semibold tracking-wide text-black md:text-2xl">Digital Library</div>
                    <div className="mt-2 text-slate-700">
                        <p>
                            At [Your Company Name], we are dedicated to empowering businesses with cutting-edge digital solutions. Our expertise spans
                            web development, mobile app solutions, SEO, digital marketing, and custom software development. With over 15 years of
                            experience, we pride ourselves on delivering high-quality, user-friendly, and scalable digital products that drive growth
                            and success. Partner with us to transform your online presence and achieve your business goals.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyHeroSection;
