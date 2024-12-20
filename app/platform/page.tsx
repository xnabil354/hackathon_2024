"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome for Icons
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Import Back Arrow Icon

const PlatformPage = () => {
  const router = useRouter();

  const handlePlatformSelect = (platform: 'design' | 'webdev' | 'cybersec') => {
    router.push(`/platform/${platform}`);
  };

  const handleBack = () => {
    router.back(); // Navigate to the previous page
  };

  return (
    <main className="min-h-screen flex flex-col justify-between bg-blue-50 relative">
      {/* Back Button in Top-Left Corner */}
      <button
        onClick={handleBack}
        className="absolute top-4 left-4 p-3 bg-white text-lime-500 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:bg-lime-500 hover:text-white hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-lime-300 z-50"
        aria-label="Back"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="w-6 h-6" />
      </button>

      <section className="relative flex flex-col items-center justify-center flex-grow px-4 z-10 bg-blue-50">
        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
          <Image
            src="/5.jpg"
            alt="Background Image"
            layout="fill"
            className="object-cover"
            quality={100}
            priority
          />
        </div>

        <h1 className="text-5xl font-bold mb-4 mt-16 text-white relative z-10">Silahkan Pilih</h1>
        <h2 className="text-5xl font-bold mb-8 text-white relative z-10">Platform</h2>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-5xl relative z-10 mt-12 mb-20">
          
          {/* Tiktok Card */}
          <div
            className="bg-white text-center p-6 cursor-pointer rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl border-4 border-transparent hover:border-lime-500"
            onClick={() => handlePlatformSelect('design')}
          >
            <div className="relative w-full h-40 flex items-center justify-center rounded-lg">
              <i className="fa-brands fa-figma text-6xl text-gray-800"></i>
            </div>
            <h3 className="mt-4 text-2xl font-semibold">UI/UX</h3>
            <p className="text-gray-700 mt-2">
            UI (User Interface) dan UX (User Experience) adalah dua elemen penting yang harus diperhatikan dalam setiap desain situs web. UI mencakup elemen visual yang memudahkan pengguna berinteraksi dengan situs, seperti tombol, menu, dan layout
            </p>
          </div>

          {/* Instagram Card */}
          <div
            className="bg-white text-center p-6 cursor-pointer rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl border-4 border-transparent hover:border-lime-500"
            onClick={() => handlePlatformSelect('webdev')}
          >
            <div className="relative w-full h-40 flex items-center justify-center rounded-lg">
              <i className="fa-solid fa-code text-6xl text-gray-800"></i>
            </div>
            <h3 className="mt-4 text-2xl font-semibold">Web Developer</h3>
            <p className="text-gray-700 mt-2">
            Web Developer berperan sebagai pengembang teknis yang membangun, menguji, dan memelihara situs web. Dengan keahlian dalam berbagai bahasa pemrograman seperti HTML, CSS, JavaScript, dan backend technologies seperti PHP atau Node.js
            </p>
          </div>

          {/* Youtube Card */}
          <div
            className="bg-white text-center p-6 cursor-pointer rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl border-4 border-transparent hover:border-lime-500"
            onClick={() => handlePlatformSelect('cybersec')}
          >
            <div className="relative w-full h-40 flex items-center justify-center rounded-lg">
              <i className="fa-solid fa-shield-halved text-6xl text-gray-800"></i>
            </div>
            <h3 className="mt-4 text-2xl font-semibold">Cyber Security</h3>
            <p className="text-gray-700 mt-2">
            Keamanan siber adalah upaya untuk melindungi sistem, jaringan, dan data dari ancaman digital seperti peretasan, malware, dan ransomware. Di tengah kemajuan teknologi, ancaman siber semakin canggih, sehingga membutuhkan strategi perlindungan yang lebih kuat dan terintegrasi
            </p>
          </div>
        </div>
      </section>

      <div className="my-16 mt-10"></div> {/* This will add space between sections */}

      {/* Refined Section: Manfaat dari Sosial Media Marketing */}
      <section className="flex flex-col items-center justify-center p-12 bg-gray-100 mb-10">
        <h1 className="text-3xl font-bold text-center mb-12 text-gray-800 mb-10">Apa manfaat dari pelatihan PhytonRaptors ?</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* First Benefit */}
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <Image
              src="https://k.top4top.io/p_3204nzag61.png"
              alt="Ilustrasi menjangkau audiens"
              width={96}
              height={96}
              className="w-24 h-24 mb-6 rounded-full"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Design UI/UX</h3>
            <p className="text-gray-600">Meningkatkan Pengalaman Pengguna (UX) dan Desain Antarmuka (UI) Pelatihan dalam UI/UX</p>
          </div>

          {/* Second Benefit */}
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <Image
              src="https://l.top4top.io/p_3204cn1fx2.png"
              alt="Ilustrasi hemat biaya"
              width={96}
              height={96}
              className="w-24 h-24 mb-6 rounded-full"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Dijamin Aman Data Kamu</h3>
            <p className="text-gray-600">Memastikan Keamanan Digital dan Perlindungan Data</p>
          </div>

          {/* Third Benefit */}
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <Image
              src="https://a.top4top.io/p_3204e5glk3.png"
              alt="Ilustrasi interaksi langsung"
              width={96}
              height={96}
              className="w-24 h-24 mb-6 rounded-full"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Responsive Web</h3>
            <p className="text-gray-600">Meningkatkan Keterampilan Pengembangan Situs Web yang Responsif dan Berkualitas</p>
          </div>
        </div>
      </section>

  
    </main>
  );
};

export default PlatformPage;
