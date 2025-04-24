import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlignLeft, Laptop, MonitorSpeaker, Router } from 'lucide-react';
import { MyBrandsFilter } from '../components/my-brands-filter';
import MyProductCard from '../components/ui/my-product-card';
import NokorTechLayout from '../layouts/nokor-tech-layout';

const products = [
    {
        id: 1,
        instock: true,
        imageUrl: '/assets/nokor-tech/images/new-products/1.png',
        rating: 4,
        reviews: 4,
        name: 'EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One...',
        price: 499.0,
        oldPrice: 599.0,
    },
    {
        id: 2,
        instock: true,
        imageUrl: '/assets/nokor-tech/images/new-products/2.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.0,
    },
    {
        id: 3,
        instock: false,
        imageUrl: '/assets/nokor-tech/images/new-products/3.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.0,
    },
    {
        id: 4,
        instock: true,
        imageUrl: '/assets/nokor-tech/images/new-products/4.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.0,
    },
    {
        id: 5,
        instock: false,
        imageUrl: '/assets/nokor-tech/images/new-products/5.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.0,
    },
    {
        id: 6,
        instock: true,
        imageUrl: '/assets/nokor-tech/images/new-products/6.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.0,
    },
    {
        id: 7,
        instock: true,
        imageUrl: '/assets/nokor-tech/images/new-products/7.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.0,
    },
    {
        id: 8,
        instock: false,
        imageUrl: '/assets/nokor-tech/images/new-products/8.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.0,
    },
    {
        id: 9,
        instock: false,
        imageUrl: '/assets/nokor-tech/images/new-products/9.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.0,
    },
    {
        id: 10,
        instock: false,
        imageUrl: '/assets/nokor-tech/images/new-products/10.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.0,
    },
    {
        id: 11,
        instock: false,
        imageUrl: '/assets/nokor-tech/images/new-products/1.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.0,
    },
    // Add more product objects here
];

const Index = () => {
    return (
        <NokorTechLayout>
            <div className="mx-auto mb-8 max-w-screen-xl">
                <div className="mr-2 flex">
                    {/* start left side */}
                    <div className="hidden w-64 lg:block">
                        <div className="bg-indigo-50 px-2 pt-4">
                            <div className="flex flex-col items-center">
                                <h3 className="mb-4 text-xl font-semibold">Filters</h3>
                            </div>
                            <div>
                                <p className="text-primary flex items-center gap-1 text-sm font-semibold">
                                    <AlignLeft size={18} /> Categories
                                </p>
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        <div className="flex w-full items-center justify-between text-base">
                                            <span className="hover:text-primary flex w-full flex-1 cursor-pointer items-center gap-1 p-1 hover:underline">
                                                <Laptop />
                                                Laptop
                                            </span>
                                            <AccordionTrigger className="hover:bg-primary h-full p-2 hover:text-white"></AccordionTrigger>
                                        </div>
                                        <AccordionContent>
                                            <ul className="border-primary ml-4 border-l-2 pl-4 text-sm">
                                                <li className="cursor-pointer hover:underline">Notebook</li>
                                                <li className="cursor-pointer hover:underline">Gaming & Design</li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        <div className="flex w-full items-center justify-between text-base">
                                            <span className="hover:text-primary flex w-full flex-1 cursor-pointer items-center gap-1 p-1 hover:underline">
                                                <MonitorSpeaker />
                                                Desktop
                                            </span>
                                            <AccordionTrigger className="hover:bg-primary h-full p-2 hover:text-white"></AccordionTrigger>
                                        </div>
                                        <AccordionContent>
                                            <ul className="border-primary ml-4 border-l-2 pl-4 text-sm">
                                                <li className="cursor-pointer hover:underline">All in One PC</li>
                                                <li className="cursor-pointer hover:underline">Custom PC</li>
                                                <li className="cursor-pointer hover:underline">Used Desktop</li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        <div className="flex w-full items-center justify-between text-base">
                                            <span className="hover:text-primary flex w-full flex-1 cursor-pointer items-center gap-1 p-1 hover:underline">
                                                <Router />
                                                Network Device
                                            </span>
                                            <AccordionTrigger className="hover:bg-primary h-full p-2 hover:text-white"></AccordionTrigger>
                                        </div>
                                        <AccordionContent>
                                            <ul className="border-primary ml-4 border-l-2 pl-4 text-sm">
                                                <li className="cursor-pointer hover:underline">Router</li>
                                                <li className="cursor-pointer hover:underline">Switch</li>
                                                <li className="cursor-pointer hover:underline">Network Cable</li>
                                                <li className="cursor-pointer hover:underline">Network Connector</li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                            {/* end category  */}

                            <div className="mt-8">
                                <p className="text-primary mb-2 flex items-center gap-1 text-sm font-semibold">
                                    <AlignLeft size={18} /> Brands
                                </p>
                                <MyBrandsFilter />
                            </div>

                            <Button className="my-8 w-full">Apply Filter</Button>

                            {/* end filter name */}
                        </div>
                        {/* end brand */}
                        <div className="mt-8 w-full space-y-2">
                            <img src={'/assets/nokor-tech/images/banners/banner2.png'} alt="" width={600} height={600} />
                            <img src={'/assets/nokor-tech/images/banners/banner3.png'} alt="" width={600} height={600} />
                        </div>
                    </div>
                    {/* end left side */}

                    {/* start right side */}
                    {/* start fillter products section */}
                    <div className="flex-1">
                        <div className="mb-4 flex items-center justify-end gap-4 px-2 md:justify-between">
                            <Input
                                className="border-primary focus:border-primary hidden flex-1 rounded-full focus:border-1 md:block"
                                placeholder="Search Products..."
                            />
                            <div className="flex items-center gap-4">
                                <Select>
                                    <SelectTrigger className="w-auto rounded-full">
                                        <SelectValue placeholder="Sort By : " />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="light">Title</SelectItem>
                                        <SelectItem value="dark">Price</SelectItem>
                                        <SelectItem value="system">Post Date</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Select>
                                    <SelectTrigger className="w-auto rounded-full">
                                        <SelectValue placeholder="Per Page : " />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="10">10 Per Page</SelectItem>
                                        <SelectItem value="20">20 Per Page</SelectItem>
                                        <SelectItem value="30">30 Per Page</SelectItem>
                                        <SelectItem value="40">40 Per Page</SelectItem>
                                        <SelectItem value="50">50 Per Page</SelectItem>
                                        <SelectItem value="60">100 Per Page</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        {/* end fillter products section */}
                        <div className="flex-1 pl-4">
                            {/* start list products */}
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                                {products.map((product) => (
                                    <MyProductCard key={product.id} product={product} />
                                ))}
                            </div>
                            {/* end list products */}
                            {/* start pagination */}
                            <div className="my-16 flex justify-center">
                                <Pagination>
                                    <PaginationContent>
                                        <PaginationItem>
                                            <PaginationPrevious href="#" />
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#">1</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#" isActive>
                                                2
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#">3</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationEllipsis />
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationNext href="#" />
                                        </PaginationItem>
                                    </PaginationContent>
                                </Pagination>
                            </div>
                            {/* end pagination */}
                        </div>
                        {/* end right side */}
                    </div>
                </div>

                {/* end list products */}
            </div>
        </NokorTechLayout>
    );
};

export default Index;
