import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { BrainIcon, ChevronLeftIcon, RocketIcon } from 'lucide-react';

export function OurJourney() {
    return (
        <Carousel
            opts={{
                align: 'start',
            }}
            className="w-full px-4 lg:px-16"
        >
            <CarouselContent className='-ml-10'>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/4 pl-10">
                        <div>
                            <div className="flex h-full w-full items-end">
                                <p className="text-primary mr-2 translate-y-[7px] text-2xl font-bold">2007</p>
                                <div className="flex flex-1 flex-col">
                                    <span className="flex justify-center py-2">
                                        <BrainIcon size={100} />
                                    </span>
                                    <div className="bg-primary h-5 w-full"></div>
                                </div>
                            </div>
                            <div className="flex h-full w-full items-end">
                                <p className="text-primary invisible mr-2 translate-y-1 text-2xl font-bold">2007</p>
                                <div className="flex flex-1 flex-col">
                                    <p className="py-1 text-2xl">A Strong Start —</p>
                                    <p className="text-sm">
                                        Launched operations, specializing in CCTV solutions, supporting schools with IT and electrical systems.
                                    </p>
                                </div>
                            </div>
                            {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-8 mt-10">
                <CarouselPrevious className="relative translate-0"/>
                <CarouselNext className="relative translate-0" />
            </div>
        </Carousel>
    );
}
