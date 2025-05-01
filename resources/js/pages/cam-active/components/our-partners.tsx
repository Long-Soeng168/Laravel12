const OurPartners = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-4xl font-extrabold mb-6">
          Our Partners
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Collaborating for Educational Advancement
        </p>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="border border-dashed py-4 sm:p-10 rounded flex items-center justify-center"
            >
              <img
                src='/assets/icons/image-icon.png'
                alt={`Partner ${i + 1}`}
                className="h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
