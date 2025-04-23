import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    Card,
    CardContent,
} from "@/components/ui/card"

interface MySlideProps {
    images: string[];
}


const MySlide: React.FC<MySlideProps> = ({ images }) => {
    return (
        <Carousel className='relative px-2'>
            <CarouselContent>
                {images.map((imageSrc, index) => (
                    <CarouselItem key={index} >
                        <CardContent >
                            <img
                                src={imageSrc}
                                alt=""
                                className="aspect-[26/6] w-full object-cover"
                                width={900}
                                height={500}
                            />
                        </CardContent>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 left-4 bg-transparent text-white border-none transform -translate-y-1/2 z-10" />
            <CarouselNext className="absolute top-1/2 right-4 bg-transparent text-white border-none transform -translate-y-1/2 z-10" />
        </Carousel>
    )
}

export default MySlide
