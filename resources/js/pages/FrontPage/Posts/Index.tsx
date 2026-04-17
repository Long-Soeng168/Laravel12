import { PostCard } from '@/components/Card/PostCard';
import LoadingOnPrefetch from '@/components/Loading/LoadingOnPrefetch';
import PaginationTabs from '@/components/Pagination/PaginationTabs';
import TableDataSearch from '@/components/Search/TableDataSearch';
import { TagFilter } from '@/components/tag-filter';
import useTranslation from '@/hooks/use-translation';
import FrontPageLayout from '@/pages/layouts/FrontPageLayout';
import { usePage } from '@inertiajs/react';

const Index = () => {
    const { tableData, totalDataCount, categories } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();

    return (
        <FrontPageLayout>
            <div className="section-container relative min-h-screen">
                {/* Header Section */}
                <div className="relative z-10 flex min-h-[100px] flex-col justify-center gap-6 pt-10">
                    <div className="section-container mx-auto w-full">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-4xl font-medium tracking-tighter md:text-5xl">{t('Posts')}</h1>
                        </div>
                    </div>
                </div>
                <div className="section-container mt-4 flex flex-1">
                    <TableDataSearch className="rounded-none" placeholder={t('Search Posts...')} />
                </div>
                <div className="h-6">
                    <LoadingOnPrefetch />
                </div>
                {categories.length > 0 && (
                    <div className="section-container z-20 mx-auto mb-6 w-full">
                        <TagFilter tags={[{ name: t('All Category'), code: '', posts_count: totalDataCount }, ...categories]} />
                    </div>
                )}

                {/* Blog List */}
                <div className="section-container mb-10">
                    <div className={`relative grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3`}>
                        {tableData?.data?.map((item: any) => {
                            return <PostCard key={item.id} post={item} />;
                        })}
                    </div>

                    <PaginationTabs containerClassName="px-0" />
                </div>
            </div>
        </FrontPageLayout>
    );
};

export default Index;
