import { cn } from '@/lib/utils';
import { MyLanguageSelector } from '@/pages/westec/components/my-select-language';
import { Link } from '@inertiajs/react';
import { useState } from 'react';
import { HoveredLink, Menu, MenuItem, ProductItem } from './ui/navbar-menu';

export function MyNavbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <>
            <div className={cn('mx-auto max-w-[2000px]', className)}>
                <div className="flex h-full items-center justify-between bg-white py-8 px-16">
                    <a href="/" className="w-50">
                        <img src="/assets/westec/images/logo.png" />
                    </a>
                    <Menu setActive={setActive}>
                        <MenuItem setActive={setActive} active={active} item="About Us">
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink href="/web-dev"> Security & Safety Solutions</HoveredLink>
                                <HoveredLink href="/interface-design"> Mission & Vision</HoveredLink>
                                <HoveredLink href="/seo"> Why Westec</HoveredLink>
                                <HoveredLink href="/branding">Sales advantages</HoveredLink>
                            </div>
                        </MenuItem>
                        <Link href={`/solutions`}>
                            <MenuItem setActive={setActive} active={active} item="Solutions">
                                <div className="grid grid-cols-2 gap-10 p-4 text-sm">
                                    <ProductItem
                                        title="Security & Safety Solutions"
                                        href="#"
                                        src="assets/images/79.png"
                                        description="Prepare for tech interviews like never before."
                                    />
                                    <ProductItem
                                        title="Smart Home & Office Solutions"
                                        href="#"
                                        src="/assets/demo-images/83.png"
                                        description="Production ready Tailwind css components for your next project"
                                    />
                                    <ProductItem
                                        title="Commercial & Residential Equipments"
                                        href="#"
                                        src="/assets/demo-images/85.png"
                                        description="Never write from scratch agaisen. Go from idea to blog in minutes."
                                    />
                                    <ProductItem
                                        title="IT Solutions"
                                        href="#"
                                        src="/assets/demo-images/84.png"
                                        description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                                    />
                                </div>
                            </MenuItem>
                        </Link>
                        <MenuItem setActive={setActive} active={active} item="Case Studies">
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink href="/">Banking</HoveredLink>
                                <HoveredLink href="/">Microfinance</HoveredLink>
                                <HoveredLink href="/">Manufacturing</HoveredLink>
                                <HoveredLink href="/">Construction</HoveredLink>
                                <HoveredLink href="/">Entertainment</HoveredLink>
                            </div>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="Partners">
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink href="/">Our Partners</HoveredLink>
                            </div>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="Careers">
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink href="/">Hiring</HoveredLink>
                            </div>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="News">
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink href="/">Updated technology news</HoveredLink>
                                <HoveredLink href="/">Westec’s news & activities</HoveredLink>
                            </div>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="Contact Us">
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink href="/">Contact us detail (phone no. & social platforms)</HoveredLink>
                                <HoveredLink href="/">Location (Map)</HoveredLink>
                                <HoveredLink href="/">Solution Explorer</HoveredLink>
                            </div>
                        </MenuItem>
                        <div>
                            <MyLanguageSelector />
                        </div>
                    </Menu>
                </div>
            </div>
        </>
    );
}
