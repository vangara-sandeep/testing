import React from 'react';
import { Heart } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import ContainerReveal from './ContainerReveal';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <ContainerReveal direction="up" distance={50} duration={1.2} stagger={0.3}>
          <div className="text-center">
            <div className="mb-6">
              <ScrollReveal
                baseOpacity={0.1}
                enableBlur={true}
                baseRotation={2}
                blurStrength={6}
                direction="down"
                translateDistance={30}
                containerClassName="mb-2"
                textClassName="font-bold text-2xl text-white"
              >
                DevOps.
              </ScrollReveal>
              <ScrollReveal
                baseOpacity={0.3}
                enableBlur={true}
                baseRotation={1}
                blurStrength={4}
                direction="up"
                translateDistance={25}
                containerClassName=""
                textClassName="text-gray-400"
              >
                Building reliable, scalable infrastructure solutions
              </ScrollReveal>
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
        </ContainerReveal>
      </div>
    </footer>
  );
};

export default Footer;