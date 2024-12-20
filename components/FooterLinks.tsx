import React from 'react';

const FooterLinks: React.FC = () => {
  return (
    <div className="space-y-2 text-center md:text-right">
      <a href="#" className="block hover:text-yellow-400">Home</a>
      <a href="#" className="block hover:text-yellow-400">Contact Us</a>
      <a href="#" className="block hover:text-yellow-400">About Us</a>
    </div>
  );
};

export default FooterLinks;
