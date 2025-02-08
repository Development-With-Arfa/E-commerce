import Image from "next/image";
import React from "react";
import { FaFacebook, FaTwitter, FaPinterest, FaYoutube } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="h-auto max-w-[1920px] w-full border-t-2 py-10 px-5 lg:px-20 overflow-x-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-10">
        {/* Logo and Description */}
        <div className="col-span-2">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo" height={40} width={40} />
            <h3 className="text-2xl font-medium">Comforty</h3>
          </div>
          <p className="text-base text-[#272343] my-4 max-w-sm">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
          </p>
          <div className="flex gap-3 text-[#636270]">
            {[FaFacebook, FaTwitter, CiInstagram, FaPinterest, FaYoutube].map((Icon, index) => (
              <div
                key={index}
                className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer border-2 hover:border-[#007580] hover:text-[#007580] transition"
              >
                <Icon className="h-5 w-5" />
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-[#9A9CAA] text-sm font-medium uppercase">Category</h2>
          <ul className="py-4 flex flex-col gap-2">
            {["Sofa", "Armchair", "Wing Chair", "Desk Chair", "Wooden Chair", "Park Bench"].map((item, index) => (
              <li key={index} className="text-base text-[#272343] hover:text-[#007580] hover:underline cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-[#9A9CAA] text-sm font-medium uppercase">Support</h2>
          <ul className="py-4 flex flex-col gap-2">
            {["Help & Support", "Terms & Conditions", "Privacy Policy", "Help"].map((item, index) => (
              <li key={index} className="text-base text-[#272343] hover:text-[#007580] hover:underline cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="col-span-2">
          <h2 className="text-[#9A9CAA] text-sm font-medium uppercase">Newsletter</h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
            <input
              placeholder="Enter your email address"
              className="w-full sm:w-72 h-12 border rounded-lg px-4 border-[#c5c7d3]"
            />
            <button className="w-full sm:w-32 h-12 bg-[#029FAE] hover:bg-[#007580] text-white rounded-lg transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
