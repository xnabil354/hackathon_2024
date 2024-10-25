import React from 'react';

const TermsAndConditionsPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-red-400 via-yellow-500 to-green-400">
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-4xl w-full bg-black/30 backdrop-blur-lg shadow-2xl rounded-lg p-10 transform transition hover:scale-105 duration-500">
          <h1 className="text-4xl font-bold text-white mb-6">Syarat dan Ketentuan</h1>
          <ul className="list-disc pl-6 text-white/90 space-y-4">
            <li><strong>Penggunaan:</strong> Hanya untuk pribadi, tidak boleh menyalin tanpa izin.</li>
            <li><strong>Hak Cipta:</strong> Semua konten dilindungi, penggunaan komersial dilarang.</li>
            <li><strong>Tautan:</strong> Kami tidak bertanggung jawab atas situs pihak ketiga.</li>
            <li><strong>Tanggung Jawab:</strong> Kami tidak bertanggung jawab atas kerugian dari penggunaan informasi.</li>
            <li><strong>Perubahan:</strong> Syarat ini dapat berubah dan berlaku setelah dipublikasikan.</li>
            <li><strong>Hukum:</strong> Diatur oleh hukum Indonesia.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
