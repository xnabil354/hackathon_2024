"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faLock } from '@fortawesome/free-solid-svg-icons';

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
    router.push('/paket/checkout/tiktok');
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