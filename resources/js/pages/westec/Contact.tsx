import MyLayout from './layout/layout';

const Contact = () => {
    return (
        <MyLayout>
            <section className="relative overflow-hidden bg-white text-white">
                <div className="absolute inset-0 bg-white opacity-50"></div>
                <div
                    className="absolute inset-0 aspect-[19/6] bg-cover bg-center"
                    style={{ backgroundImage: "url('assets/images/contacts.png')" }}
                ></div>

                <div className="relative z-10 mx-auto aspect-[19/6] px-4 md:py-32">
                    <div className="min-h-8">{/* <p className="text-center text-5xl font-bold">About</p> */}</div>
                </div>

                {/* Decorative Element */}
            </section>
            {/* content */}
            <div className="mx-auto max-w-screen-2xl px-4 sm:px-10 md:px-20 my-10">
                <div className="justify-cente flex items-center">
                    <div className="flex w-full flex-col overflow-hidden lg:flex-row">
                        {/* Left Section */}
                        <div className="bg-gradient w-full rounded-md p-8 lg:w-1/3">
                            <h2 className="text-color mt-2 text-2xl font-bold">Contact Us</h2>
                            <div className="mt-6 space-y-4">
                                <div className="flex items-center space-x-3">
                                    <img src="assets/images/icons8-address-64.png" className="background p-1 rounded-full w-10" />
                                    <div>
                                        <p className="text-color font-semibold">Address:</p>
                                        <p>#20, Street. 598C, Phum Tomnob, Sangkat Phnom Penh Thmey, Khan SenSok, Phnom Penh, Cambodia</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                <img src="assets/images/icons8-email-64.png" className="background p-1 rounded-full w-10" />
                                    <div>
                                        <p className="text-color font-semibold">Email:</p>
                                        <p>contact@westec.com | sales@westec.com | support@westec.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                <img src="assets/images/icons8-call.png" className="background p-1 rounded-full w-10" />
                                    <div>
                                        <p className="text-color font-semibold">Phone:</p>
                                        <p>023 882 580 | 016 991 580 | 012 269 661</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="w-full py-8 lg:w-2/3 lg:p-8">
                            <h2 className="text-color mt-1 text-2xl font-bold">Email Us</h2>
                            <form className="mt-6 space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="text" placeholder="Name" className="w-full rounded bg-gray-200 p-3 outline-none" />
                                    <input type="email" placeholder="E-Mail" className="w-full rounded bg-gray-200 p-3 outline-none" />
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        className="col-span-2 w-full rounded bg-gray-200 p-3 outline-none"
                                    />
                                </div>
                                <textarea placeholder="Your message Here" className="min-h-32 w-full rounded bg-gray-200 p-3 outline-none"></textarea>
                                <button className="bg-gradient background rounded-full px-6 py-3 font-semibold text-white">Submit Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/*End content */}

            <div className="flex items-center justify-center">
                <div className="w-full rounded-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5909802997454!2d104.922343!3d11.5355045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310950da4db34301%3A0x61232833a62cac36!2sRoyal%20University%20Of%20Law%20And%20Economics!5e0!3m2!1sen!2s!4v1710332324552!5m2!1sen!2s"
                        className="h-[500px] w-full rounded-lg border border-gray-300"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </MyLayout>
    );
};

export default Contact;
