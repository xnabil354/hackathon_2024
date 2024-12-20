'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../../../components/Footer'

const steps = [
  {
    id: 1,
    title: 'Mengakses Pengaturan Channel',
    imageSrc: 'https://b.top4top.io/p_32044whqt1.png',
    description: `Mengakses Pengaturan Channel
Tampilan Halaman Akun Setelah berhasil membuat channel, Anda dapat mengakses pengaturan channel dengan memilih ikon profil di kanan atas dan klik "Edit channel".
Mengatur Nama dan Handle Masukkan nama dan handle yang menarik dan sesuai dengan tema pariwisata. Pastikan nama mudah diingat, berhubungan dengan pariwisata, dan mencerminkan identitas unik dari channel Anda.
Menambahkan URL Channel Pastikan URL channel sudah dipersonalisasi, misalnya menggunakan nama destinasi atau tema wisata yang Anda fokuskan, sehingga lebih mudah dikenali oleh penonton.`,
  },
  {
    id: 2,
    title: 'Membuat Profile Akun Pariwisata Yang Menarik',
    imageSrc: 'https://c.top4top.io/p_3204z410y2.png',
    description: `Tips Membuat Profil Akun Pariwisata yang Menarik
Gunakan Nama Deskriptif
Nama channel harus mencerminkan fokus pariwisata, seperti "Explore Bali" atau "Wanderlust Indonesia", agar audiens langsung memahami niche Anda.
Pilih Foto Profil yang Representatif
Gunakan gambar ikon pariwisata khas, seperti Borobudur atau pantai di Bali, yang mencerminkan destinasi utama channel Anda.
Tulis Deskripsi yang Menginspirasi
Deskripsi singkat seperti: "Selamat datang di channel [Nama Channel], tempat kami menjelajahi destinasi tersembunyi dan berbagi tips serta pengalaman lokal."
Gunakan Handle yang Mudah Diingat
Pilih handle unik seperti @ExploreBali atau @DiscoverIndonesia untuk memudahkan pencarian dan berbagi.
Atur Privasi Langganan
Tampilkan langganan publik, terutama jika mengikuti channel pariwisata atau travel influencer yang relevan.`,
  }
];

const MembuatProfilePage = () => {
  const router = useRouter(); // Initialize useRouter

  const handleBack = () => {
    router.back(); // Go back to the previous page
  };

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col justify-center relative">
      <section className="w-full max-w-4xl space-y-12 px-4 mx-auto mb-14">
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
              <h2 className="ml-14 text-xl font-semibold text-gray-800 mb-4">{step.title}</h2>
              <p className="ml-14 text-gray-600 mb-4">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Footer placeholder */}
      <Footer />
    </main>
  );
};

export default MembuatProfilePage;
