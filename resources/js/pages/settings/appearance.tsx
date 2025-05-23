import { Head } from '@inertiajs/react';

import AppearanceTabs from '@/components/appearance-tabs';
import HeadingSmall from '@/components/heading-small';
import { type BreadcrumbItem } from '@/types';

import useTranslation from '@/hooks/use-translation';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';

export default function Appearance() {
    const { t } = useTranslation();
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: t('Appearance settings'),
            href: '/settings/appearance',
        },
    ];
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={t("Appearance settings")} />

            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall title={t("Appearance settings")} description={t("Update your account's appearance settings")} />
                    <AppearanceTabs />
                </div>
            </SettingsLayout>
        </AppLayout>
    );
}
