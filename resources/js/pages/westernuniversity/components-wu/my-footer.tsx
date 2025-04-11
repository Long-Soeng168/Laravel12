import { Link } from '@inertiajs/react';
import { ArrowUpCircleIcon } from 'lucide-react';

const footerSections = [
    {
        title: 'ACADEMICS',
        links: [
            {
                title: 'General English Program',
                href: '#',
            },
            {
                title: 'Curriculum',
                href: '#',
            },
            {
                title: 'Exchange Program',
                href: '#',
            },
            {
                title: 'Summer Program',
                href: '#',
            },
            {
                title: 'School Calendar',
                href: '#',
            },
        ],
    },
    {
        title: 'SCHOOL INFO',
        links: [
            {
                title: 'About',
                href: '#',
            },
            {
                title: 'Campuses',
                href: '#',
            },
            {
                title: 'School Facilities',
                href: '#',
            },
            {
                title: 'Class Schedule and Subjects',
                href: '#',
            },
            {
                title: 'Student Council',
                href: '#',
            },
        ],
    },
    {
        title: 'CONTACT',
        links: [
            {
                title: '📞 016 699 192',
                href: '#',
            },
            {
                title: '📞 078 672 072',
                href: '#',
            },
            {
                title: '📍 Find us on Google Map',
                href: '#',
            },
            {
                title: '✉️ info@western.edu.kh',
                href: '#',
            },
            {
                title: '🏠 #20, St. 598C,Phnom Penh Thmey,Sen Sok, Cambodia',
                href: '#',
            },
        ],
    },
];

const MyFooter = () => {
    return (
        <div className="relative flex flex-col bg-blue-900 text-white">
            <div className="bg-muted grow" />
            <footer>
                <div className="mx-auto max-w-screen-xl ">
                    <div className="grid grid-cols-1 gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
                        {footerSections.map(({ title, links }) => (
                            <div key={title} className="space-y-6">
                                <h6 className="text-xl font-bold tracking-wide">{title}</h6>
                                <ul className="space-y-3">
                                    {links.map(({ title, href }) => (
                                        <li key={title}>
                                            <Link href={href} className="transition-colors duration-300 hover:text-slate-300">
                                                {title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <div>
                            {/* Social icons + Scroll to Top */}
                            <div className="space-y-6">
                                {/* Social Icons */}
                                <div className="flex w-16 flex-col items-center justify-center gap-4 rounded-full bg-gradient-to-b from-slate-100 to-slate-200 p-4">
                                    {/* Facebook */}
                                    <a
                                        href="#"
                                        aria-label="Facebook"
                                        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877F2] text-white transition hover:scale-105"
                                    >
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M22 12a10 10 0 10-11.63 9.87v-6.99h-2.4v-2.88h2.4v-2.2c0-2.38 1.42-3.7 3.6-3.7 1.04 0 2.13.19 2.13.19v2.34h-1.2c-1.18 0-1.55.73-1.55 1.48v1.88h2.64l-.42 2.88h-2.22V22A10 10 0 0022 12z" />
                                        </svg>
                                    </a>

                                    {/* Instagram */}
                                    <a
                                        href="#"
                                        aria-label="Instagram"
                                        className="flex h-12 w-12 items-center justify-center rounded-full bg-white transition hover:scale-105"
                                    >
                                        <svg
                                            className="h-6 w-6 text-purple-600"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" stroke="currentColor" />
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                        </svg>
                                    </a>

                                    {/* Telegram */}
                                    <a
                                        href="#"
                                        aria-label="Telegram"
                                        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0088cc] text-white transition hover:scale-105"
                                    >
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M9.03 12.36l-.38 3.54c.55 0 .79-.23 1.08-.51l2.6-2.48 3.4 2.48c.62.34 1.07.17 1.23-.57l2.23-10.38c.23-.96-.37-1.34-1.01-1.1L2.98 10.2c-.93.35-.92.86-.17 1.08l4.85 1.5 11.24-7.1" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom section */}
                    <div className="flex flex-col-reverse items-center justify-center gap-x-2 gap-y-5 px-6 py-8 xl:px-0">
                        {/* Copyright */}
                        <span className=" text-white">
                        Copyright © 2023 Western International School. All Rights Reserved.
                        </span>

                        <div className="text-muted-foreground flex items-center gap-5">
                            <Link href="#" target="_blank">
                                <img src="assets/demo-images/Homepage/01_Logo_WIS.png" className="h-20 w-20" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Scroll to Top Button */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="absolute -top-8 right-6 flex flex-col items-center justify-center rounded-xl bg-gradient-to-b from-slate-100 to-slate-200 px-2 py-6 text-blue-900 shadow-md transition hover:shadow-lg md:right-20"
                >
                    <ArrowUpCircleIcon className="h-8 w-8" />
                    <span className="mt-1 text-[10px]">Scroll to Top</span>
                </button>
            </footer>
        </div>
    );
};

export default MyFooter;
