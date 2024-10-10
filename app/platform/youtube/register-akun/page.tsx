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
    title: `Membuka YouTube`,
    imageSrc: 'https://e.top4top.io/p_32040vy5p1.png',
    description: `Tampilan Halaman Pendaftaran Pada halaman awal YouTube, Anda perlu memilih "Sign in" untuk memulai proses pendaftaran.
Memasukkan Email atau Nomor Telepon Masukkan alamat email atau nomor telepon yang terhubung dengan akun Google Anda. Jika belum memiliki akun, klik "Create account" untuk membuatnya.
Memasukkan Kata Sandi Setelah memasukkan email, Anda akan diminta untuk memasukkan kata sandi akun Google Anda. Pastikan kata sandi yang dimasukkan benar, lalu klik "Next".`,
  },
  {
    id: 2,
    title: `Masuk ke Akun YouTube`,
    imageSrc: 'https://a.top4top.io/p_3204bldgs3.png',
    description: `Tampilan Halaman Akun Setelah berhasil masuk, Anda akan diarahkan ke halaman utama YouTube. Pilih ikon profil di sudut kanan atas, lalu klik "Create a channel".`,
  },
  {
    id: 3,
    title: `Menyesuaikan Profil Channel`,
    imageSrc: 'https://l.top4top.io/p_3204vf1ox2.png',
    description: `Pengaturan Profil Anda akan diminta untuk memasukkan nama channel yang diinginkan dan memilih foto profil. Pastikan nama dan foto sesuai dengan tema channel yang ingin Anda buat. Klik "Create Channel" untuk menyelesaikan proses ini.`,
  }
];

const RegisterAkunPage = () => {
  const router = useRouter(); // Initialize useRouter

  const handleBack = () => {
    router.back(); // Go back to the previous page
  };

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col justify-center relative">
      <section className="w-full max-w-4xl space-y-12 px-4 mx-auto mb-14">
      {/* Title */}
      <motion.h1 
        className="text-3xl font-bold text-gray-800 text-center mt-10 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Tutorial Mendaftar Akun Youtube
      </motion.h1>
  {steps.map((step, index) => (
    <motion.div
      key={step.id}
      className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center md:flex-row md:space-x-6 mx-auto"
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
        <h2 className="ml-10 text-xl font-semibold text-gray-800 mb-4">{step.title}</h2>
        <p className="ml-10 text-gray-600 mb-4">{step.description}</p>
      </div>
    </motion.div>
  ))}
</section>
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="absolute top-4 left-4 p-3 bg-white text-lime-500 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:bg-lime-500 hover:text-white hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-lime-300 z-50"
        aria-label="Back"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="w-6 h-6" />
      </button>

      {/* Footer placeholder */}
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default RegisterAkunPage;
