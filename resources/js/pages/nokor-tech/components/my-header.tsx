import {
    Menu,
    Search,
    ShoppingCart,
    User2Icon,
} from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MyCategoriesNav } from "./my-categories-nav";
import { Link } from "@inertiajs/react";

const MyHeader = () => {
    return (
        <>
            <nav className="bg-primary text-white px-4">
                <div className="text-sm flex flex-wrap justify-between items-center max-w-screen-xl mx-auto  text-gray-300">
                    <Link href='/' className="flex gap-2 items-center">
                        <img
                            width={65}
                            height={65}
                            src="/assets/nokor-tech/images/logo/logo.png"
                            alt=""
                            className=" hover:cursor-pointer"
                        />
                    </Link>
                    <div className=" lg:flex items-center gap-2">
                        <div className="border hidden sm:block rounded-full px-4 py-1">
                            Mon-Thu:{" "}
                            <span className="font-semibold text-white hover:cursor-pointer">
                                9:00-5:30 PM
                            </span>
                        </div>
                        <span className="hidden lg:block">
                            1234 Street Adress City Address, 1234
                            <span className="font-semibold text-white pl-2 underline hover:cursor-pointer">
                                <Link href="/contact-us">Contact Us</Link>
                            </span>
                        </span>
                    </div>
                    <div className="flex gap-4 font-semibold text-white items-center">
                        <p>Call Us : 012 34 56 78</p>
                        <div
                            className="flex gap-2"
                        >
                            <img
                                width={32}
                                height={32}
                                src="/assets/nokor-tech/icons/links/facebook.png"
                                alt=""
                                className=" hover:cursor-pointer"
                            />
                            <img
                                width={32}
                                height={32}
                                src="/assets/nokor-tech/icons/links/messenger.png"
                                alt=""
                                className=" hover:cursor-pointer"
                            />
                            <img
                                width={32}
                                height={32}
                                src="/assets/nokor-tech/icons/links/telegram.png"
                                alt=""
                                className=" hover:cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </nav>
            <div >
                <header>
                    <div className="flex py-2 lg:py-4 px-4 md:px-2 lg:px-0 max-w-screen-xl items-center justify-between mx-auto">
                        <div className="flex items-center">
                            <Sheet>
                                <div className="flex items-center gap-2">
                                    <SheetTrigger>
                                        <Menu className="size-8 text-primary lg:hidden" />
                                    </SheetTrigger>
                                    {/* <Link href="/">
                                        <img
                                            width={65}
                                            height={65}
                                            src="/assets/nokor-tech/images/logo/logo.png"
                                            alt=""
                                            className="cursor-pointer -translate-y-1"
                                        />
                                    </Link> */}
                                </div>
                                <SheetContent
                                    side="left"
                                    className="bg-gray-100 p-6 shadow-md w-64"
                                >
                                    <SheetHeader className=" pb-4 mb-4">
                                        <SheetTitle className="text-2xl font-bold text-gray-700">
                                            Menu
                                        </SheetTitle>
                                    </SheetHeader>
                                    <ul className="flex flex-col gap-6 font-semibold text-gray-600">
                                        <li className="hover:cursor-pointer hover:text-primary transition-colors duration-200">
                                            Categories
                                        </li>
                                        <li className="hover:cursor-pointer hover:text-primary transition-colors duration-200">
                                            Desktops
                                        </li>
                                        <li className="hover:cursor-pointer hover:text-primary transition-colors duration-200">
                                            Laptops
                                        </li>
                                        <li className="hover:cursor-pointer hover:text-primary transition-colors duration-200">
                                            Networking Devices
                                        </li>
                                        <hr />
                                        <li className="hover:cursor-pointer hover:text-primary transition-colors duration-200">
                                            Blogs
                                        </li>
                                        <li className="hover:cursor-pointer hover:text-primary transition-colors duration-200">
                                            <Link href='/contact-us'>Contact</Link>
                                        </li>
                                        <li className="hover:cursor-pointer hover:text-primary transition-colors duration-200">
                                            About
                                        </li>
                                    </ul>
                                </SheetContent>
                            </Sheet>
                        </div>
                        <div className="hidden lg:flex flex-1">
                            <ul className="flex gap-2 font-semibold items-center">
                                <li>
                                    <MyCategoriesNav />
                                </li>
                                <li>
                                    <Link href='/products' className="relative mx-2 group hover:text-primary cursor-pointer">
                                        Laptops
                                        <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-primary group-hover:w-full"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/products' className="relative mx-2 group hover:text-primary cursor-pointer">
                                        Desktop
                                        <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-primary group-hover:w-full"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/products' className="relative mx-2 group hover:text-primary cursor-pointer">
                                        Networking Device
                                        <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-primary group-hover:w-full"></span>
                                    </Link>
                                </li>
                                <li className="border border-primary/5 h-6 bg-primary/50"></li>
                                <li>
                                    <Link href='/products' className="relative mx-2 group hover:text-primary cursor-pointer">
                                        Products
                                        <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-primary group-hover:w-full"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/blogs' className="relative mx-2 group hover:text-primary cursor-pointer">
                                        Blogs
                                        <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-primary group-hover:w-full"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='contact-us' className="relative mx-2 group hover:text-primary cursor-pointer">
                                        Contact
                                        <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-primary group-hover:w-full"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='about-us' className="relative mx-2 group hover:text-primary cursor-pointer">
                                        About
                                        <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-primary group-hover:w-full"></span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex gap-4 shrink-0">
                            <Link href="#">
                                <Button size="icon" variant="ghost" className="hover:bg-primary hover:text-foreground text-primary hover:text-white">
                                    <Search />
                                </Button>
                            </Link>
                            <Link href="/shopping-card">
                                <Button size="icon" variant="ghost" className="hover:bg-primary hover:text-foreground text-primary hover:text-white">
                                    <ShoppingCart />
                                </Button>
                            </Link>
                            <Button size="icon" variant="ghost" className="hover:bg-primary hover:text-foreground text-primary hover:text-white">
                                <User2Icon />
                            </Button>
                        </div>
                    </div>
                    <div className="md:hidden mx-4 mb-3">
                        <div className="relative flex items-center">
                            <span className="absolute left-3 text-gray-400">
                                <img src="/assets/nokor-tech/icons/search.png" alt="" />
                            </span>
                            <input
                                type="text"
                                placeholder="Search"
                                className="pl-10 border border-primary rounded-full px-4 w-full py-2 text-gray-800 placeholder-gray-400"
                            />
                        </div>
                    </div>
                </header>
                {/* <hr /> */}
            </div>
        </>
    );
};

export default MyHeader;
