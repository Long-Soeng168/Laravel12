import { cn } from '@/lib/utils';
import { useState } from 'react';
import { HoveredLink, Menu, MenuItem } from './ui/navbar-menu';

export function MyNavbar() {
    return (
        <>
            <div className="relative flex w-full items-center justify-center">
                <Navbar className="top-0" />
            </div>
        </>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <>
            <div className={cn('', className)}>
                <div>
                    <Menu setActive={setActive}>
                        <MenuItem setActive={setActive} active={active} item="About">
                            <div className="flex flex-col space-y-6 text-sm">
                                <HoveredLink href="/hestory_and_values">History and Values</HoveredLink>
                                <HoveredLink href="/school_facilities">School Facilities</HoveredLink>
                                <HoveredLink href="/campuses">Campuses</HoveredLink>
                            </div>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="Academic">
                            <div className="flex flex-col space-y-6 text-sm">
                                <HoveredLink href="/curriculum">Curriculum</HoveredLink>
                                <HoveredLink href="/programs">Programs</HoveredLink>
                                <HoveredLink href="/seo">Class Schedules and Subjects </HoveredLink>
                                <HoveredLink href="/branding">School Calendar</HoveredLink>
                            </div>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={null} item="Admissions"></MenuItem>
                        <MenuItem setActive={setActive} active={active} item="School Life">
                            <div className="flex flex-col space-y-6 text-sm">
                                <HoveredLink href="/">Activities & Events</HoveredLink>
                                <HoveredLink href="/">Extracurricular Activities</HoveredLink>
                                <HoveredLink href="/">Outreach Programs</HoveredLink>
                                <HoveredLink href="/">Studentស Council</HoveredLink>
                                <HoveredLink href="/">News & Blogs</HoveredLink>
                            </div>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="Contact Us">
                            <div className="flex flex-col space-y-6 text-sm">
                                <HoveredLink href="/">Contact Us</HoveredLink>
                                <HoveredLink href="/">Careers</HoveredLink>
                            </div>
                        </MenuItem>
                    </Menu>
                </div>
            </div>
        </>
    );
}