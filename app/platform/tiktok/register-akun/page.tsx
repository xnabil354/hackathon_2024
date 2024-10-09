'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const steps = [
  {
    id: 1,
    title: 'Mendaftar Akun Tiktok',
    imageSrc: 'https://a.top4top.io/p_3204hinns1.jpg',
    description: `Pada menu utama pendaftaran, Anda akan menemukan berbagai opsi untuk mendaftar akun TikTok. Silakan pilih salah satu metode yang paling sesuai dengan kebutuhan Anda:
Gunakan Nomor Telepon atau Email: Daftar dengan memasukkan nomor telepon atau email Anda, dan terima kode verifikasi.
Melanjutkan dengan Google: Daftar cepat menggunakan akun Google Anda.
Melanjutkan dengan Apple: Gunakan ID Apple untuk mendaftar tanpa mengisi formulir secara manual.
Melanjutkan dengan Facebook: Daftar melalui akun Facebook untuk integrasi sosial yang lebih mudah.
Melanjutkan dengan LINE: Daftar cepat menggunakan akun LINE Anda.
Melanjutkan dengan KakaoTalk: Pilih opsi ini jika Anda pengguna KakaoTalk.
Silakan pilih salah satu opsi yang diinginkan, kemudian ikuti petunjuk untuk menyelesaikan pendaftaran akun TikTok Anda.`,
  },
  {
    id: 2,
    title: 'Pilih Akun Google',
    imageSrc: 'https://d.top4top.io/p_3204wzrnh4.png',
    description: `Langkah 2: Memilih Akun Google
Pilih Opsi "Sign in with Google" Setelah memilih untuk mendaftar dengan akun Google, Anda akan diarahkan ke halaman untuk memilih akun yang akan digunakan.
Pilih Akun Dari daftar, pilih akun Google yang ingin Anda gunakan
Lanjutkan ke TikTok Setelah memilih akun, klik nama akun tersebut untuk melanjutkan ke TikTok. Anda mungkin perlu memberikan izin untuk mengakses informasi akun.
Ikuti Petunjuk Selanjutnya Setelah memberikan izin, ikuti petunjuk yang muncul untuk menyelesaikan pendaftaran akun TikTok Anda.
Catatan:
Pastikan Anda memilih akun yang benar agar proses pendaftaran berjalan lancar. Jika belum memiliki akun Google, buatlah terlebih dahulu.`,
  },
  {
    id: 3,
    title: 'Konfirmasi Masuk',
    imageSrc: 'https://e.top4top.io/p_3204aqcd65.png',
    description: `Langkah 3: Masuk ke TikTok
Tampilan Halaman Masuk Setelah memilih akun Google, Anda akan melihat halaman masuk TikTok dengan alamat email yang dipilih. Pastikan alamatnya benar.
Informasi yang Dibagikan Halaman ini menginformasikan bahwa Google akan membagikan nama, alamat email, preferensi bahasa, dan foto profil Anda dengan TikTok. Pastikan Anda memahami informasi yang akan dibagikan.
Baca Kebijakan Privasi Anda dapat melihat kebijakan privasi dan syarat layanan TikTok untuk memastikan Anda setuju dengan penggunaan data Anda.
Lanjutkan Pendaftaran Jika semua informasi benar dan Anda setuju, klik tombol "Continue" untuk melanjutkan ke langkah berikutnya.
Catatan:
Jika ingin membatalkan proses, klik tombol Cancel.
Pastikan informasi yang dibagikan sesuai dengan yang Anda inginkan.`,
  },
  {
    id: 4,
    title: 'Isi Data Ulang Tahun Anda',
    imageSrc: 'https://f.top4top.io/p_32046j89a6.png',
    description: `Langkah 4: Mengisi Tanggal Lahir
Tampilan Halaman Tanggal Lahir Setelah masuk ke akun TikTok, Anda akan diminta untuk memasukkan tanggal lahir Anda. Halaman ini menampilkan kolom untuk mengisi tanggal lahir Anda.
Pilih Tanggal Anda akan melihat tampilan kalender. Pilih tanggal, bulan, dan tahun kelahiran Anda dengan menggulir melalui opsi yang tersedia. Pastikan untuk memilih tanggal yang tepat.
Informasi Privasi TikTok menjelaskan bahwa tanggal lahir Anda tidak akan ditampilkan secara publik, sehingga Anda tidak perlu khawatir tentang privasi informasi ini.
Lanjutkan ke Langkah Berikutnya Setelah memilih tanggal lahir, klik tombol "Next" untuk melanjutkan ke tahap pendaftaran berikutnya.
Catatan:
Pastikan tanggal lahir yang Anda masukkan adalah benar, karena informasi ini mungkin diperlukan untuk verifikasi akun di masa depan.`,
  },
  {
    id: 5,
    title: 'Create Nickname/Username',
    imageSrc: 'https://g.top4top.io/p_3204gmzh37.png',
    description: `Langkah 5: Membuat Nama Panggilan
Tampilan Halaman Nama Panggilan Setelah memasukkan tanggal lahir, Anda akan diminta untuk membuat nama panggilan yang dapat diubah nanti.
Masukkan Nama Panggilan Di kolom yang disediakan, masukkan nama panggilan yang Anda inginkan. Ini akan menjadi identitas Anda di TikTok.
Opsi Melewati Jika tidak ingin membuat nama panggilan sekarang, Anda bisa memilih opsi "Skip." Jika melewati, TikTok akan memberikan nama panggilan default.
Lanjutkan Pendaftaran Setelah menambahkan nama panggilan atau memilih untuk melewatinya, klik "Next" untuk melanjutkan proses pendaftaran.
Catatan:
Nama panggilan dapat diubah di kemudian hari, jadi tidak perlu khawatir jika pilihan saat ini kurang tepat.`,
  }
];

const RegisterAkunPage = () => {
  const router = useRouter(); // Initialize useRouter

  const handleBack = () => {
    router.back(); // Go back to the previous page
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center">
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
        Tutorial Mendaftar Akun Tiktok
      </motion.h1>

      {/* Step-by-step guide */}
      <section className="w-full max-w-4xl space-y-12 px-4">
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
              <h2 className="text-xl font-semibold text-gray-800 mb-4">{step.title}</h2>
              <p className="text-gray-600 mb-4">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Footer placeholder */}
      <footer className="mt-20 mb-10 text-gray-600 text-center">
        © 2024 TikTok Tutorial - All Rights Reserved
      </footer>
    </main>
  );
};

export default RegisterAkunPage;
