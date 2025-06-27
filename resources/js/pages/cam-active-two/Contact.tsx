import { Card, CardContent } from '@/components/ui/card';
import SectionHeader from './components/section-header';
import SendUsMessage from './components/sent-us-message';
import Social from './components/social';
import CamActiveLayout from './layouts/CamActiveLayout';

const Contact = () => {
    return (
        <CamActiveLayout>
            <div className="bg-primary/10 py-10">
                <SectionHeader title="Contact Us" subtitle="Let's start a conversation." />
            </div>
            <div className="mt-20">
                <div className="mx-auto mb-20 flex max-w-screen-xl flex-col items-start gap-12 px-6 lg:flex-row">
                    <div>
                        <div className="space-y-10">
                            <Card className="flex flex-row justify-start gap-0 overflow-hidden rounded-xl border border-none border-gray-200 py-0 shadow-none transition sm:flex-row">
                                {/* <CardHeader className="pl-0">
                                    <div className="bg-primary/20 flex aspect-square w-24 shrink-0 items-center justify-center rounded-2xl shadow-md lg:w-28">
                                        <TargetIcon className="text-primary size-20" />
                                    </div>
                                </CardHeader> */}
                                <CardContent className="flex flex-col justify-center p-0">
                                    <h2 className="text-3xl font-bold tracking-tight">General Inquiries</h2>
                                    <div className="text-foreground mt-2 max-w-[70ch] text-base lg:text-lg">
                                        <p>Have a question or want to learn more about our work?</p>
                                        <p>Email: info@camactive.net</p>
                                        <p>Phone: +855 (0)23 882 405</p>
                                        <p>Office Hours: Monday–Friday, 9:00 AM – 5:00 PM</p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="flex flex-row justify-start gap-0 overflow-hidden rounded-xl border border-none border-gray-200 py-0 shadow-none transition sm:flex-row">
                                <CardContent className="flex flex-col justify-center p-0">
                                    <h2 className="text-3xl font-bold tracking-tight">Partnerships & Collaboration</h2>
                                    <div className="text-foreground mt-2 max-w-[70ch] text-base lg:text-lg">
                                        <p>Looking to collaborate on a project or explore a strategic partnership?</p>
                                        <p>Email: partnerships@camactive.net</p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="flex flex-row justify-start gap-0 overflow-hidden rounded-xl border border-none border-gray-200 py-0 shadow-none transition sm:flex-row">
                                <CardContent className="flex flex-col justify-center p-0">
                                    <h2 className="text-3xl font-bold tracking-tight">Careers & Internships</h2>
                                    <div className="text-foreground mt-2 max-w-[70ch] text-base lg:text-lg">
                                        <p>Interested in joining our team or applying for an internship?</p>
                                        <p>Email: careers@camactive.net</p>
                                        <a href="/careers" className="text-primary hover:underline">
                                            Or visit our Careers Page
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="flex flex-row justify-start gap-0 overflow-hidden rounded-xl border border-none border-gray-200 py-0 shadow-none transition sm:flex-row">
                                <CardContent className="flex flex-col justify-center p-0">
                                    <h2 className="text-3xl font-bold tracking-tight">Our Office</h2>
                                    <div className="text-foreground mt-2 max-w-[70ch] text-base lg:text-lg">
                                        <p>Cam-Active Co., Ltd. #19Eo, Street 118, Phsar Depo 3, Toul Kork, Phnom Penh, Cambodia</p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="flex flex-row justify-start gap-0 rounded-xl border border-none border-gray-200 py-0 shadow-none transition sm:flex-row">
                                <CardContent className="flex flex-col justify-center p-0">
                                    <h2 className="text-3xl font-bold tracking-tight">Stay Connected</h2>
                                    <div className="text-foreground mt-2 max-w-[70ch] text-base lg:text-lg">
                                        <p>Follow us on social media for updates, stories, and opportunities:</p>
                                    </div>
                                    <Social />
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                    <aside className="w-full shrink-0 lg:max-w-lg">
                        <h3 className="text-3xl font-bold tracking-tight">Send Us a Message</h3>
                        <SendUsMessage />
                        <div className="mt-10 overflow-hidden rounded-xl">
                            <iframe
                                className="h-[300px]"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31271.399790691263!2d104.90051593691636!3d11.557236190071759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095144cbdbf311%3A0x2588e1ac1787eb64!2sWat%20Phnom%20Daun%20Penh!5e0!3m2!1sen!2skh!4v1751015287453!5m2!1sen!2skh"
                                width="100%"
                                height="100%"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </aside>
                </div>
            </div>
            {/* <HeroTwo />
            <OurServices />
            <OurResources />
            <CatalogFunctionality />
            <OurIntegratedSolutions />
            <TechnologyBasedSolutions />
            <WhyChooseUs /> */}
        </CamActiveLayout>
    );
};

export default Contact;
