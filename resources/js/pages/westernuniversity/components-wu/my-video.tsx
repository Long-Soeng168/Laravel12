import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Play } from 'lucide-react';
import { useEffect, useState } from 'react';

const videos = [
  {
    id: 1,
    src: 'https://www.youtube.com/embed/oFEXggeGGTM?si=v1SGPTgoiCRO-AgM',
    title: 'Video 1',
    thumb: '/assets/demo-images/02TimeLineIcons/2023.jpg',
  },
];

export default function MyVideo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      console.log(`Currently displaying: ${videos[currentIndex].title}`);
    }
  }, [currentIndex, isOpen]);

  return (
    <>
      <div className={`mx-auto my-16 max-w-screen-2xl px-4 lg:px-20`}>
        {videos.map((item, index) => (
          <div
            key={index}
            className="group relative aspect-video max-h-[500px] w-full cursor-pointer overflow-hidden rounded-2xl"
            onClick={() => {
              setCurrentIndex(index);
              setIsOpen(true);
            }}
          >
            <img
              src={item.thumb}
              alt={item.title}
              className="h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="bg-opacity-30 group-hover:bg-opacity-50 absolute inset-0 flex items-center justify-center transition-opacity duration-300">
              <div className="rounded-full bg-white/80 p-4 text-black transition-all duration-300 hover:bg-white">
                <Play size={48} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Dialog for Video */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="p-0 w-screen aspect-video sm:max-w-[80vw] max-h-full border-none bg-transparent">
          <div className="relative w-full h-full rounded-none overflow-hidden">
            {isOpen && (
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={videos[currentIndex].src}
                title={videos[currentIndex].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
