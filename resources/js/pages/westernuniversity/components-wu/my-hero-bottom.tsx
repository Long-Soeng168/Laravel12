import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";

const teamMembers = [
  {
    name: "Student A",
    title: "Founder & CEO",
    bio: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    imageUrl:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Student B",
    title: "Engineering Manager",
    bio: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    imageUrl:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Student C",
    title: "Product Manager",
    bio: "Former PM for Linear, Lambda School, and On Deck.",
    imageUrl:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Student D",
    title: "Frontend Developer",
    bio: "Former frontend dev for Linear, Coinbase, and Postscript.",
    imageUrl:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Student A",
    title: "Backend Developer",
    bio: "Lead backend dev at Clearbit. Former Clearbit and Loom.",
    imageUrl:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Student C",
    title: "Product Manager",
    bio: "Former PM for Linear, Lambda School, and On Deck.",
    imageUrl:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
 
];

const MyHeroBottom = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // Scroll right function
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // Adjust the scroll amount
        behavior: "smooth",
      });
    }
  };

  // Scroll left function
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300, // Adjust the scroll amount
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#1a187a] to-red-600">
    <div className="flex text-white flex-col justify-center py-8 sm:py-12 px-4 sm:px-10 md:px-20 max-w-screen-2xl mx-auto gap-5">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="my-10 text-4xl sm:text-5xl font-bold tracking-tight">
          Meet Our Team
        </h2>
      </div>

      {/* Scrollable container for team members */}
      <div className="w-full overflow-x-auto" ref={scrollContainerRef}>
        <div className="flex gap-24">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex-shrink-0 w-60">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full aspect-[10/16] rounded-lg object-cover bg-secondary"
                width={240}
                height={240}
              />
              <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
              <p className=" text-sm text-white">{member.title}</p>
              <p className="mt-3">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll buttons */}
      <div className="flex justify-center gap-4">
        <Button onClick={scrollLeft} className="bg-gray-600 text-white">
          <ArrowLeftCircleIcon/>
        </Button>
        <Button onClick={scrollRight} className="bg-gray-600 text-white">
        <ArrowRightCircleIcon/>
        </Button>
      </div>
    </div>
    </div>
  );
};

export default MyHeroBottom;
