'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Import Back Arrow Icon

const TiktokPage = () => {
  const router = useRouter(); // Initialize useRouter

  // Function to handle navigation
  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const handleBack = () => {
    router.back(); // Go back to the previous page
  };

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col justify-between relative">
      {/* Back Button in Top-Left Corner */}
      <button
        onClick={handleBack}
        className="absolute top-4 left-4 p-3 bg-white text-lime-500 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:bg-lime-500 hover:text-white hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-lime-300 z-50"
        aria-label="Back"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="w-6 h-6" />
      </button>

      {/* Content section */}
      <section className="flex flex-col items-center p-4 flex-grow mb-14">
        {/* Title */}
        <motion.h1 
          className="text-2xl font-bold text-gray-800 text-center mb-8 mt-11"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          3 Langkah Mudah Belajar Marketing Pariwisata <br /> Platform Tiktok
        </motion.h1>

        {/* Roadmap Container */}
        <div className="relative w-full max-w-4xl space-y-8"> 
          {/* Roadmap Pipeline */}
          <div className="absolute top-16 left-6 transform h-[calc(100%-100px)] w-1 bg-lime-500 z-0 ml-3"></div>

          {/* Step 1 */}
          <motion.section 
            className="relative flex items-center bg-white shadow-md rounded-lg p-3 w-full z-10 transition-transform hover:scale-105 duration-300 space-x-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-1/3">
              <div className="relative w-full h-40">
                <Image
                  src="https://d.top4top.io/p_32046mnje1.jpeg" 
                  alt="Membuat Akun Tiktok"
                  layout="fill"
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
            <div className="w-2/3">
              <motion.span className="text-lime-600 text-base font-semibold mb-1 block">Langkah 1</motion.span>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Membuat Akun Tiktok</h2>
              <p className="text-gray-600 text-sm mb-2">
                Langkah awal membuat akun pada platform tiktok, platform ini menyediakan banyak opsi untuk mendaftar.
              </p>
              <motion.button 
                className="px-4 py-2 bg-lime-500 text-white font-semibold rounded-full shadow-lg transform transition-transform hover:scale-110 hover:bg-lime-600 text-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation('/platform/tiktok/register-akun')}
              >
                Pelajari
              </motion.button>
            </div>
          </motion.section>

          {/* Connector after Step 1 */}
          <div className="relative w-full flex justify-start">
            <motion.div 
              className="w-6 h-6 bg-lime-500 rounded-full border-4 border-lime-500 absolute left-7"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            ></motion.div>
          </div>

          {/* Step 2 */}
          <motion.section 
            className="relative flex items-center bg-white shadow-md rounded-lg p-3 w-full z-10 transition-transform hover:scale-105 duration-300 space-x-4"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="w-2/3 text-right">
              <motion.span className="text-lime-600 text-base font-semibold mb-1 block">Langkah 2</motion.span>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Membuat Profile Menarik</h2>
              <p className="text-gray-600 text-sm mb-2">
                Langkah kedua membuat profil yang menarik pada platform tiktok untuk menarik lebih banyak pengikut.
              </p>
              <motion.button 
                className="px-4 py-2 bg-lime-500 text-white font-semibold rounded-full shadow-lg transform transition-transform hover:scale-110 hover:bg-lime-600 text-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation('/platform/tiktok/membuat-profile')}
              >
                Pelajari
              </motion.button>
            </div>
            <div className="w-1/3">
              <div className="relative w-full h-40">
                <Image
                  src="https://f.top4top.io/p_3204yskeg1.jpeg" 
                  alt="Membuat Profile Menarik"
                  layout="fill"
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          </motion.section>

          {/* Connector after Step 2 */}
          <div className="relative w-full flex justify-start">
            <motion.div 
              className="w-6 h-6 bg-lime-500 rounded-full border-4 border-lime-500 absolute left-7"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            ></motion.div>
          </div>

          {/* Step 3 */}
          <motion.section 
            className="relative flex items-center bg-white shadow-md rounded-lg p-3 w-full z-10 transition-transform hover:scale-105 duration-300 space-x-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="w-1/3">
              <div className="relative w-full h-40">
                <Image
                  src="https://e.top4top.io/p_32040ludu1.jpeg" 
                  alt="Membuat Konten Menarik"
                  layout="fill"
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
            <div className="w-2/3">
              <motion.span className="text-lime-600 text-base font-semibold mb-1 block">Langkah 3</motion.span>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Membuat Konten Menarik</h2>
              <p className="text-gray-600 text-sm mb-2">
                Langkah ketiga adalah membuat konten yang menarik, kreatif, dan relevan untuk meningkatkan engagement di Tiktok.
              </p>
              <motion.button 
                className="px-4 py-2 bg-lime-500 text-white font-semibold rounded-full shadow-lg transform transition-transform hover:scale-110 hover:bg-lime-600 text-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation('/platform/tiktok/content-creator')}
              >
                Pelajari
              </motion.button>
            </div>
          </motion.section>

          {/* No Connector after Step 3 */}
        </div>
      </section>

      {/* Panggil Footer */}
    </main>
  );
};

export default TiktokPage;
