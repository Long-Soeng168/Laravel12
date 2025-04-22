import AppLayout from '@/layouts/app-layout';
import { ChartAreaInteractive } from './components/chart-area-interactive';
import SectionCards from './components/section-cards';
import useTranslation from '@/hooks/use-translation';
import { BreadcrumbItem } from '@/types';

export default function Page() {
const {t} = useTranslation();
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: t('Dashboard'),
            href: '/dashboard',
        },
    ];
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex flex-1 flex-col">
                <div className="@container/main flex flex-1 flex-col gap-2">
                    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                        <SectionCards />
                        <div className="px-4 lg:px-6">
                            <ChartAreaInteractive />
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
