import ToggleModeSwitch from '@/components/toggle-mode-switch';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Link, usePage } from '@inertiajs/react';
import { Menu, Search, ShoppingCart, User2Icon } from 'lucide-react';
import { MyCategoriesNav } from './my-categories-nav';

const MyHeader = () => {
    const { application_info, links } = usePage().props;
    return (
        <>
            <nav className="bg-true-primary px-4 text-white">
                <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between text-sm text-gray-300">
                    <Link prefetch href="/" className="flex items-center gap-2">
                        <img
                            width={65}
                            height={65}
                            src={`/assets/images/application_info/thumb/${application_info?.image}`}
                            alt={`${application_info?.name}'s logo`}
                            className="hover:cursor-pointer"
                        />
                        <span className="text-lg font-semibold text-white">{application_info?.name}</span>
                    </Link>
                    <div className="items-center gap-2 lg:flex">
                        <div className="hidden items-center lg:flex">
                            <div className="max-w-xs font-semibold whitespace-pre-wrap text-white/70">{application_info?.address}</div>
                            <span className="pl-2 font-semibold text-white underline hover:cursor-pointer">
                                <Link href="/contact-us" prefetch>
                                    <button className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-white">
                                        Contact me
                                    </button>
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 font-semibold text-white">
                        <p className="hidden sm:block">
                            Call Us :{' '}
                            <a className="hover:underline" href={`tel:${application_info?.phone}`}>
                                {application_info?.phone}
                            </a>
                        </p>
                        <div className="flex gap-2">
                            {links?.map((item) => (
                                <a href={item?.link ? item?.link : '#'}>
                                    <img
                                        width={32}
                                        height={32}
                                        src={`/assets/images/links/thumb/${item?.image}`}
                                        alt=""
                                        className="transition-all duration-300 hover:scale-125 hover:cursor-pointer"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
            <div className="bg-background sticky top-0 z-50">
                <header>
                    <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-2 md:px-2 lg:px-0 lg:py-4">
                        <div className="flex items-center">
                            <Sheet>
                                <div className="flex items-center gap-2">
                                    <SheetTrigger>
                                        <Menu className="text-primary size-8 lg:hidden" />
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
                                <SheetContent side="left" className="w-64 bg-gray-100 p-6 shadow-md">
                                    <SheetHeader className="mb-4 hidden pb-4">
                                        <SheetTitle className="text-2xl font-bold text-gray-700">Menu</SheetTitle>
                                    </SheetHeader>
                                    <ul className="flex flex-col gap-6 font-semibold text-gray-600">
                                        <hr className='mr-6' />
                                        <li className="hover:text-primary transition-colors duration-200 hover:cursor-pointer">
                                            <Link href="/products">Products</Link>
                                        </li>
                                        <li className="hover:text-primary transition-colors duration-200 hover:cursor-pointer">
                                            <Link href="/blogs">Blogs</Link>
                                        </li>
                                        <li className="hover:text-primary transition-colors duration-200 hover:cursor-pointer">
                                            <Link href="/contact-us">Contact</Link>
                                        </li>
                                        <li className="hover:text-primary transition-colors duration-200 hover:cursor-pointer">
                                            <Link href="/about-us">About</Link>
                                        </li>
                                    </ul>
                                </SheetContent>
                            </Sheet>
                        </div>
                        <div className="hidden flex-1 lg:flex">
                            <ul className="flex items-center gap-2 font-semibold">
                                <li>
                                    <MyCategoriesNav />
                                </li>
                                <li>
                                    <Link href="/products" className="group hover:text-primary relative mx-2 cursor-pointer">
                                        Laptops
                                        <span className="bg-primary absolute -bottom-1 left-0 h-0.5 w-0 transition-all group-hover:w-full"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/products" className="group hover:text-primary relative mx-2 cursor-pointer">
                                        Desktop
                                        <span className="bg-primary absolute -bottom-1 left-0 h-0.5 w-0 transition-all group-hover:w-full"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/products" className="group hover:text-primary relative mx-2 cursor-pointer">
                                        Networking Device
                                        <span className="bg-primary absolute -bottom-1 left-0 h-0.5 w-0 transition-all group-hover:w-full"></span>
                                    </Link>
                                </li>
                                <li className="border-primary/5 bg-primary/50 h-6 border"></li>
                                <li>
                                    <Link href="/products" className="group hover:text-primary relative mx-2 cursor-pointer">
                                        Products
                                        <span className="bg-primary absolute -bottom-1 left-0 h-0.5 w-0 transition-all group-hover:w-full"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blogs" className="group hover:text-primary relative mx-2 cursor-pointer">
                                        Blogs
                                        <span className="bg-primary absolute -bottom-1 left-0 h-0.5 w-0 transition-all group-hover:w-full"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="contact-us" className="group hover:text-primary relative mx-2 cursor-pointer">
                                        Contact
                                        <span className="bg-primary absolute -bottom-1 left-0 h-0.5 w-0 transition-all group-hover:w-full"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="about-us" className="group hover:text-primary relative mx-2 cursor-pointer">
                                        About
                                        <span className="bg-primary absolute -bottom-1 left-0 h-0.5 w-0 transition-all group-hover:w-full"></span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex shrink-0 gap-4">
                            <Link href="#">
                                <Button size="icon" variant="ghost" className="text-primary">
                                    <Search />
                                </Button>
                            </Link>
                            <Link href="/shopping-cart">
                                <Button size="icon" variant="ghost" className="text-primary">
                                    <ShoppingCart />
                                </Button>
                            </Link>
                            <Button size="icon" variant="ghost" className="text-primary">
                                <User2Icon />
                            </Button>
                            <ToggleModeSwitch />
                        </div>
                    </div>
                    {/* <div className="md:hidden mx-4 mb-3">
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
                    </div> */}
                </header>
                {/* <hr /> */}
            </div>
        </>
    );
};

export default MyHeader;
