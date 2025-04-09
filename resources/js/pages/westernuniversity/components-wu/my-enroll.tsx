import { Link } from "@inertiajs/react";
import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";

const MyEnroll = () => (
  <div className="flex items-center justify-center pt-12 md:pt-16 pb-16">
    <div className="w-full max-w-screen-xl mx-auto px-6 xl:px-0">
      <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-center text-blue-700">
        How to Enroll your child
      </h2>
      <div className="mt-14 md:mt-24 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div className="flex flex-col items-center">
          <div className=" w-36 flex items-center justify-center text-primary ">
            <img src="assets/demo-images/photo2.png"/>
          </div>
          <h3 className="mt-4 text-blue-800 text-xl">Email</h3>
        </div>
        <div className="flex flex-col items-center">
          <div className=" w-36 flex items-center justify-center text-primary ">
            <img src="assets/demo-images/photo2.png"/>
          </div>
          <h3 className="mt-4 text-blue-800 text-xl">Email</h3>
        </div>
        <div className="flex flex-col items-center">
          <div className=" w-36 flex items-center justify-center text-primary ">
            <img src="assets/demo-images/photo2.png"/>
          </div>
          <h3 className="mt-4 text-blue-800 text-xl">Email</h3>
        </div>
        <div className="flex flex-col items-center">
          <div className=" w-36 flex items-center justify-center text-primary ">
            <img src="assets/demo-images/photo2.png"/>
          </div>
          <h3 className="mt-4 text-blue-800 text-xl">Email</h3>
        </div>
        
      </div>
    </div>
  </div>
);

export default MyEnroll;
