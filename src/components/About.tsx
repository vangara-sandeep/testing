import React from 'react';
import { Award, Users, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import ContainerReveal from './ContainerReveal';
import SpotlightCard from './SpotlightCard';

const About = () => {
  const stats = [
    { icon: Award, value: '5+', label: 'Years Experience' },
    { icon: Users, value: '50+', label: 'Projects Deployed' },
    { icon: Zap, value: '99.9%', label: 'Uptime Achieved' },
  ];

  return (
    <section id="about" className="py-20 bg-white relative pl-20">
      <div className="max-w-6xl mx-auto px-6">
        <ContainerReveal direction="fade" duration={1.2} stagger={0.2}>
          <div className="text-center mb-16">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={3}
              blurStrength={10}
              direction="down"
              translateDistance={50}
              containerClassName="mb-6"
              textClassName="text-4xl md:text-5xl font-bold text-gray-900"
            >
              About Me
            </ScrollReveal>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={1}
              blurStrength={6}
              direction="up"
              translateDistance={30}
              containerClassName=""
              textClassName="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Passionate DevOps engineer with expertise in cloud infrastructure, automation, and continuous integration/deployment pipelines.
            </ScrollReveal>
          </div>
        </ContainerReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <ContainerReveal direction="left" distance={80} duration={1.4} stagger={0.3}>
            <div>
              <ScrollReveal
                baseOpacity={0.3}
                enableBlur={true}
                baseRotation={1}
                blurStrength={4}
                direction="right"
                translateDistance={40}
                containerClassName="mb-6"
                textClassName="text-lg text-gray-700 leading-relaxed"
              >
                I specialize in designing and implementing scalable infrastructure solutions using modern DevOps practices. My expertise spans cloud platforms, containerization, infrastructure as code, and monitoring systems.
              </ScrollReveal>
              <ScrollReveal
                baseOpacity={0.3}
                enableBlur={true}
                baseRotation={0.5}
                blurStrength={4}
                direction="left"
                translateDistance={35}
                containerClassName="mb-6"
                textClassName="text-lg text-gray-700 leading-relaxed"
              >
                I believe in automation-first approaches and have successfully reduced deployment times by 80% while improving system reliability across multiple organizations.
              </ScrollReveal>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Cloud Architecture
                </span>
                <span className="px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm">
                  CI/CD Pipelines
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm">
                  Infrastructure as Code
                </span>
              </div>
            </div>
          </ContainerReveal>

          <ContainerReveal direction="right" distance={80} duration={1.4} delay={0.3} enableParallax={true}>
            <div className="relative">
              <SpotlightCard 
                className=""
                spotlightColor="rgba(59, 130, 246, 0.3)"
              >
                <div className="space-y-4">
                  {stats.map((stat, index) => (
                    <SpotlightCard
                      key={index}
                      className="spotlight-small flex items-center space-x-4"
                      spotlightColor="rgba(59, 130, 246, 0.2)"
                    >
                      <div className="p-3 bg-blue-500/10 rounded-full">
                        <stat.icon className="w-6 h-6 text-blue-600" />
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
              </SpotlightCard>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-teal-500/20 rounded-full animate-ping"></div>
            </div>
          </ContainerReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
