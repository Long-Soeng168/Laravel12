import { Link } from '@inertiajs/react';

export function MyCurriculumCard() {
  const cards = [
    {
      title: 'Quality Education',
      description:
        'Access to quality teachers; Use of quality learning materials and professional development; Quality education is education that focuses on',
      image: 'assets/demo-images/Quotes1.jpg',
    },
    {
      title: 'Student Engagement',
      description:
        'Creating a learning environment that encourages students to actively participate and stay motivated throughout their educational journey.',
      image: 'assets/demo-images/Quotes1.jpg',
    },
    {
      title: 'Inclusive Learning',
      description:
        'Providing equal learning opportunities for all students regardless of background, ability, or needs.',
      image: 'assets/demo-images/Quotes1.jpg',
    },
  ];

  return (
    <div className="mx-auto mb-10 max-w-screen-2xl px-4 sm:px-10 py-8 sm:py-12 md:px-20">
      <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3">
        {cards.map((card, index) => (
          <div key={index} className="w-full">
            <img
              src={card.image}
              alt={card.title}
              className="mb-5 sm:mb-6 w-full aspect-[4/5] object-cover bg-muted rounded-2xl"
            />
            <div className="text-gray-600">
              <h3 className="mt-4 text-4xl font-semibold">{card.title}</h3>
              <p className="mt-6 text-xl">{card.description}</p>
            </div>
            <div className="mt-10 text-gray-600">
              <Link
                href="#"
                className="border-2 text-xl border-gray-600 px-8 rounded-md font-now-alt-medium py-4 hover:cursor-pointer"
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
