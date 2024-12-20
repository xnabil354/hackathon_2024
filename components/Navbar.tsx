'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State untuk search query

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // Fungsi handleSearch untuk memproses input pencarian
  const handleSearch = () => {
    const query = searchQuery.toLowerCase();

    // Menentukan section berdasarkan query
    if (query.includes("introduce") || query.includes("intro") || query.includes("perkenalkan")) {
      document.getElementById("introduce-section")?.scrollIntoView({ behavior: "smooth" });
    } else if (query.includes("penting") || query.includes("sosial")) {
      document.getElementById("media-sosial-penting-section")?.scrollIntoView({ behavior: "smooth" });
    } else if (query.includes("testi") || query.includes("testimoni")) { // Termasuk "testi" dan "testimon"
      document.getElementById("testimoni")?.scrollIntoView({ behavior: "smooth" });
    } else if (query.includes("benefit") || query.includes("manfaat") || query.includes("manfaat medsos")) {
      document.getElementById("benefit-section")?.scrollIntoView({ behavior: "smooth" });
    } else if (query.includes("visi") || query.includes("misi") || query.includes("visi misi")) {
      document.getElementById("visi-misi")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="flex flex-col p-4 bg-white shadow-md md:flex-row md:justify-between md:items-center relative px-10 transition-all duration-300 ease-in-out border-b border-gray-200">
      {/* Logo Section with Image */}
      <div className="flex justify-between items-center w-full md:w-auto">
        <Link href="/" passHref>
          <div className="relative w-32 h-12 cursor-pointer">
            <Image
              src="https://b.top4top.io/p_32740fuzl1.png"
              alt="Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <div className="text-3xl cursor-pointer md:hidden" onClick={toggleMenu}>
          <i className="fas fa-bars text-gray-700"></i>
        </div>
      </div>

      {/* Search Bar (Mobile and Desktop) */}
      <div className={`relative w-full md:w-auto mt-2 md:mt-0 transition-all duration-300 ease-in-out ${isSearchOpen ? '' : 'hidden'} md:flex`}>
        <input
          type="text"
          placeholder="Cari (e.g., intro, penting, testi, benefit, visi)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-4 pr-20 py-2 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <button
          onClick={handleSearch}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 ease-in-out"
        >
          <i className="fas fa-search text-white"></i>
        </button>
      </div>

      {/* Main Navigation Links */}
      <nav className="hidden md:flex space-x-8 mt-2 md:mt-0 items-center">
        <Link href="/" className="relative group text-lg font-semibold text-gray-700 transition-all duration-300 ease-in-out hover:text-blue-500">
          Home
          <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></span>
        </Link>
        <Link href="/#visi-misi" className="relative group text-lg font-semibold text-gray-700 transition-all duration-300 ease-in-out hover:text-blue-500">
          Visi Misi
          <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></span>
        </Link>
        <Link href="/#testimoni" className="relative group text-lg font-semibold text-gray-700 transition-all duration-300 ease-in-out hover:text-blue-500">
          Testimoni
          <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></span>
        </Link>
        <Link href="/platform" className="relative group text-lg font-semibold text-gray-700 transition-all duration-300 ease-in-out hover:text-blue-500">
          Platform
          <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></span>
        </Link>
        <Link href="/pricing" className="relative group text-lg font-semibold text-gray-700 transition-all duration-300 ease-in-out hover:text-blue-500">
          Pricing
          <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></span>
        </Link>
      </nav>

      {/* Mobile Menu Links */}
      {isMenuOpen && (
        <nav className="flex flex-col space-y-2 mt-4 md:hidden">
          <Link href="/" className="text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out">
            Home
          </Link>
          <Link href="/#visi-misi" className="text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out">
            Visi Misi
          </Link>
          <Link href="/#testimoni" className="text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out">
            Testimoni
          </Link>
          <Link href="/platform" className="text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out">
            Platform
          </Link>
          <Link href="/pricing" className="text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out">
            Pricing
          </Link>
        </nav>
      )}

      {/* Mobile Search Icon */}
      <div
        onClick={toggleSearch}
        className="text-3xl cursor-pointer md:hidden mt-2 md:mt-0 text-gray-700"
      >
        <i className="fas fa-search"></i>
      </div>
    </header>
  );
}
