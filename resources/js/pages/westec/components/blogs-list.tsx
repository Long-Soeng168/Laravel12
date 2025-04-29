const BlogsList = () => {
    return (
        <div className="mx-auto max-w-[4000px] bg-white">
            <h1 className="text-color px-4 py-4 text-2xl font-semibold sm:px-8 lg:px-16 lg:py-8">News & Updates</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                {BlogCard()}
                {BlogCard()}
                {BlogCard()}
                {BlogCard()}
            </div>
        </div>
    );

    function BlogCard() {
        return (
            <div className="flex flex-col overflow-hidden border-[0.5px] bg-[#36454f] hover:shadow-lg">
                <a href="#">
                    <img className="aspect-[1/1] w-full object-cover" src="/assets/demo-images/NEWS.jpg" alt="Sunset in the mountains" />
                </a>

                <div className="p-4">
                    <div className="mb-8">
                        <a href="#" className="mb-2 inline-block text-lg font-bold text-white transition duration-500 ease-in-out">
                            Women Entering Cybersecurity Through Non-Traditional Paths
                        </a>
                        <p className="text-sm text-gray-300">By John P. Mello Jr.</p>
                        <p className="text-sm text-gray-300">March 25, 2025</p>
                    </div>
                    <div>
                        <a
                            href="#"
                            className="font-proxima-nova-regular bg-primary px-4 py-1 text-base text-white capitalize transition duration-200 hover:underline"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        );
    }
};

export default BlogsList;
