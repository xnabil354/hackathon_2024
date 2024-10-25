"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faLock } from '@fortawesome/free-solid-svg-icons';

const slides = [
  {
    id: 'tinjau-postingan',
    text: `Tinjau Postingan yang Menarik Perhatian
Amati elemen seperti kualitas visual, penggunaan caption yang menarik, dan cara pengunggah berinteraksi dengan audiens, baik melalui komentar atau fitur interaktif.`,
    additionalText: `Identifikasi tema dan gaya yang sukses, sehingga kamu dapat mengambil inspirasi dari konten tersebut dan menerapkannya dalam postinganmu untuk menarik lebih banyak perhatian dan meningkatkan interaksi.`,
    image: "https://g.top4top.io/p_3205qpr721.png", // External image URL
    isLocked: false,
  },
  {
    id: `ciptakan-narasi`,
    text: `CIptakan Narasi yang Memikat
Narasi yang memikat menggabungkan elemen cerita dengan visual yang menarik untuk mengenggam perhatian audiens. Gunakan alur cerita yang jelas, mulai dari pengenalan yang menarik hingga momen puncak yang menggugah emosi. `,
    additionalText: `Sertakan detail yang menggambarkan pengalaman, suasana, dan keunikan destinasi untuk menciptakan koneksi emosional dengan penonton.`,
    image: "https://h.top4top.io/p_3205z5l6t2.png", // Another valid external image URL
    isLocked: false,
  },
  {
    id: `optimalkan-fitur`,
    text: `Optimalkan Fitur Instagram
Gunakan Stories untuk berbagi momen real-time dan tambahkan elemen interaktif seperti polling dan kuis. Ciptakan video menarik melalui Reels untuk menjangkau audiens yang lebih luas. Gunakan IG Live untuk sesi langsung, memberi audiens kesempatan untuk berinteraksi secara langsung. `,
    additionalText: `Dengan memanfaatkan fitur-fitur ini, kamu dapat menarik perhatian lebih banyak pengikut dan meningkatkan interaksi dengan kontenmu.`,
    image: "https://i.top4top.io/p_3205ufxqx3.png", // Another valid external image URL
    isLocked: false,
  },
  {
    id: `susun-jadwal`,
    text: `Susun Jadwal Posting yang Konsisten
Buat rencana konten dengan frekuensi posting yang tetap, seperti beberapa kali dalam seminggu atau sekali setiap hari. Tentukan tema untuk setiap hari, misalnya, #TravelTip pada hari Selasa dan #DestinationSpotlight pada hari Kamis.`,
    additionalText: `Dengan konsistensi ini, audiens akan tahu kapan mengharapkan konten baru, yang dapat meningkatkan keterlibatan dan membuat pengikut lebih setia. `,
    image: "https://j.top4top.io/p_3205j7vbu4.png", // Another valid external image URL
    isLocked: false,
  },
  {
    id: `bagikan-pengetahuan`,
    text: `Bagikan Pengetahuan yang Informatif
Buat konten yang memberikan informasi berguna tentang destinasi wisata, seperti sejarah, budaya, dan atraksi lokal. Gunakan gambar menarik dan caption informatif untuk menarik perhatian audiens. `,
    additionalText: `Sertakan tips perjalanan, rekomendasi tempat makan, atau acara khusus yang sedang berlangsung. Cara ini dapat  membantu audiens merencanakan kunjungan mereka dengan lebih baik.`,
    image: "https://k.top4top.io/p_32056agz85.png", // Another valid external image URL
    isLocked: true,
  },
  {
    id: `jelajahi-akun`,
    text: `Jelajahi Akun Terkemuka
Telusuri akun-akun Instagram yang memiliki pengikut banyak dan dikenal dalam industri pariwisata. Amati cara mereka menampilkan konten, termasuk gaya visual dan tema yang mereka pilih. `,
    additionalText: `Perhatikan interaksi mereka dengan audiens, seperti bagaimana mereka menjawab komentar atau menggunakan fitur Instagram.`,
    image: "https://l.top4top.io/p_3205dtl096.png", // Another valid external image URL
    isLocked: true,
  },
  {
    id: `evaluasi-konten`,
    text: `Evaluasi Konten Sukses
Tinjau konten yang telah mendapatkan banyak interaksi dan perhatian di Instagram. Perhatikan elemen-elemen seperti kualitas gambar, gaya penulisan caption, dan penggunaan fitur interaktif. `,
    additionalText: `Identifikasi pola atau tema yang menarik bagi audiens, sehingga kamu dapat mengadopsi strategi tersebut dalam kontenmu untuk meningkatkan keterlibatan dan daya tarik.`,
    image: "https://a.top4top.io/p_3205njnvn7.png", // Another valid external image URL
    isLocked: true,
  },
];

const LockedContent = ({ onSubscribe }: { onSubscribe: () => void }) => (
  <motion.div
    className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center z-10"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      initial={{ scale: 0.8, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.8, y: 20 }}
      className="text-center p-8"
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      >
        <FontAwesomeIcon icon={faLock} className="text-6xl text-yellow-400 mb-4" />
      </motion.div>
      <h3 className="text-2xl font-bold text-white mb-4">Konten Premium</h3>
      <p className="text-gray-300 mb-6">Berlangganan untuk membuka akses ke semua konten eksklusif</p>
      <button
        onClick={onSubscribe}
        className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50"
      >
        Berlangganan Sekarang
      </button>
    </motion.div>
  </motion.div>
);

export default function ContentCreatorPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleSubscribe = () => {
    router.push('/paket/checkout/instagram');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow w-full h-full flex items-center justify-center bg-gray-100 relative mb-10 mt-10">
        <button
          onClick={handleBack}
          className="absolute top-4 left-4 p-3 bg-white text-lime-500 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:bg-lime-500 hover:text-white hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-lime-300 z-50"
          aria-label="Back"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="w-6 h-6" />
        </button>

        <div className="relative w-full max-w-6xl h-auto min-h-[24rem] overflow-hidden flex items-center justify-between flex-col md:flex-row bg-white shadow-xl rounded-lg border-8 border-gray-300 p-8">
          {slides.map((slide, index) => (
            <AnimatePresence key={slide.id}>
              {currentSlide === index && (
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="w-full flex flex-col md:flex-row items-center justify-between relative"
                >
                  <div className="w-full md:w-1/2 p-4">
                    <h2 className="text-gray-900 text-lg md:text-2xl font-semibold mb-4">
                      {slide.text}
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg">
                      {slide.additionalText}
                    </p>
                  </div>

                  <div className="md:w-1/2 h-auto relative">
                    <img
                      src={slide.image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>

                  {slide.isLocked && <LockedContent onSubscribe={handleSubscribe} />}
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

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

      <footer className="w-full bg-gray-900 text-white">
      </footer>
    </div>
  );
}