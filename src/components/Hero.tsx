import React from 'react';
import { ChevronDown } from 'lucide-react';
import CVModal from './CVModal';
import TiltedCard from './TiltedCard';
import TextType from './TextType';
import VariableProximity from './VariableProximity';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const heroContainerRef = React.useRef<HTMLDivElement>(null);

  return (
    <section
      ref={heroContainerRef}
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-white px-4 sm:px-6 lg:pl-20 pt-20 sm:pt-24 lg:pt-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)] sm:min-h-[calc(100vh-6rem)] lg:min-h-[calc(100vh-7rem)]">
          {/* Left Side - Profile Picture */}
          <div className="flex items-center justify-center h-full py-8 lg:py-16 order-2 lg:order-1">
            <div className="relative">
              <TiltedCard
                imgSrc="https://drive.google.com/uc?export=view&id=1ov75M0ZbM2W2bzGJG2raeRdSUq6e5jsP"
                altText="Vangara Sandeep Kumar"
                captionText="Vangara Sandeep Kumar"
                containerHeight="min(5=50vh, 400px)"
                containerWidth="min(60vw, 350px)"
                imageHeight="min(50vh, 400px)"
                imageWidth="min(60vw, 350px)"
                showDownloadCV={true}
                showMobileWarning={true}
                showTooltip={true}
                onDownloadCV={() => setIsModalOpen(true)}
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-center lg:text-left order-1 lg:order-2 px-4 sm:px-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <TextType
                text="Hi, I'm Sandeep Vangara"
                as="span"
                typingSpeed={75}
                initialDelay={500}
                loop={false}
                showCursor={true}
                cursorCharacter="|"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight"
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
                Bridging development and operations with automation,
                scalability, and reliability at the core of every solution.
                Passionate about building robust infrastructure that scales.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8 px-4 sm:px-0"></div>
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
