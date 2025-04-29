import ToggleModeSwitch from '@/components/toggle-mode-switch';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { AlignLeftIcon } from 'lucide-react';
import { useState } from 'react';
import { HoveredLink, Menu, MenuItem } from './ui/navbar-menu';

export function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn('flex items-center justify-between', className)}>
            <img src="/assets/icons/image-icon.png" className="h-20 p-2" />
            <Button size="icon" variant="outline" className="md:hidden">
                <AlignLeftIcon className="stroke-primary stroke-3" />
            </Button>
            <div className="hidden md:flex justify-end items-center gap-2">
                <Menu setActive={setActive}>
                    <Link href={'/'}>Home</Link>
                    <MenuItem setActive={setActive} active={active} item="Solutions">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="#">Our Services</HoveredLink>
                            <HoveredLink href="#">Our Resources</HoveredLink>
                            <HoveredLink href="#">Catalog Functionality</HoveredLink>
                            <HoveredLink href="#">Our Integrated Solutions</HoveredLink>
                            <HoveredLink href="#">Technology-Based Solutions</HoveredLink>
                            <HoveredLink href="#">Why Choose Us</HoveredLink>
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Company">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="#">Who We Are</HoveredLink>
                            <HoveredLink href="#">Who We Serve</HoveredLink>
                            <HoveredLink href="#">Our Global Reach</HoveredLink>
                            <HoveredLink href="#">Our Partners</HoveredLink>
                            <HoveredLink href="#">Our Commitment</HoveredLink>
                        </div>
                    </MenuItem>
                    <Link href={'/'}>Blogs</Link>
                    <Link href={'/'}>Career</Link>
                    <Link href={'/'}>Contact Us</Link>
                </Menu>
                <ToggleModeSwitch />
            </div>
        </div>
    );
}
