import { usePage } from '@inertiajs/react';

// components/Footer.js
export default function MyFooter() {
    const { application_info } = usePage().props;
    console.log(application_info);
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                    <div className="justify-self-center">
                        <div className="flex flex-col items-center justify-center">
                            <img width={65} height={65} src="/assets/nokor-tech/images/logo/logo.png" alt="" className="hover:cursor-pointer" />
                            <p className="text-2xl font-semibold">Nokor-Tech</p>
                        </div>
                    </div>
                    {/* Company Info */}
                    <div className="lg:justify-self-center">
                        <h2 className="mb-4 text-xl font-bold">Information</h2>
                        <ul className="flex flex-col gap-1 text-white">
                            <li className="flex">
                                <span>{application_info?.address}</span>
                            </li>
                            <li className="flex">
                                <span className="mr-2 font-semibold">Phone:</span>
                                <span>0937654323</span>
                            </li>
                            <li className="flex">
                                <span className="mr-2 font-semibold">Email:</span>
                                <span>bububobo@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:justify-self-center">
                        <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-200 hover:text-white">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-200 hover:text-white">
                                    Products
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-200 hover:text-white">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-200 hover:text-white">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div className="lg:justify-self-center">
                        <h3 className="mb-4 text-lg font-semibold">Features</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-200 hover:text-white">
                                    Product Support
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-200 hover:text-white">
                                    Fast Delivery
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-200 hover:text-white">
                                    Easy Returns
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white py-6 md:flex-row">
                    <p className="text-sm text-gray-200">
                        © 2025 <span className="font-bold">Nokor-Text</span>. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <img
                            width={32}
                            height={32}
                            src="/assets/nokor-tech/icons/links/facebook.png"
                            alt=""
                            className="transition-all duration-300 hover:scale-125 hover:cursor-pointer"
                        />
                        <img
                            width={32}
                            height={32}
                            src="/assets/nokor-tech/icons/links/messenger.png"
                            alt=""
                            className="transition-all duration-300 hover:scale-125 hover:cursor-pointer"
                        />
                        <img
                            width={32}
                            height={32}
                            src="/assets/nokor-tech/icons/links/telegram.png"
                            alt=""
                            className="transition-all duration-300 hover:scale-125 hover:cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}
