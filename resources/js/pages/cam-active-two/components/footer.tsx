import { Separator } from '@/components/ui/separator';
import { Link } from '@inertiajs/react';
import { DribbbleIcon, GithubIcon, TwitchIcon, TwitterIcon } from 'lucide-react';

const Footer = () => {
    return (
        <footer>
            <div className="mx-auto max-w-screen-xl">
                <Separator />
                <div className="grid grid-cols-2 gap-x-8 gap-y-10 px-8 py-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:px-6">
                    {/* Logo & Tagline */}
                    <div className="col-span-full lg:col-span-2">
                        <div className="flex items-center gap-2">
                            <img src="/assets/cam-active/logo.png" className="h-16" alt="Cam-Active Logo" />
                            <p className="text-xl font-bold">Cam Active</p>
                        </div>
                        <p className="text-muted-foreground mt-4">A Strategic Partner for Education & Impact.</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h6 className="font-semibold">Quick Links</h6>
                        <ul className="mt-6 space-y-4">
                            {[
                                { title: 'Solutions', link: '/solutions' },
                                { title: 'Impact', link: '/impact' },
                                { title: 'Insights', link: '/insights' },
                                { title: 'About Us', link: '/about' },
                                { title: 'Contact', link: '/contact' },
                            ].map((item, index) => (
                                <li key={index}>
                                    <Link href={typeof item === 'object' ? item.link : '#'} className="text-muted-foreground hover:text-foreground">
                                        {typeof item === 'object' ? item.title : item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="lg:col-span-2">
                        <h6 className="font-semibold">Contact</h6>
                        <ul className="text-muted-foreground mt-6 space-y-3 text-sm">
                            <li>📍 19Eo, Street 118, Tuol Kork, Phnom Penh</li>
                            <li>📞 +855 23 882 405</li>
                            <li>
                                ✉️{' '}
                                <a href="mailto:info@camactive.net" className="hover:underline">
                                    info@camactive.net
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Signup */}
                    <div className="col-span-full lg:col-span-1">
                        {/* <h6 className="font-semibold">Newsletter</h6> */}
                        {/* <form className="mt-6 flex flex-col gap-3">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="focus:ring-primary w-full rounded border border-gray-300 p-2 text-sm focus:ring-2 focus:outline-none"
                                />
                                <button type="submit" className="bg-primary hover:bg-primary/90 rounded px-4 py-2 text-sm font-medium text-white">
                                    Subscribe
                                </button>
                            </form> */}
                        {/* Social Icons */}
                        <h6 className="font-semibold">Social Media</h6>
                        <div className="text-muted-foreground mt-6 flex space-x-3 text-sm">
                            <Link href="#" target="_blank">
                                <TwitterIcon className="size-8" />
                            </Link>
                            <Link href="#" target="_blank">
                                <DribbbleIcon className="size-8" />
                            </Link>
                            <Link href="#" target="_blank">
                                <TwitchIcon className="size-8" />
                            </Link>
                            <Link href="#" target="_blank">
                                <GithubIcon className="size-8" />
                            </Link>
                        </div>
                    </div>
                </div>

                <Separator />

                {/* Bottom bar */}
                <div className="flex flex-col-reverse items-center justify-between gap-x-2 gap-y-5 px-6 py-8 sm:flex-row xl:px-6">
                    <span className="text-muted-foreground text-sm">©2025 Cam-Active Co., Ltd. All rights reserved.</span>

                    <div className="text-muted-foreground flex justify-center space-x-6 text-sm">
                        <Link href="#" className="hover:text-foreground">
                            Privacy Policy
                        </Link>
                        <span>|</span>
                        <Link href="#" className="hover:text-foreground">
                            Terms of Use
                        </Link>
                    </div>
                </div>

                {/* Privacy & Terms */}
            </div>
        </footer>
    );
};

export default Footer;
