import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";
import { ArrowRight, ArrowUpRight, CirclePlay } from "lucide-react";
import React from "react";

const MyHero = () => {
  const features = [
    {
      category: "Marketing and Sales",
      title: "Collect and enrich leads your way",
      details:
        "Take control over how and when to follow up with your leads. Store and reference leads in multiple tables and, from there, automatically send them personalized emails.",
      tutorialLink: "#",
    },
   
  
  ];
  
  return (
    <>
    <div className="min-h-screen w-full flex flex-col gap-10 items-center justify-center px-6 py-16">
      <div className="text-center max-w-2xl">
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
          Our Vission
        </h1>
        <p className="mt-6 text-[17px] md:text-lg">
          Explore a collection of Shadcn UI blocks and components, ready to
          preview and copy. Streamline your development workflow with
          easy-to-implement examples.
        </p>
        
      </div>
      <div className="w-full max-w-screen-xl mx-auto aspect-[21/9] bg-accent rounded-xl" >
        <img
          src="/assets/demo-images/02TopBackground/01_history.jpg"
          alt="Hero Image"
          className="object-cover w-full h-full rounded-xl"
        />
      </div>
    </div>
    <div className="mt-8 md:mt-16 w-full max-w-screen-xl mx-auto space-y-20">
    <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight text-center">
          Our Mission
        </h1>
            <div
              className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse"
            >
              <div className="w-full aspect-[6/4] bg-muted rounded-xl border border-border/50 basis-1/2 p-6" >
              <h4 className="my-3 text-3xl font-semibold tracking-tight">
                Explore a collection of Shadcn UI blocks and components, ready to
          preview and copy. Streamline your development workflow with
          easy-to-implement examples.
                </h4>
                <h4 className="my-3 text-3xl font-semibold tracking-tight">
                Explore a collection of Shadcn UI blocks and components, ready to
          preview and copy. Streamline your development workflow with
          easy-to-implement examples.
                </h4>
                <p className="text-muted-foreground text-[17px]">
                Explore a collection of Shadcn UI blocks and components, ready to
          preview and copy. Streamline your development workflow with
          easy-to-implement examples.
                </p>
              </div>
              <div className="w-full aspect-[6/4] bg-muted rounded-xl border border-border/50 basis-1/2 p-6">
              <h4 className="my-3 text-3xl font-semibold tracking-tight">
                Explore a collection of Shadcn UI blocks and components, ready to
          preview and copy. Streamline your development workflow with
          easy-to-implement examples.
                </h4>
                <h4 className="my-3 text-3xl font-semibold tracking-tight">
                Explore a collection of Shadcn UI blocks and components, ready to
          preview and copy. Streamline your development workflow with
          easy-to-implement examples.
                </h4>
                <p className="text-muted-foreground text-[17px]">
                Explore a collection of Shadcn UI blocks and components, ready to
          preview and copy. Streamline your development workflow with
          easy-to-implement examples.
                </p>
              </div>
            </div>
        </div>
    </>
  );
};

export default MyHero;
