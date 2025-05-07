import { title } from "process";

const MyImageExtracurricularActivities = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 xl:px-0 py-12">
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
            {
                img: "/assets/demo-images/Homepage/03_welcome_to_western_1.jpg",
                title: "Image 1", 
            },
            {
                img: "/assets/demo-images/Homepage/03_welcome_to_western_1.jpg",
                title: "Image 2",
            },
            {
                img: "/assets/demo-images/Homepage/03_welcome_to_western_1.jpg",
                title: "Image 3",
            },
           
        ].map((i) => (
         
            <div key={i} className="w-full aspect-video ">
              <img className="w-full h-full object-cover" src={i.img}  />
              <h2 className="text-center mt-2 text-lg font-semibold">{i.title}</h2>
            </div>
        ))}
      </div>
    </div>
  );
};

export default MyImageExtracurricularActivities;
