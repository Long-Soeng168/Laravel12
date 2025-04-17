import usePermission from '@/hooks/use-permission';
import { Link, usePage } from '@inertiajs/react';
import { AppWindowIcon, FilePenLineIcon, GalleryThumbnailsIcon, LinkIcon, UsersIcon, Waypoints } from 'lucide-react';

const SectionCards = () => {
    const hasPermission = usePermission();
    const { featureDatas } = usePage().props;
    const features = [
        {
            icon: FilePenLineIcon,
            title: 'Posts',
            description: `Posts : ${featureDatas?.post_counts}`,
            sub_description: `Total view : ${featureDatas?.totalPostViews}`,
            link: '/admin/posts',
            permission: 'post view',
        },
        {
            icon: AppWindowIcon,
            title: 'Pages',
            description: `Total : ${featureDatas?.page_counts}`,
            link: '/admin/pages',
            permission: 'page view',
        },
        {
            icon: LinkIcon,
            title: 'Links',
            description: `Total : ${featureDatas?.link_counts}`,
            link: '/admin/links',
            permission: 'link view',
        },
        {
            icon: GalleryThumbnailsIcon,
            title: 'Banners',
            description: `Total : ${featureDatas?.banner_counts}`,
            link: '/admin/banners',
            permission: 'banner view',
        },
        {
            icon: UsersIcon,
            title: 'Users',
            description: `Total : ${featureDatas?.user_counts}`,
            link: '/admin/users',
            permission: 'user view',
        },
        {
            icon: Waypoints,
            title: 'Roles',
            description: `Total : ${featureDatas?.user_counts}`,
            link: '/admin/roles',
            permission: 'role view',
        },
    ];

    return (
        <div>
            <div className="mx-auto grid max-w-full gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((feature) =>
                    hasPermission(feature.permission) ? (
                        <Link
                            href={feature.link}
                            key={feature.title}
                            className="flex flex-row justify-between rounded-xl border px-5 py-6 transition-all duration-300 hover:-translate-1.5 hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]"
                        >
                            <div className="bg-muted mb-3 flex h-10 w-10 items-center justify-center rounded-full">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-lg font-semibold">{feature.title}</span>
                                <p className="text-foreground/80 mt-1 text-[15px]">{feature.description}</p>
                                {feature.sub_description && <p className="text-foreground/80 mt-1 text-[15px]">{feature.sub_description}</p>}
                            </div>
                        </Link>
                    ) : null,
                )}
            </div>
        </div>
    );
};

export default SectionCards;
