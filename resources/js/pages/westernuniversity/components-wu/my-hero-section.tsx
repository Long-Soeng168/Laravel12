import { MyWelcomeSlide } from "./my-welcome-slide";

const MyHeroSection = () => {
    return (
        <section className="font-now-medium flex flex-col items-center justify-between max-w-screen-2xl px-4 lg:px-20 mx-auto gap-8  py-16 lg:flex-row ">
            <div className="text-center lg:w-1/2 lg:text-left">
                <h2 className=" text-4xl text-center leading-11 font-now-alt-bold text-[#d4050d]">
                Welcome to <br/> Western International School
                </h2>
                {/* <div className="my-4 h-1 w-16 bg-[#2c318a]"></div> */}
                <p className="text-lg leading-relaxed mt-5 text-[#244494] text-start">
                Western International School (WIS) opened its doors on the 1st of September, 2003. With more than 15 branches around Cambodia now, WIS continues aiming to be the leading and most progressive global education provider in the country.
                </p>
                <p className="text-lg leading-relaxed mt-10 text-[#244494] text-start">
                WIS offers a bilingual program from Kindergarten to Grade 12. It also has Summer Classes and an Exchange Program to provide quality education for the students to prepare them to pursue their secondary education anywhere in the world.
                </p>
            </div>
            <div className="flex-1 lg:w-1/3">
                <MyWelcomeSlide/>
            </div>
            {/* <div className="lg:w-1/3 flex justify-center shadow">
        <img src="assets/demo-images/logo-WU.png" alt="University Logo" className="max-w-xs lg:max-w-sm"/>
    </div> */}
        </section>
    );
};

export default MyHeroSection;
