import { usePage } from '@inertiajs/react';
import { X } from 'lucide-react';

const ASSET_URL = 'https://news-app.redcross.org.kh/assets/images';

const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const { post_categories = [], links = [], application_info } = usePage<any>().props;

    if (!isOpen) return null;

    // Logic to separate links identical to your Flutter drawer logic
    const footerLinks = links.filter((l: any) => l.type === 'footer');
    const menuLinks = links.filter((l: any) => l.type === 'menu');

    const logoUrl = application_info?.image
        ? `${ASSET_URL}/application_info/thumb/${application_info.image}`
        : 'https://news-app.redcross.org.kh/assets/images/application_info/thumb/1744881082_logo.png';

    return (
        <div className="animate-in slide-in-from-right bg-background fixed inset-0 z-[100] flex flex-col duration-300">
            {/* 1. DrawerHeader Section (Branded Red) */}
            <div className="relative flex flex-col items-center justify-center bg-[#e62129] p-8 py-4 text-white">
                {/* Fixed Close Button - Top Right */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 rounded-full bg-white/20 p-2 transition-transform hover:bg-white/30 active:scale-90"
                >
                    <X size={24} />
                </button>

                <div className="mb-2">
                    <img src={logoUrl} alt="Logo" className="h-20 w-20 object-contain" />
                </div>
                <h1 className="text-xl font-bold">{application_info?.name || 'CRC News'}</h1>
            </div>

            {/* 2. Middle Section: Category List & Menu Links (Scrollable) */}
            <div className="flex-1 overflow-y-auto py-4">
                {/* Categories */}
                {post_categories.map((cat: any) => (
                    <a
                        key={cat.id}
                        href={`/posts?category_code=${cat.code || cat.name}&page=1`}
                        className="flex items-center gap-4 px-6 py-3 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                        <img
                            src={`${ASSET_URL}/post_categories/thumb/${cat.image}`}
                            className="h-11 w-11 rounded-full bg-white object-contain"
                            alt={cat.name}
                        />
                        <span className="text-foreground text-base font-bold">{cat.name}</span>
                    </a>
                ))}

                {/* Social Links Menu */}
                {menuLinks.map((link: any) => (
                    <a
                        key={link.id}
                        href={link.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-4 px-6 py-3 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                        <img
                            src={`${ASSET_URL}/links/thumb/${link.image}`}
                            className="h-11 w-11 rounded-full bg-white object-contain"
                            alt={link.title}
                        />
                        <span className="text-foreground text-base font-bold">{link.title}</span>
                    </a>
                ))}
            </div>

            {/* 3. Bottom Section: Social Links Grid (4 Columns) */}
            <div className="border-opacity-20 bg-muted/30 border-t border-[#e62129] p-4">
                <div className="grid grid-cols-4 gap-4">
                    {footerLinks.map((social: any) => (
                        <a
                            key={social.id}
                            href={social.link}
                            target="_blank"
                            rel="noreferrer"
                            className="flex flex-col items-center justify-center gap-1 transition-transform active:scale-90"
                        >
                            <img
                                src={`${ASSET_URL}/links/thumb/${social.image}`}
                                className="h-11 w-11 rounded-full bg-white object-contain"
                                alt={social.title}
                            />
                            <span className="text-muted-foreground line-clamp-1 text-center text-[10px] font-bold">{social.title}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
