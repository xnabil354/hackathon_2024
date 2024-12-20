import React from 'react';

const FooterContact: React.FC = () => {
  return (
    <div className="space-y-2 text-center md:text-left">
      <h2 className="text-lg font-semibold">Need Help?</h2>
      <div className="flex items-center space-x-2">
        <span>📧</span>
        <a href="mailto:contact@pythonraptors.com" className="hover:text-yellow-400">
          contact@pythonraptors.com
        </a>
      </div>
      <div className="flex items-center space-x-2">
        <span>📞</span>
        <a href="tel:08888888888" className="hover:text-yellow-400">08888888888</a>
      </div>
    </div>
  );
};

export default FooterContact;
