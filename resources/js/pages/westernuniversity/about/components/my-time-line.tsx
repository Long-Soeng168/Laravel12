const timelineData = [
    { title: 'Event Title', image: 'assets/demo-images/02Topbackground/12 Student Council.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisi commodo, aliquet velit ac, dapibus elit.' },
    { title: 'Event Title', image: 'assets/demo-images/02Topbackground/12 Student Council.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisi commodo, aliquet velit ac, dapibus elit.' },
    { title: 'Event Title', image: 'assets/demo-images/02Topbackground/12 Student Council.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisi commodo, aliquet velit ac, dapibus elit.' },
    { title: 'Event Title', image: 'assets/demo-images/02Topbackground/12 Student Council.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisi commodo, aliquet velit ac, dapibus elit.' },
    { title: 'Event Title', image: 'assets/demo-images/02Topbackground/12 Student Council.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisi commodo, aliquet velit ac, dapibus elit.' },
    { title: 'Event Title', image: 'assets/demo-images/02Topbackground/12 Student Council.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisi commodo, aliquet velit ac, dapibus elit.' },
    { title: 'Event Title', image: 'assets/demo-images/02Topbackground/12 Student Council.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisi commodo, aliquet velit ac, dapibus elit.' },
    { title: 'Event Title', image: 'assets/demo-images/02Topbackground/12 Student Council.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisi commodo, aliquet velit ac, dapibus elit.' },
  ];
  
  const MyTimeLine = () => {
    return (
      <div className="font-now-alt-regular container mx-auto px-4 py-8">
        <p className="font-now-alt-bold my-10 text-center text-5xl text-red-700">TimeLine</p>
        <div className="wrap relative overflow-hidden">
          <div className="border-2-2 border-opacity-20 absolute left-1/2 h-full border border-red-700"></div>
  
          {timelineData.map((event, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`mb-8 flex w-full items-center justify-between ${
                  isLeft ? 'flex-row-reverse left-timeline' : 'right-timeline'
                }`}
              >
                <div className="order-1 w-5/12"></div>
                <div className="z-20 order-1 flex h-12 w-12 items-center rounded-full bg-red-800 shadow-xl">
                  <h1 className="mx-auto text-lg font-semibold text-white">{index + 1}</h1>
                </div>
                <div
                  className={`order-1 grid lg:flex lg:flex-row gap-4 items-center justify-between w-5/12 rounded-2xl bg-gray-900 shadow-xl ${
                    isLeft ? 'px-6 py-4' : 'px-4 py-4'
                  }`}
                >
                  {isLeft ? (
                    <>
                      <div>
                        <h3 className="mb-3 text-xl font-bold text-white">{event.title}</h3>
                        <p className="leading-tight text-white">{event.description}</p>
                      </div>
                      <div className="w-full h-full xl:w-5/6">
                        <img
                          src={event.image}
                          alt={`Timeline event ${index + 1}`}
                          className="aspect-square h-full object-cover rounded-2xl"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-full h-full xl:w-5/6">
                        <img
                          src={event.image}
                          alt={`Timeline event ${index + 1}`}
                          className="aspect-square h-full object-cover rounded-2xl"
                        />
                      </div>
                      <div>
                        <h3 className="mb-3 text-xl font-bold text-white">{event.title}</h3>
                        <p className="leading-tight text-white">{event.description}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  export default MyTimeLine;
  