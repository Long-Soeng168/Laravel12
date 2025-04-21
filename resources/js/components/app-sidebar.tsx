import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import usePermission from '@/hooks/use-permission';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import {
    AppWindowIcon,
    FilePenLineIcon,
    GalleryThumbnailsIcon,
    Heading1Icon,
    InfoIcon,
    LayoutGrid,
    LinkIcon,
    ProjectorIcon,
    ShapesIcon,
    UsersIcon,
} from 'lucide-react';
import AppLogo from './app-logo';

export function AppSidebar() {
    const hasPermission = usePermission();
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
        ...(hasPermission('post view')
            ? [
                  {
                      title: 'Post',
                      url: '/admin/posts',
                      icon: FilePenLineIcon,
                      isActive: isActive('/admin/posts') || isActive('/admin/post_categories') || isActive('/admin/post_view_counts'),
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
                          {
                              title: 'View Counts',
                              url: '/admin/post_view_counts',
                              isActive: isActive('/admin/post_view_counts'),
                          },
                      ],
                  },
              ]
            : []),
        ...(hasPermission('page view')
            ? [
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
              ]
            : []),
        ...(hasPermission('banner view')
            ? [
                  {
                      title: 'Banners',
                      url: '/admin/banners',
                      icon: GalleryThumbnailsIcon,
                      isActive: isActive('/admin/banners') || isActive('/admin/banner_positions'),
                      subItems: [
                          {
                              title: 'Banners',
                              url: '/admin/banners',
                              isActive: isActive('/admin/banners'),
                          },
                          {
                              title: 'Positions',
                              url: '/admin/banner_positions',
                              isActive: isActive('/admin/banner_positions'),
                          },
                      ],
                  },
              ]
            : []),
        ...(hasPermission('user view')
            ? [
                  {
                      title: 'Users',
                      url: '/admin/users',
                      icon: UsersIcon,
                      isActive: isActive('/admin/users') || isActive('/admin/roles') || isActive('/admin/permissions'),
                      subItems: [
                          {
                              title: 'Users',
                              url: '/admin/users',
                              isActive: isActive('/admin/users'),
                          },
                          {
                              title: 'Roles',
                              url: '/admin/roles',
                              isActive: isActive('/admin/roles'),
                          },
                          {
                              title: 'Permissions',
                              url: '/admin/permissions',
                              isActive: isActive('/admin/permissions'),
                          },
                      ],
                  },
              ]
            : []),
        ...(hasPermission('item view')
            ? [
                  {
                      title: 'Items',
                      url: '/items',
                      icon: LayoutGrid,
                      isActive: isActive('/items'),
                  },
              ]
            : []),
        ...(hasPermission('project view')
            ? [
                  {
                      title: 'Projects',
                      url: '/admin/projects',
                      icon: ProjectorIcon,
                      isActive: isActive('/admin/projects'),
                  },
              ]
            : []),
        ...(hasPermission('heading view')
            ? [
                  {
                      title: 'Headings',
                      url: '/admin/headings',
                      icon: Heading1Icon,
                      isActive: isActive('/admin/headings'),
                  },
              ]
            : []),
        ...(hasPermission('link view')
            ? [
                  {
                      title: 'Links',
                      url: '/admin/links',
                      icon: LinkIcon,
                      isActive: isActive('/admin/links'),
                  },
              ]
            : []),
        ...(hasPermission('application_info view')
            ? [
                  {
                      title: 'Application Info',
                      url: '/admin/application_info',
                      icon: InfoIcon,
                      isActive: isActive('/admin/application_info'),
                  },
              ]
            : []),
        ...(hasPermission('type view')
            ? [
                  {
                      title: 'Types',
                      url: '/admin/types',
                      icon: ShapesIcon,
                      isActive: isActive('/admin/types'),
                  },
              ]
            : []),
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
