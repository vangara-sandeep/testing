import React from 'react';
import { ChevronDown, Server, Cloud, GitBranch } from 'lucide-react';
import FloatingShapes from './FloatingShapes';
import CVModal from './CVModal';
import TiltedCard from './TiltedCard';
import ScrollReveal from './ScrollReveal';
import ContainerReveal from './ContainerReveal';
import SpotlightCard from './SpotlightCard';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-white pl-20">
      <FloatingShapes />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Side - Profile Picture */}
          <ContainerReveal direction="left" distance={80} duration={1.2} enableParallax={true}>
            <div className="flex items-center justify-center h-full py-8 lg:py-16">
              <div className="relative">
                <TiltedCard
                  imageSrc="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=500"
                  altText="Sandeep Vangara - DevOps Engineer"
                  captionText="DevOps Engineer"
                  containerHeight="min(70vh, 500px)"
                  containerWidth="min(90vw, 400px)"
                  imageHeight="min(70vh, 500px)"
                  imageWidth="min(90vw, 400px)"
                  rotateAmplitude={15}
                  scaleOnHover={1.1}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={false}
                />
                
                {/* Floating tech icons around profile */}
                <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 p-2 lg:p-3 bg-blue-500/10 rounded-full animate-bounce">
                  <Server className="w-4 h-4 lg:w-6 lg:h-6 text-blue-600" />
                </div>
                <div className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 p-2 lg:p-3 bg-teal-500/10 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}>
                  <Cloud className="w-4 h-4 lg:w-6 lg:h-6 text-teal-600" />
                </div>
                <div className="absolute top-1/2 -left-3 lg:-left-6 p-2 lg:p-3 bg-purple-500/10 rounded-full animate-ping" style={{animationDelay: '1s'}}>
                  <GitBranch className="w-4 h-4 lg:w-6 lg:h-6 text-purple-600" />
                </div>
              </div>
            </div>
          </ContainerReveal>
          
          {/* Right Side - Content */}
          <ContainerReveal direction="right" distance={100} duration={1.4} delay={0.2} stagger={0.15}>
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <div className="inline-flex items-center space-x-2 mb-4 px-4 py-2 bg-blue-50 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-blue-700">Available for new projects</span>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                <ScrollReveal
                  baseOpacity={0}
                  enableBlur={true}
                  baseRotation={2}
                  blurStrength={8}
                  direction="auto"
                  translateDistance={60}
                  containerClassName="mb-0"
                  textClassName="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
                >
                  Hi, I'm Sandeep Vangara
                </ScrollReveal>
              </h1>
              
              <ScrollReveal
                baseOpacity={0.2}
                enableBlur={true}
                baseRotation={1}
                blurStrength={6}
                direction="left"
                translateDistance={40}
                containerClassName="mb-6"
                textClassName="text-2xl md:text-3xl font-semibold text-gray-700"
              >
                DevOps Engineer
              </ScrollReveal>
              
              <ScrollReveal
                baseOpacity={0.3}
                enableBlur={true}
                baseRotation={0.5}
                blurStrength={4}
                direction="right"
                translateDistance={30}
                containerClassName="mb-8"
                textClassName="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed"
              >
                Bridging development and operations with automation, scalability, and reliability at the core of every solution. Passionate about building robust infrastructure that scales.
              </ScrollReveal>
              
              <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                <div className="flex items-center space-x-4">
                 
                  <SpotlightCard 
                    as="button"
                    className="spotlight-button bg-blue-600 text-white"
                    spotlightColor="rgba(59, 130, 246, 0.3)"
                  >
                    View My Work
                  </SpotlightCard>
                </div>
                <SpotlightCard 
                  as="button"
                  onClick={() => setIsModalOpen(true)}
                  className="spotlight-button border-2 border-gray-300 text-gray-700"
                  spotlightColor="rgba(107, 114, 128, 0.2)"
                >
                  Download CV
                </SpotlightCard>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-gray-900">5+</div>
                  <div className="text-sm text-gray-600">Years Exp.</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Projects Deployed</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-gray-900">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime Achieved</div>
                </div>
              </div>
            </div>
          </ContainerReveal>
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