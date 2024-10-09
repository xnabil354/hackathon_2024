"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTiktok,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Footer = () => {
  const [language, setLanguage] = useState("Indonesia");
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setIsOpen(false); // Close the dropdown after selecting language
  };

  return (
    <>
      {/* Main Footer Section */}
      <footer className="bg-gradient-to-r from-green-800 to-lime-600 text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 space-y-4 md:space-y-0">
          {/* Left Side (Logo and Social Media Icons) */}
          <div className="flex items-center space-x-4">
            {/* Replace Text with Image Logo */}
            <div className="relative w-20 h-10">
              <Image
                src="https://g.top4top.io/p_3204risgb1.png"
                alt="Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>

            <div className="flex space-x-4">
              <a href="#" className="text-white text-2xl hover:text-gray-300 transition-all duration-300 ease-in-out">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
              <a href="#" className="text-white text-2xl hover:text-gray-300 transition-all duration-300 ease-in-out">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="text-white text-2xl hover:text-gray-300 transition-all duration-300 ease-in-out">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>

          {/* Right Side (Language Dropdown) */}
          <div className="relative">
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span>Pilih Bahasa</span>
              <button className="bg-white text-black px-4 py-2 rounded-full flex items-center shadow-md hover:shadow-lg transition-shadow duration-300">
                {language}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`ml-2 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            {isOpen && (
              <ul className="absolute right-0 mt-2 bg-white text-black rounded-lg shadow-lg z-50 py-2 w-36 transition-all duration-300 ease-in-out">
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer transition-colors duration-300"
                  onClick={() => handleLanguageChange("Indonesia")}
                >
                  Indonesia
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer transition-colors duration-300"
                  onClick={() => handleLanguageChange("English")}
                >
                  English
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Middle Section (Policy Links) */}
        <div className="container mx-auto text-center text-sm px-4 mt-4">
          <a href="#" className="text-white mx-2 hover:underline hover:text-gray-300 transition-colors duration-300">
            Cookie Policy
          </a>
          <span className="text-white mx-2">|</span>
          <a href="#" className="text-white mx-2 hover:underline hover:text-gray-300 transition-colors duration-300">
            Privacy Policy
          </a>
          <span className="text-white mx-2">|</span>
          <a href="#" className="text-white mx-2 hover:underline hover:text-gray-300 transition-colors duration-300">
            Terms and Conditions
          </a>
          <span className="text-white mx-2">|</span>
          <a href="#" className="text-white mx-2 hover:underline hover:text-gray-300 transition-colors duration-300">
            Contact Us
          </a>
          <span className="text-white mx-2">|</span>
          <a href="#" className="text-white mx-2 hover:underline hover:text-gray-300 transition-colors duration-300">
            About
          </a>
        </div>
      </footer>

      {/* Copyright Section */}
      <div className="bg-gray-100 text-center py-3">
        <p className="text-gray-600 text-sm hover:text-gray-800 transition-colors duration-300">
          <span className="bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent font-semibold">
            Copyright © Codexa 2024
          </span>
        </p>
      </div>
    </>
  );
};

export default Footer;
