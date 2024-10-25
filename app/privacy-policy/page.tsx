import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-bl from-blue-500 to-green-500">
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-3xl w-full bg-white/10 backdrop-blur-md shadow-2xl rounded-lg p-10 transform transition hover:scale-105 duration-500">
          <h1 className="text-4xl font-bold text-white mb-6">Kebijakan Privasi</h1>
          <p className="text-lg text-white mb-4">Di NusaCipta, kami menghargai privasi pengguna. Situs ini tidak mengumpulkan, menyimpan, atau memproses data pribadi. Semua aktivitas di situs ini bersifat anonim, dan kami tidak meminta informasi pengguna.</p>
          <p className="text-lg text-white">Jika kebijakan ini berubah di masa depan, kami akan memberi tahu pengguna dan memperbaruinya di sini.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
