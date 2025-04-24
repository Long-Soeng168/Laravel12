export function ContactSection() {
    return (
        <>
            {/* Contact */}
            <div className="relative mx-auto flex w-full flex-col bg-[#008080] px-16 py-20">
                <div className="grid h-full w-full grid-cols-2 items-center justify-end gap-4 text-end">
                    {/* Left Section */}
                    <div></div>
                    <div className="flex flex-col items-end text-left">
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
