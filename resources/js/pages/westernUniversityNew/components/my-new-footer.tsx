import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Link } from '@inertiajs/react';
import { DribbbleIcon, GithubIcon, Mail, MapPin, Phone, TwitchIcon, TwitterIcon } from 'lucide-react';

const Footer03Page = () => {
    return (
        <div className="flex flex-col">
            <div className="bg-muted grow" />
            <footer>
                <div className="mx-auto max-w-screen-xl">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 px-6 py-12 xl:grid-cols-3 xl:px-0">
                        <div className="col-span-full w-32 text-center xl:col-span-1">
                            {/* Logo */}
                            <img src="/assets/demo-images/Homepage/01_Logo_WIS.png" />
                        </div>

                        <div>
                            <h6 className="font-noto-san-extra-light text-xl font-semibold">Contact</h6>
                            <ul className="mt-4 space-y-4">
                                <li className="flex items-center gap-2">
                                    <Phone className="mr-2 inline-block h-5 w-5 text-blue-900" fill="#1c398e" />
                                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                                        016 699 192
                                    </Link>
                                </li>
                                <li className="flex items-center gap-2">
                                    <MapPin className="mr-2 inline-block h-5 w-5 text-blue-900" />
                                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                                        #20, St. 598C,Phnom Penh Thmey,Sen Sok, Cambodia
                                    </Link>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Mail className="mr-2 inline-block h-5 w-5 text-blue-900" />
                                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                                        info@western.edu.kh
                                    </Link>
                                </li>
                            </ul>
                            <div className="text-muted-foreground mt-4 flex items-center gap-5">
                                <Link href="#" target="_blank" className="rounded-full bg-gray-200 p-4">
                                    <TwitterIcon className="h-5 w-5" />
                                </Link>
                                <Link href="#" target="_blank" className="rounded-full bg-gray-200 p-4">
                                    <DribbbleIcon className="h-5 w-5" />
                                </Link>
                                <Link href="#" target="_blank" className="rounded-full bg-gray-200 p-4">
                                    <TwitchIcon className="h-5 w-5" />
                                </Link>
                                <Link href="#" target="_blank" className="rounded-full bg-gray-200 p-4">
                                    <GithubIcon className="h-5 w-5" />
                                </Link>
                            </div>
                        </div>

                        {/* Subscribe Newsletter */}
                        <div>
                            <h6 className="font-noto-san-extra-light text-xl font-semibold">Stay up to date</h6>
                            <p className="text-muted-foreground hover:text-foreground mt-4">
                                Enter your email address to get the latest University news, special events and student activities delivered right to
                                your inbox.
                            </p>
                            <form className="mt-4 flex max-w-3xl items-center">
                                <Input type="email" placeholder="Enter your email" className="max-w-full grow rounded-none rounded-l-md py-6" />
                                <Button
                                    type="submit"
                                    className="rounded-none border border-red-600 bg-red-600 px-5 py-6 transition-all duration-500 hover:border-blue-950 hover:bg-blue-950"
                                >
                                    Subscribe
                                </Button>
                            </form>
                        </div>
                    </div>
                    <Separator />
                </div>
            </footer>
            <div className="mx-auto max-w-screen-2xl"></div>
            <div className="flex flex-col-reverse items-center justify-between bg-blue-950 px-6 py-2 sm:flex-row lg:px-16">
                {/* Copyright */}
                <span className="text-white">
                    &copy; {new Date().getFullYear()}{' '}
                    <Link href="/" target="_blank">
                        Shadcn UI Blocks
                    </Link>
                    . All rights reserved.
                </span>
            </div>
        </div>
    );
};

export default Footer03Page;
