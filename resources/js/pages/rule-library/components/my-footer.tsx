const MyFooter = () => {
  const websiteInfos = {
    address: "123 Main St, Phnom Penh, Cambodia",
    phone: "+855 12 345 678",
    hours: "Mon-Fri 8:00 AM - 5:00 PM",
    closed: "Sunday",
  };

  // Simple icon SVG URLs from jsDelivr CDN (Simple Icons)
  const menuFooter = [
    { id: 1, image: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/home.svg", name: "Home", type: "link", link: "/" },
    { id: 2, image: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/about-dot-me.svg", name: "About", type: "link", link: "/about" },
    { id: 3, image: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/collections.svg", name: "Collections", type: "link", link: "/collections" },
    { id: 4, image: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/resources-dotai.svg", name: "Resources", type: "link", link: "/resources" },
    { id: 5, image: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/database.svg", name: "Databases", type: "link", link: "/databases" },
    { id: 6, image: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/contactlesspayment.svg", name: "Contact Us", type: "link", link: "/contact" },
  ];

  const socialMedia = [
    { id: 1, image: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/facebook.svg", name: "Facebook", alt: "Facebook", link: "https://facebook.com" },
    { id: 2, image: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/telegram.svg", name: "Telegram", alt: "Telegram", link: "https://telegram.org" },
    { id: 3, image: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/youtube.svg", name: "YouTube", alt: "YouTube", link: "https://youtube.com" },
  ];

  const companyName = "Power By:";

  return (
    <footer className="bg-[#393838] text-gray-300 py-12">
      <div className="max-w-screen-2xl mx-auto px-3 xl:px-16">

        {/* Grid Layout */}
        <div className="flex flex-wrap gap-12 text-center sm:text-left">

          {/* Contact Info */}
          <div className="flex-1 ">
            <h3 className="text-2xl font-medium text-white mb-4">Information</h3>
            <p className="text-gray-400 leading-relaxed ">
              {websiteInfos.address}<br />
              <span className="font-semibold">Phone:</span> {websiteInfos.phone} <br />
              <span className="font-semibold">Hours:</span> {websiteInfos.hours} <br />
              <span className="text-red-400 font-semibold">{websiteInfos.closed}: CLOSED</span>
            </p>
            <hr className="w-20 mt-2 mx-auto md:mx-0 border-t border-white" />
          </div>

          {/* Menu Section */}
          <div className="flex-1 flex flex-col justify-center items-center">
            <h3 className="text-2xl font-medium text-white mb-4">Menu</h3>
            <ul className="space-y-1">
              {menuFooter.map((item) => (
                <li key={item.id} className="transition-transform hover:translate-x-2">
                  <a
                    href={item.type === "link" ? item.link : item.name.toLowerCase() === "home" ? "/" : `/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-center gap-3 sm:justify-start hover:text-white transition-colors"
                  >
                    {/* Render SVG inline via <img> */}
                    <img src={item.image} alt={item.name} width={20} height={20} className="invert" />
                    <span className="text-lg">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="md:flex-1 flex flex-col md:items-end w-full">
            <div>
              <h3 className="text-2xl font-medium text-center text-white mb-4">Social Media</h3>
              <div className="flex gap-6 justify-center lg:justify-end">
                {socialMedia.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    rel="noopener noreferrer"
                    aria-label={item.alt}
                    className="group flex flex-col items-center text-white transition-transform transform hover:scale-110"
                  >
                    <div className="p-2 rounded-full bg-gray-700 hover:bg-gray-500 shadow-lg transition-all">
                      <img
                        src={item.image}
                        alt={item.name}
                        width={40}
                        height={40}
                        className="invert"
                      />
                    </div>
                    <span className="mt-2 text-xs group-hover:text-gray-100">{item.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="text-center mt-5 md:mt-0 md:text-end text-sm">
          <p>
            {companyName}{" "}
            <a href="https://alphalib.org/" className="hover:underline hover:text-white transition-colors">
              Alphalib.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
