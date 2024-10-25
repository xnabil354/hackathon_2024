import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700">
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-4xl w-full bg-gray-800/90 shadow-xl rounded-lg p-10 text-white transition-transform transform hover:scale-105 duration-500">
          <h1 className="text-5xl font-bold mb-6">Tentang Kami</h1>
          <p className="text-lg mb-4">
            Kami adalah tim yang berdedikasi untuk memberikan solusi terbaik...
          </p>
          <div className="flex space-x-4 mt-6">
            <button className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-all">Pelajari Lebih Lanjut</button>
            <button className="px-4 py-2 bg-gray-600 rounded-lg hover:bg-gray-700 transition-all">Hubungi Kami</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
