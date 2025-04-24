
import { Card } from '@/components/ui/card';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';

export function MySlide() {
    // const images = [
    //     { id: '1', image: '/assets/demo-images/Quotes1.jpg', alt: 'Slide 1', short: 'Safety and security don’t just happen; <strong>CCTV</strong> is an investment in protection', bg: '#273896' },
    //     { id: '2', image: '/assets/demo-images/Quotes2.jpg', alt: 'Slide 2', short: 'Your safety starts at the door—let an <strong>Access Control System</strong> decide who comes through.', bg: '#008080' },
    //     { id: '3', image: '/assets/demo-images/Quotes3.jpg', alt: 'Slide 3', short: 'Peace of mind begins with protection—<strong>Intrusion Alarms</strong> ensure you sleep soundly.', bg: '#36454f' },
    //     { id: '4', image: '/assets/demo-images/Quotes4.jpg', alt: 'Slide 4', short: 'The sun never send a bill—<strong>Smart Solar Energy System</strong> turn its power savings.', bg: '#008080' },
    //     { id: '5', image: '/assets/demo-images/Quotes5.jpg', alt: 'Slide 5', short: 'A smart home isn"t just about convenice—it"s about control.Automate your world with a <strong>Smart Home Automation System</strong>.', bg: '#273896' },
    // ];
    const images = [
        { id: '1', image: '/assets/westec/images/banner1.jpeg', alt: 'Slide 1', short: 'Safety and security don’t just happen; <strong>CCTV</strong> is an investment in protection', bg: '#273896' },
        { id: '2', image: '/assets/westec/images/banner2.jpeg', alt: 'Slide 2', short: 'Your safety starts at the door—let an <strong>Access Control System</strong> decide who comes through.', bg: '#008080' },
        { id: '3', image: '/assets/westec/images/banner3.jpeg', alt: 'Slide 3', short: 'Peace of mind begins with protection—<strong>Intrusion Alarms</strong> ensure you sleep soundly.', bg: '#36454f' },
        { id: '4', image: '/assets/westec/images/banner4.jpeg', alt: 'Slide 4', short: 'The sun never send a bill—<strong>Smart Solar Energy System</strong> turn its power savings.', bg: '#008080' },
        { id: '5', image: '/assets/westec/images/banner2.jpeg', alt: 'Slide 5', short: 'A smart home isn"t just about convenice—it"s about control.Automate your world with a <strong>Smart Home Automation System</strong>.', bg: '#273896' },
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
        <div className="relative mx-auto w-full max-w-full">
            {/* Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {images?.map((item) => (
                        <div key={item.id} className="flex-[0_0_100%]">
                                <img src={item.image} alt={item.alt} className="w-full h-full object-cover" />
                            {/* <Card className="relative aspect-[16/9] sm:aspect-[19/7] md:aspect-[21/7] w-full rounded-none py-0">
                                <img src={item.image} alt={item.alt} className="w-full h-full object-cover" />
                                <div className="absolute top-0 left-0 bottom-0 h-full w-[35%]" style={{ background: item.bg }}>
                                    <div className="mx-auto flex justify-center items-center max-w-screen-lg sm:max-w-screen-xl md:max-w-screen-2xl h-full px-4 sm:px-8 md:px-12">
                                        <h3 className="max-w-full text-sm text-white sm:text-lg md:text-2xl xl:text-2xl font-proxima-nova-regular" dangerouslySetInnerHTML={{ __html: item.short }} />
                                    </div>
                                </div>
                            </Card> */}
                        </div>
                    ))}
                </div>
            </div>
            {/* Dot Navigation */}
            {/* <div className="absolute bottom-2 sm:bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
                {images?.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition ${index === selectedIndex ? 'bg-[#273896]' : 'bg-gray-100'}`}
                        onClick={() => emblaApi && emblaApi.scrollTo(index)}
                    />
                ))}
            </div> */}
        </div>
    );
}
