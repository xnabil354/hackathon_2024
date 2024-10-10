"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../../../components/Footer'

const slides = [
  {
    text: `Tinjau Postingan yang Menarik Perhatian
Amati elemen seperti kualitas visual, penggunaan caption yang menarik, dan cara pengunggah berinteraksi dengan audiens, baik melalui komentar atau fitur interaktif.`,
    additionalText: `Identifikasi tema dan gaya yang sukses, sehingga kamu dapat mengambil inspirasi dari konten tersebut dan menerapkannya dalam postinganmu untuk menarik lebih banyak perhatian dan meningkatkan interaksi.`,
    image: "https://a.top4top.io/p_3204qy9222.png", // External image URL
  },
  {
    text: `CIptakan Narasi yang Memikat
Narasi yang memikat menggabungkan elemen cerita dengan visual yang menarik untuk mengenggam perhatian audiens. Gunakan alur cerita yang jelas, mulai dari pengenalan yang menarik hingga momen puncak yang menggugah emosi. `,
    additionalText: `Sertakan detail yang menggambarkan pengalaman, suasana, dan keunikan destinasi untuk menciptakan koneksi emosional dengan penonton.`,
    image: "https://l.top4top.io/p_32047mwxz1.png", // Another valid external image URL
  },
  {
    text: `Optimalkan Fitur Instagram
Gunakan Stories untuk berbagi momen real-time dan tambahkan elemen interaktif seperti polling dan kuis. Ciptakan video menarik melalui Reels untuk menjangkau audiens yang lebih luas. Gunakan IG Live untuk sesi langsung, memberi audiens kesempatan untuk berinteraksi secara langsung. `,
    additionalText: `Dengan memanfaatkan fitur-fitur ini, kamu dapat menarik perhatian lebih banyak pengikut dan meningkatkan interaksi dengan kontenmu.`,
    image: "https://l.top4top.io/p_32047mwxz1.png", // Another valid external image URL
  },
  {
    text: `Susun Jadwal Posting yang Konsisten
Buat rencana konten dengan frekuensi posting yang tetap, seperti beberapa kali dalam seminggu atau sekali setiap hari. Tentukan tema untuk setiap hari, misalnya, #TravelTip pada hari Selasa dan #DestinationSpotlight pada hari Kamis.`,
    additionalText: `Dengan konsistensi ini, audiens akan tahu kapan mengharapkan konten baru, yang dapat meningkatkan keterlibatan dan membuat pengikut lebih setia. `,
    image: "https://l.top4top.io/p_32047mwxz1.png", // Another valid external image URL
  },
  {
    text: `Bagikan Pengetahuan yang Informatif
Buat konten yang memberikan informasi berguna tentang destinasi wisata, seperti sejarah, budaya, dan atraksi lokal. Gunakan gambar menarik dan caption informatif untuk menarik perhatian audiens. `,
    additionalText: `Sertakan tips perjalanan, rekomendasi tempat makan, atau acara khusus yang sedang berlangsung. Cara ini dapat  membantu audiens merencanakan kunjungan mereka dengan lebih baik.`,
    image: "https://l.top4top.io/p_32047mwxz1.png", // Another valid external image URL
  },
  {
    text: `Jelajahi Akun Terkemuka
Telusuri akun-akun Instagram yang memiliki pengikut banyak dan dikenal dalam industri pariwisata. Amati cara mereka menampilkan konten, termasuk gaya visual dan tema yang mereka pilih. `,
    additionalText: `Perhatikan interaksi mereka dengan audiens, seperti bagaimana mereka menjawab komentar atau menggunakan fitur Instagram.`,
    image: "https://l.top4top.io/p_32047mwxz1.png", // Another valid external image URL
  },
  {
    text: `Evaluasi Konten Sukses
Tinjau konten yang telah mendapatkan banyak interaksi dan perhatian di Instagram. Perhatikan elemen-elemen seperti kualitas gambar, gaya penulisan caption, dan penggunaan fitur interaktif. `,
    additionalText: `Identifikasi pola atau tema yang menarik bagi audiens, sehingga kamu dapat mengadopsi strategi tersebut dalam kontenmu untuk meningkatkan keterlibatan dan daya tarik.`,
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
    }, 15000); // Change slide every 5 seconds
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

        <div className="relative w-full max-w-6xl h-auto min-h-[24rem] overflow-hidden flex items-center justify-between flex-col md:flex-row bg-white shadow-xl rounded-lg border-8 border-gray-300 p-8">
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
          <div className="md:w-1/2 h-auto relative">
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