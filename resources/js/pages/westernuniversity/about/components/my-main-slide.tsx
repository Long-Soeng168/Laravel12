'use client';
import { Card } from '@/components/ui/card';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';

export function MyMainSlide() {
    const images = [
        { id: '1', image: '/assets/demo-images/02TopBackground/02 School Facilities.jpg', alt: 'Slide 1' },
        { id: '2', image: '/assets/demo-images/02TopBackground/03 Campuses.jpg', alt: 'Slide 2' },
        { id: '2', image: '/assets/demo-images/02TopBackground/04 Curriculum.jpg', alt: 'Slide 2' },
        { id: '2', image: '/assets/demo-images/02TopBackground/03 Campuses.jpg', alt: 'Slide 2' },
    ];

   const [selectedIndex, setSelectedIndex] = useState(0);
       const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 6000, stopOnInteraction: false })]);

       useEffect(() => {
           if (!emblaApi) return;
           const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
           emblaApi.on('select', onSelect);
           onSelect();
       }, [emblaApi]);

       return (
           <div className="relative mx-auto w-full h-full rounded-2xl">
               {/* Carousel */}
               <div className="overflow-hidden aspect-video w-full h-full rounded-2xl" ref={emblaRef}>
                   <div className="flex aspect-video w-full h-full rounded-2xl">
                       {images?.map((item) => (
                           <div key={item.id} className="flex-[0_0_100%]">
                               <div className="relative aspect-video w-full h-full rounded-2xl">
                                   <img src={item.image} alt={item.alt} className="w-full  h-full aspect-video object-cover rounded-2xl" />
                               </div>
                           </div>
                       ))}
                   </div>
               </div>
               {/* Dot Navigation */}
               <div className="absolute bottom-2 sm:-bottom-10 left-1/2 flex -translate-x-1/2 transform space-x-2">
                   {images?.map((_, index) => (
                       <button
                           key={index}
                           className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition ${index === selectedIndex ? 'bg-white' : 'border'}`}
                           onClick={() => emblaApi && emblaApi.scrollTo(index)}
                       />
                   ))}
               </div>
           </div>
       );
}
