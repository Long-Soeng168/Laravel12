import { CheckCircle } from 'lucide-react';

const WhyPartnerWithUs = () => {
    return (
        <section className="pb-20">
            <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
                <div className="flex flex-col gap-12 lg:flex-row">
                    {/* Left Section */}
                    <div className="flex-1">
                        <h2 className="text-foreground mb-2 text-3xl font-bold">Why Work With Us</h2>
                        {/* <p className='mb-2'>We’re not just service providers—we’re partners in progress.</p> */}
                        <ul className="text-foreground mt-4 space-y-4 text-lg">
                            {[
                                'Trusted by leading institutions',
                                'Proven track record of impact',
                                'Collaborative, transparent approach',
                                'Deep local knowledge with global perspective',
                            ].map((text, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle className="size-6 shrink-0 text-green-500" />
                                    <span>{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Section */}
                    <div className="flex-2">
                        <h2 className="text-foreground mb-2 text-3xl font-bold">Who We Work With</h2>
                        {/* <p className='mb-2'>We proudly collaborate with:</p> */}
                        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3">
                            {[
                                { title: 'Schools and universities', image: 'school.png' },
                                { title: 'NGOs and community organizations', image: 'ngo.png' },
                                { title: 'Government agencies', image: 'government.png' },
                                { title: 'Local and international suppliers', image: 'supplier.png' },
                                { title: 'Talented individuals who want to make a difference', image: 'individual.png' },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-background flex flex-col items-center justify-start rounded-xl border border-dashed hover:border-solid border-gray-300 p-2 py-4 text-center transition hover:shadow-md"
                                >
                                    <img
                                        src={`/assets/cam-active/who-we-work-with/${item.image}`}
                                        alt={item.title}
                                        className="mb-4 h-16 w-16 object-contain"
                                    />
                                    <p className="text-foreground text-base font-medium">{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyPartnerWithUs;
