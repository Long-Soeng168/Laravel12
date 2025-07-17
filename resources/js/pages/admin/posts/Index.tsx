import MyAddNewButton from '@/components/my-add-new-button';
import { MyPagination } from '@/components/my-pagination';
import { MyRefreshButton } from '@/components/my-refresh-button';
import { MySearchTableData } from '@/components/my-search-table-data';
import { Button } from '@/components/ui/button';
import { CalendarDatePicker } from '@/components/ui/calendar-date-picker';
import usePermission from '@/hooks/use-permission';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { useForm as inertiaUseForm, usePage } from '@inertiajs/react';
import { EyeIcon, FileUpIcon } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { MyFilterButton } from './components/my-filter-button';
import MyTableData from './components/my-table-data';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Posts',
        href: '/admin/posts',
    },
];
const Index = () => {
    const hasPermission = usePermission();

    const urlParams = new URLSearchParams(window.location.search);
    const { get, progress, processing, transform, errors } = inertiaUseForm();
    const { totalRecord, from_date, to_date } = usePage().props;
    const [selectedDateRange, setSelectedDateRange] = useState({
        from: new Date(from_date),
        to: new Date(to_date),
    });

    function onSubmit({ from_date, to_date }: { from_date: Date; to_date: Date }) {
        try {
            transform(() => ({
                from_date: from_date,
                to_date: to_date,
                search: urlParams.get('search')?.toString(),
            }));

            get(`/admin/posts`, {
                preserveScroll: true,
                preserveState: true,
                onSuccess: (page) => {
                    if (page.props.flash?.success) {
                        toast.success('Success', {
                            description: page.props.flash.success,
                        });
                    }
                },
                onError: (e) => {
                    toast.error('Error', {
                        description: 'Failed to load data.' + JSON.stringify(e, null, 2),
                    });
                },
            });
        } catch (error) {
            console.error('Form submission error', error);
            toast.error('Failed to submit the form. Please try again.' + error);
        }
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex max-w-[100vw] flex-wrap items-center justify-end gap-2">
                <div className="flex max-w-[100vw] flex-wrap items-center justify-start gap-2 max-lg:w-full lg:flex-1">
                    <MySearchTableData />
                    <MyFilterButton />
                    <MyRefreshButton />
                    <div className="flex w-full flex-wrap justify-end lg:justify-between gap-2">
                        <div className="flex flex-wrap gap-2">
                            <div className="inline-block rounded-xl border p-1">
                                <Button variant="outline" className="text-primary">
                                    <EyeIcon />
                                    Total : <strong className="font-bold">{totalRecord}</strong> posts
                                </Button>
                            </div>
                            <div className="inline-block rounded-xl border p-1">
                                <CalendarDatePicker
                                    variant="outline"
                                    date={selectedDateRange}
                                    onDateSelect={(range) => {
                                        setSelectedDateRange(range);
                                        onSubmit({ from_date: range.from, to_date: range.to }); // 👈 clean call
                                    }}
                                />
                            </div>
                            <form method="GET" action="/admin/posts_export" target="_blank" className="inline-block rounded-xl border p-1">
                                <input type="hidden" name="from_date" value={selectedDateRange.from.toISOString()} />
                                <input type="hidden" name="to_date" value={selectedDateRange.to.toISOString()} />
                                <input type="hidden" name="search" value={urlParams.get('search')?.toString()} />
                                <Button type="submit" variant='success'>
                                    <FileUpIcon /> Export
                                </Button>
                            </form>
                        </div>
                        {hasPermission('post create') && <MyAddNewButton url="/admin/posts/create" type="link" />}
                    </div>
                    <span className="flex-1"></span>
                    {/* <MyExportButton />
                    <MyImportButton /> */}
                </div>
            </div>
            <div className="h-2" />
            <MyTableData />
            <MyPagination />
        </AppLayout>
    );
};

export default Index;
