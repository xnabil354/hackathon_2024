import React from 'react';
import FooterLogo from './FooterLogo';
import FooterLinks from './FooterLinks';
import FooterContact from './FooterContact';
import FooterBottom from './FooterBottom';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-800 to-blue-900 text-white py-10">
      <div className="container mx-auto px-6 space-y-10">
        {/* Logo and Links Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <FooterLogo />
          <FooterLinks />
        </div>

        {/* Contact and Map Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <FooterContact />
          <div className="mt-6 md:mt-0">
            <Image
              src="/9.jpeg"
              alt="Find Us"
              width={160} // Sesuaikan dengan ukuran gambar
              height={112} // Sesuaikan dengan ukuran gambar
              className="rounded-lg shadow-md"
            />
            <p className="mt-2 text-sm italic text-center">Temukan Kami</p>
          </div>
        </div>

        {/* Bottom Section */}
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
