import React from 'react';

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large floating circle */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse"></div>
      
      {/* Medium floating squares */}
      <div className="absolute top-40 left-20 w-16 h-16 bg-teal-500/10 rounded-lg animate-bounce" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-40 right-40 w-20 h-20 bg-purple-500/10 rounded-lg animate-bounce" style={{animationDelay: '1s'}}></div>
      
      {/* Small floating dots */}
      <div className="absolute top-60 left-1/3 w-8 h-8 bg-green-500/20 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute bottom-60 left-1/4 w-6 h-6 bg-orange-500/20 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-80 right-1/3 w-10 h-10 bg-pink-500/20 rounded-full animate-ping" style={{animationDelay: '0.8s'}}></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-32 left-1/2 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-pulse" style={{animationDelay: '1.2s'}}></div>
      <div className="absolute bottom-32 right-1/4 w-18 h-18 bg-gradient-to-r from-teal-400/20 to-green-400/20 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
    </div>
  );
};

export default FloatingShapes;