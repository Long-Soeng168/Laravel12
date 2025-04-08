import { Toaster } from '@/components/ui/sonner';
import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import { type BreadcrumbItem } from '@/types';
import { usePage } from '@inertiajs/react';
import { type ReactNode } from 'react';
import { toast } from 'sonner';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

interface FlashMessages {
    success?: string;
    error?: string;
}

const AppLayout = ({ children, breadcrumbs, ...props }: AppLayoutProps) => {
    // const { flash } = usePage<{ flash: FlashMessages }>().props;
    // const successMessage = flash?.success;
    // const errorMessage = flash?.error;
    // if (successMessage) {
    //     toast.success('Success', {
    //         description: successMessage,
    //     });
    // }
    // if (errorMessage) {
    //     toast.error('Error', {
    //         description: errorMessage,
    //     });
    // }

    return (
        <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
            <div className="p-2">{children}</div>
            <Toaster />
        </AppLayoutTemplate>
    );
};

export default AppLayout;
