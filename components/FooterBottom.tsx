import React from 'react';

const FooterBottom: React.FC = () => {
  return (
    <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row items-center justify-between text-sm">
      <div className="space-x-4">
        <a href="#" className="hover:text-yellow-400">Cookie Policy</a>
        <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
        <a href="#" className="hover:text-yellow-400">Terms and Conditions</a>
      </div>
      <div className="mt-4 md:mt-0">
        <p className="text-center">
          Copyright © <span className="font-semibold">PythonRaptors</span> 2024
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
