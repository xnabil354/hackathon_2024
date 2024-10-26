"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faLock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'; // Import axios untuk API request

const slides = [
  {
    id: 'target-audience',
    text: "Siapa yang ingin kamu jangkau? Penting untuk mengetahui siapa yang akan menonton kontenmu. Misalnya, apakah audiensmu adalah keluarga, remaja, atau wisatawan yang mencari petualangan?",
    additionalText: "Apa yang mereka suka? Coba pikirkan tentang apa yang menarik bagi mereka. Apakah mereka suka alam, budaya, makanan, atau aktivitas ekstrem? Memahami minat mereka akan membantumu membuat konten yang lebih menarik.",
    image: "https://l.top4top.io/p_32047mwxz1.png",
    isLocked: false,
  },
  {
    id: 'content-research',
    text: "Riset Konten dan Ide Kreatif\nLihat konten orang lain. \nTonton video TikTok lain yang berkaitan dengan pariwisata. Catat apa yang kamu suka dan apa yang tidak.\nIni akan memberimu ide untuk membuat video yang lebih baik.\nBuat daftar ide.",
    additionalText: "Pikirkan tentang format video yang ingin kamu buat. \nMisalnya, kamu bisa membuat video tips perjalanan, vlog sehari di destinasi, atau tantangan seru di tempat tersebut.",
    image: "https://a.top4top.io/p_3204qy9222.png",
    isLocked: false,
  },
  {
    id: 'viral-analysis',
    text: "Analisis Video Viral\nAmati video yang mendapatkan banyak interaksi. Cari tahu elemen yang membuatnya berhasil. \nCatat teknik pengeditan, penggunaan musik, dan jenis konten yang paling diminati. Ini bisa membantumu memahami apa yang disukai audiens.",
    additionalText: "Konten dapat disajikan dengan santai, serius, menghibur dan banyak lagi. Gaya penyampaian dapat mempengaruhi daya tarik konten terhadap audiens.",
    image: "https://d.top4top.io/p_3204nzjys1.png",
    isLocked: false,
  },
  {
    id: 'storytelling',
    text: "Ciptakan Cerita Menarik\nBuatlah narasi yang kuat untuk video kamu. Ceritakan pengalaman unik di destinasi wisata atau tunjukkan budaya lokal dengan cara yang menarik.",
    additionalText: "Mulailah dengan memperkenalkan latar belakang destinasi, lalu ceritakan pengalaman unik atau momen tak terlupakan yang bisa dialami pengunjung, seperti aktivitas menarik, keindahan alam, atau budaya lokal yang khas.",
    image: "https://e.top4top.io/p_3204zo0kx2.png",
    isLocked: false,
  },
  {
    id: 'marketing-strategy',
    text: "Pelajari Strategi Pemasaran\nLakukan riset terhadap akun-akun sukses yang fokus pada promosi pariwisata dan analisis bagaimana mereka menyampaikan pesan kepada audiens",
    additionalText: "Amati teknik yang mereka gunakan, seperti format konten, pemilihan musik, dan interaksi dengan pengikut, serta cara mereka memanfaatkan tren untuk menjangkau lebih banyak orang.",
    image: "https://i.top4top.io/p_3204m54pd1.png",
    isLocked: true,
  },
  {
    id: 'promotion-content',
    text: "Menciptakan Konten Promosi\nDorong pengguna untuk membuat dan membagikan video pengalaman mereka di destinasi wisata yang kamu promosikan.",
    additionalText: "Ajak mereka berpartisipasi dalam tantangan atau menggunakan hashtag khusus untuk mengumpulkan konten tersebut. Bagikan dan apresiasi karya mereka, sehingga menciptakan komunitas yang saling mendukung dan meningkatkan keterlibatan.",
    image: "https://j.top4top.io/p_3204mhxy32.png",
    isLocked: true,
  },
  {
    id: 'hashtag-strategy',
    text: "Penggunaan Hashtag dengan Bijak\nPilih kombinasi hashtag umum yang banyak dicari, seperti #WisataIndonesia, dan hashtag yang lebih spesifik untuk menarik audiens yang tertarik dengan jenis konten tertentu.",
    additionalText: "Ini meningkatkan visibilitas dan keterlibatan konten promosi pariwisata di daerahmu.",
    image: "https://k.top4top.io/p_3204f87w83.png",
    isLocked: true,
  },
];

const LockedContent = ({ onUnlock, onSubscribe }: { onUnlock: () => void; onSubscribe: () => void }) => {
  const [licenseKey, setLicenseKey] = useState('');

  const validateLicenseKey = async () => {
    try {
      const response = await axios.post('/api/validate-license', { licenseKey });

      if (response.data.valid) {
        onUnlock(); // Unlock content if license key is valid
      } else {
        alert('License Key tidak valid!');
      }
    } catch (error) {
      console.error('Error validating license key:', error);
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
          />
          <button
            onClick={validateLicenseKey}
            className="w-full bg-yellow-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-all"
          >
            Buka Konten
          </button>
        </div>

        <div className="mt-4">
          <button
            onClick={onSubscribe}
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all shadow-lg hover:shadow-yellow-500/50"
          >
            Berlangganan Sekarang
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function ContentCreatorPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false); // Track if content is unlocked
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleUnlock = () => {
    setIsUnlocked(true); // Unlock all slides when called
  };

  const handleSubscribe = () => {
    router.push('/paket/checkout/tiktok'); // Navigate to checkout page
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
                  {!isUnlocked && slide.isLocked && (
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