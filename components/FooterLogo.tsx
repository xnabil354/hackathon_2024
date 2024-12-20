import React from 'react';
import Image from 'next/image';

const FooterLogo: React.FC = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 border-4 border-purple-500">
        <Image
          src="/10.jpg"
          alt="Python Raptors Logo"
          width={80} // Ukuran sebenarnya dari gambar
          height={80} // Ukuran sebenarnya dari gambar
          className="rounded-lg"
          priority // Untuk preload gambar agar lebih cepat
        />
      </div>
      <div className="text-left">
        <h1 className="text-2xl font-bold">Python Raptors</h1>
        <p className="italic">Code the Wild, Rule the Digital.</p>
      </div>
    </div>
  );
};

export default FooterLogo;
