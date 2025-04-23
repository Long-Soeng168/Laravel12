import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import MyProductCard from './ui/my-product-card';


const products = [
    {
        id: 1,
        instock: true,
        imageUrl: '/assets/nokor-tech/images/new-products/1.png',
        rating: 4,
        reviews: 4,
        name: 'EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One...',
        price: 499.00,
        oldPrice: 599.00,
    },
    {
        id: 2,
        instock: true,
        imageUrl: '/assets/nokor-tech/images/new-products/2.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.00,
    },
    {
        id: 3,
        instock: false,
        imageUrl: '/assets/nokor-tech/images/new-products/3.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.00,
    },
    {
        id: 4,
        instock: true,
        imageUrl: '/assets/nokor-tech/images/new-products/4.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.00,
    },
    {
        id: 5,
        instock: false,
        imageUrl: '/assets/nokor-tech/images/new-products/5.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.00,
    },
    {
        id: 6,
        instock: true,
        imageUrl: '/assets/nokor-tech/images/new-products/6.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.00,
    },
    {
        id: 7,
        instock: true,
        imageUrl: '/assets/nokor-tech/images/new-products/7.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.00,
    },
    {
        id: 8,
        instock: false,
        imageUrl: '/assets/nokor-tech/images/new-products/8.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.00,
    },
    {
        id: 9,
        instock: false,
        imageUrl: '/assets/nokor-tech/images/new-products/9.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.00,
    },
    {
        id: 10,
        instock: false,
        imageUrl: '/assets/nokor-tech/images/new-products/10.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.00,
    },
    {
        id: 11,
        instock: false,
        imageUrl: '/assets/nokor-tech/images/new-products/11.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.00,
    },
    // Add more product objects here
];


const MyProductList = () => {
    return (

        <div>
            <Carousel>
                <CarouselContent>
                    {products.map((product) => (
                        <CarouselItem key={product.id} className="basis-1/2 md:basis-1/3 xl:basis-1/6">
                            <MyProductCard
                                key={product.id} // Use a unique key here
                                product={product}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="top-1/2 left-0 bg-primary/50 rounded rounded-r-full text-white border-none transform -translate-y-1/2 z-10" />
                <CarouselNext className="  top-1/2 right-0 bg-primary/50 rounded rounded-l-full text-white border-none transform -translate-y-1/2 z-10" />
            </Carousel>
        </div>
    )
}

export default MyProductList
