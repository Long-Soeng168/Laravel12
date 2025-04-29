const MyBoosters = () => {
    return (
        <>
            <div className="max-w-screen-[4000px] bg-white p-4 lg:p-16">
                <h1 className="mb-8 inline-block border-[#273892] text-2xl font-semibold text-[#273892]">Solution Boosters</h1>
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {section()}
                    {section()}
                    {section()}
                </div>
            </div>
        </>
    );

    function section() {
        return (
            <div className="w-full pt-0 lg:pt-0 p-2 lg:p-8 border-l-1 border-l-true-primary mb-8">
                <div className="flex flex-col gap-6">
                    {/* Section Header */}
                    <div>
                        <h2 className="font-proxima-nova-regular mb-6 inline bg-primary px-4 py-1 text-center text-lg text-white">
                            Pre-Installation
                        </h2>
                    </div>

                    {/* First Item */}
                    <div className="flex items-center gap-6">
                        <div className="aspect-square w-44">
                            <img src="assets/demo-images/photo1.png" className="h-full w-full object-contain" alt="Site Evaluation" />
                        </div>
                        <div className="text-start">
                            <h3 className="font-proxima-nova-bold text-sm text-[#333]">FREE Site Evaluation:</h3>
                            <p className="font-proxima-nova-regular text-[12px] text-[#555]">
                                Weeze’s engineers conduct on-site visits to evaluate the location, assess security or system requirements, and provide
                                accurate recommendations.
                            </p>
                        </div>
                    </div>
                    {/* Second Item */}
                    <div className="mt-6 flex items-center gap-6">
                        <div className="aspect-square w-44">
                            <img src="assets/demo-images/photo2.png" className="h-full w-full object-contain" alt="Customized Solutions" />
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
            </div>
        );
    }
};

export default MyBoosters;
