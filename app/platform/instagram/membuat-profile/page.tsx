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
    title: 'Profile Awal',
    imageSrc: 'https://g.top4top.io/p_3204r7ro61.png',
    description: `Profil: Lucid Worlds
Tampilan Profil: Menampilkan informasi dasar, jumlah posting, pengikut, dan yang diikuti.
Informasi: Nama: Lucid Worlds, Username: lucidworlds.co.
Bio: "Clothing (Brand). Born To Choose." Tautan ke Shopee.
Tips untuk Profil Akun Promosi Pariwisata
Foto Profil Menarik: Gambar yang mewakili tema pariwisata.
Username Unik: Singkat dan mudah diingat.
Bio Informatif: Menjelaskan konten, misalnya, "Menjelajahi keindahan alam Indonesia."
Call to Action: Ajak pengunjung untuk mengikuti atau mengunjungi situs Anda.
Hashtag Relevan: Tambahkan hashtag untuk visibilitas.
Perbarui Profil: Ganti foto dan bio secara berkala.
Konten Menarik: Pastikan konten relevan dan menarik.`,
  },
  {
    id: 2,
    title: 'Edit Profile',
    imageSrc: 'https://h.top4top.io/p_3204p4fns2.png',
    description: `Tampilan Halaman Edit Profil
Klik "Edit picture or avatar" untuk mengganti foto profil.
Informasi Profil
Nama: Lucid Worlds
Username: lucidworlds.co
Pronouns: Pilihan untuk menambahkan kata ganti (opsional).
Bio
Deskripsi: "Born To Choose." dan "Stay lit with us" dengan hashtag #bornwdreams. Tautan untuk belanja produk.
Tips untuk Profil Akun Promosi Pariwisata
Foto Profil Menarik: Pilih gambar yang mencerminkan tema pariwisata.
Username Jelas: Username singkat dan mudah diingat.
Bio Menarik: Tulis bio yang menggambarkan konten, misalnya, "Menjelajahi keindahan alam Indonesia."
Sertakan Call to Action: Ajak pengunjung untuk mengikuti akun atau mengunjungi situs Anda.
Gunakan Hashtag Relevan: Tambahkan hashtag untuk meningkatkan visibilitas.
Perbarui Secara Berkala: Ganti foto dan bio sesuai konten terbaru.
Tautan Penting: Sertakan tautan yang relevan untuk informasi lebih lanjut.`,
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
        Cara Membuat Profile Instagram yang Menarik
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
              <h2 className="ml-10 text-xl font-semibold text-gray-800 mb-4">{step.title}</h2>
              <p className="ml-10 text-gray-600 mb-4">{step.description}</p>
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
