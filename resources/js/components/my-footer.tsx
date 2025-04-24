const MyFooter = () => {
    return (
        <>
            <footer className="font-proxima-nova-regular py-10 text-black">
                <div className="grid max-w-[2000px] grid-cols-1 px-4 sm:px-16 md:grid-cols-4">
                    {/* Contact Section */}
                    <div className="grid grid-cols-1">
                        <img src="/assets/westec/images/Logo.png" alt="Angkor Wildlife & Aquarium" className="mb-4 w-48" />
                        <div className="text-sm leading-relaxed text-gray-500 md:text-base">
                            <p>
                                No20, St598C, Phum Tomnub Toek,
                                <br />
                                Sangkat Phnom Penh Thmey, Khan Sen Sok,
                                <br />
                                Phnom Penh City, Kingdom of Cambodia.
                            </p>

                            <div className="mt-8">
                                <div className="flex">
                                    <p className="w-40">Mobile Phone</p>:<p className="ml-2">+855 12 269 661</p>
                                </div>
                                <div className="flex">
                                    <p className="w-40">Landline Phone</p>:
                                    <p className="ml-2">
                                        +855 16 991 580
                                        <br /> +855 23 882 580
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 flex">
                                <p className="w-40">Email</p>:<p className="ml-2">contact@westec.com</p>
                            </div>
                            <div className="mt-8 flex">
                                <p className="w-40">Office Hours</p>:
                                <p className="ml-2">
                                    8:00AM - 5:00PM <br /> Monday - Saturday
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer Links Section */}
                    <div className="ml-12 md:col-span-3">
                        <div className="flex justify-between gap-6 text-sm text-gray-500">
                            {/* About Us */}
                            <div className="flex-1">
                                <h3 className="inline-block w-full bg-[#008080] px-6 py-1 text-center text-xl text-white">About Us</h3>
                                <ul className="mt-6 list-disc space-y-1 pl-3">
                                    <li>What is Westec?</li>
                                    <li>Mission & Vision</li>
                                    <li>Why Westec</li>
                                    <li>Sales advantages</li>
                                </ul>
                            </div>

                            {/* Solutions */}
                            <div className="flex-1">
                                <h3 className="inline-block w-full bg-[#008080] px-6 py-1 text-center text-xl text-white">Solutions</h3>
                                <ul className="mt-6 list-disc space-y-1 pl-3">
                                    <li>Security & Safety Solutions</li>
                                    <li>Smart Home & Office Solutions</li>
                                    <li>Commercial & Residential Equipments</li>
                                    <li>IT Solutions</li>
                                </ul>
                            </div>
                            {/*Feature Solutions */}
                            <div className="flex-1">
                                <h3 className="inline-block w-full bg-[#008080] px-6 py-1 text-center text-xl text-white">Featured Solutions</h3>
                                <ul className="mt-6 list-disc space-y-1 pl-3">
                                    <li>Security & Safety Solutions</li>
                                    <li>Smart Home & Office Solutions</li>
                                    <li>Commercial & Residential Equipments</li>
                                    <li>IT Solutions</li>
                                </ul>
                            </div>

                            {/* Case Studies */}
                            <div className="flex-1">
                                <h3 className="inline-block w-full bg-[#008080] px-6 py-1 text-center text-xl text-white">Case studies</h3>
                                <ul className="mt-6 list-disc space-y-1 pl-3">
                                    <li>Banking</li>
                                    <li>Embassy</li>
                                    <li>Microfinance</li>
                                    <li>Manufacturing</li>
                                    <li>Construction</li>
                                    <li>Entertainment</li>
                                </ul>
                            </div>
                        </div>

                        {/* Social & Chat Sections */}
                        <div className="mt-16 flex gap-6">
                            {/* Follow Us */}
                            <div className="flex-1">
                                <h3 className="inline-block bg-[#008080] px-6 py-1 text-xl text-white">Follow Us!</h3>
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
                                            className="background h-10 w-10 p-1 transition-all duration-500 hover:scale-125"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Chat With Us */}
                            <div className="flex-1">
                                <h3 className="inline-block bg-[#008080] px-6 py-1 text-xl text-white">Chat With Us!</h3>
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
                                            className="background h-10 w-10 p-1 transition-all duration-500 hover:scale-125"
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
