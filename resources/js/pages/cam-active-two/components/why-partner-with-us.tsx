import { CheckCircle } from 'lucide-react';

const WhyPartnerWithUs = () => {
    return (
        <section className="pb-20">
            <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
                <div className="flex flex-col gap-12 lg:flex-row">
                    {/* Left Section */}
                    <div className="flex-1">
                        <h2 className="mb-6 text-3xl font-bold text-foreground">Why Work With Us</h2>
                        <ul className="space-y-4 text-lg text-foreground">
                            {[
                                'Trusted by leading institutions',
                                'Proven track record of impact',
                                'Collaborative, transparent approach',
                                'Deep local knowledge with global perspective',
                            ].map((text, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle className="mt-1 h-6 w-6 text-green-500" />
                                    <span>{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Section */}
                    <div className="flex-2">
                        <h2 className="mb-6 text-3xl font-bold text-foreground">Who We Work With</h2>
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3">
                            {[
                                'Schools and universities',
                                'NGOs and community organizations',
                                'Government agencies',
                                'Local and international suppliers',
                                'Talented individuals who want to make a difference',
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-background p-2 py-4 text-center transition hover:shadow-md"
                                >
                                    <img src="/assets/icons/image-icon.png" alt={`Partner ${i + 1}`} className="mb-4 h-16 w-16 object-contain" />
                                    <p className="text-base font-medium text-foreground">{item}</p>
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
