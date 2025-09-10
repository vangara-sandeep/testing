import React from 'react';
import { ChevronDown, Server, Cloud, GitBranch } from 'lucide-react';
import FloatingShapes from './FloatingShapes';
import CVModal from './CVModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-white">
      <FloatingShapes />
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="p-3 bg-blue-500/10 rounded-full animate-pulse">
              <Server className="w-6 h-6 text-blue-600" />
            </div>
            <div className="p-3 bg-teal-500/10 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}>
              <Cloud className="w-6 h-6 text-teal-600" />
            </div>
            <div className="p-3 bg-purple-500/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}>
              <GitBranch className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Sandeep
            <br />
            <span className="text-blue-600">Vangara</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Bridging development and operations with automation, scalability, and reliability at the core of every solution.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
              View My Work
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all transform hover:scale-105"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
      
      <CVModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;