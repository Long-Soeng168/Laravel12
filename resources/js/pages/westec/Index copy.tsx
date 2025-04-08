import { MySlide } from '@/components/my-slide';
import { MyHeroSection } from './components/my-hero-section';
import MyLayout from './layout/layout';

const Index = () => {
    return (
        <MyLayout>
            {/* Slide */}
            <MySlide/>
            {/*End Slide */}
            <div className="mx-auto my-20 max-w-screen-2xl px-4 sm:px-10 md:px-20">
                <MyHeroSection />
            </div>
            <section className="mt-20">
                <div className="mx-auto gap-10 max-w-screen-2xl px-4 sm:px-10 md:px-20 lg:flex">
                    <div className="text-start lg:w-1/2 lg:text-left">
                        <h1 className="font-proxima-black text-4xl leading-none lg:text-5xl xl:text-[40px]">Mission</h1>
                        <p className="font-proxima-thin mt-6 text-base font-light lg:text-xl">
                            Provide innovative and high quality technology solutions to enable people to enhance their lives and well-being.
                        </p>
                    </div>
                    <div className="mt-10 lg:mt-0 lg:w-1/2">
                        <img src="assets/images/banner1.png" className="animate-bounce-2s aspect-video rounded-[50px] object-cover hover:scale-105 duration-500 transition-all" />
                    </div>
                </div>
            </section>

            <section className="mt-20">
                <div className="mx-auto gap-10 flex max-w-screen-2xl flex-col-reverse  px-4 sm:px-10 md:px-20 lg:flex-row">
                    <div className="mt-10 lg:mt-0 lg:w-1/2">
                        <img src="assets/images/banner2.png" className="animate-bounce-2s aspect-video rounded-[50px] object-cover hover:scale-105 duration-500 transition-all" />
                    </div>

                    <div className="text-start lg:w-1/2 lg:text-left">
                        <h1 className="font-proxima-black text-4xl leading-none lg:text-5xl xl:text-[40px]">Vission</h1>
                        <p className="font-proxima-thin mt-6 text-base font-light lg:text-xl">
                        Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mt-20 bg-[#36454f] py-12 text-white">
                <div className="mx-auto max-w-screen-2xl px-4 text-center sm:px-10 md:px-20">
                    <h2 className="mb-4 text-3xl font-semibold text-white">Why Choose Us</h2>
                    <div className="mb-6 flex items-center justify-center space-x-2">
                        <div className="h-[2px] w-16 bg-gray-300"></div>
                        <div className="h-2 w-2 rounded-full bg-[#f68c1f]"></div>
                        <div className="h-[2px] w-16 bg-gray-300"></div>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3">
                        {/* <!-- Quality  */}
                        <div className="flex flex-col items-start rounded-md p-4 text-start shadow-2xl">
                            <i className="w-10">
                                <img src="assets/images/quality.png" />
                            </i>
                            <h3 className="text-yellow mt-4 font-serif text-xl">Quality</h3>
                            <p className="font-proxima-thin mt-4 text-start text-white">
                                All our beverages are supplied by proven manufacturers from all around the world. We guarantee the high-class quality.
                            </p>
                        </div>
                        {/* <!-- Shipping  */}
                        <div className="flex flex-col items-start rounded-md p-4 text-start shadow-2xl">
                            <i className="w-10">
                                <img src="assets/images/time.png" />
                            </i>
                            <h3 className="text-yellow mt-4 font-serif text-xl">Domestic & Commercial</h3>
                            <p className="font-proxima-thin mt-4 text-start text-white">
                                We ship all over the USA as well as overseas. It takes 3-5 business days for a package to be delivered right to your
                                door.
                            </p>
                        </div>
                        {/* <!-- Cost  */}
                        <div className="flex flex-col items-start rounded-md p-4 text-start shadow-2xl">
                            <i className="w-10">
                                <img src="assets/images/dollar.png" />
                            </i>
                            <h3 className="text-yellow mt-4 font-serif text-xl">Best Cost</h3>
                            <p className="font-proxima-thin mt-4 text-start text-white">
                                Prices on our products are fair and affordable. You will be gladly surprised once you get your package delivered!
                            </p>
                        </div>
                        {/* <!-- Quality  */}
                        <div className="flex flex-col items-start rounded-md p-4 text-start shadow-2xl">
                            <i className="w-10">
                                <img src="assets/images/quality.png" />
                            </i>
                            <h3 className="text-yellow mt-4 font-serif text-xl">Quality</h3>
                            <p className="font-proxima-thin mt-4 text-start text-white">
                                All our beverages are supplied by proven manufacturers from all around the world. We guarantee the high-class quality.
                            </p>
                        </div>
                        {/* <!-- Shipping  */}
                        <div className="flex flex-col items-start rounded-md p-4 text-start shadow-2xl">
                            <i className="w-10">
                                <img src="assets/images/time.png" />
                            </i>
                            <h3 className="text-yellow mt-4 font-serif text-xl">Domestic & Commercial</h3>
                            <p className="font-proxima-thin mt-4 text-start text-white">
                                We ship all over the USA as well as overseas. It takes 3-5 business days for a package to be delivered right to your
                                door.
                            </p>
                        </div>
                        {/* <!-- Cost  */}
                        <div className="flex flex-col items-start rounded-md p-4 text-start shadow-2xl">
                            <i className="w-10">
                                <img src="assets/images/dollar.png" />
                            </i>
                            <h3 className="text-yellow mt-4 font-serif text-xl">Best Cost</h3>
                            <p className="font-proxima-thin mt-4 text-start text-white">
                                Prices on our products are fair and affordable. You will be gladly surprised once you get your package delivered!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </MyLayout>
    );
};

export default Index;
