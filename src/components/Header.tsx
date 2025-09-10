import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl text-gray-900">
            DevOps<span className="text-blue-600">.</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">Sandeep</a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900 transition-colors">Rajesh</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#" className="p-2 text-gray-600 hover:text-gray-900 transition-colors hover:scale-110 transform">
              <Github size={20} />
            </a>
            <a href="#" className="p-2 text-gray-600 hover:text-gray-900 transition-colors hover:scale-110 transform">
              <Linkedin size={20} />
            </a>
            <a href="#contact" className="p-2 text-gray-600 hover:text-gray-900 transition-colors hover:scale-110 transform">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;