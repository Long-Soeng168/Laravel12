const MyBoosters = () => {
    return (
        <>
            <div className="bg-white max-w-screen-[4000px] p-4 sm:p-8 md:p-12">
                <h1 className="mb-6 inline-block border-b-4 border-[#273892] text-2xl font-semibold text-[#273892]">Solution Boosters</h1>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                    <div className="flex">
                        <div className=" flex flex-col gap-6">
                            {/* Section Header */}
                            <div className="max-w-[50%]">
                                <h2 className="font-proxima-nova-regular mb-6 block bg-[#008080] px-4 py-2 text-center text-lg text-white">
                                    Pre-Installation
                                </h2>
                            </div>
                            {/* First Item */}
                            <div className="flex items-center gap-6">
                                <div className="aspect-square w-44">
                                    <img src="assets/demo-images/photo1.png" className="h-full w-full object-cover" alt="Site Evaluation" />
                                </div>
                                <div className="text-start">
                                    <h3 className="font-proxima-nova-bold text-sm text-[#333]">FREE Site Evaluation:</h3>
                                    <p className="font-proxima-nova-regular text-[12px] text-[#555]">
                                        Weeze’s engineers conduct on-site visits to evaluate the location, assess security or system requirements, and
                                        provide accurate recommendations.
                                    </p>
                                </div>
                            </div>
                            {/* Second Item */}
                            <div className="mt-6 flex items-center gap-6">
                                <div className="aspect-square w-44">
                                    <img src="assets/demo-images/photo2.png" className="h-full w-full object-cover" alt="Customized Solutions" />
                                </div>
                                <div className="text-start">
                                    <h3 className="font-proxima-nova-bold text-sm text-[#333]">FREE Customized Solutions & Quotation:</h3>
                                    <p className="font-proxima-nova-regular text-[12px] text-[#555]">
                                        After assessing the site, Weeze offers tailored design solutions with a detailed quotation, ensuring the best
                                        cost-effective options for the project.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Optional Divider */}
                        <div className="w-2 border-r border-[#008080] px-6" />
                    </div>
                    {/* Solution2 */}
                    <div className="flex">
                        <div className=" flex flex-col gap-6">
                            {/* Section Header */}
                            <div className="max-w-[50%]">
                                <h2 className="font-proxima-nova-regular mb-6 block bg-[#008080] px-4 py-2 text-center text-lg text-white">Installation</h2>
                            </div>
                            {/* First Item */}
                            <div className="flex items-center gap-6">
                                <div className="aspect-square w-44">
                                    <img src="assets/demo-images/photo6.png" className="h-full w-full object-cover" alt="Site Evaluation" />
                                </div>
                                <div className="text-start">
                                    <h3 className="font-proxima-nova-bold text-sm text-[#333]">System Installation:</h3>
                                    <p className="font-proxima-nova-regular text-[12px] text-[#555]">
                                        Weeze’s team of certified technicians ensures professional installation, meeting customer requirements.
                                    </p>
                                </div>
                            </div>
                            {/* Second Item */}
                            <div className=" flex items-center gap-6">
                                <div className="aspect-square w-44">
                                    <img src="assets/demo-images/photo5.png" className="h-full w-full object-cover" alt="Customized Solutions" />
                                </div>
                                <div className="text-start">
                                    <h3 className="font-proxima-nova-bold text-sm text-[#333]">FREE Technical Training:</h3>
                                    <p className="font-proxima-nova-regular text-[12px] text-[#555]">
                                        Training is provided for the client’s team on operating and maintaining the installed system effectively.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Optional Divider */}
                        <div className="w-2 border-r border-[#008080] px-6" />
                    </div>
                    {/*End Solution2 */}
                    {/* Solution3 */}
                    <div className="flex">
                        <div className=" flex flex-col gap-6">
                            {/* Section Header */}
                            <div className="max-w-[50%]">
                                <h2 className="font-proxima-nova-regular mb-6 block bg-[#008080] px-4 py-2 text-center text-lg text-white">Post-Installation</h2>
                            </div>
                            {/* First Item */}
                            <div className="flex items-center gap-6">
                                <div className="aspect-square w-44">
                                    <img src="assets/demo-images/photo4.png" className="h-full w-full object-cover" alt="Site Evaluation" />
                                </div>
                                <div className="text-start">
                                    <h3 className="font-proxima-nova-bold text-sm text-[#333]">Warranty & Maintenance:</h3>
                                    <p className="font-proxima-nova-regular text-[12px] text-[#555]">
                                    Westec offers warranties for their products and periodic maintenance to ensure that systems continue to function properly. Maintenance visits are scheduled regularly to prevent potential issues.
                                    </p>
                                </div>
                            </div>
                            {/* Second Item */}
                            <div className="mt-6 flex items-center gap-6">
                                <div className="aspect-square w-44">
                                    <img src="assets/demo-images/photo3.png" className="h-full w-full object-cover" alt="Customized Solutions" />
                                </div>
                                <div className="text-start">
                                    <h3 className="font-proxima-nova-bold text-sm text-[#333]">Replacement Services:</h3>
                                    <p className="font-proxima-nova-regular text-[12px] text-[#555]">
                                    In case of any malfunctions or damaged components, Westec offers system replacements covered under warranty, ensuring continuous and reliable performance.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Optional Divider */}
                        {/* <div className="w-2 border-r border-[#008080] p-6" /> */}
                    </div>
                    {/*End Solution3 */}
                </div>
            </div>
        </>
    );
};

export default MyBoosters;
