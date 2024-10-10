"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../../../components/Footer'

const slides = [
  {
    text: `Mencari Konten Relevan
Langkah pertama adalah melakukan pencarian di YouTube dengan kata kunci yang relevan. Gunakan frasa seperti "promosi pariwisata," "wisata lokal," "strategi pemasaran pariwisata," dan sejenisnya. Ini membantu menemukan video yang secara langsung membahas topik yang Anda minati.`,
    additionalText: "Gunakan filter pencarian untuk video yang paling banyak dilihat, sehingga mendapatkan informasi terkini tentang pemasaran pariwisata.",
    image: "https://d.top4top.io/p_3205sclzm1.png", // External image URL
  },
  {
    text: `Mencatat Ide dan Strategi
Saat menonton video, catat poin-poin penting dan strategi yang dapat diimplementasikan. Misalnya, jika seorang pembicara membahas pentingnya konten visual yang menarik, buatlah catatan tentang cara membuat foto atau video yang memikat.`,
    additionalText: `Pertimbangkan untuk membuat mind map atau diagram untuk mengorganisir ide-ide yang dijadikan sebagai visualisasi strategi pemasaran.`,
    image: "https://e.top4top.io/p_3205jp2f82.png", // Another valid external image URL
  },
  {
    text: `Mengikuti Channel Edukasi
Setelah menemukan konten yang bermanfaat, penting untuk berlangganan (subscribe) ke channel yang fokus pada pendidikan pariwisata dan pemasaran.`,
    additionalText: `Cari tahu tentang kredibilitas channel dengan melihat jumlah subscriber, frekuensi pembaruan konten, dan interaksi dalam komentar. Channel yang memiliki banyak pengikut dan engagement tinggi biasanya lebih dapat diandalkan dalam menyajikan informasi bermanfaat.`,
    image: "https://c.top4top.io/p_3205dp0jt1.png", // Another valid external image URL
  },
  {
    text: `Mempelajari Analisis
Tonton video yang menjelaskan cara menganalisis performa konten Anda. Pelajari tentang metrik yang perlu diperhatikan, seperti jumlah tayangan, interaksi pengguna, dan rasio klik-tayang.`,
    additionalText: `Mempelajari Analisis
Tonton video yang menjelaskan cara menganalisis performa konten Anda. Pelajari tentang metrik yang perlu diperhatikan, seperti jumlah tayangan, interaksi pengguna, dan rasio klik-tayang.`,
    image: "https://h.top4top.io/p_3205jj8ax1.png", // Another valid external image URL
  },
  {
    text: `Berlatih dan Beradaptasi
Lakukan eksperimen dengan berbagai format konten dan gaya presentasi. Misalnya, Anda bisa mencoba video pendek, vlog, atau infografis. `,
    additionalText: `Amati reaksi audiens dan gunakan umpan balik untuk menyesuaikan konten Anda agar lebih menarik. Tanyakan apa yang mereka suka dan apa yang bisa ditingkatkan. Ini akan membantu Anda memahami preferensi audiens dan meningkatkan keterlibatan.`,
    image: "https://a.top4top.io/p_3205ohn271.png", // Another valid external image URL
  },
  {
    text: `Mengikuti Trend
Perhatikan video terbaru yang membahas tren dalam pariwisata, terutama yang berkaitan dengan pemasaran di media sosial.`,
    additionalText: `Selain mengamati tren di platform media sosial lainnya, selalu update dengan berita pariwisata dan marketing untuk melihat bagaimana industri berkembang. Dengan demikian, Anda bisa lebih adaptif dalam strategi pemasaran dan konten yang Anda buat.`,
    image: "https://g.top4top.io/p_3205omyj31.png", // Another valid external image URL
  },
  {
    text: `Bergabung Dalam Komunitas
Cari grup atau forum di YouTube atau platform media sosial lainnya yang membahas pariwisata dan pemasaran. Bergabung dalam komunitas ini memungkinkan Anda untuk berbagi pengalaman, bertanya, dan mendapatkan masukan dari orang-orang yang memiliki minat yang sama.`,
    additionalText: `Berpartisipasi aktif dalam diskusi, bertanya, dan berbagi pengalaman dapat meningkatkan pengetahuan dan keterampilan Anda.`,
    image: "https://l.top4top.io/p_3205v8g1z1.png", // Another valid external image URL
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
      <div className="flex-grow w-full h-full flex items-center justify-center bg-gray-100 relative mb-10 mt-10">
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