import { Link } from '@inertiajs/react';

export function MyHeroSection() {
    return (
        <>
            {/* First Hero Section */}
            <div
                className="relative mx-auto flex aspect-[21/7] w-full flex-col"
                style={{
                    backgroundImage: "url('/assets/demo-images/Artboard2.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="grid h-full w-full grid-cols-2 gap-4">
                    {/* Left Section */}
                    <div className="flex flex-col p-4 text-start sm:p-8 md:p-12 md:text-left lg:grid-cols-2">
                        <h1 className="font-proxima-nova-bold text-2xl leading-[30px] text-white md:mb-4 md:text-3xl md:leading-[30px] lg:text-[40px] lg:leading-[50px]">
                            Security And Safety Solutions
                        </h1>
                        <p className="font-proxima-nova-regular text-xl text-white capitalize">
                            We deliver advanced security and safety solutions that go beyond protection—offering peace of mind.
                        </p>
                    </div>

                    {/* Right Section - Feature Icons */}
                    <div className="mt-auto flex w-full flex-col items-end justify-end p-4">
                        <div className="flex flex-wrap justify-end gap-4 pr-8 pb-4">
                            {[
                                { img: 'access-control.png', label: 'Access Control System' },
                                { img: 'access-control.png', label: 'Time Attendance System' },
                                { img: 'fire-alarm.png', label: 'Fire Alarm' },
                                { img: 'instrution-alarm.png', label: 'Intrusion Alarm' },
                            ].map((item, index) => (
                                <Link
                                    key={index}
                                    href="#"
                                    className="flex h-28 w-28 flex-col items-center bg-teal-700/50 p-2 transition-transform duration-300 hover:scale-110"
                                >
                                    <img src={`/assets/images/${item.img}`} className="h-14 w-14 object-cover" alt={`${item.label} Icon`} />
                                    <p className="line-clamp-2 text-center text-sm text-white">{item.label}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Second content */}
            <div
                className="relative mx-auto flex aspect-[21/7] w-full flex-col"
                style={{
                    backgroundImage: "url('/assets/demo-images/Artboard3.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="grid h-full w-full grid-cols-2 gap-4">
                    {/* Left Section */}
                    <div className="flex flex-col p-4 text-start sm:p-8 md:p-12 md:text-left lg:grid-cols-2">
                        <h1 className="font-proxima-nova-bold text-2xl leading-[30px] text-white md:mb-4 md:text-3xl md:leading-[30px] lg:text-[40px] lg:leading-[50px]">
                            Smart Home And Office Solutions
                        </h1>
                        <p className="font-proxima-nova-regular text-xl text-white capitalize">
                            Our smart home and office solutions seamlessly integrate technology to create intelligent spaces that boost comfort,
                            security, and productivity with just a tap.
                        </p>
                    </div>

                    {/* Right Section - Feature Icons */}
                    <div className="flex flex-col items-end justify-end p-4">
                        <div className="grid grid-cols-2 gap-4 pr-8 pb-4 md:grid-cols-2">
                            {[
                                { img: 'smart-home.png', label: 'Smart Home Automation System' },
                                { img: 'solar.png', label: 'Smart Solar Energy System' },
                            ].map((item, index) => (
                                <Link
                                    key={index}
                                    href="#"
                                    className="flex h-32 w-32 flex-col items-center bg-teal-700/50 p-2 transition-transform duration-300 hover:scale-110"
                                >
                                    <img src={`/assets/images/${item.img}`} className="h-16 w-16 object-cover" alt={`${item.label} Icon`} />
                                    <p className="mt-2 line-clamp-2 text-center text-sm text-white">{item.label}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact */}
            <div
                className="relative mx-auto flex aspect-[21/5] w-full flex-col bg-[#008080]"
                // style={{
                //     backgroundImage: "url('/assets/demo-images/Artboard3.jpg')",
                //     backgroundSize: 'cover',
                //     backgroundPosition: 'center',
                // }}
            >
                <div className="grid h-full w-full grid-cols-2 items-center justify-end gap-4 p-4 text-end">
                    {/* Left Section */}
                    <div></div>
                    <div className="flex flex-col items-end pr-8 pb-4 md:text-left">
                        <h1 className="font-proxima-nova-bold max-w-[80%] text-end text-2xl leading-[30px] text-white md:mb-4 md:text-3xl md:leading-[30px] lg:text-[39px] lg:leading-[50px]">
                            Smarter solutions start here! Find out what Westec can do for you.
                        </h1>
                        <a
                            href="/contact"
                            className="font-proxima-nova-regular bg-white px-4 py-2 text-xl text-black capitalize transition duration-200 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)]"
                        >
                            Contact Us Now
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
