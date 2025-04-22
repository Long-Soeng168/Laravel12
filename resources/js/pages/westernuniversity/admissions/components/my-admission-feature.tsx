import { Link } from "@inertiajs/react";

const admissionFeatures = [
  {
    title: "Customized Shadcn UI Blocks & Components",
    description:
      "Explore a collection of Shadcn UI blocks and components, ready to preview and copy. Streamline your development workflow with easy-to-implement examples.",
    image: "/assets/demo-images/02TimeLineIcons/2022.jpg",
    bg: "bg-[#d4010e]",
    text: "text-white",
    button: null,
  },
  {
    title: "Customized Shadcn UI Blocks & Components",
    description:
      "Explore a collection of Shadcn UI blocks and components, ready to preview and copy. Streamline your development workflow with easy-to-implement examples.",
    image: "/assets/demo-images/02TimeLineIcons/2023.jpg",
    bg: "bg-white",
    text: "text-[#234090]",
    button: {
      label: "Download Form",
      link: "https://drive.google.com/file/d/1xyabU4AUZdV6Yie5gStE-UUTf14DVtQy/view?pli=1",
    },
  },
  {
    title: "Customized Shadcn UI Blocks & Components",
    description:
      "Explore a collection of Shadcn UI blocks and components, ready to preview and copy. Streamline your development workflow with easy-to-implement examples.",
    image: "/assets/demo-images/02TimeLineIcons/2020.jpg",
    bg: "bg-[#234090]",
    text: "text-white",
    button: null,
  },
];

const MyAdmissionFeature = () => {
  return (
    <>
      {admissionFeatures.map((feature, index) => (
        <div
          key={index}
          className={`flex items-center justify-center ${feature.bg} w-full`}
        >
          <div
            className={`max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12 ${feature.text}`}
          >
            <div>
              <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2]">
                {feature.title}
              </h1>
              <p className="mt-6 max-w-[60ch] text-lg">{feature.description}</p>
              {feature.button && (
                <div className="mt-6">
                  <Link
                    href={feature.button.link}
                    className={`inline-block px-6 py-3 mt-4 font-semibold border-2 border-current rounded-md hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200`}
                  >
                    {feature.button.label}
                  </Link>
                </div>
              )}
            </div>
            <div className="w-full aspect-video rounded-2xl">
              <img
                src={feature.image}
                className="rounded-2xl w-full h-full object-cover"
                alt={feature.title}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MyAdmissionFeature;
