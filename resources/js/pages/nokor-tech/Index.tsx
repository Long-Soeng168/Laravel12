import { ReactNode } from 'react';
import MyBlogList from './components/my-blogs-list';
import MyBrandList from './components/my-brand-list';
import MyMiddleSlide from './components/my-middle-slide';
import MyProductList from './components/my-product-list';
import MyProductListBrands from './components/my-product-list-brands';
import MyProductListCategories from './components/my-product-list-categories';
import MyProductListHeader from './components/my-product-list-header';
import MySlide from './components/my-slide';
import NokorTechLayout from './layouts/nokor-tech-layout';

interface NokorTechLayoutProps {
    children: ReactNode;
}

const Index = ({ children }: NokorTechLayoutProps) => {
    return (
        <NokorTechLayout>
            <main>
                {children}

                <>
                    <div className="mx-auto mb-10 max-w-screen-xl">
                        {/* start slide */}
                        <MySlide
                            images={[
                                '/assets/nokor-tech/images/slides/slide1.png',
                                '/assets/nokor-tech/images/slides/slide2.png',
                                '/assets/nokor-tech/images/slides/slide3.png',
                            ]}
                        />
                        {/* end slide */}
                        <MyProductListHeader title="New Arrivals" />
                        <MyProductList />

                        <MyMiddleSlide
                            images={[
                                '/assets/nokor-tech/images/slides/slide7.png',
                                '/assets/nokor-tech/images/slides/slide5.png',
                                '/assets/nokor-tech/images/slides/slide8.png',
                                '/assets/nokor-tech/images/slides/slide6.png',
                            ]}
                        />

                        <MyProductListCategories />
                        <MyProductListBrands />

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
