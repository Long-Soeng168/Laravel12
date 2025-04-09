const stats = [
  { number: "600+", label: "Student" },
  { number: "45+", label: "Teachers" },
  { number: "120+", label: "Courses" },
  { number: "15+", label: "Years of Experience" },
];

const MyStats = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-[#243b89] to-[#2E1A6E]">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 sm:gap-x-10 gap-y-10 sm:gap-y-16 py-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl bg-gradient-to-b from-red-600 to-[#0D0C36] text-center text-white shadow-lg px-4 py-8"
            >
              <span className="text-3xl sm:text-5xl md:text-6xl font-bold block">
                {stat.number}
              </span>
              <p className="mt-2 text-lg sm:text-xl font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyStats;
