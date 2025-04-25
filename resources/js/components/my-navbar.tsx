import { cn } from '@/lib/utils';
import { MyLanguageSelector } from '@/pages/westec/components/my-select-language';
import { Link } from '@inertiajs/react';
import { AlignLeftIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { HoveredLink, Menu, MenuItem } from './ui/navbar-menu';

export function MyNavbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <>
            <div className={cn('mx-auto max-w-[2000px]', className)}>
                <div className="bg-background flex h-full items-center justify-between border-b px-4 py-4 lg:px-16 lg:py-8">
                    <a href="/" className="w-50">
                        <img src="/assets/westec/images/logo.png" />
                    </a>
                    <Button size="icon" variant="outline" className="xl:hidden">
                        <AlignLeftIcon className="stroke-primary stroke-3" />
                    </Button>
                    <div className="hidden xl:block">
                        <Menu setActive={setActive}>
                            <Link href={`/about`}>
                                <MenuItem setActive={setActive} active={active} item="About Us">
                                    <div className="flex flex-col space-y-4 text-sm">
                                        <HoveredLink href="/#">What is Westec?</HoveredLink>
                                        <HoveredLink href="/#">Why Choose Westec?</HoveredLink>
                                        <HoveredLink href="/#">Vision</HoveredLink>
                                        <HoveredLink href="/#">Our Commitment</HoveredLink>
                                        <HoveredLink href="/#">Our Journey</HoveredLink>
                                    </div>
                                </MenuItem>
                            </Link>

                            <Link href={`/solutions`}>
                                <MenuItem setActive={setActive} active={active} item="Solutions">
                                    <div className="flex flex-col space-y-4 text-sm">
                                        <HoveredLink href="/web-dev"> Security & Safety Solutions</HoveredLink>
                                        <HoveredLink href="/interface-design"> Mission & Vision</HoveredLink>
                                        <HoveredLink href="/seo"> Why Westec</HoveredLink>
                                        <HoveredLink href="/branding">Sales advantages</HoveredLink>
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
            </div>
        </>
    );
}
