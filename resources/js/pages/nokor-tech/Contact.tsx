import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { usePage } from '@inertiajs/react';
import { ArrowRight, Globe2Icon, MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import BackgroundAnimated from '../cam-active/components/background-animated';
import SectionHeader from './components/section-header';
import NokorTechLayout from './layouts/nokor-tech-layout';

const ContactCamActivePage = () => {
    const { application_info, contactPage, app_url } = usePage().props;

    return (
        <NokorTechLayout>
            <div className="flex min-h-screen items-center justify-center py-16">
                <div className="mx-auto w-full max-w-screen-xl px-6 xl:px-0">
                    <div className="text-center">
                        <SectionHeader label="Contact Us" title={contactPage?.title} />
                        <div className={`prose ck-content mx-auto mt-4 max-w-xl text-center text-lg lg:text-xl`}>
                            <div dangerouslySetInnerHTML={{ __html: contactPage?.long_description }} />
                        </div>
                    </div>

                    <div className="mt-24 grid gap-16 md:gap-10 lg:grid-cols-2">
                        {/* Contact Info */}
                        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
                            <div>
                                <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-full">
                                    <MapPinIcon />
                                </div>
                                <h3 className="mt-6 text-xl font-semibold">Address</h3>
                                <a className="text-primary font-medium" href={`#`}>
                                    {application_info?.address}
                                </a>
                            </div>
                            <div>
                                <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-full">
                                    <PhoneIcon />
                                </div>
                                <h3 className="mt-6 text-xl font-semibold">Phone</h3>
                                <a className="text-primary font-medium" href={`tel:${application_info?.phone}`}>
                                    {application_info?.phone}
                                </a>
                            </div>
                            <div>
                                <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-full">
                                    <MailIcon />
                                </div>
                                <h3 className="mt-6 text-xl font-semibold">Email</h3>
                                <a className="text-primary font-medium" href={`mailto:${application_info?.email}`}>
                                    {application_info?.email}
                                </a>
                            </div>

                            <div>
                                <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-full">
                                    <Globe2Icon />
                                </div>
                                <h3 className="mt-6 text-xl font-semibold">Website</h3>
                                <a className="text-primary font-medium" href={app_url}>
                                    {app_url}
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <Card className="bg-secondary relative overflow-hidden rounded-lg shadow-none">
                            <BackgroundAnimated />
                            <CardContent className="relative z-10 p-6">
                                <form>
                                    <div className="grid gap-x-8 gap-y-5 md:grid-cols-2">
                                        <div className="col-span-2 sm:col-span-1">
                                            <Label className="text-white" htmlFor="firstName">
                                                First Name
                                            </Label>
                                            <Input placeholder="First name" id="firstName" className="mt-1.5 h-11 bg-white shadow-none" />
                                        </div>
                                        <div className="col-span-2 sm:col-span-1">
                                            <Label className="text-white" htmlFor="lastName">
                                                Last Name
                                            </Label>
                                            <Input placeholder="Last name" id="lastName" className="mt-1.5 h-11 bg-white shadow-none" />
                                        </div>
                                        <div className="col-span-2">
                                            <Label className="text-white" htmlFor="email">
                                                Email
                                            </Label>
                                            <Input type="email" placeholder="Email" id="email" className="mt-1.5 h-11 bg-white shadow-none" />
                                        </div>
                                        <div className="col-span-2">
                                            <Label className="text-white" htmlFor="message">
                                                Message
                                            </Label>
                                            <Textarea
                                                id="message"
                                                placeholder="Write your message here"
                                                className="mt-1.5 bg-white shadow-none dark:bg-white"
                                                rows={6}
                                            />
                                        </div>
                                    </div>
                                    <div className="group relative mx-auto mt-8 w-32 cursor-pointer overflow-hidden rounded-full border bg-white p-2 text-center font-semibold text-black">
                                        <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                                            Submit
                                        </span>
                                        <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
                                            <span>Submit</span>
                                            <ArrowRight />
                                        </div>
                                        <div className="absolute top-[40%] left-[20%] h-2 w-2 scale-[1] rounded-lg bg-black transition-all duration-300 group-hover:top-[0%] group-hover:left-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-[#263381] dark:group-hover:bg-[#e7cb6e]"></div>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
            <div>
                <iframe className='h-[400px]' src={application_info?.google_map} width="100%" height="100%" loading="lazy"></iframe>
            </div>
        </NokorTechLayout>
    );
};

export default ContactCamActivePage;
