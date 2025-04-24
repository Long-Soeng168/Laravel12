import { AlignRight } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { MyNavbar } from './my-navbar';

const MyHeader = () => {
    return (
        <>
            <header className="sticky top-0 z-50 bg-white py-6 shadow-lg">
                <div className="flex max-w-2xl mx-auto items-center justify-between px-4 sm:px-8 md:px-12">
                    {/* Logo */}
                    <a href="/" className="text-primary hover:text-secondary flex w-50 items-center">
                        <img src="/assets/westec/images/logo.png" alt='' />
                    </a>

                    {/* Mobile Menu Button */}
                    <div className="xl:hidden">
                        <Sheet>
                            <SheetTrigger asChild className="ml-4 flex items-center xl:hidden">
                                <Button
                                    size="default"
                                    type="button"
                                    className="background inline-flex items-center justify-center rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-100 focus:outline-none focus:ring-inset"
                                    aria-expanded="false"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    <AlignRight stroke="white" className="h-6 w-7" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="bg-gradient">
                                <h1 className="mt-5 text-center text-xl text-white">Menu</h1>
                                <div className="flex flex-col space-y-8 p-2">
                                    <a href="/" className="offset-2 text-sm font-medium text-white underline underline-offset-4">
                                        Home
                                    </a>
                                    <a
                                        href="#"
                                        className="offset-2 text-sm font-medium text-white underline-offset-4 hover:border-blue-900 hover:underline"
                                    >
                                        About
                                    </a>
                                    <a
                                        href="#"
                                        className="offset-2 text-sm font-medium text-white underline-offset-4 hover:border-blue-900 hover:underline"
                                    >
                                        Services
                                    </a>
                                    <a
                                        href="/blog"
                                        className="offset-2 text-sm font-medium text-white underline-offset-4 hover:border-blue-900 hover:underline"
                                    >
                                        Blogs
                                    </a>
                                    <a
                                        href="/contact"
                                        className="offset-2 text-sm font-medium text-white underline-offset-4 hover:border-blue-900 hover:underline"
                                    >
                                        Contact
                                    </a>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                    {/* Desktop Navigation
                    <nav className="hidden xl:block ">
                        <ul className="flex space-x-4">
                            <li>
                                <div className="group relative">
                                    <button className="font-proxima-nova-regular flex items-center rounded-md px-3 py-2 text-sm text-color hover:bg-gray-100 duration-300 transition-all duration-300 transition-all">
                                    About Us
                                        <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </button>

                                    <div className="invisible absolute left-0 z-50 mt-2 w-50 -translate-x-1/4 transform rounded-lg border border-gray-200 bg-white p-6 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                        <div>
                                            <h3 className="mb-4 text-lg font-semibold text-gray-900 font-proxima-nova-regular">About Us</h3>
                                            <ul className="space-y-3 font-proxima-nova-regular">
                                                <li>
                                                    <a href="#" className="text-gray-700 hover:underline hover:text-indigo-800">
                                                    Security & Safety Solutions
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-700 hover:underline hover:text-indigo-800">
                                                    Mission & Vision
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-700 hover:underline hover:text-indigo-800">
                                                    Why Westec
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-700 hover:underline hover:text-indigo-800">
                                                    Sales advantages
                                                    </a>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="group relative">
                                    <button className="font-proxima-nova-regular flex items-center rounded-md px-3 py-2 text-sm text-color hover:bg-gray-100 duration-300 transition-all">
                                    Solutions
                                        <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </button>

                                    <div className="invisible absolute left-0 z-50 mt-2 w-50 -translate-x-1/4 transform rounded-lg border border-gray-200 bg-white p-6 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                        <div>
                                            <h3 className="mb-4 text-lg font-semibold text-gray-900 font-proxima-nova-regular">Solutions</h3>
                                            <ul className="space-y-3 font-proxima-nova-regular">
                                                <li>
                                                    <a href="#" className="text-gray-700 hover:underline hover:text-indigo-800">
                                                    Security & Safety Solutions
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-700 hover:underline hover:text-indigo-800">
                                                    Smart Home & Office Solutions
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-700 hover:underline hover:text-indigo-800">
                                                    Commercial & Residential Equipments
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-700 hover:underline hover:text-indigo-800">
                                                    IT Solutions
                                                    </a>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="group relative">
                                    <button className="font-proxima-nova-regular flex items-center rounded-md px-3 py-2 text-sm text-color hover:bg-gray-100 duration-300 transition-all">
                                    Case Studies
                                        <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </button>

                                    <div className="invisible absolute left-0 z-50 mt-2 w-50 -translate-x-1/4 transform rounded-lg border border-gray-200 bg-white p-6 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                        <div>
                                            <h3 className="mb-4 text-lg font-semibold text-gray-900 font-proxima-nova-regular">Case Studies</h3>
                                            <ul className="space-y-3 font-proxima-nova-regular">
                                                <li>
                                                    <a href="#" className="text-gray-700 hover:underline hover:text-indigo-800">
                                                    Banking
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-700 hover:underline hover:text-indigo-800">
                                                    Embassy
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-700 hover:underline hover:text-indigo-800">
                                                    Microfinance
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-700 hover:underline hover:text-indigo-800">
                                                    Manufacturing
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-700 hover:underline hover:text-indigo-800">
                                                    Construction
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-700 hover:underline hover:text-indigo-800">
                                                    Entertainment
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="group relative">
                                    <button className="font-proxima-nova-regular flex items-center rounded-md px-3 py-2 text-sm text-color hover:bg-gray-100 duration-300 transition-all">
                                    Partners
                                        <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </button>

                                    <div className="invisible absolute left-0 z-50 mt-2 w-50 -translate-x-1/4 transform rounded-lg border border-gray-200 bg-white p-6 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                        <div>
                                            <h3 className="mb-4 text-lg font-semibold text-gray-900 font-proxima-nova-regular">Software</h3>
                                            <ul className="space-y-3 font-proxima-nova-regular">
                                                <li>
                                                    <a href="#" className="text-gray-700 hover:underline hover:text-indigo-800">
                                                        Web Development
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-700 hover:underline hover:text-indigo-800">
                                                        Mobile Apps
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-700 hover:underline hover:text-indigo-800">
                                                        Desktop Software
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-700 hover:underline hover:text-indigo-800">
                                                        Enterprise Solutions
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-700 hover:underline hover:text-indigo-800">
                                                        API Services
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="group relative">
                                    <button className="font-proxima-nova-regular flex items-center rounded-md px-3 py-2 text-sm text-color hover:bg-gray-100 duration-300 transition-all">
                                    Careers



                                        <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </button>

                                    <div className="invisible absolute left-0 z-50 mt-2 w-50 -translate-x-1/4 transform rounded-lg border border-gray-200 bg-white p-6 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                        <div>
                                            <h3 className="mb-4 text-lg font-semibold text-gray-900 font-proxima-nova-regular">Software</h3>
                                            <ul className="space-y-3 font-proxima-nova-regular">
                                                <li>
                                                    <a href="#" className="text-gray-700 hover:underline hover:text-indigo-800">
                                                        Web Development
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-700 hover:underline hover:text-indigo-800">
                                                        Mobile Apps
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-700 hover:underline hover:text-indigo-800">
                                                        Desktop Software
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-700 hover:underline hover:text-indigo-800">
                                                        Enterprise Solutions
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-700 hover:underline hover:text-indigo-800">
                                                        API Services
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="group relative">
                                    <button className="font-proxima-nova-regular flex items-center rounded-md px-3 py-2 text-sm text-color hover:bg-gray-100 duration-300 transition-all">
                                    News
                                        <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </button>

                                    <div className="invisible absolute left-0 z-50 mt-2 w-50 -translate-x-1/4 transform rounded-lg border border-gray-200 bg-white p-6 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                        <div>
                                            <h3 className="mb-4 text-lg font-semibold text-gray-900 font-proxima-nova-regular">News
                                            </h3>
                                            <ul className="space-y-3 font-proxima-nova-regular">
                                                <li>
                                                    <a href="#" className="text-gray-700 hover:underline hover:text-indigo-800">
                                                        Web Development
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-700 hover:underline hover:text-indigo-800">
                                                        Mobile Apps
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-700 hover:underline hover:text-indigo-800">
                                                        Desktop Software
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-700 hover:underline hover:text-indigo-800">
                                                        Enterprise Solutions
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-700 hover:underline hover:text-indigo-800">
                                                        API Services
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="group relative">
                                    <button className="font-proxima-nova-regular flex items-center rounded-md px-3 py-2 text-sm text-color hover:bg-gray-100 duration-300 transition-all">
                                    Contact Us
                                        <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </button>

                                    <div className="invisible absolute left-0 z-50 mt-2 w-50 -translate-x-1/4 transform rounded-lg border border-gray-200 bg-white p-6 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                        <div>
                                            <h3 className="mb-4 text-lg font-semibold text-gray-900 font-proxima-nova-regular">Contact Us
                                            </h3>
                                            <ul className="space-y-3 font-proxima-nova-regular">
                                                <li>
                                                    <a href="#" className="text-gray-700 hover:underline hover:text-indigo-800">
                                                        Web Development
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-700 hover:underline hover:text-indigo-800">
                                                        Mobile Apps
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-700 hover:underline hover:text-indigo-800">
                                                        Desktop Software
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-700 hover:underline hover:text-indigo-800">
                                                        Enterprise Solutions
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-700 hover:underline hover:text-indigo-800">
                                                        API Services
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav> */}
                    <div className='hidden xl:block'>
                    <MyNavbar/>

                    </div>
                </div>

                {/* Mobile Menu */}
            </header>
        </>
    );
};

export default MyHeader;
