'use client';
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
            <Card className="aspect-[4/5] w-full border-0 py-0">
              <img src={item.image} alt={item.alt} className="h-full w-full rounded-2xl object-cover" />
            </Card>
            <div className="mt-5 flex transform justify-center space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full transition sm:h-3 sm:w-3 ${index === selectedIndex ? 'bg-gray-500' : 'bg-gray-200'}`}
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

export function MyContentWithSlide() {
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
      <div className="mx-auto mb-10 flex max-w-screen-2xl flex-col justify-center gap-16 px-4 sm:px-10 py-8 sm:py-12 md:px-20">
        <div className="grid w-full grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3">
          <div className="mx-auto w-full max-w-full">
            <Carousel images={images1} />
            <div className="text-blue-900">
              <h3 className="mt-4 text-4xl font-semibold">Quality Education</h3>
              <p className="mt-6 text-xl">
                Access to quality teachers; Use of quality learning materials and professional development; Quality education is education that focuses on
              </p>
            </div>
            <div className="mt-10 text-blue-900">
              <Link href="#" className="border-2 text-xl hover:cursor-pointer border-blue-900 px-8 rounded-md font-now-alt-medium py-4">
                Read more
              </Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-full">
            <Carousel images={images2} />
            <div className="text-blue-900">
              <h3 className="mt-4 text-4xl font-semibold">Quality Education</h3>
              <p className="mt-6 text-xl">
                Access to quality teachers; Use of quality learning materials and professional development; Quality education is education that focuses on
              </p>
            </div>
            <div className="mt-10 text-blue-900">
              <Link href="#" className="border-2 text-xl hover:cursor-pointer border-blue-900 px-8 rounded-md font-now-alt-medium py-4">
                Read more
              </Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-full">
            <Carousel images={images3} />
            <div className="text-blue-900">
              <h3 className="mt-4 text-4xl font-semibold">Quality Education</h3>
              <p className="mt-6 text-xl">
                Access to quality teachers; Use of quality learning materials and professional development; Quality education is education that focuses on
              </p>
            </div>
            <div className="mt-10 text-blue-900">
              <Link href="#" className="border-2 text-xl hover:cursor-pointer border-blue-900 px-8 rounded-md font-now-alt-medium py-4">
                Read more
              </Link>
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 mt-6 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3">
        <div className="mx-auto w-full max-w-full">
            <Carousel images={images1} />
            <div className="text-red-700">
              <h3 className="mt-4 text-4xl font-semibold">Quality Education</h3>
              <p className="mt-6 text-xl">
                Access to quality teachers; Use of quality learning materials and professional development; Quality education is education that focuses on
              </p>
            </div>
            <div className="mt-10 text-red-700">
              <Link href="#" className="border-2 text-xl hover:cursor-pointer border-red-700 px-8 rounded-md font-now-alt-medium py-4">
                Read more
              </Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-full">
            <Carousel images={images2} />
            <div className="text-red-700">
              <h3 className="mt-4 text-4xl font-semibold">Quality Education</h3>
              <p className="mt-6 text-xl">
                Access to quality teachers; Use of quality learning materials and professional development; Quality education is education that focuses on
              </p>
            </div>
            <div className="mt-10 text-red-700">
              <Link href="#" className="border-2 text-xl hover:cursor-pointer border-red-700 px-8 rounded-md font-now-alt-medium py-4">
                Read more
              </Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-full">
            <Carousel images={images3} />
            <div className="text-red-700">
              <h3 className="mt-4 text-4xl font-semibold">Quality Education</h3>
              <p className="mt-6 text-xl">
                Access to quality teachers; Use of quality learning materials and professional development; Quality education is education that focuses on
              </p>
            </div>
            <div className="mt-10 text-red-700">
              <Link href="#" className="border-2 text-xl hover:cursor-pointer border-red-700 px-8 rounded-md font-now-alt-medium py-4">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
