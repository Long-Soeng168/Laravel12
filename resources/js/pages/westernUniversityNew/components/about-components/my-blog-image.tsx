
const MyBlogImage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 xl:px-0">
      <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
            {
                img: "/assets/demo-images/02TimeLineIcons/2021.jpg",
            },
            {
                img: "/assets/demo-images/02TimeLineIcons/2022.jpg",
            },
            {
                img: "/assets/demo-images/02TimeLineIcons/2023.jpg",
            },
           
        ].map((i) => (
         
            <div className="w-full aspect-video ">
              <img className="w-full h-full object-cover" src={i.img}  />
            </div>
        ))}
      </div>
    </div>
  );
};

export default MyBlogImage;
