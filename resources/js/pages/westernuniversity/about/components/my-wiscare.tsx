const items = [
    { title: 'Email', description: 'Description', image: 'assets/demo-images/photo2.png' },
    { title: 'Email', description: 'Description', image: 'assets/demo-images/photo2.png' },
    { title: 'Email', description: 'Description', image: 'assets/demo-images/photo2.png' },
    { title: 'Email', description: 'Description', image: 'assets/demo-images/photo2.png' },
    { title: 'Email', description: 'Description', image: 'assets/demo-images/photo2.png' },
    { title: 'Email', description: 'Description', image: 'assets/demo-images/photo2.png' },
    { title: 'Email', description: 'Description', image: 'assets/demo-images/photo2.png' },
];

const MyWiscare = () => (
    <div className="flex items-center justify-center pt-12 pb-16 md:pt-16">
        <div className="mx-auto w-full max-w-screen-2xl px-6 xl:px-0">
            <h2 className="mt-3 text-center text-3xl font-bold tracking-tight text-blue-700 md:text-4xl">How to Wiscare your child</h2>
            <div className="mt-14 grid place-items-center gap-8 sm:grid-cols-2 md:mt-24 md:grid-cols-2 lg:grid-cols-3">
                {items.map((item, index) => {
                    const isLastItem = index === items.length - 1;
                    const isLonelyLastItem = items.length % 3 === 1 && isLastItem;

                    return (
                        <div key={index} className={`flex flex-col items-center text-center ${isLonelyLastItem ? 'lg:col-span-3' : ''}`}>
                            <div className="text-primary flex w-36 items-center justify-center">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <h3 className="mt-4 text-xl text-blue-800">{item.title}</h3>
                            <p className="mt-5 text-xl">{item.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
);

export default MyWiscare;
