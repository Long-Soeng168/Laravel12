import { Button } from '@/components/ui/button';
import { Clock, Mail, MapPin, PhoneCall } from 'lucide-react';
import NokorTechLayout from './layouts/nokor-tech-layout';

const Contact = () => {
    return (
        <NokorTechLayout>
            <div className="mx-auto mb-20 max-w-screen-xl px-4 md:px-8">
                {/* Page Title */}
                <h1 className="my-6 text-3xl font-semibold md:text-4xl">Contact Us</h1>

                {/* Content Section */}
                <div className="flex flex-wrap gap-8">
                    {/* Contact Form */}
                    <div className="flex-1">
                        <p className="mb-6 text-sm text-gray-500">
                            We love hearing from you, our Shop customers. <br />
                            Please contact us, and we will make sure to get back to you as soon as we possibly can.
                        </p>

                        <form action="#" className="flex flex-wrap gap-4">
                            {/* Name and Email */}
                            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
                                <div className="flex flex-col">
                                    <label htmlFor="forName" className="mb-2 font-medium text-gray-700">
                                        Your Name
                                    </label>
                                    <input
                                        id="forName"
                                        type="text"
                                        placeholder="Your Name"
                                        className="rounded border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="forEmail" className="mb-2 font-medium text-gray-700">
                                        Your Email
                                    </label>
                                    <input
                                        id="forEmail"
                                        type="email"
                                        placeholder="Your Email"
                                        className="rounded border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex w-full flex-col">
                                <label htmlFor="forPhone" className="mb-2 font-medium text-gray-700">
                                    Your Phone
                                </label>
                                <input
                                    id="forPhone"
                                    type="tel"
                                    placeholder="Your Phone"
                                    className="rounded border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Thoughts */}
                            <div className="flex w-full flex-col">
                                <label htmlFor="thoughts" className="mb-2 font-medium text-gray-700">
                                    What's on your mind? <span className="text-red-600">*</span>
                                </label>
                                <textarea
                                    id="thoughts"
                                    rows={7}
                                    placeholder="Share your thoughts..."
                                    className="resize-none rounded border border-gray-300 p-2 text-gray-700 focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="flex w-full justify-end">
                                <Button>Submit</Button>
                            </div>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="flex w-full flex-col gap-6 rounded-lg bg-blue-50 p-6 md:w-1/3">
                        <div>
                            <div className="flex items-center gap-3">
                                <MapPin className="text-primary" />
                                <h2 className="text-lg font-semibold">Address:</h2>
                            </div>
                            <p className="ml-8 text-sm text-gray-600">1234 Street Address City Address, 1234</p>
                        </div>

                        <div>
                            <div className="flex items-center gap-3">
                                <PhoneCall className="text-primary" />
                                <h2 className="text-lg font-semibold">Phone:</h2>
                            </div>
                            <p className="ml-8 text-sm text-gray-600">(00) 1234 5678</p>
                        </div>

                        <div>
                            <div className="flex items-center gap-3">
                                <Clock className="text-primary" />
                                <h2 className="text-lg font-semibold">We are open:</h2>
                            </div>
                            <p className="ml-8 text-sm text-gray-600">
                                Monday - Thursday: 9:00 AM - 5:30 PM <br />
                                Friday: 9:00 AM - 6:00 PM <br />
                                Saturday: 11:00 AM - 5:00 PM
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center gap-3">
                                <Mail className="text-primary" />
                                <h2 className="text-lg font-semibold">Email:</h2>
                            </div>
                            <p className="text-primary ml-8 text-sm">shop@email.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </NokorTechLayout>
    );
};

export default Contact;
