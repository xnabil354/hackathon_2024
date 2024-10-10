import React from 'react';
import Footer from '../../components/Footer'; // Pastikan path sesuai dengan lokasi footer.tsx

const CookiePolicyPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500">
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-4xl w-full bg-white/20 backdrop-blur-lg shadow-2xl rounded-lg p-10 transform transition hover:scale-105 duration-500">
          <h1 className="text-4xl font-bold text-white mb-6">Kebijakan Cookie</h1>
          <p className="text-lg text-white mb-4">Situs web NusaCipta menggunakan cookie untuk meningkatkan pengalaman Anda dengan melacak preferensi dan memberikan saran yang sesuai.</p>
          <ul className="list-disc pl-6 text-white/90 space-y-4">
            <li>
              <strong>Cookie Esensial:</strong> Cookie ini diperlukan untuk kinerja situs web dan tidak dapat dinonaktifkan. Cookie ini tidak melacak data pribadi untuk tujuan pemasaran.
            </li>
            <li>
              <strong>Cookie Analitik Situs Web:</strong> Cookie ini mengumpulkan data internal tentang penggunaan situs web untuk membantu kami meningkatkan pengalaman Anda.
            </li>
            <li>
              <strong>Cookie Preferensi Pengguna:</strong> Cookie ini mengingat pilihan Anda, seperti preferensi bahasa atau destinasi, untuk memberikan pengalaman yang lebih personal saat kunjungan berikutnya.
            </li>
            <li>
              <strong>Cookie Pihak Ketiga:</strong> Fitur pihak ketiga, seperti video atau integrasi media sosial, dapat mengatur cookie.
            </li>
          </ul>
        </div>
      </div>
      <Footer /> {/* Panggil Footer di bagian bawah */}
    </div>
  );
};

export default CookiePolicyPage;
