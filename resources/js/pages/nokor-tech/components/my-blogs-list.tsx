import { Button } from './ui/button';

const blogs = [
    {
        id: 1,
        title: 'Exploring the Beauty of Modern Design',
        description: 'An insight into how modern design trends shape user experiences.',
        image: '/assets/nokor-tech/images/slides/slide7.png',
        date: 'Dec 1, 2024',
    },
    {
        id: 2,
        title: 'The Rise of AI in Everyday Applications',
        description: 'Learn how artificial intelligence is being integrated into daily tools.',
        image: '/assets/nokor-tech/images/slides/slide5.png',
        date: 'Nov 25, 2024',
    },
    {
        id: 3,
        title: 'Sustainability in Web Development',
        description: 'Discover eco-friendly approaches in software and web development.',
        image: '/assets/nokor-tech/images/slides/slide8.png',
        date: 'Nov 18, 2024',
    },
    {
        id: 4,
        title: 'Innovations in Mobile Technology',
        description: 'A look at the latest breakthroughs in mobile devices and platforms.',
        image: '/assets/nokor-tech/images/slides/slide6.png',
        date: 'Nov 10, 2024',
    },
];

const MyBlogList = () => {
    return (
        <div className="grid grid-cols-1 gap-8 px-2 sm:grid-cols-2 lg:grid-cols-4">
            {blogs.map((blog) => (
                <div key={blog.id} className="flex flex-col items-start overflow-hidden rounded-lg bg-white shadow transition hover:shadow-lg">
                    <div className="relative aspect-video w-full">
                        <img src={blog.image} alt={blog.title} className="object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-between p-2">
                        <div>
                            <p className="mb-2 line-clamp-1 text-sm text-gray-500">{blog.date}</p>
                            <h3 className="mb-3 line-clamp-2 text-xl font-semibold">{blog.title}</h3>
                            <p className="mb-4 line-clamp-3 text-sm text-gray-600">{blog.description}</p>
                        </div>
                        <Button>Read More</Button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyBlogList;
