import { usePage } from '@inertiajs/react';
import { ReactNode } from 'react';
import MyBlogList from './components/my-blogs-list';
import MyBrandList from './components/my-brand-list';
import MyMiddleSlide from './components/my-middle-slide';
import MyProductList from './components/my-product-list';
import MyProductListHeader from './components/my-product-list-header';
import MySlide from './components/my-slide';
import NokorTechLayout from './layouts/nokor-tech-layout';

interface NokorTechLayoutProps {
    children: ReactNode;
}

const Index = ({ children }: NokorTechLayoutProps) => {
    const { topBanners, middleBanners, newArrivals, categoriesWithItems, brandsWithItems } = usePage<any>().props;
    console.log(categoriesWithItems);
    return (
        <NokorTechLayout>
            <main>
                {children}

                <>
                    <div className="mx-auto mb-10 max-w-screen-xl">
                        {topBanners && <MySlide slides={topBanners} path="/assets/images/banners/thumb/" />}
                        {/* end slide */}
                        <MyProductListHeader title="New Arrivals" />
                        <MyProductList items={newArrivals} />

                        <MyMiddleSlide slides={middleBanners} path="/assets/images/banners/thumb/" />

                        {categoriesWithItems
                            .filter((category: any) => category.all_items.length > 0)
                            .map((category: any) => (
                                <div key={category.id}>
                                    <MyProductListHeader title={category.name} />
                                    <MyProductList items={category.all_items} />
                                </div>
                            ))}

                        {brandsWithItems
                            .filter((brand: any) => brand.items.length > 0)
                            .map((brand: any) => (
                                <div key={brand.id}>
                                    <MyProductListHeader title={brand.name} />
                                    <MyProductList items={brand.items} />
                                </div>
                            ))}

                        <MyBrandList />
                        <MyBlogList />
                    </div>
                    {/* <MyService /> */}
                </>
            </main>
        </NokorTechLayout>
    );
};

export default Index;
