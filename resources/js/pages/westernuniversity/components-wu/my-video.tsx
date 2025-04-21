
import{ useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent } from "./ui/dialog";

const videos = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/ILRs2r6lcHY?si=zxxTKdVhSCOb5HYG",
    title: "Video 1",
    thumb: "/assets/demo-images/banner5.jpg",
  },
//   {
//     id: 3,
//     src: "https://www.youtube.com/embed/J0NuOlA2xDc?si=IiGdSgybkKc3-Uem",
//     title: "Video 2",
//     thumb: "/assets/demo-images/banner4.jpg",
//   },
 
];

export default function MyVideo({ className }: {className:any}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      console.log(`Currently displaying: ${videos[currentIndex].title}`);
    }
  }, [currentIndex, isOpen]);

  const isIframe = (src) => src.includes("<iframe");

  const nextSlide = () => {
    if (currentIndex < videos.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <>
      <div className={`max-w-screen-2xl px-4 lg:px-20 mx-auto gap-2 my-16 ${className}`}>
        {videos.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer aspect-video w-full h-[500px] group"
            onClick={() => {
              setCurrentIndex(index);
              setIsOpen(true);
            }}
          >
            <div className="w-full relative h-full bg-black rounded-xl overflow-hidden">
              <img
                src={item.thumb}
                alt={item.title}
                className="w-full object-cover aspect-video transition-all duration-300 transform group-hover:scale-105"
              />
              <span className="absolute -translate-x-1/2  rounded-full p-2 -translate-y-1/2 text-white top-[50%] left-[50%]">
                <Play size={100} />
                
              </span>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className={`p-10 sm:p-10 md:p20 w-full border-none h-full flex flex-col`}>
          <div className="relative flex-grow">
            {isIframe(videos[currentIndex].src) ? (
              <div
                className="w-full h-full rounded-2xl"
                dangerouslySetInnerHTML={{ __html: videos[currentIndex].src }}
              />
            ) : (
              <video
                controls
                autoPlay
                className="w-full h-full rounded-2xl"
                src={videos[currentIndex].src}
              />
            )}
          </div>

          {/* <Button
            variant="ghost"
            size="icon"
            className="absolute group top-1/2 left-2 transform -translate-y-1/2"
            onClick={prevSlide}
            aria-label="Previous video"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="text-black group-hover:text-black" size={50} />
          </Button> */}

          {/* <Button
            variant="ghost"
            size="icon"
            className="absolute group top-1/2 right-2 transform -translate-y-1/2"
            onClick={nextSlide}
            aria-label="Next video"
            disabled={currentIndex === videos.length - 1}
          >
            <ChevronRight className="text-black group-hover:text-black" size={50} />
          </Button> */}
        </DialogContent>
      </Dialog>
    </>
  );
}
