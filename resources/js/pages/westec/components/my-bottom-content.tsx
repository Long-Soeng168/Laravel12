import { Link } from '@inertiajs/react';

export function MyBottomContent() {
    return (
        <>
            {/* First Hero Section */}
            <div
                className="relative mx-auto flex aspect-[21/7] w-full flex-col"
                style={{
                    backgroundImage: "url('/assets/demo-images/Artboard1.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="flex flex-col h-full w-full gap-4">
                    {/* Left Section */}
                    <div className="flex flex-col max-w-2xl text-start md:text-left pl-4 pt-4 sm:pl-8 sm:pt-8 md:pl-12 md:pt-12">
                        <h1 className="font-proxima-nova-bold text-2xl leading-[30px] text-white md:mb-4 md:text-3xl md:leading-[30px] lg:text-[40px] lg:leading-[50px]">
                            Commercial & Residential Equipments
                        </h1>
                        <p className="font-proxima-nova-regular text-xl text-white ">
                            We provide high-quality, innovative equipment for homes and businesses— enhancing functionality, efficiency, and comfort.
                        </p>
                    </div>

                    {/* Right Section - Feature Icons */}
                    <div className="flex flex-col w-full items-end justify-end mt-auto">
    <div className="flex flex-wrap justify-end gap-4 pb-4 pr-4">
        {[
            { img: 'access-control.png', label: 'Commercial /Home Cinema' },
            { img: 'access-control.png', label: 'Conferencing System' },
            { img: 'fire-alarm.png', label: 'Audio System' },
            { img: 'access-control.png', label: 'LED Displays' },
            { img: 'access-control.png', label: 'PA System' },
            { img: 'access-control.png', label: 'Information Display System' },
            { img: 'access-control.png', label: 'POS & Kiosks' },
            { img: 'access-control.png', label: 'Vending Machine' },
        ].map((item, index) => (
            <Link
                key={index}
                href="#"
                className="flex flex-col items-center w-28 h-28 p-2 bg-teal-700/50 transition-transform duration-300 hover:scale-110"
            >
                <img
                    src={`/assets/images/${item.img}`}
                    className="h-16 w-16 object-cover"
                    alt={`${item.label} Icon`}
                />
                <p className="text-center text-sm  text-white line-clamp-2">
                    {item.label}
                </p>
            </Link>
        ))}
    </div>
</div>

                </div>
            </div>

            {/* Second Hero Section */}
            <div
                className="relative mx-auto flex aspect-[21/7] w-full flex-col"
                style={{
                    backgroundImage: "url('/assets/demo-images/Artboard4.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="flex flex-col h-full w-full gap-4">
                    {/* Left Section */}
                    <div className="flex flex-col max-w-2xl text-start md:text-left pl-4 pt-4 sm:pl-8 sm:pt-8 md:pl-12 md:pt-12">
                        <h1 className="font-proxima-nova-bold text-2xl leading-[30px] text-white md:mb-4 md:text-3xl md:leading-[30px] lg:text-[40px] lg:leading-[50px]">
                            IT Solutions
                        </h1>
                        <p className="font-proxima-nova-regular text-xl text-white ">
                           Our IT solutions are designed to streamline operations, safeguard your systems, and support your business growth.
                        </p>
                    </div>

                    {/* Right Section - Feature Icons */}
                    <div className="flex flex-col w-full items-end justify-end mt-auto">
    <div className="flex flex-wrap justify-end gap-4 pb-4 pr-8">
        {[
            { img: 'support-maintenance.png', label: 'Support & Maintenance ICT' },
            { img: 'network.png', label: 'Internet Support' },
            { img: 'web-design.png', label: 'Website Design' },
            { img: 'network.png', label: 'Network Monitoring' },
            { img: 'monitoring1.png', label: 'Network Installation' },
            { img: 'sytem-install.png', label: 'Server Installation' },
            { img: 'stock.png', label: 'Stock Inventory & HelpDesk Software' },
            { img: 'pickup.png', label: 'Pickup & Drop-off Logistics Platform' },
            { img: 'sams.png', label: 'School Management and Application System (SAMS)' },
            { img: 'support-system.png', label: 'Support Systems' },
        ].map((item, index) => (
            <Link
                key={index}
                href="#"
                className="flex flex-col items-center w-32 h-32 p-2 bg-teal-700/50 transition-transform duration-300 hover:scale-110"
            >
                <img
                    src={`/assets/demo-images/${item.img}`}
                    className="h-16 w-16 object-cover"
                    alt={`${item.label} Icon`}
                />
                <p className="mt-2 text-center text-sm  text-white line-clamp-2">
                    {item.label}
                </p>
            </Link>
        ))}
    </div>
</div>

                </div>
            </div>

             {/* Contact */}
             <div
                className="relative bg-[#008080] mx-auto flex aspect-[21/5] w-full flex-col"
                // style={{
                //     backgroundImage: "url('/assets/demo-images/Artboard3.jpg')",
                //     backgroundSize: 'cover',
                //     backgroundPosition: 'center',
                // }}
            >
                <div className="grid h-full w-full grid-cols-2 text-end items-center justify-end gap-4 p-4 ">
                    {/* Left Section */}
                    <div></div>
                    <div className="flex flex-col items-end md:text-left  pb-4 pr-8">
                        <h1 className="font-proxima-nova-bold text-end text-2xl leading-[30px] text-white md:mb-4 md:text-3xl md:leading-[30px] lg:text-[35px] lg:leading-[50px]">
                            Do you want a future-ready technology solutions that move your business forward?
                        </h1>
                        <a href='/contact' className=" font-proxima-nova-regular text-xl text-black  px-4 capitalize py-2  bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
                            Contact Us Now
                        </a>

                    </div>
                </div>
            </div>

        </>
    );
}
