import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { AppWindowIcon, FilePenLineIcon, LayoutGrid, LinkIcon, ProjectorIcon } from 'lucide-react';
import AppLogo from './app-logo';

export function AppSidebar() {
    const { url } = usePage(); // Get current URL path

    const isActive = (path: string) => {
        return url.startsWith(path);
    };

    const mainNavItems: NavItem[] = [
        {
            title: 'Dashboard',
            url: '/dashboard',
            icon: LayoutGrid,
            isActive: isActive('/dashboard'),
        },
        {
            title: 'Items',
            url: '/items',
            icon: LayoutGrid,
            isActive: isActive('/items'),
        },
        {
            title: 'Projects',
            url: '/admin/projects',
            icon: ProjectorIcon,
            isActive: isActive('/admin/projects'),
        },
        {
            title: 'Links',
            url: '/admin/links',
            icon: LinkIcon,
            isActive: isActive('/admin/links'),
        },
        {
            title: 'Website Info',
            url: '/admin/website_info',
            icon: ProjectorIcon,
            isActive: isActive('/admin/website_info'),
        },
        {
            title: 'Post',
            url: '/admin/posts',
            icon: FilePenLineIcon,
            isActive: isActive('/admin/posts') || isActive('/admin/post_categories'),
            subItems: [
                {
                    title: 'Posts',
                    url: '/admin/posts',
                    isActive: isActive('/admin/posts'),
                },
                {
                    title: 'Categories',
                    url: '/admin/post_categories',
                    isActive: isActive('/admin/post_categories'),
                },
            ],
        },
        {
            title: 'Pages',
            url: '/admin/pages',
            icon: AppWindowIcon,
            isActive: isActive('/admin/pages') || isActive('/admin/page_positions'),
            subItems: [
                {
                    title: 'Pages',
                    url: '/admin/pages',
                    isActive: isActive('/admin/pages'),
                },
                {
                    title: 'Positions',
                    url: '/admin/page_positions',
                    isActive: isActive('/admin/page_positions'),
                },
            ],
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
