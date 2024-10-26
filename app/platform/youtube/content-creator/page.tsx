"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faLock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'; // Import axios untuk API request

const slides = [
  {
    id: 'mencari-konten',
    text: `Mencari Konten Relevan
Langkah pertama adalah melakukan pencarian di YouTube dengan kata kunci yang relevan. Gunakan frasa seperti "promosi pariwisata," "wisata lokal," "strategi pemasaran pariwisata," dan sejenisnya. Ini membantu menemukan video yang secara langsung membahas topik yang Anda minati.`,
    additionalText: "Gunakan filter pencarian untuk video yang paling banyak dilihat, sehingga mendapatkan informasi terkini tentang pemasaran pariwisata.",
    image: "https://d.top4top.io/p_3205sclzm1.png", // External image URL
    isLocked: false,
  },
  {
    id: 'mencatat-ide',
    text: `Mencatat Ide dan Strategi
Saat menonton video, catat poin-poin penting dan strategi yang dapat diimplementasikan. Misalnya, jika seorang pembicara membahas pentingnya konten visual yang menarik, buatlah catatan tentang cara membuat foto atau video yang memikat.`,
    additionalText: `Pertimbangkan untuk membuat mind map atau diagram untuk mengorganisir ide-ide yang dijadikan sebagai visualisasi strategi pemasaran.`,
    image: "https://e.top4top.io/p_3205jp2f82.png", // Another valid external image URL
    isLocked: false,
  },
  {
    id: 'mengikuti-channel',
    text: `Mengikuti Channel Edukasi
Setelah menemukan konten yang bermanfaat, penting untuk berlangganan (subscribe) ke channel yang fokus pada pendidikan pariwisata dan pemasaran.`,
    additionalText: `Cari tahu tentang kredibilitas channel dengan melihat jumlah subscriber, frekuensi pembaruan konten, dan interaksi dalam komentar. Channel yang memiliki banyak pengikut dan engagement tinggi biasanya lebih dapat diandalkan dalam menyajikan informasi bermanfaat.`,
    image: "https://c.top4top.io/p_3205dp0jt1.png", // Another valid external image URL
    isLocked: false,
  },
  {
    id: 'mempelajari-analisis',
    text: `Mempelajari Analisis
Tonton video yang menjelaskan cara menganalisis performa konten Anda. Pelajari tentang metrik yang perlu diperhatikan, seperti jumlah tayangan, interaksi pengguna, dan rasio klik-tayang.`,
    additionalText: `Mempelajari Analisis
Tonton video yang menjelaskan cara menganalisis performa konten Anda. Pelajari tentang metrik yang perlu diperhatikan, seperti jumlah tayangan, interaksi pengguna, dan rasio klik-tayang.`,
    image: "https://h.top4top.io/p_3205jj8ax1.png", // Another valid external image URL
    isLocked: false,
  },
  {
    id: 'berlatih-beradaptasi',
    text: `Berlatih dan Beradaptasi
Lakukan eksperimen dengan berbagai format konten dan gaya presentasi. Misalnya, Anda bisa mencoba video pendek, vlog, atau infografis. `,
    additionalText: `Amati reaksi audiens dan gunakan umpan balik untuk menyesuaikan konten Anda agar lebih menarik. Tanyakan apa yang mereka suka dan apa yang bisa ditingkatkan. Ini akan membantu Anda memahami preferensi audiens dan meningkatkan keterlibatan.`,
    image: "https://a.top4top.io/p_3205ohn271.png", // Another valid external image URL
    isLocked: true,
  },
  {
    id: 'mengikuti-trend',
    text: `Mengikuti Trend
Perhatikan video terbaru yang membahas tren dalam pariwisata, terutama yang berkaitan dengan pemasaran di media sosial.`,
    additionalText: `Selain mengamati tren di platform media sosial lainnya, selalu update dengan berita pariwisata dan marketing untuk melihat bagaimana industri berkembang. Dengan demikian, Anda bisa lebih adaptif dalam strategi pemasaran dan konten yang Anda buat.`,
    image: "https://g.top4top.io/p_3205omyj31.png", // Another valid external image URL
    isLocked: true,
  },
  {
    id: 'bergabung-komunitas',
    text: `Bergabung Dalam Komunitas
Cari grup atau forum di YouTube atau platform media sosial lainnya yang membahas pariwisata dan pemasaran. Bergabung dalam komunitas ini memungkinkan Anda untuk berbagi pengalaman, bertanya, dan mendapatkan masukan dari orang-orang yang memiliki minat yang sama.`,
    additionalText: `Berpartisipasi aktif dalam diskusi, bertanya, dan berbagi pengalaman dapat meningkatkan pengetahuan dan keterampilan Anda.`,
    image: "https://l.top4top.io/p_3205v8g1z1.png", // Another valid external image URL
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