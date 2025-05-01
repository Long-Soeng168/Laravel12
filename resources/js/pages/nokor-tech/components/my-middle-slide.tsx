import React from 'react';
import { CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface SlideItem {
    id: number;
    title: string;
    link: string | null;
    image: string;
}

interface MyMiddleSlideProps {
    slides: SlideItem[];
    path?: string;
}

const MyMiddleSlide: React.FC<MyMiddleSlideProps> = ({ slides, path }) => {
    return (
        <Carousel className="relative mt-10 px-2">
            <CarouselContent>
                {slides.map((slide) => (
                    <CarouselItem
                        key={slide.id}
                        className="basis-1/2 cursor-pointer pl-2 transition-all duration-500 hover:scale-95 lg:basis-1/3 lg:pl-4"
                    >
                        <div>
                            {slide.link ? (
                                <a href={slide.link}>
                                    <img
                                        src={`${path}${slide.image}`}
                                        alt={slide.title}
                                        className="aspect-video w-full object-cover"
                                        width={900}
                                        height={500}
                                    />
                                </a>
                            ) : (
                                <img
                                    src={`${path}${slide.image}`}
                                    alt={slide.title}
                                    className="aspect-video w-full object-cover"
                                    width={900}
                                    height={500}
                                />
                            )}
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious className="absolute top-1/2 left-4 z-10 -translate-y-1/2 transform border-none bg-transparent text-white" />
            <CarouselNext className="absolute top-1/2 right-4 z-10 -translate-y-1/2 transform border-none bg-transparent text-white" />
        </Carousel>
    );
};

export default MyMiddleSlide;
