import { usePage } from '@inertiajs/react';
import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    const { application_info } = usePage().props;
    return (
        <>
            <div className="bg-white text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-md">
                {application_info?.image ? (
                    <img
                        alt="app_logo"
                        className="h-fu w-full object-contain"
                        src={`/assets/images/application_info/thumb/${application_info?.image}`}
                    />
                ) : (
                    <AppLogoIcon className="size-5 fill-current text-black" />
                )}
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-none font-semibold">{application_info?.name || 'Dashboard'}</span>
            </div>
        </>
    );
}
