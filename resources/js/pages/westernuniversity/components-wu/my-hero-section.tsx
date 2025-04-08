import { MyWelcomeSlide } from "./my-welcome-slide";

const MyHeroSection = () => {
    return (
        <section className="font-now-medium flex flex-col items-center justify-between max-w-screen-2xl mx-auto gap-8  py-16 lg:flex-row px-4 lg:px-16">
            <div className="text-center lg:w-1/2 lg:text-left">
                <h2 className=" text-4xl text-center leading-11 font-now-alt-bold text-[#ff0004]">
                Welcome to <br/> Western International School
                </h2>
                {/* <div className="my-4 h-1 w-16 bg-[#2c318a]"></div> */}
                <p className="text-lg leading-relaxed mt-5 text-[#2c318a] text-start">
                Western International School (WIS) opened its doors on September 1, 2003. With more than 15 campuses across Cambodia, WIS continues to strive to be the leading and fastest growing global education provider in the country.
                </p>
                <p className="text-lg leading-relaxed mt-10 text-[#2c318a] text-start">
                Western International School (WIS) opened its doors on September 1, 2003. With more than 15 campuses across Cambodia, WIS continues to strive to be the leading and fastest growing global education provider in the country.
                </p>
            </div>
            <div className="flex-1">
                <MyWelcomeSlide/>
            </div>
            {/* <div className="lg:w-1/3 flex justify-center shadow">
        <img src="assets/demo-images/logo-WU.png" alt="University Logo" className="max-w-xs lg:max-w-sm"/>
    </div> */}
        </section>
    );
};

export default MyHeroSection;
