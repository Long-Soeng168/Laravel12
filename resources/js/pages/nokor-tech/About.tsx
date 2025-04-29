import { Heart } from 'lucide-react';
import NokorTechLayout from './layouts/nokor-tech-layout';

const About = () => {
    return (
        <NokorTechLayout>
            <div>
                <div className="bg-primary text-white">
                    <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between px-4 py-16 lg:flex-row lg:px-24">
                        <div className="w-full lg:w-1/2 lg:pr-16">
                            <h3 className="mb-4 text-4xl font-semibold lg:text-5xl">A Family That Keeps On Growing</h3>
                            <div className="text-lg text-gray-200 lg:text-xl">
                                <p className="mb-4">
                                    We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate
                                    customers, through our large Melbourne CBD showroom and our online store.
                                </p>
                                <p>
                                    Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term
                                    client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success.
                                </p>
                            </div>
                        </div>
                        <div className="mt-8 w-full lg:mt-0 lg:w-auto">
                            <img src="/assets/nokor-tech/images/products/about-us/1.png" alt="About Us" width={500} height={500} className="object-cover" />
                        </div>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="bg-white text-black">
                    <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between px-4 py-16 lg:flex-row lg:px-24">
                        <div className="order-1 mb-8 w-full lg:mb-0 lg:w-auto">
                            <div className="relative h-[300px] w-[300px] lg:h-[500px] lg:w-[500px]">
                                <img src="/assets/nokor-tech/images/products/about-us/2.png" alt="About Us" fill />
                            </div>
                        </div>
                        <div className="w-full lg:order-2 lg:w-1/2">
                            <div className="flex items-center gap-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-t-full rounded-l-full bg-blue-600 p-2">
                                    <div className="relative h-[20px] w-[20px]">
                                        <img src="/assets/nokor-tech/images/logo/wlogo.png" alt="Logo" fill />
                                    </div>
                                </div>
                                <h3 className="text-4xl font-semibold lg:text-5xl">Shop.com</h3>
                            </div>
                            <div className="mt-4 text-lg text-gray-600 lg:text-xl">
                                <p className="mb-4">
                                    We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate
                                    customers, through our large Melbourne CBD showroom and our online store.
                                </p>
                                <p>
                                    Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term
                                    client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3 */}
                <div className="bg-primary text-white">
                    <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between px-4 py-16 lg:flex-row lg:px-24">
                        <div className="w-full lg:w-1/2">
                            <div className="flex items-center gap-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-t-full rounded-l-full bg-blue-600 p-2">
                                    <Heart />
                                </div>
                                <h3 className="text-4xl font-semibold lg:text-5xl">Now You're In Safe Hands</h3>
                            </div>
                            <div className="mt-4 text-lg text-gray-200 lg:text-xl">
                                <p className="mb-4">
                                    We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate
                                    customers, through our large Melbourne CBD showroom and our online store.
                                </p>
                                <p>
                                    Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term
                                    client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success.
                                </p>
                            </div>
                        </div>
                        <div className="mt-8 w-full lg:mt-0 lg:w-auto">
                            <div className="relative h-[300px] w-[300px] lg:h-[500px] lg:w-[500px]">
                                <img src="/assets/nokor-tech/images/products/about-us/3.png" alt="About Us" fill />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional sections follow the same pattern */}
            </div>
        </NokorTechLayout>
    );
};

export default About;
