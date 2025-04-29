import { Button } from '@/components/ui/button';
import NokorTechLayout from '../layouts/nokor-tech-layout';

const Index = () => {
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

    return (
        <NokorTechLayout>
            <div className="mx-auto max-w-screen-xl px-4 py-16 lg:px-0">
                {/* Heading */}
                <h1 className="mb-6 text-center text-3xl font-semibold lg:text-4xl">Our Blogs</h1>
                <p className="mx-auto mb-8 max-w-2xl text-center text-gray-500">
                    Discover insights, tips, and the latest trends in technology, design, and development. Stay updated with our curated blog posts.
                </p>

                {/* Featured Blog */}
                <div className="bg-primary mb-16 overflow-hidden rounded-lg text-white">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/2">
                            <img
                                src="/assets/nokor-tech/images/slides/slide6.png"
                                alt="Featured Blog"
                                width={600}
                                height={400}
                                className="aspect-video w-full object-cover"
                            />
                        </div>
                        <div className="p-8 lg:w-1/2">
                            <p className="mb-4 text-sm text-gray-100">Nov 10, 2024</p>
                            <h2 className="mb-4 line-clamp-3 text-3xl font-semibold">Revolutionizing Web Experiences in 2024</h2>
                            <p className="mb-4 line-clamp-3 text-lg text-gray-200">
                                Dive into the innovative web solutions reshaping the digital world and enhancing user experiences across platforms.
                            </p>
                            <Button variant="secondary">Read More</Button>
                        </div>
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="flex flex-col items-start overflow-hidden rounded-lg bg-white shadow transition hover:shadow-lg"
                        >
                            <div className="relative aspect-video w-full">
                                <img src={blog.image} alt={blog.title} className="object-cover" />
                            </div>
                            <div className="flex flex-1 flex-col items-start justify-between p-6">
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
            </div>
        </NokorTechLayout>
    );
};

export default Index;
