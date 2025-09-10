import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <div className="font-bold text-2xl mb-2">
              DevOps<span className="text-blue-400">.</span>
            </div>
            <p className="text-gray-400">Building reliable, scalable infrastructure solutions</p>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 flex items-center justify-center">
              Made with <Heart className="w-4 h-4 mx-2 text-red-500" /> for the DevOps community
            </p>
            <p className="text-sm text-gray-500 mt-2">
              © 2025 DevOps Engineer Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;