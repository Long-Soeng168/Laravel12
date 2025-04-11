import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import React from "react";

const MyAdmissionFeature = () => {
  return (
    <>
    <div className="flex items-center justify-center">
        <div className="bg-red-600 w-full"> <div className="max-w-screen-xl w-full  text-white mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12">
        <div>
          <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2]">
            Customized Shadcn UI Blocks & Components
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg">
            Explore a collection of Shadcn UI blocks and components, ready to
            preview and copy. Streamline your development workflow with
            easy-to-implement examples.
          </p>
          
        </div>
        <div className="w-full aspect-video rounded-2xl" >
            <img src="/assets/demo-images/02TopBackground/02 School Facilities.jpg" className="rounded-2xl"/>
        </div>
      </div></div>
     
    </div>

    <div className="flex items-center justify-center">
        <div> <div className="max-w-screen-xl w-full  text-blue-900 mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12">
        <div>
          <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2]">
            Customized Shadcn UI Blocks & Components
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg">
            Explore a collection of Shadcn UI blocks and components, ready to
            preview and copy. Streamline your development workflow with
            easy-to-implement examples.
          </p>
        <Button>Donwload Now</Button>
          
        </div>
        <div className="w-full aspect-video rounded-2xl" >
            <img src="/assets/demo-images/02TopBackground/02 School Facilities.jpg" className="rounded-2xl"/>
        </div>
      </div></div>

      
     
    </div>
    <div className="bg-blue-900 w-full"> <div className="max-w-screen-xl w-full  text-white mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12">
        <div>
          <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2]">
            Customized Shadcn UI Blocks & Components
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg">
            Explore a collection of Shadcn UI blocks and components, ready to
            preview and copy. Streamline your development workflow with
            easy-to-implement examples.
          </p>
          
        </div>
        <div className="w-full aspect-video rounded-2xl" >
            <img src="/assets/demo-images/02TopBackground/02 School Facilities.jpg" className="rounded-2xl"/>
        </div>
      </div></div>
    </>
  );
};

export default MyAdmissionFeature;
