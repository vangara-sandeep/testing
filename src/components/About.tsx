import React from 'react';
import { Award, Users, Zap } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import VariableProximity from './VariableProximity';

const About = () => {
  const aboutContainerRef = React.useRef<HTMLDivElement>(null);

  const stats = [
    { icon: Award, value: '6+', label: 'Years Experience' },
    { icon: Users, value: '50+', label: 'Projects Deployed' },
    { icon: Zap, value: '99.9%', label: 'Uptime Achieved' }, 
  ];

  return (
    <section id="about" ref={aboutContainerRef} className="py-12 sm:py-16 lg:py-20 bg-white relative px-4 sm:px-6 lg:pl-20 pt-20 sm:pt-24 lg:pt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="mb-6">
            <VariableProximity
              label="About Me"
              className="variable-proximity-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
              fromFontVariationSettings="'wght' 700, 'opsz' 32"
              toFontVariationSettings="'wght' 900, 'opsz' 32"
              containerRef={aboutContainerRef}
              radius={110}
              falloff="linear"
            />
          </div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Passionate DevOps engineer with expertise in cloud infrastructure, automation, and continuous integration/deployment pipelines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-8 sm:mb-12 lg:mb-16">
          <div className="px-4 sm:px-0">
            <div className="mb-6">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                I specialize in designing and implementing scalable infrastructure solutions using modern DevOps practices. My expertise spans cloud platforms, containerization, infrastructure as code, and monitoring systems.
              </p>
            </div>
            <div className="mb-6">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                I believe in automation-first approaches and have successfully reduced deployment times by 80% while improving system reliability across multiple organizations.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="px-3 sm:px-4 py-1 sm:py-2 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm">
                Cloud Architecture
              </span>
              <span className="px-3 sm:px-4 py-1 sm:py-2 bg-teal-100 text-teal-800 rounded-full text-xs sm:text-sm">
                CI/CD Pipelines
              </span>
              <span className="px-3 sm:px-4 py-1 sm:py-2 bg-purple-100 text-purple-800 rounded-full text-xs sm:text-sm">
                Infrastructure as Code
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="space-y-4">
              {stats.map((stat, index) => (
                <SpotlightCard
                  key={index}
                  className="spotlight-small flex items-center space-x-4"
                  spotlightColor={
                    index === 0 ? "rgba(59, 130, 246, 0.3)" :
                    index === 1 ? "rgba(20, 184, 166, 0.3)" :
                    "rgba(147, 51, 234, 0.3)"
                  }
                >
                  <div className={`p-3 rounded-full ${
                    index === 0 ? 'bg-blue-500/10' :
                    index === 1 ? 'bg-teal-500/10' :
                    'bg-purple-500/10'
                  }`}>
                    <stat.icon className={`w-6 h-6 ${
                      index === 0 ? 'text-blue-600' :
                      index === 1 ? 'text-teal-600' :
                      'text-purple-600'
                    }`} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
