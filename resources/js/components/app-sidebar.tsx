import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, FilePenLineIcon, Folder, LayoutGrid, PanelTopIcon, ProjectorIcon, ReplaceIcon } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        url: '/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Items',
        url: '/items',
        icon: LayoutGrid,
    },
    {
        title: 'Projects',
        url: '/admin/projects',
        icon: ProjectorIcon,
    },
    {
        title: 'Page Position',
        url: '/admin/page_positions',
        icon: ReplaceIcon,
    },
    {
        title: 'Page',
        url: '/admin/pages',
        icon: PanelTopIcon,
    },
    {
        title: 'Links',
        url: '/admin/links',
        icon: ProjectorIcon,
    },
    {
        title: 'Website Info',
        url: '/admin/website_info',
        icon: ProjectorIcon,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Sample Content',
        url: '/admin/ckeditor5',
        icon: FilePenLineIcon,
    },
    // {
    //     title: 'File Manager',
    //     url: '/admin/my_file_manager',
    //     icon: Folder,
    // },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
