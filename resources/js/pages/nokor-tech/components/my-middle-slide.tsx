import { CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import React from 'react';

interface MyMiddleSlideProps {
    images: string[];
}

const MyMiddleSlide: React.FC<MyMiddleSlideProps> = ({ images }) => {
    return (
        <Carousel className="relative mt-10 px-2">
            <CarouselContent>
                {images.map((imageSrc, index) => (
                    <CarouselItem
                        key={index}
                        className="basis-1/2 cursor-pointer pl-2 transition-all duration-500 hover:scale-95 lg:basis-1/3 lg:pl-4"
                    >
                        <CardContent>
                            <img src={imageSrc} alt="" className="aspect-video w-full object-cover" width={900} height={500} />
                        </CardContent>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 left-4 z-10 -translate-y-1/2 transform border-none bg-transparent text-white" />
            <CarouselNext className="absolute top-1/2 right-4 z-10 -translate-y-1/2 transform border-none bg-transparent text-white" />
        </Carousel>
    );
};

export default MyMiddleSlide;
