import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    CardContent,
} from "@/components/ui/card"

// interface SlideItem {
//     id: number;
//     title: string;
//     link: string | null;
//     image: string;
// }

interface MySlideProps {
    slides: any;
    path?: string;
}

const MySlide: React.FC<MySlideProps> = ({ slides, path }) => {
    return (
        <Carousel className='relative px-2'>
            <CarouselContent>
                {slides.map((slide) => (
                    <CarouselItem key={slide.id}>
                        <div>
                            {slide.link ? (
                                <a href={slide.link}>
                                    <img
                                        src={`${path}${slide.image}`}
                                        alt={slide.title}
                                        className="aspect-[26/6] w-full object-cover"
                                        width={900}
                                        height={500}
                                    />
                                </a>
                            ) : (
                                <img
                                    src={`${path}${slide.image}`}
                                    alt={slide.title}
                                    className="aspect-[26/6] w-full object-cover"
                                    width={900}
                                    height={500}
                                />
                            )}
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious className="absolute top-1/2 left-4 bg-transparent text-white border-none transform -translate-y-1/2 z-10" />
            <CarouselNext className="absolute top-1/2 right-4 bg-transparent text-white border-none transform -translate-y-1/2 z-10" />
        </Carousel>
    )
}

export default MySlide
