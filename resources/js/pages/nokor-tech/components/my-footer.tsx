
// components/Footer.js
export default function MyFooter() {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="justify-self-center">
                        <div className='flex flex-col justify-center items-center'>
                            <img
                                width={65}
                                height={65}
                                src="/assets/nokor-tech/images/logo/logo.png"
                                alt=""
                                className=" hover:cursor-pointer"
                            />
                            <p className='font-semibold text-2xl'>Nokor-Tech</p>
                        </div>
                    </div>
                    {/* Company Info */}
                    <div className="lg:justify-self-center">
                        <h2 className="text-xl font-bold mb-4">Information</h2>
                        <ul className=" flex flex-col gap-1 text-white">

                            <li className="flex">
                                <span>
                                    No. 123, Street 456, Sangkat Toul Tompoung, Khan Chamkarmon, Phnom Penh,
                                </span>
                            </li>
                            <li className="flex">
                                <span className="font-semibold mr-2">Phone:</span>
                                <span>0937654323</span>
                            </li>
                            <li className="flex">
                                <span className="font-semibold mr-2">Email:</span>
                                <span>bububobo@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:justify-self-center">
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-200 hover:text-white">Home</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-200 hover:text-white">Products</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-200 hover:text-white">About Us</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-200 hover:text-white">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div className="lg:justify-self-center">
                        <h3 className="text-lg font-semibold mb-4">Features</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-200 hover:text-white">Product Support</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-200 hover:text-white">Fast Delivery</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-200 hover:text-white">Easy Returns</a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Footer Bottom */}
                <div className="py-6 mt-8 gap-4 border-t border-white flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-200 text-sm">
                        © 2025 <span className="font-bold">Nokor-Text</span>. All rights reserved.
                    </p>
                    <div
                        className="flex gap-4"
                    >
                        <img
                            width={32}
                            height={32}
                            src="/assets/nokor-tech/icons/links/facebook.png"
                            alt=""
                            className=" hover:cursor-pointer hover:scale-125 transition-all duration-300"
                        />
                        <img
                            width={32}
                            height={32}
                            src="/assets/nokor-tech/icons/links/messenger.png"
                            alt=""
                            className=" hover:cursor-pointer hover:scale-125 transition-all duration-300"
                        />
                        <img
                            width={32}
                            height={32}
                            src="/assets/nokor-tech/icons/links/telegram.png"
                            alt=""
                            className=" hover:cursor-pointer hover:scale-125 transition-all duration-300"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}
