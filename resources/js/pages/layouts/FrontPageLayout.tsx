import ScrollToTopButton2 from '@/components/Button/ScrollToTopButton2';
import SwitchDarkMode3D from '@/components/Switch/SwitchDarkMode3D';
import SwitchDarkModeSingle from '@/components/Switch/SwitchDarkModeSingle';
import { Link, usePage } from '@inertiajs/react';
import { ChevronRight, Gift, Menu as MenuIcon } from 'lucide-react';
import React, { useEffect, useMemo, useState } from 'react';
import MobileMenu from './MobileMenu';

const ASSET_URL = 'https://news-app.redcross.org.kh/assets/images';

export default function FrontPageLayout({ children }: { children: React.ReactNode }) {
    const { endless_text_motion, page_links, links = [], post_categories = [], application_info }: any = usePage().props;
    const { url } = usePage();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 30);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const { footerLinks, menuLinks } = useMemo(
        () => ({
            footerLinks: links.filter((l: any) => l.type === 'footer'),
            menuLinks: links.filter((l: any) => l.type === 'menu'),
        }),
        [links],
    );

    const logoUrl = application_info?.image
        ? `${ASSET_URL}/application_info/thumb/${application_info.image}`
        : 'https://news-app.redcross.org.kh/assets/images/application_info/thumb/1744881082_logo.png';

    const marqueeText = endless_text_motion?.title || 'Welcome to CRC News Portal • Cambodia Red Cross News • ';

    return (
        <div className="bg-background flex min-h-screen flex-col selection:bg-red-100 selection:text-red-600">
            {/* 1. TOP TICKER */}
            <div className="hidden overflow-hidden border-b border-white/10 bg-[#e62129] py-2 text-white md:block">
                <div className="section-container mx-auto px-4">
                    <div className="relative flex w-full overflow-hidden whitespace-nowrap">
                        <div className="animate-marquee inline-block text-base font-medium">
                            <span className="mx-4">{marqueeText}</span>
                            <span className="mx-4">{marqueeText}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. MAIN NAVIGATION */}
            <nav
                className={`sticky top-0 z-50 transition-all duration-300 ${
                    isScrolled ? 'bg-white/95 py-2 shadow-md backdrop-blur-md dark:bg-black/95' : 'bg-white py-3 dark:bg-black'
                }`}
            >
                <div className="section-container mx-auto flex items-center justify-between px-4">
                    <div className="flex items-center gap-8">
                        <a href="/" className="group flex items-center gap-3">
                            <img src={logoUrl} alt="Logo" className="h-10 w-10 object-contain" />
                            <h1 className="text-xl font-bold text-[#e62129]">{application_info?.name || 'CRC News'}</h1>
                        </a>

                        <div className="hidden items-center gap-6 text-base font-bold lg:flex">
                            <NavItem href="/" active={url === '/'}>
                                Home
                            </NavItem>
                            {post_categories.map((cat: any) => (
                                <NavItem
                                    key={cat.id}
                                    href={`/posts?category_code=${cat.code || cat.name}&page=1`}
                                    active={url.includes(`category_code=${cat.code}`)}
                                >
                                    {cat.name}
                                </NavItem>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link href={`/pages/DONATE`} prefetch>
                            <button className="flex items-center gap-2.5 rounded-full bg-[#e62129] px-5 py-2 text-base font-semibold text-white transition-all hover:bg-red-700 active:scale-95">
                                <Gift size={18} />
                                <span className="text-sm sm:text-base">Donate</span>
                            </button>
                        </Link>
                        <SwitchDarkModeSingle />
                        <button
                            className="rounded-lg bg-slate-100 p-2 text-slate-600 lg:hidden dark:bg-slate-800 dark:text-slate-300"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <MenuIcon size={24} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* 3. MAIN CONTENT AREA */}
            <div className="flex-1">
                <main>{children}</main>
            </div>

            {/* 4. FOOTER - SHADCN THEMED */}
            <footer className="bg-muted dark:bg-background mt-12 border-t py-10 transition-colors duration-300">
                <div className="section-container mx-auto grid grid-cols-1 gap-10 px-4 md:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-6">
                        <h1 className="text-3xl font-semibold text-[#e62129]">{application_info?.name || 'CRC News'}</h1>
                        <p className="text-muted-foreground text-base">{application_info?.address || application_info?.address}</p>
                        <div className="flex flex-wrap gap-4">
                            {footerLinks.map((social: any) => (
                                <SocialIcon key={social.id} social={social} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <h5 className="mb-4 text-lg font-semibold text-[#e62129]">Quick Links</h5>
                        <ul className="space-y-3">
                            {page_links.map((item: any) => (
                                <li key={item.position_code}>
                                    <Link
                                        href={`/pages/${item.position_code}`}
                                        className="group text-muted-foreground flex items-center gap-2 text-base font-semibold transition-colors hover:text-[#e62129]"
                                    >
                                        <ChevronRight size={16} className="text-[#e62129] transition-transform group-hover:translate-x-1" />
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h5 className="mb-4 text-lg font-semibold text-[#e62129]">Contact Information</h5>
                        <ul className="text-foreground space-y-3 text-base font-semibold">
                            <li>{application_info?.phone}</li>
                            <li>{application_info?.email}</li>
                            {/* <li>{application_info?.working_hours}</li> */}
                        </ul>
                        <div className="border-border mt-6 flex items-center gap-4 border-t pt-4">
                            <span className="text-muted-foreground text-base font-semibold">Appearance</span>
                            <SwitchDarkMode3D />
                        </div>
                    </div>
                </div>

                <div className="section-container border-border text-muted-foreground mx-auto mt-10 border-t px-4 pt-8 text-center text-base font-semibold">
                    {application_info?.copyright || application_info?.copyright}
                </div>
            </footer>

            {/* Mobile Menu */}
            {isMobileMenuOpen && <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />}

            <ScrollToTopButton2 />

            <style
                dangerouslySetInnerHTML={{
                    __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.3333%); }
                }
                .animate-marquee {
                    display: inline-block;
                    animation: marquee 200s linear infinite;
                    white-space: nowrap;
                    will-change: transform;
                }
                .animate-marquee:hover { animation-play-state: paused; }
            `,
                }}
            />
        </div>
    );
}

function NavItem({ children, href, active }: any) {
    return (
        <a
            href={href}
            className={`font-semibold transition-colors duration-200 hover:text-[#e62129] ${active ? 'border-b-2 border-[#e62129] text-[#e62129]' : 'text-slate-500 dark:text-slate-400'}`}
        >
            {children}
        </a>
    );
}

function SocialIcon({ social }: any) {
    return (
        <a
            href={social.link}
            target="_blank"
            rel="noreferrer"
            className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white shadow-lg transition-all hover:scale-110 hover:bg-red-600 active:scale-95"
        >
            <img src={`${ASSET_URL}/links/thumb/${social.image}`} className="bg-white object-contain" alt={social.title} />
        </a>
    );
}
