const MyFooter = () => {
    return (
        <>
            <footer className=" font-proxima-nova-regular py-10 text-black">
                <div className="mx-auto grid max-w-[4000px] grid-cols-1 gap-8 px-4 sm:px-10 md:grid-cols-4">
                    {/* Contact Section */}
                    <div className="grid grid-cols-1">
                        <img src="assets/images/Logo.png" alt="Angkor Wildlife & Aquarium" className="mb-4 w-48" />
                        <div className="text-sm leading-relaxed text-gray-500 md:text-base">
                            <p>
                                No. 20, St. 598C, Phum Tomnub Toek,
                                <br />
                                Sangkat Phnom Penh Thmey, Khan Sen Sok,
                                <br />
                                Phnom Penh City, Kingdom of Cambodia.
                            </p>


                            <div className="mt-6">
                                <div className="flex justify-between">
                                    <p>Mobile Phone</p>
                                    <p>: +855 12 269 661</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Landline Phone</p>
                                    <p className="text-end">
                                        : +855 16 991 580
                                        <br className="text-end" />: +855 23 882 580
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6  flex justify-between">
                                    <p>Email</p>
                                    <p className="text-end ">
                                        : contact@westec.com
                                    </p>
                                </div>
                            <div className="mt-6  flex justify-between">
                                    <p>Office Hours</p>
                                    <p className="text-end ">
                                        : 8:00AM - 5:00PM <br/> Monday - Saturday
                                    </p>
                                </div>
                        </div>
                    </div>

                    {/* Footer Links Section */}
                    <div className="md:col-span-3 ml-12">
                        <div className="grid w-full grid-cols-1 gap-6 text-sm text-gray-500 md:grid-cols-4">
                            {/* About Us */}
                            <div>
                                <h3 className="inline-block px-6 py-1 text-xl text-white bg-[#008080]">About Us</h3>
                                <ul className="mt-6 space-y-1">
                                    <li>. What is Westec?</li>
                                    <li>. Mission & Vision</li>
                                    <li>. Why Westec</li>
                                    <li>. Sales advantages</li>
                                </ul>
                            </div>

                            {/* Solutions */}
                            <div>
                                <h3 className="inline-block px-6 py-1 text-xl text-white bg-[#008080]">Solutions</h3>
                                <ul className="mt-6 space-y-1">
                                    <li>. Security & Safety Solutions</li>
                                    <li>. Smart Home & Office Solutions</li>
                                    <li>. Commercial & Residential Equipments</li>
                                    <li>. IT Solutions</li>
                                </ul>
                            </div>
                            {/*Feature Solutions */}
                            <div>
                                <h3 className="inline-block px-6 py-1 text-xl text-white bg-[#008080] ">Featured Solutions</h3>
                                <ul className="mt-6 space-y-1">
                                    <li>. Security & Safety Solutions</li>
                                    <li>. Smart Home & Office Solutions</li>
                                    <li>. Commercial & Residential Equipments</li>
                                    <li>. IT Solutions</li>
                                </ul>
                            </div>

                            {/* Case Studies */}
                            <div>
                                <h3 className="inline-block px-6 py-1 text-xl text-white bg-[#008080]">Case studies</h3>
                                <ul className="mt-6 space-y-1">
                                    <li>. Banking</li>
                                    <li>. Embassy</li>
                                    <li>. Microfinance</li>
                                    <li>. Manufacturing</li>
                                    <li>. Construction</li>
                                    <li>. Entertainment</li>
                                </ul>
                            </div>
                        </div>

                        {/* Social & Chat Sections */}
                        <div className="mt-10 flex max-w-[82%] items-start justify-between">
                            {/* Follow Us */}
                            <div>
                                <h3 className="inline-block px-6 py-1 text-xl text-white bg-[#008080]">Follow Us!</h3>
                                <div className="mt-6 flex gap-2">
                                    {[
                                        { name: 'facebook', alt: 'Facebook' },
                                        { name: 'instagram', alt: 'Instagram' },
                                        { name: 'tiktok', alt: 'TikTok' },
                                        { name: 'youtube', alt: 'YouTube' },
                                        { name: 'linkedin', alt: 'LinkedIn' },
                                    ].map((icon, index) => (
                                        <img
                                            key={index}
                                            src={`/assets/demo-images/${icon.name}.png`}
                                            alt={icon.alt}
                                            className="h-10 w-10 background p-1 transition-all duration-500 hover:scale-125"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Chat With Us */}
                            <div>
                                <h3 className="inline-block px-6 py-1 text-xl text-white bg-[#008080]">Chat With Us!</h3>
                                <div className="mt-6 flex gap-2">
                                    {[
                                        { name: 'talk', alt: 'Talk' },
                                        { name: 'telegram', alt: 'Telegram' },
                                        { name: 'wechat', alt: 'WeChat' },
                                        { name: 'whatsapp', alt: 'WhatsApp' },
                                    ].map((icon, index) => (
                                        <img
                                            key={index}
                                            src={`/assets/demo-images/${icon.name}.png`}
                                            alt={icon.alt}
                                            className="h-10 w-10 background p-1 transition-all duration-500 hover:scale-125"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default MyFooter;
