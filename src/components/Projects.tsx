import React from 'react';
import { ExternalLink, Github, Cloud, Container, Shield } from 'lucide-react';
import CardSwap, { Card } from './CardSwap';
import VariableProximity from './VariableProximity';

const Projects = () => {
  const projectsContainerRef = React.useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: 'Multi-Cloud Infrastructure Platform',
      description: 'Designed and implemented a scalable multi-cloud infrastructure using Terraform and Kubernetes, supporting 1M+ daily users.',
      tech: ['AWS', 'Terraform', 'Kubernetes', 'Monitoring'],
      icon: Cloud,
      color: 'blue'
    },
    {
      title: 'CI/CD Pipeline Automation',
      description: 'Built comprehensive CI/CD pipelines reducing deployment time by 80% and improving reliability across 20+ microservices.',
      tech: ['Jenkins', 'Docker', 'GitOps', 'Helm'],
      icon: Container,
      color: 'teal'
    },
    {
      title: 'Security & Compliance Framework',
      description: 'Implemented enterprise security framework achieving SOC2 compliance with automated security scanning and monitoring.',
      tech: ['Security', 'Compliance', 'Monitoring', 'Automation'],
      icon: Shield,
      color: 'purple'
    }
  ];


  return (
    <section id="projects" ref={projectsContainerRef} className="py-12 sm:py-16 lg:py-20 bg-white relative px-4 sm:px-6 lg:pl-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="mb-6">
            <VariableProximity
              label="Featured Projects"
              className="variable-proximity-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
              fromFontVariationSettings="'wght' 700, 'opsz' 32"
              toFontVariationSettings="'wght' 900, 'opsz' 32"
              containerRef={projectsContainerRef}
              radius={140}
              falloff="gaussian"
            />
          </div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Real-world implementations showcasing modern DevOps practices and infrastructure solutions.
          </p>
        </div>

        {/* Centered Card Swap Animation */}
        <div className="flex justify-center items-center px-4 sm:px-0" style={{ minHeight: window.innerWidth < 768 ? '500px' : '700px' }}>
          <CardSwap
            width={window.innerWidth < 768 ? Math.min(window.innerWidth - 32, 350) : 600}
            height={window.innerWidth < 768 ? 300 : 450}
            cardDistance={window.innerWidth < 768 ? 40 : 70}
            verticalDistance={window.innerWidth < 768 ? 50 : 80}
            delay={4000}
            pauseOnHover={true}
            easing="elastic"
          >
            {projects.map((project, index) => (
              <Card key={index} customClass="project-card">
                <div className="h-full p-4 sm:p-6 lg:p-8 flex flex-col justify-between text-white">
                  <div>
                    <div className="inline-flex p-3 sm:p-4 rounded-full mb-4 sm:mb-6 bg-white/20">
                      <project.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">{project.title}</h3>
                    <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">{project.description}</p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 sm:px-3 py-1 bg-white/20 text-white rounded-full text-xs sm:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2 sm:gap-3">
                      <button className="flex items-center px-3 sm:px-4 py-1 sm:py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors text-xs sm:text-sm">
                        <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Code
                      </button>
                      <button className="flex items-center px-3 sm:px-4 py-1 sm:py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors text-xs sm:text-sm">
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Demo
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </section>
  );
};

export default Projects;