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
    title: 'Mendaftar Akun Instagram',
    imageSrc: 'https://d.top4top.io/p_3204713nn1.png',
    description: `Langkah 1: Mendaftar Akun Instagram
Tampilan Halaman PendaftaranDi halaman ini, Anda akan diminta untuk mengisi nama lengkap Anda. Pastikan untuk memasukkan nama yang sesuai agar mudah dikenali oleh orang lain.
Mengisi NamaPada kolom yang tersedia, ketikkan nama lengkap Anda, kemudian klik tombol "Berikutnya" untuk melanjutkan ke langkah berikutnya.`,
  },
  {
    id: 2,
    title: 'Membuat Kata Sandi',
    imageSrc: 'https://e.top4top.io/p_3204ema9z2.png',
    description: `Langkah 2: Membuat Kata Sandi
Tampilan Halaman Kata SandiSetelah mengisi nama, Anda akan diarahkan ke halaman untuk membuat kata sandi. Kata sandi harus terdiri dari minimal 6 karakter, termasuk huruf dan angka.
Membuat Kata SandiMasukkan kata sandi yang kuat dan aman. Pastikan kata sandi tersebut sulit ditebak oleh orang lain. Setelah itu, klik "Berikutnya" untuk melanjutkan.`,
  },
  {
    id: 3,
    title: 'Mengisi Tanggal Lahir',
    imageSrc: 'https://f.top4top.io/p_320487lvf3.png',
    description: `Langkah 3: Mengisi Tanggal Lahir
Tampilan Halaman Tanggal LahirAnda akan diminta untuk memasukkan tanggal lahir Anda. Ini adalah langkah penting untuk pengaturan akun.
Menetapkan TanggalPilih tanggal, bulan, dan tahun kelahiran Anda dari opsi yang tersedia. Setelah memilih, klik "Atur" untuk melanjutkan ke langkah berikutnya.`,
  },
  {
    id: 4,
    title: 'Membuat Nama Pengguna',
    imageSrc: 'https://g.top4top.io/p_3204f277d4.png',
    description: `Langkah 4: Membuat Nama Pengguna
Tampilan Halaman Nama PenggunaSetelah mengisi tanggal lahir, Anda akan diminta untuk membuat nama pengguna. Nama pengguna harus unik dan mudah diingat.
Mengisi Nama PenggunaKetikkan nama pengguna yang diinginkan di kolom yang disediakan. Pastikan nama tersebut sesuai dengan tema akun Anda. Klik "Berikutnya" untuk melanjutkan.`,
  },
  {
    id: 5,
    title: 'Mengisi Nomor Ponsel',
    imageSrc: 'https://h.top4top.io/p_320407mob5.png',
    description: `Langkah 5: Mengisi Nomor Ponsel
Tampilan Halaman Nomor PonselSelanjutnya, Anda akan diminta untuk memasukkan nomor ponsel yang dapat dihubungi. Nomor ini penting untuk tujuan keamanan dan pemulihan akun.
Mengisi Nomor PonselMasukkan nomor ponsel Anda di kolom yang tersedia. Setelah itu, klik "Berikutnya" untuk melanjutkan.`,
  },
  {
    id: 6,
    title: 'Memasukkan Kode Konfirmasi',
    imageSrc: 'https://h.top4top.io/p_320407mob5.png',
    description: `Langkah 6: Memasukkan Kode Konfirmasi
Tampilan Halaman Kode KonfirmasiAnda akan menerima kode konfirmasi melalui SMS untuk memverifikasi nomor ponsel Anda.
Mengisi Kode KonfirmasiMasukkan kode 6 digit yang Anda terima di kolom yang disediakan. Setelah memasukkan kode, klik "Berikutnya" untuk melanjutkan proses pendaftaran.`,
  },
  {
    id: 7,
    title: 'Menambahkan Foto Profil',
    imageSrc: 'https://j.top4top.io/p_3204ubvvq7.png',
    description: `Langkah 7: Menambahkan Foto Profil
Tampilan Halaman Tambah Foto ProfilSetelah memasukkan kode konfirmasi, Anda akan diarahkan ke halaman untuk menambahkan foto profil. Foto ini penting agar teman-teman Anda dapat mengenali Anda di Instagram.
Mengunggah Foto ProfilKlik tombol "Tambahkan foto" untuk mengunggah gambar dari galeri perangkat Anda. Pilih foto yang jelas dan menarik, yang mencerminkan kepribadian atau tema akun Anda.
Pentingnya Foto ProfilPastikan foto profil Anda sesuai dengan tema akun yang Anda buat. Ini akan membantu menarik perhatian dan membuat profil Anda lebih mudah dikenali.
Menyelesaikan PendaftaranSetelah mengunggah foto, Anda dapat melanjutkan untuk menyelesaikan proses pendaftaran. Profil Anda sekarang sudah siap digunakan!`,
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
        Tutorial Mendaftar Akun Instagram
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
