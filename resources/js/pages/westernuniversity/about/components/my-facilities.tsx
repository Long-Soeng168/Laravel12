import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';

const MyFacilities = ({ schoolFacilities }) => {
    let evenCount = 0;

    return (
        <div>
            {schoolFacilities?.children?.map((item) => {
                let customBg = 'bg-white text-gray-800'; // default

                if (item.id % 2 === 0) {
                    evenCount++;
                    if (evenCount === 1) {
                        customBg = 'bg-[#22207e] text-white';
                    } else if (evenCount === 2) {
                        customBg = 'bg-gradient-to-b from-[#318AF0] to-[#34ACED] text-white';
                    } else if (evenCount === 3) {
                        customBg = 'bg-white text-red-500';
                    } else if (evenCount === 4) {
                        customBg = 'bg-gray-150 text-gray-800';
                    }
                }

                return (
                    <FacilitySection
                        key={item.code}
                        item={item}
                        customBg={customBg}
                    />
                );
            })}
        </div>
    );
};

const FacilitySection = ({ item, customBg }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true },
        [Autoplay({ delay: 3000, stopOnInteraction: false })]
    );

    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        emblaApi.on('select', onSelect);
        onSelect();
    }, [emblaApi]);

    return (
        <div className={`flex min-h-screen w-full flex-col items-center justify-center gap-10 px-6 py-16 ${customBg}`}>
            <div className="max-w-2xl text-center">
                <h1 className="mt-6 text-4xl !leading-[1.2] tracking-tight sm:text-5xl md:text-6xl">
                    {item.title}
                </h1>
            </div>

            <div className="relative">
                <div className="bg-accent mx-auto w-full max-w-screen-xl overflow-hidden rounded-xl" ref={emblaRef}>
                    <div className="embla__container flex">
                        {item?.images?.map((img, index) => (
                            <div key={img.code || index} className="embla__slide aspect-[21/9] flex-[0_0_100%]">
                                <img
                                    src={`/assets/images/pages/thumb/${img.image}`}
                                    alt={img.alt || 'image'}
                                    className="h-full w-full rounded-xl object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Dot Navigation */}
                    {emblaApi && item?.images?.length > 1 && (
                        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 space-x-2 sm:-bottom-10">
                            {item.images.map((_, index) => (
                                <button
                                    key={index}
                                    className={`h-2 w-2 rounded-full transition sm:h-3 sm:w-3 ${
                                        index === selectedIndex ? 'bg-gray-600' : 'border'
                                    }`}
                                    onClick={() => emblaApi.scrollTo(index)}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="max-w-5xl text-start font-now-regular">
                <p
                    className="mt-6 text-[17px] md:text-2xl"
                    dangerouslySetInnerHTML={{ __html: item.long_description }}
                ></p>
            </div>
        </div>
    );
};

export default MyFacilities;
