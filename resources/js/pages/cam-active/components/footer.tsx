import { Separator } from '@/components/ui/separator';
import { Link } from '@inertiajs/react';
import { DribbbleIcon, GithubIcon, TwitchIcon, TwitterIcon } from 'lucide-react';

const footerLinks = [
    {
        title: 'Home',
        href: '#',
    },
    {
        title: 'Solutions',
        href: '#',
    },
    {
        title: 'Company',
        href: '#',
    },
    {
        title: 'Blogs',
        href: '#',
    },
    {
        title: 'Career',
        href: '#',
    },
    {
        title: 'Contact Us',
        href: '#',
    },
];

const Footer = () => {
    return (
        <footer>
            <div className="mx-auto max-w-7xl border-t">
                <div className="flex flex-col items-start justify-between gap-x-8 gap-y-10 px-6 py-12 sm:flex-row xl:px-0">
                    <div>
                        {/* Logo */}
                        <div className='flex items-center gap-2'>
                            <img src="/assets/icons/image-icon.png" className="h-16" alt="" />
                            <p className='text-xl font-bold'>Company Name</p>
                        </div>
                        <ul className="mt-6 flex flex-wrap items-center gap-4">
                            {footerLinks.map(({ title, href }) => (
                                <li key={title}>
                                    <Link href={href} className="text-muted-foreground hover:text-foreground">
                                        {title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Separator />
                <div className="flex flex-col-reverse items-center justify-between gap-x-2 gap-y-5 px-6 py-8 sm:flex-row xl:px-0">
                    {/* Copyright */}
                    <span className="text-muted-foreground">
                        &copy; {new Date().getFullYear()}{' '}
                        <Link href="/" target="_blank">
                            Company Name
                        </Link>
                        . All rights reserved.
                    </span>

                    <div className="text-muted-foreground flex items-center gap-5">
                        <Link href="#" target="_blank">
                            <TwitterIcon className="h-5 w-5" />
                        </Link>
                        <Link href="#" target="_blank">
                            <DribbbleIcon className="h-5 w-5" />
                        </Link>
                        <Link href="#" target="_blank">
                            <TwitchIcon className="h-5 w-5" />
                        </Link>
                        <Link href="#" target="_blank">
                            <GithubIcon className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
