import React from 'react';
import { ChevronDown, Server, Cloud, GitBranch } from 'lucide-react';
import CVModal from './CVModal';
import TiltedCard from './TiltedCard';
import SpotlightCard from './SpotlightCard';
import VariableProximity from './VariableProximity';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const heroContainerRef = React.useRef<HTMLDivElement>(null);

  return (
    <section ref={heroContainerRef} className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-white px-4 sm:px-6 lg:pl-20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Side - Profile Picture */}
          <div className="flex items-center justify-center h-full py-8 lg:py-16 order-2 lg:order-1">
            <div className="relative">
              <TiltedCard
                imageSrc="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=500"
                altText="Sandeep Vangara - DevOps Engineer"
                captionText="DevOps Engineer"
                containerHeight="min(50vh, 400px)"
                containerWidth="min(80vw, 350px)"
                imageHeight="min(50vh, 400px)"
                imageWidth="min(80vw, 350px)"
                rotateAmplitude={15}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={false}
              />
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="text-center lg:text-left order-1 lg:order-2 px-4 sm:px-0">
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 mb-4 px-3 sm:px-4 py-2 bg-blue-50 rounded-full text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="font-medium text-blue-700">Available for new projects</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <VariableProximity
                label="Hi, I'm Sandeep Vangara"
                className="variable-proximity-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight"
                fromFontVariationSettings="'wght' 700, 'opsz' 32"
                toFontVariationSettings="'wght' 900, 'opsz' 32"
                containerRef={heroContainerRef}
                radius={120}
                falloff="exponential"
              />
            </h1>
            
            <div className="mb-6">
              <VariableProximity
                label="DevOps Engineer"
                className="variable-proximity-heading text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700"
                fromFontVariationSettings="'wght' 600, 'opsz' 24"
                toFontVariationSettings="'wght' 800, 'opsz' 24"
                containerRef={heroContainerRef}
                radius={100}
                falloff="gaussian"
              />
            </div>
            
            <div className="mb-6 sm:mb-8">
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed px-2 sm:px-0">
                Bridging development and operations with automation, scalability, and reliability at the core of every solution. Passionate about building robust infrastructure that scales.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8 px-4 sm:px-0">
              <div className="flex items-center space-x-3 sm:space-x-4">
               
                <SpotlightCard 
                  as="button"
                  className="spotlight-button bg-blue-600 text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
                  spotlightColor="rgba(59, 130, 246, 0.3)"
                >
                  View My Work
                </SpotlightCard>
              </div>
              <SpotlightCard 
                as="button"
                onClick={() => setIsModalOpen(true)}
                className="spotlight-button border-2 border-gray-300 text-gray-700 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
                spotlightColor="rgba(107, 114, 128, 0.2)"
              >
                Download CV
              </SpotlightCard>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-sm sm:max-w-md mx-auto lg:mx-0 px-4 sm:px-0">
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">5+</div>
                <div className="text-xs sm:text-sm text-gray-600">Years Exp.</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">50+</div>
                <div className="text-xs sm:text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">99.9%</div>
                <div className="text-xs sm:text-sm text-gray-600">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
      
      <CVModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;