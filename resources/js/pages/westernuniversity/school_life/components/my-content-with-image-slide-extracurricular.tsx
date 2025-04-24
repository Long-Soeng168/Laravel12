
import { Card } from '@/components/ui/card';
import { Link } from '@inertiajs/react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';

const Carousel = ({ images }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 6000, stopOnInteraction: false })]);

    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        emblaApi.on('select', onSelect);
        onSelect();
    }, [emblaApi]);

    return (
        <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
                {images.map((item) => (
                    <div key={item.id} className="flex-[0_0_100%]">
                        <Card className="aspect-[4/5] rounded-2xl w-full border-0 py-0">
                            <img src={item.image} alt={item.alt} className="h-full w-full rounded-2xl object-cover" />
                        </Card>
                        <div className="mt-5 flex transform justify-center space-x-2">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    className={`h-2 w-2 rounded-full transition sm:h-3 sm:w-3 ${index === selectedIndex ? 'bg-white' : 'bg-gray-500'}`}
                                    onClick={() => emblaApi && emblaApi.scrollTo(index)}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Carousel1 = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 6000, stopOnInteraction: false })]);

  useEffect(() => {
      if (!emblaApi) return;
      const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
      emblaApi.on('select', onSelect);
      onSelect();
  }, [emblaApi]);

  return (
      <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
              {images.map((item) => (
                  <div key={item.id} className="flex-[0_0_100%]">
                      <Card className="aspect-video rounded-2xl w-full border-0 py-0">
                          <img src={item.image} alt={item.alt} className="h-full w-full rounded-2xl object-cover" />
                      </Card>
                      <div className="mt-5 flex transform justify-center space-x-2">
                          {images.map((_, index) => (
                              <button
                                  key={index}
                                  className={`h-2 w-2 rounded-full transition sm:h-3 sm:w-3 ${index === selectedIndex ? 'bg-white' : 'bg-gray-500'}`}
                                  onClick={() => emblaApi && emblaApi.scrollTo(index)}
                              />
                          ))}
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
};



export function MyContentWithSlideExtracurricular() {
    const images1 = [
        {
            id: '1',
            image: '/assets/demo-images/Quotes1.jpg',
            alt: 'Slide 1',
            short: 'Safety and security don’t just happen; <strong>CCTV</strong> is an investment in protection',
            bg: '#273896',
        },
        {
            id: '2',
            image: '/assets/demo-images/Quotes2.jpg',
            alt: 'Slide 2',
            short: 'Your safety starts at the door—let an <strong>Access Control System</strong> decide who comes through.',
            bg: '#008080',
        },
        {
            id: '3',
            image: '/assets/demo-images/Quotes3.jpg',
            alt: 'Slide 3',
            short: 'Peace of mind begins with protection—<strong>Intrusion Alarms</strong> ensure you sleep soundly.',
            bg: '#36454f',
        },
    ];

    const images2 = [
        {
            id: '1',
            image: '/assets/demo-images/banner1.png',
            alt: 'Slide 1',
            short: 'Safety and security don’t just happen; <strong>CCTV</strong> is an investment in protection',
            bg: '#273896',
        },
        {
            id: '2',
            image: '/assets/demo-images/banner5.jpg',
            alt: 'Slide 2',
            short: 'Your safety starts at the door—let an <strong>Access Control System</strong> decide who comes through.',
            bg: '#008080',
        },
        {
            id: '3',
            image: '/assets/demo-images/banner4.jpg',
            alt: 'Slide 3',
            short: 'Peace of mind begins with protection—<strong>Intrusion Alarms</strong> ensure you sleep soundly.',
            bg: '#36454f',
        },
    ];

    const images3 = [
        {
            id: '1',
            image: '/assets/demo-images/Quotes1.jpg',
            alt: 'Slide 1',
            short: 'Safety and security don’t just happen; <strong>CCTV</strong> is an investment in protection',
            bg: '#273896',
        },
        {
            id: '2',
            image: '/assets/demo-images/Quotes2.jpg',
            alt: 'Slide 2',
            short: 'Your safety starts at the door—let an <strong>Access Control System</strong> decide who comes through.',
            bg: '#008080',
        },
        {
            id: '3',
            image: '/assets/demo-images/Quotes3.jpg',
            alt: 'Slide 3',
            short: 'Peace of mind begins with protection—<strong>Intrusion Alarms</strong> ensure you sleep soundly.',
            bg: '#36454f',
        },
    ];
    return (
        <>
            <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-center gap-16 bg-gradient-to-b from-[#023506] to-[#012405] px-4 py-8 sm:px-10 sm:py-16 md:px-20">
                <div className="max-w-6xl text-start text-white">
                    <p className="mt-6 text-[17px] md:text-2xl">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsum officia animi ex similique aliquam fugiat minima. Ut
                        ducimus hic aut reiciendis quos quod, cupiditate ea voluptas libero perspiciatis obcaecati quia ipsa accusamus exercitationem
                        totam corrupti, dolore vero architecto voluptate officia voluptatibus aspernatur sunt quae fugiat?
                    </p>
                </div>
                <div className="grid w-full grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2 xl:grid-cols-3">
                    <div className="mx-auto w-full max-w-full">
                        <Carousel images={images1} />
                        <div className="text-white">
                            <h3 className="mt-4 text-center text-4xl font-semibold">Quality Education</h3>
                            <p className="mt-6 text-xl">
                                Access to quality teachers; Use of quality learning materials and professional development; Quality education is
                                education that focuses on
                            </p>
                        </div>
                        <Link href="#" className="mt-10 w-full block text-center text-white font-now-alt-medium rounded-md border-2 border-white px-8 py-4 text-xl hover:cursor-pointer transition-transform duration-300 hover:-translate-y-1">
                                Read more
                            </Link>
                    </div>
                    <div className="mx-auto w-full max-w-full">
                        <Carousel images={images2} />
                        <div className="text-white">
                            <h3 className="mt-4 text-center text-4xl font-semibold">Quality Education</h3>
                            <p className="mt-6 text-xl">
                                Access to quality teachers; Use of quality learning materials and professional development; Quality education is
                                education that focuses on
                            </p>
                        </div>
                        <Link href="#" className="mt-10 w-full block text-center text-white font-now-alt-medium rounded-md border-2 border-white px-8 py-4 text-xl hover:cursor-pointer transition-transform duration-300 hover:-translate-y-1">
                                Read more
                            </Link>
                    </div>
                    <div className="mx-auto w-full max-w-full">
                        <Carousel images={images3} />
                        <div className="text-white">
                            <h3 className="mt-4 text-center text-4xl font-semibold">Quality Education</h3>
                            <p className="mt-6 text-xl">
                                Access to quality teachers; Use of quality learning materials and professional development; Quality education is
                                education that focuses on
                            </p>
                        </div>
                        <Link href="#" className="mt-10 w-full block text-center text-white font-now-alt-medium rounded-md border-2 border-white px-8 py-4 text-xl hover:cursor-pointer transition-transform duration-300 hover:-translate-y-1">
                                Read more
                            </Link>
                    </div>
                </div>
                <div className="grid w-full grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2 mt-10">
                    <div className="mx-auto w-full max-w-full">
                        <Carousel1  images={images1} />
                        <div className="text-white">
                            <h3 className="mt-4 text-center text-4xl font-semibold">Quality Education</h3>
                            <p className="mt-6 text-xl">
                                Access to quality teachers; Use of quality learning materials and professional development; Quality education is
                                education that focuses on
                            </p>
                        </div>
                        <Link href="#" className="mt-10 w-full block text-center text-white font-now-alt-medium rounded-md border-2 border-white px-8 py-4 text-xl hover:cursor-pointer transition-transform duration-300 hover:-translate-y-1">
                                Read more
                            </Link>
                    </div>
                    <div className="mx-auto w-full max-w-full">
                        <Carousel1 images={images2} />
                        <div className="text-white">
                            <h3 className="mt-4 text-center text-4xl font-semibold">Quality Education</h3>
                            <p className="mt-6 text-xl">
                                Access to quality teachers; Use of quality learning materials and professional development; Quality education is
                                education that focuses on
                            </p>
                        </div>
                            <Link href="#" className="mt-10 w-full block text-center text-white font-now-alt-medium rounded-md border-2 border-white px-8 py-4 text-xl hover:cursor-pointer transition-transform duration-300 hover:-translate-y-1">
                                Read more
                            </Link>
                    </div>
                    
                </div>
            </div>
        </>
    );
}
