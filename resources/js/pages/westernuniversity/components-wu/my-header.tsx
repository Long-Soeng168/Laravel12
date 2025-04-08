import { AlignRight } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { MyNavbar } from './my-navbar';
import { MyNavbar } from './my-navbar';
import MyTopSection from './my-top-section';

const MyHeader = () => {
    return (
        <>
            <header className="sticky top-0 z-50 ">
                <div className="flex max-w-screen-2xl mx-auto items-center justify-between px-4 sm:px-10 md:px-20">
                    {/* Logo */}
            <MyTopSection/>
                <div className="flex max-w-screen-2xl mx-auto items-center justify-between px-4 sm:px-10 md:px-20">
                    {/* Logo
                    <a href="/" className="text-primary hover:text-secondary flex w-50 items-center">
                        <img src="assets/images/logo-wu.png" />
                    </a>
                    {/* Mobile Menu Button */}
                    {/* Mobile Menu Button
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

                    <div className='hidden xl:block'>
                    <MyNavbar/>
                    </div> */}


                    <div className='hidden xl:block bg-white'>
                    <MyNavbar/>
                    </div>
                </div>

                {/* Mobile Menu */}
            </header>
        </>
    );
};

export default MyHeader;
