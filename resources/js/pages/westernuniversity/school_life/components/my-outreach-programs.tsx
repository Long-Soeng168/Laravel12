import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';

const MyOutreachPrograms = () => {
    const images = [
        { id: '1', image: '/assets/demo-images/02TimeLineIcons/2021.jpg', alt: 'Slide 1' },
        { id: '3', image: '/assets/demo-images/02TimeLineIcons/2022.jpg', alt: 'Slide 3' },
        { id: '4', image: '/assets/demo-images/02TimeLineIcons/2023.jpg', alt: 'Slide 4' },
    ];
    const images1 = [
        { id: '1', image: '/assets/demo-images/02TimeLineIcons/2018.jpg', alt: 'Slide 1' },
        { id: '3', image: '/assets/demo-images/02TimeLineIcons/2019.jpg', alt: 'Slide 3' },
        { id: '4', image: '/assets/demo-images/02TimeLineIcons/2015.jpg', alt: 'Slide 4' },
    ];
    const images2 = [
        { id: '1', image: '/assets/demo-images/02TimeLineIcons/2010.jpg', alt: 'Slide 1' },
        { id: '3', image: '/assets/demo-images/02TimeLineIcons/2011.jpg', alt: 'Slide 3' },
        { id: '4', image: '/assets/demo-images/02TimeLineIcons/2012.jpg', alt: 'Slide 4' },
    ];

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);

    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        emblaApi.on('select', onSelect);
        onSelect();
    }, [emblaApi]);

    return (
        <div>
            {/* Introduction */}
            <div className="mx-auto my-16 max-w-6xl text-start">
                <p className="text-lg text-green-900 md:text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsum officia animi ex similique aliquam fugiat minima. Ut
                    ducimus hic aut reiciendis quos quod.
                </p>
            </div>
            <div className="mx-auto max-w-screen-2xl bg-gray-200 px-4 py-20 lg:px-20">
                    {/* item1 */}
                    <div>
                        {/* Carousel */}
                        <div className="relative mb-16">
                            <div ref={emblaRef} className="overflow-hidden rounded-xl shadow-lg">
                                <div className="embla__container flex">
                                    {images.map((item, index) => (
                                        <div className="embla__slide aspect-[21/9] flex-[0_0_100%]" key={item.id}>
                                            <img src={item.image} alt={item.alt} className="h-full w-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Dot Navigation */}
                            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 space-x-2 sm:-bottom-6">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`h-3 w-3 rounded-full border border-gray-400 transition ${
                                            index === selectedIndex ? 'bg-gray-400' : 'bg-gray-100'
                                        }`}
                                        onClick={() => emblaApi && emblaApi.scrollTo(index)}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Vision Section */}
                        <div className="mx-auto max-w-6xl text-center md:text-left mb-16">
                            <h3 className="mb-6 text-3xl md:text-4xl">Our Vision</h3>
                            <p className="mb-4 text-lg md:text-xl">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsum officia animi ex similique aliquam fugiat
                                minima. Ut ducimus hic aut reiciendis quos quod.
                            </p>
                            <p className="text-lg md:text-xl">
                                Cupiditate ea voluptas libero perspiciatis obcaecati quia ipsa accusamus exercitationem totam corrupti, dolore vero
                                architecto voluptate officia voluptatibus aspernatur sunt quae fugiat.
                            </p>
                        </div>
                    </div>
                    {/*End item1 */}
                      {/* item1 */}
                      <div>
                        {/* Carousel */}
                        <div className="relative mb-16">
                            <div ref={emblaRef} className="overflow-hidden rounded-xl shadow-lg">
                                <div className="embla__container flex">
                                    {images1.map((item, index) => (
                                        <div className="embla__slide aspect-[21/9] flex-[0_0_100%]" key={item.id}>
                                            <img src={item.image} alt={item.alt} className="h-full w-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Dot Navigation */}
                            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 space-x-2 sm:-bottom-6">
                                {images1.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`h-3 w-3 rounded-full border border-gray-400 transition ${
                                            index === selectedIndex ? 'bg-gray-400' : 'bg-gray-100'
                                        }`}
                                        onClick={() => emblaApi && emblaApi.scrollTo(index)}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Vision Section */}
                        <div className="mx-auto max-w-6xl text-center md:text-left mb-16">
                            <h3 className="mb-6 text-3xl md:text-4xl">Our Vision</h3>
                            <p className="mb-4 text-lg md:text-xl">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsum officia animi ex similique aliquam fugiat
                                minima. Ut ducimus hic aut reiciendis quos quod.
                            </p>
                            <p className="text-lg md:text-xl">
                                Cupiditate ea voluptas libero perspiciatis obcaecati quia ipsa accusamus exercitationem totam corrupti, dolore vero
                                architecto voluptate officia voluptatibus aspernatur sunt quae fugiat.
                            </p>
                        </div>
                    </div>
                    {/*End item1 */}
                      {/* item1 */}
                      <div>
                        {/* Carousel */}
                        <div className="relative mb-16">
                            <div ref={emblaRef} className="overflow-hidden rounded-xl shadow-lg">
                                <div className="embla__container flex">
                                    {images2.map((item, index) => (
                                        <div className="embla__slide aspect-[21/9] flex-[0_0_100%]" key={item.id}>
                                            <img src={item.image} alt={item.alt} className="h-full w-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Dot Navigation */}
                            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 space-x-2 sm:-bottom-6">
                                {images2.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`h-3 w-3 rounded-full border border-gray-400 transition ${
                                            index === selectedIndex ? 'bg-gray-400' : 'bg-gray-100'
                                        }`}
                                        onClick={() => emblaApi && emblaApi.scrollTo(index)}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Vision Section */}
                        <div className="mx-auto max-w-6xl text-center md:text-left mb-16">
                            <h3 className="mb-6 text-3xl md:text-4xl">Our Vision</h3>
                            <p className="mb-4 text-lg md:text-xl">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsum officia animi ex similique aliquam fugiat
                                minima. Ut ducimus hic aut reiciendis quos quod.
                            </p>
                            <p className="text-lg md:text-xl">
                                Cupiditate ea voluptas libero perspiciatis obcaecati quia ipsa accusamus exercitationem totam corrupti, dolore vero
                                architecto voluptate officia voluptatibus aspernatur sunt quae fugiat.
                            </p>
                        </div>
                    </div>
                    {/*End item1 */}
            </div>
        </div>
    );
};

export default MyOutreachPrograms;
