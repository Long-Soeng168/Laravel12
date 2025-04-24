import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import useTranslation from '@/hooks/use-translation';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import {
    AppWindowIcon,
    FilePenLineIcon,
    GalleryThumbnailsIcon,
    Heading1Icon,
    InfoIcon,
    Layers2Icon,
    LayoutDashboardIcon,
    LayoutGrid,
    LinkIcon,
    ProjectorIcon,
    ReplaceAllIcon,
    ShapesIcon,
    ShieldCheckIcon,
    Tally5Icon,
    UserCogIcon,
    UsersIcon,
} from 'lucide-react';
import AppLogo from './app-logo';

export function AppSidebar() {
    const { t, currentLocale } = useTranslation();
    const mainNavItems: NavItem[] = [
        {
            title: t('Dashboard'),
            url: '/dashboard',
            icon: LayoutDashboardIcon,
        },
        {
            title: t('Posts'),
            permission: 'post view',
            url: '/admin/posts',
            icon: FilePenLineIcon,
            subItems: [
                {
                    title: t('Posts'),
                    permission: 'post view',
                    icon: FilePenLineIcon,
                    url: '/admin/posts',
                },
                {
                    title: t('Categories'),
                    permission: 'post view',
                    icon: Layers2Icon,
                    url: '/admin/post_categories',
                },
                {
                    title: t('View Counts'),
                    permission: 'post view',
                    icon: Tally5Icon,
                    url: '/admin/post_view_counts',
                },
            ],
        },
        {
            title: t('Pages'),
            permission: 'page view',
            url: '/admin/pages',
            icon: AppWindowIcon,
            subItems: [
                {
                    title: t('Pages'),
                    permission: 'page view',
                    icon: AppWindowIcon,
                    url: '/admin/pages',
                },
                {
                    title: t('Positions'),
                    permission: 'page view',
                    icon: ReplaceAllIcon,
                    url: '/admin/page_positions',
                },
            ],
        },
        {
            title: t('Banners'),
            permission: 'banner view',
            url: '/admin/banners',
            icon: GalleryThumbnailsIcon,
            subItems: [
                {
                    title: t('Banners'),
                    permission: 'banner view',
                    icon: GalleryThumbnailsIcon,
                    url: '/admin/banners',
                },
                {
                    title: t('Positions'),
                    permission: 'banner view',
                    icon: ReplaceAllIcon,
                    url: '/admin/banner_positions',
                },
            ],
        },
        {
            title: t('Users'),
            permission: 'user view',
            url: '/admin/users',
            icon: UsersIcon,
            subItems: [
                {
                    title: t('Users'),
                    permission: 'user view',
                    icon: UsersIcon,
                    url: '/admin/users',
                },
                {
                    title: t('Roles'),
                    permission: 'role view',
                    icon: UserCogIcon,
                    url: '/admin/roles',
                },
                {
                    title: t('Permissions'),
                    permission: 'permission view',
                    icon: ShieldCheckIcon,
                    url: '/admin/permissions',
                },
            ],
        },
        {
            title: t('Items'),
            permission: 'item view',
            url: '/items',
            icon: LayoutGrid,
        },
        {
            title: t('Projects'),
            permission: 'project view',
            url: '/admin/projects',
            icon: ProjectorIcon,
        },
        {
            title: t('Partners'),
            // permission: 'project view',
            url: '/admin/partners',
            icon: ProjectorIcon,
        },
        {
            title: t('Headings'),
            permission: 'heading view',
            url: '/admin/headings',
            icon: Heading1Icon,
        },
        {
            title: t('Links'),
            permission: 'link view',
            url: '/admin/links',
            icon: LinkIcon,
        },
        {
            title: t('Application Info'),
            permission: 'application_info view',
            url: '/admin/application_info',
            icon: InfoIcon,
        },
        {
            title: t('Types'),
            permission: 'type view',
            url: '/admin/types',
            icon: ShapesIcon,
        },
    ];

    const footerNavItems: NavItem[] = [
        {
            title: t('Sample Content'),
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
        <Sidebar collapsible="icon" variant="inset" className={`${currentLocale == 'kh' ? 'font-siemreap-regular' : 'font-poppins-regular'}`}>
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
