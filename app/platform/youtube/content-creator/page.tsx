"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../../../components/Footer'

const slides = [
  {
    text: "Siapa yang ingin kamu jangkau? Penting untuk mengetahui siapa yang akan menonton kontenmu...",
    additionalText: "Apa yang mereka suka? Coba pikirkan tentang apa yang menarik bagi mereka...",
    image: "https://a.top4top.io/p_3204qy9222.png", // External image URL
  },
  {
    text: `Riset Konten dan Ide Kreatif
Lihat konten orang lain...`,
    additionalText: `Pikirkan tentang format video yang ingin kamu buat...`,
    image: "https://l.top4top.io/p_32047mwxz1.png", // Another valid external image URL
  },
];

export default function ContentCreatorPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter(); // Initialize useRouter

  const handleBack = () => {
    router.back(); // Go back to the previous page
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Content Section */}
      <div className="flex-grow w-full h-full flex items-center justify-center bg-gray-100 relative">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="absolute top-4 left-4 p-3 bg-white text-lime-500 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:bg-lime-500 hover:text-white hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-lime-300 z-50"
          aria-label="Back"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="w-6 h-6" />
        </button>

        <div className="relative w-full max-w-6xl h-auto md:h-96 overflow-hidden flex items-center justify-between flex-col md:flex-row bg-white shadow-xl rounded-lg border-8 border-gray-300 p-8">
  {slides.map((slide, index) => (
    <AnimatePresence key={index}>
      {currentSlide === index && (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }} // Start from the right
          animate={{ opacity: 1, x: 0 }} // Slide into view
          exit={{ opacity: 0, x: -100 }} // Exit to the left
          transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth transition
          className="w-full flex flex-col md:flex-row items-center justify-between"
        >
          {/* Text section */}
          <div className="w-full md:w-1/2 p-4">
                  <h2 className="text-gray-900 text-lg md:text-2xl font-semibold mb-4">
                    {slide.text}
                  </h2>
                  <p className="text-gray-700 text-base md:text-lg">
                    {slide.additionalText}
                  </p>
                </div>

          {/* Image section */}
          <div className="md:w-1/2 h-80 relative">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  ))}
</div>


        {/* Slide navigation */}
        <div className="absolute bottom-4 flex justify-center w-full space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-blue-500 scale-110' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-gray-900 text-white">
        <Footer /> {/* This is your custom Footer component */}
      </footer>
    </div>
  );
}