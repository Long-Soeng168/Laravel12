import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";
import { ArrowUpRight, DribbbleIcon, TwitchIcon, TwitterIcon } from "lucide-react";


const teamMembers = [
  {
    name: "Reaching Hearts, Changing Lives",
    bio: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    imageUrl:
    "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Extending a Helping Hand",
    bio: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    imageUrl:
    "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Spreading Hope, One Program at a Time",
    bio: "Lead backend dev at Clearbit. Former Clearbit and Loom.",
    imageUrl:
    "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Empowering Futures Through Outreach",
    bio: "Founding design team at Figma. Former Pleo, Stripe, and Tile.",
    imageUrl:
    "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "  Connecting Communities Through Education",
    bio: "Lead user research for Slack. Contractor for Netflix and Udacity.",
    imageUrl:
    "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "  Expanding Horizons: Our Outreach Initiatives",
    bio: "Lead CX at Wealthsimple. Former PagerDuty and Sqreen.",
    imageUrl:
    "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "  Building Bridges Through Outreach",
    bio: "Former marketing lead at Notion. Early team at Dropbox.",
    imageUrl:
      "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "  Empowering Communities Through Outreach",
    bio: "Former sales lead at Intercom. Early team at Stripe.",
    imageUrl:
      "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

];

const MyOutreachProgram = () => {
  return (
    <div className="flex flex-col justify-center py-8 sm:py-12 px-6 lg:px-8 max-w-screen-xl mx-auto gap-16">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
        Outreach Programs
        </h2>
        <p className="mt-6 text-base sm:text-lg">
          Our philosophy is simple — hire a team of diverse, passionate people
          and foster a culture that empowers you to do you best work.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
        {teamMembers.map((member) => (
          <div key={member.name} className="hover:scale-105 transition-all duration-500">
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-full aspect-square rounded-lg object-cover bg-secondary"
              width={600}
              height={600}
            />
            <h3 className="mt-4 text-lg font-semibold line-clamp-2">{member.name}</h3>
            <p className="mt-3 line-clamp-3">{member.bio}</p>
            <div className="mt-4 flex items-center gap-2.5">
            <Button size="lg" className="rounded-md p-4 shadow-lg bg-white text-black border-2 border-black hover:bg-blue-900 hover:text-white transition-all duration-500 text-base">
              <Link href="/history_and_values">Learn More </Link> <ArrowUpRight className="!h-5 !w-5" />
            </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOutreachProgram;
