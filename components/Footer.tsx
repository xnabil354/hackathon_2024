"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTiktok,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      {/* Main Footer Section */}
      <footer className="bg-gradient-to-r from-green-800 to-lime-600 text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 space-y-4 md:space-y-0">
          {/* Left Side (Logo and Social Media Icons) */}
          <div className="flex items-center space-x-4">
            {/* Logo as Link to Home */}
            <Link href="/" legacyBehavior>
              <a className="relative w-20 h-10">
                <Image
                  src="https://g.top4top.io/p_3204risgb1.png"
                  alt="Logo"
                  layout="fill"
                  objectFit="contain"
                />
              </a>
            </Link>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white text-2xl hover:text-gray-300 transition-all duration-300 ease-in-out"
              >
                <FontAwesomeIcon icon={faTiktok} />
              </a>
              <a
                href="#"
                className="text-white text-2xl hover:text-gray-300 transition-all duration-300 ease-in-out"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="#"
                className="text-white text-2xl hover:text-gray-300 transition-all duration-300 ease-in-out"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>

          {/* Middle Section (Policy Links) */}
          <div className="container mx-auto text-center text-sm px-4 mt-4">
            <Link href="/cookie-policy" legacyBehavior>
              <a className="text-white mx-2 hover:underline hover:text-gray-300 transition-colors duration-300">
                Cookie Policy
              </a>
            </Link>
            <span className="text-white mx-2">|</span>
            <Link href="/privacy-policy" legacyBehavior>
              <a className="text-white mx-2 hover:underline hover:text-gray-300 transition-colors duration-300">
                Privacy Policy
              </a>
            </Link>
            <span className="text-white mx-2">|</span>
            <Link href="/terms-and-conditions" legacyBehavior>
              <a className="text-white mx-2 hover:underline hover:text-gray-300 transition-colors duration-300">
                Terms and Conditions
              </a>
            </Link>
            <span className="text-white mx-2">|</span>
            <Link href="/contact-us" legacyBehavior>
              <a className="text-white mx-2 hover:underline hover:text-gray-300 transition-colors duration-300">
                Contact Us
              </a>
            </Link>
            <span className="text-white mx-2">|</span>
            <Link href="/about-us" legacyBehavior>
              <a className="text-white mx-2 hover:underline hover:text-gray-300 transition-colors duration-300">
                About
              </a>
            </Link>
          </div>
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
