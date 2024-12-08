import React from "react";
import Image from "next/image";
import { footer } from "@/app/lib/navData";

const Footer = () => {
  const logo = "/logo-light.png";

  return (
    <>
      {/* Footer Section */}
      <footer className="bg-gray-900 py-16 text-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-4 md:px-0">
          {/* Logo and Subscription */}
          <div className="space-y-6">
            <div>
              <Image src={logo} alt="logo" width={150} height={50} />
            </div>
            <h2 className="font-semibold text-lg">
              Do You Need Help With Anything?
            </h2>
            <p className="text-gray-400">
              Receive updates, hot deals, tutorials, and discounts sent straight
              to your inbox every month.
            </p>
            <div className="flex w-full space-x-2">
              <input
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
                className="bg-white text-black px-4 py-3 rounded-l-lg w-full focus:outline-none"
              />
              <button
                className="bg-green-600 px-6 py-3 rounded-r-lg text-white hover:bg-green-700 transition duration-300 focus:outline-none"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Footer Links */}
          {footer.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-lg">{section.title}</h3>
              <ul className="space-y-2">
                {section.text.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-gray-400 cursor-pointer hover:text-white transition duration-300"
                  >
                    {item.list}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>

      {/* Legal Section */}
      <div className="text-center py-5 bg-gray-900 text-gray-500 border-t border-gray-700">
        <span>© 2021 RentUP. Designed By GorkCoder.</span>
      </div>
    </>
  );
};

export default Footer;
