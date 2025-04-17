import { MyPagination } from '@/components/my-pagination';
import { MyRefreshButton } from '@/components/my-refresh-button';
import { MySearchTableData } from '@/components/my-search-table-data';
import usePermission from '@/hooks/use-permission';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { usePage } from '@inertiajs/react';
import MyTableData from './components/my-table-data';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Posts',
        href: '/admin/posts',
    },
    {
        title: 'View Counts',
        href: '/admin/post_view_counts',
    },
];
const Index = () => {
    const hasPermission = usePermission();
    const { totalViews } = usePage().props;
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex max-w-[100vw] flex-wrap items-center justify-end gap-2">
                <div className="flex max-w-[100vw] flex-wrap items-center justify-start gap-2 max-lg:w-full lg:flex-1">
                    <MySearchTableData />
                    {/* <MyFilterButton /> */}
                    <MyRefreshButton />
                    <span className="flex-1"></span>
                    <div>total view : {totalViews}</div>
                    {/* <MyExportButton />
                    <MyImportButton /> */}
                    {/* {hasPermission('post create') && <MyAddNewButton url="/admin/posts/create" type="link" />} */}
                </div>
            </div>
            <div className="h-2" />
            <MyTableData />
            <MyPagination />
        </AppLayout>
    );
};

export default Index;
