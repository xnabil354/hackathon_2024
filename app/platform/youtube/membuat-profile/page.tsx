'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const steps = [
  {
    id: 1,
    title: 'Profile Awal',
    imageSrc: 'https://d.top4top.io/p_3204sgr2g1.png',
    description: `Langkah 6: Profil Akun Youtube...`,
  },
  {
    id: 2,
    title: 'Edit Profile',
    imageSrc: 'https://f.top4top.io/p_32047i7qj2.png',
    description: `Langkah 7: Mengedit Profil...`,
  }
];

const MembuatProfilePage = () => {
  const router = useRouter(); // Initialize useRouter

  const handleBack = () => {
    router.back(); // Go back to the previous page
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="absolute top-4 left-4 p-3 bg-white text-lime-500 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:bg-lime-500 hover:text-white hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-lime-300 z-50"
        aria-label="Back"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="w-6 h-6" />
      </button>

      {/* Title */}
      <motion.h1 
        className="text-3xl font-bold text-gray-800 text-center mt-10 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Cara Membuat Profile Youtube yang Menarik
      </motion.h1>

      {/* Step-by-step guide */}
      <section className="w-full max-w-4xl space-y-12 px-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center md:flex-row md:space-x-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <div className="relative h-[600px] w-[400px] mx-auto">
                <Image
                  src={step.imageSrc}
                  alt={step.title}
                  layout="fill"
                  className="rounded-lg shadow-md object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">{step.title}</h2>
              <p className="text-gray-600 mb-4">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Footer placeholder */}
      <footer className="mt-20 mb-10 text-gray-600 text-center">
        © 2024 Youtube Tutorial - All Rights Reserved
      </footer>
    </main>
  );
};

export default MembuatProfilePage;
