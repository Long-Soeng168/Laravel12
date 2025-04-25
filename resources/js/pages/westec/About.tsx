import { BrainIcon } from 'lucide-react';
import { ContactSection } from './components/contact-section';
import { OurJourney } from './components/our-journey';
import WestecLayout from './layout/layout';

const About = () => {
    return (
        <WestecLayout>
            <section className="relative">
                <img src="/assets/westec/images/about-banner.jpeg" className="max-h-[650px] min-h-[300px] w-full object-cover" alt="" />
                <div className="bg-true-primary/50 absolute top-1/2 left-4 max-w-[80%] -translate-y-1/2 p-4 text-white lg:left-16 lg:max-w-[750px]">
                    <h1 className="mt-2 mb-4 text-xl font-bold text-yellow-500 lg:text-4xl">Suor Sdey Cambodia!</h1>
                    <div className="mb-2 flex flex-col gap-4 text-xs font-medium lg:text-2xl">
                        <p>At Westec Corporation, we don’t just follow the latest trends in technology—we lead them.</p>
                        <p>
                            Born from a vision of passionate engineers from the USA and Canada, we’ve grown into Cambodia’s leading provider of smart,
                            secure, and innovative solutions.
                        </p>
                        <p>
                            Whether you’re a business owner needing cutting-edge security or a homeowner looking for smart automation, Westec is your
                            go-to partner for transforming the way you live and work.
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <h1 className="text-color px-4 py-4 text-2xl font-semibold sm:px-8 lg:px-16 lg:py-8">Why choose Westec?</h1>
                <div className="bg-primary grid md:grid-cols-2 lg:grid-cols-3">
                    {WhyChooseUsCard()}
                    {WhyChooseUsCard()}
                    {WhyChooseUsCard()}
                    {WhyChooseUsCard()}
                    {WhyChooseUsCard()}
                    {WhyChooseUsCard()}
                </div>
            </section>
            <ContactSection bg="background" />
            <section>
                <h1 className="text-color px-4 py-4 text-2xl font-semibold sm:px-8 lg:px-16 lg:py-8">Vision</h1>
                <img src="/assets/westec/images/vision-banner.png" className="w-full object-cover" alt="" />
            </section>
            <section>
                <h1 className="text-color px-4 py-4 text-2xl font-semibold sm:px-8 lg:px-16 lg:py-8">Our Commitment</h1>
                <img src="/assets/westec/images/commitment-banner.png" className="w-full object-cover" alt="" />
            </section>
            <section>
                <h1 className="text-color px-4 py-4 text-2xl font-semibold sm:px-8 lg:px-16 lg:py-8">Our Journey (Milestones)</h1>
                <OurJourney />
            </section>
        </WestecLayout>
    );

    function WhyChooseUsCard() {
        return (
            <div className="card">
                <div className="card__content transition-transform duration-700">
                    <div className="card__front flex items-center gap-8 border p-8 text-start text-white">
                        <p className="text-7xl font-bold">1</p>
                        <div className="flex w-full flex-col items-center justify-start">
                            <span className="size-24">
                                <BrainIcon className="h-full w-full" />
                            </span>
                            <p className="mt-4 text-center text-xl whitespace-pre-line text-white">
                                Empowerment {`\n`}
                                through Control
                            </p>
                        </div>
                    </div>
                    <div className="card__back text-true-primary absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center gap-4 truncate bg-white p-8">
                        <p className="text-7xl font-bold">1</p>
                        <div className="flex w-full flex-col items-start justify-start">
                            <p className="text-start text-xl font-bold">Empowerment through Control:</p>
                            <p className="mt-4 text-start text-base whitespace-pre-line">
                                Our smart automation and security systems put property is protected by cutting-edge technology control at your energy
                                efficiency with fingertips, allowing you to manage 1 2 3 designed to work flawlessly every time. Westec everything
                                from security to
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default About;
