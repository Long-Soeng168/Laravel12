import { cn } from '@/lib/utils';
import { useState } from 'react';
import { MyLanguageSelector } from '@/pages/westec/components/my-select-language';
import { HoveredLink, Menu, MenuItem, ProductItem } from './ui/navbar-menu';
import { Link } from '@inertiajs/react';

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
    return
        <>
            <div className={cn(' fixed inset-x-0 top-10 z-50 mx-auto max-w-screen-2xl px-4 sm:px-10 md:px-20', className)}>
                <div >
                    <Menu setActive={setActive}>
                        <MenuItem setActive={setActive} active={active} item="About WU">
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink href="/web-dev"> History of Western University</HoveredLink>
                                <HoveredLink href="/interface-design">Vision, Mission & Value</HoveredLink>
                                <HoveredLink href="/seo">WU Structure</HoveredLink>
                                <HoveredLink href="/branding">Recognition Quality</HoveredLink>
                                <HoveredLink href="/branding">Collaborations</HoveredLink>
                                <HoveredLink href="/branding">Contact and Located</HoveredLink>
                            </div>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="Faculties">
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink href="/web-dev">Faculty of Computer Science And Technology</HoveredLink>
                                <HoveredLink href="/interface-design">Faculty of Management and Hotel Tourism</HoveredLink>
                                <HoveredLink href="/seo">Faculty of Arts, Humanities and Languages</HoveredLink>
                                <HoveredLink href="/branding">Faculty of Social Sciences</HoveredLink>
                                <HoveredLink href="/branding">Faculty of Architecture, Engineering and Construction</HoveredLink>
                                <HoveredLink href="/branding">International Bachelors</HoveredLink>
                            </div>
                        </MenuItem>
                        {/* <MenuItem setActive={setActive} active={active} item="Faculties">
                            <div className="grid grid-cols-2 gap-10 p-4 text-sm">
                                <ProductItem
                                    title="Security & Safety Solutions"
                                    href="#"
                                    src="assets/images/79.png"
                                    description="Faculty of Computer Science And Technology"
                                />
                                <ProductItem
                                    title="Smart Home & Office Solutions"
                                    href="#"
                                    src="/assets/demo-images/83.png"
                                    description="Faculty of Management and Hotel Tourism"
                                />
                                <ProductItem
                                    title="Commercial & Residential Equipments"
                                    href="#"
                                    src="/assets/demo-images/85.png"
                                description="Faculty of Arts, Humanities and Languages"
                                />
                                <ProductItem
                                    title="IT Solutions"
                                    href="#"
                                    src="/assets/demo-images/84.png"
                                    description="Faculty of Social Sciences"
                                />
                                <ProductItem
                                    title="IT Solutions"
                                    href="#"
                                    src="/assets/demo-images/84.png"
                                    description="Faculty of Architecture, Engineering and Construction"
                                />
                                <ProductItem
                                    title="IT Solutions"
                                    href="#"
                                    src="/assets/demo-images/84.png"
                                    description="International Bachelors"
                                />
                            </div>
                        </MenuItem> */}
                        <MenuItem setActive={setActive} active={active} item="After Graduated">
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink href="/">Doctoral degree</HoveredLink>
                                <HoveredLink href="/">Master's Degree</HoveredLink>
                            </div>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="Offices">
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink href="/">Registrar</HoveredLink>
                                <HoveredLink href="/">Account office</HoveredLink>
                                <HoveredLink href="/">IT OFFICE</HoveredLink>
                            </div>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="Activities">
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink href="/">News & Announcement</HoveredLink>
                            </div>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="Student Affairs">
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink href="/">Student Affairs</HoveredLink>
                                <HoveredLink href="/">Library</HoveredLink>
                            </div>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="Admission">
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink href="/">Scholarship</HoveredLink>
                                <HoveredLink href="/">Application Form</HoveredLink>
                                <HoveredLink href="/">Transfer to Western University</HoveredLink>
                                <HoveredLink href="/">Academic</HoveredLink>
                            </div>
                        </MenuItem>
                        <Link href='/' className='cursor-pointer text-color1 font-noto-san-extra-light font-extrabold'>Contact Us</Link>
                        <div>
                            <MyLanguageSelector/>
                        </div>
            <div className={cn('', className)}>
                <div>
                    <Menu setActive={setActive}>
                        <MenuItem setActive={setActive} active={active} item="About">
                            <div className="flex flex-col space-y-6 text-sm">
                                <HoveredLink href="/web-dev">History and Values</HoveredLink>
                                <HoveredLink href="/interface-design">School Facilities</HoveredLink>
                                <HoveredLink href="/seo">Branch</HoveredLink>
                            </div>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="Academic">
                            <div className="flex flex-col space-y-6 text-sm">
                                <HoveredLink href="/web-dev">Curriculum</HoveredLink>
                                <HoveredLink href="/interface-design">Programs</HoveredLink>
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
