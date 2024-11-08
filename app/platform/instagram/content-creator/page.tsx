/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faLock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Swal from 'sweetalert2';

const initialSlides = [
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


const LockedContent = ({ onUnlock, onSubscribe }: { onUnlock: () => void; onSubscribe: () => void }) => {
  const [licenseKey, setLicenseKey] = useState('');
  const [isValidating, setIsValidating] = useState(false);

  const validateLicenseKey = async () => {
    if (!licenseKey.trim()) {
      await Swal.fire({
        title: 'Error!',
        text: 'Silakan masukkan license key',
        icon: 'error',
        confirmButtonColor: '#3085d6',
      });
      return;
    }

    setIsValidating(true);
    try {
      // Menggunakan endpoint baru
      const response = await axios.post('/api/keys/validate-license', {
        licenseKey: licenseKey.trim()
      });

      // Menggunakan format response yang baru
      if (response.data.success && response.data.data.valid) {
        await Swal.fire({
          title: 'Success!',
          text: 'License key valid! Konten akan dibuka',
          icon: 'success',
          confirmButtonColor: '#3085d6',
        });
        localStorage.setItem('contentUnlocked', 'true');
        onUnlock();
      } else {
        await Swal.fire({
          title: 'Error!',
          text: response.data.error || 'License Key tidak valid!',
          icon: 'error',
          confirmButtonColor: '#3085d6',
        });
      }
    } catch (error: any) {
      console.error('Error validating license key:', error);
      await Swal.fire({
        title: 'Error!',
        text: error.response?.data?.error || 'Terjadi kesalahan saat validasi license key',
        icon: 'error',
        confirmButtonColor: '#3085d6',
      });
    } finally {
      setIsValidating(false);
    }
  };

  return (
    <motion.div
      className="absolute inset-0 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center z-10 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.9, y: 10 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 10 }}
        className="text-center p-8 bg-white rounded-lg shadow-lg space-y-6"
      >
        <FontAwesomeIcon icon={faLock} className="text-6xl text-yellow-400 mb-2" />
        <h3 className="text-2xl font-bold text-gray-800">Konten Terkunci</h3>
        <p className="text-gray-600">Masukkan License Key atau Berlangganan untuk membuka konten.</p>

        <div className="w-full space-y-4">
          <input
            type="text"
            value={licenseKey}
            onChange={(e) => setLicenseKey(e.target.value)}
            placeholder="Masukkan License Key"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            disabled={isValidating}
          />
          <button
            onClick={validateLicenseKey}
            disabled={isValidating}
            className="w-full bg-yellow-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-all disabled:bg-yellow-300"
          >
            {isValidating ? 'Memvalidasi...' : 'Buka Konten'}
          </button>
        </div>

        <div className="mt-4">
          <button
            onClick={onSubscribe}
            disabled={isValidating}
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all shadow-lg hover:shadow-yellow-500/50"
          >
            Berlangganan Sekarang
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};


// Main Component with persistence
export default function ContentCreatorPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [slides, setSlides] = useState(initialSlides);
  const router = useRouter();

  // Check if content is unlocked on mount
  useEffect(() => {
    const unlockedStatus = localStorage.getItem('contentUnlocked');
    if (unlockedStatus === 'true') {
      handleUnlock();
    }
  }, []);

  const handleUnlock = () => {
    // Update all slides to be unlocked
    setSlides(currentSlides => 
      currentSlides.map(slide => ({
        ...slide,
        isLocked: false
      }))
    );
    setIsUnlocked(true);
  };

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
  }, [slides.length]);

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

        <div className="relative w-full max-w-6xl h-auto min-h-[24rem] overflow-hidden flex items-center justify-between flex-col md:flex-row bg-white shadow-xl rounded-lg p-8">
          {slides.map((slide, index) => (
            <AnimatePresence key={slide.id}>
              {currentSlide === index && (
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  className="w-full flex flex-col md:flex-row items-center justify-between relative"
                >
                  <div className="w-full md:w-1/2 p-4">
                    <h2 className="text-lg md:text-2xl font-semibold">{slide.text}</h2>
                    <p className="text-base md:text-lg">{slide.additionalText}</p>
                  </div>
                  <div className="md:w-1/2 h-auto">
                    <img
                      src={slide.image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  {slide.isLocked && !isUnlocked && (
                    <LockedContent onUnlock={handleUnlock} onSubscribe={handleSubscribe} />
                  )}
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
    </div>
  );
}