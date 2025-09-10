import React from 'react';
import { ExternalLink, Github, Cloud, Container, Shield } from 'lucide-react';
import CardSwap, { Card } from './CardSwap';
import ScrollReveal from './ScrollReveal';
import ContainerReveal from './ContainerReveal';

const Projects = () => {
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
    <section id="projects" className="py-20 bg-white relative pl-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ContainerReveal direction="rotate" rotationAmount={15} duration={1.5} stagger={0.3}>
          <div className="text-center mb-16">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={15}
              direction="auto"
              translateDistance={80}
              containerClassName="mb-6"
              textClassName="text-4xl md:text-5xl font-bold text-gray-900"
            >
              Featured Projects
            </ScrollReveal>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              direction="left"
              translateDistance={50}
              containerClassName=""
              textClassName="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Real-world implementations showcasing modern DevOps practices and infrastructure solutions.
            </ScrollReveal>
          </div>
        </ContainerReveal>

        {/* Centered Card Swap Animation */}
        <ContainerReveal 
          direction="scale" 
          scaleAmount={0.6} 
          duration={1.8} 
          delay={0.5} 
          enableParallax={true}
          parallaxSpeed={0.4}
        >
          <div className="flex justify-center items-center" style={{ minHeight: '700px' }}>
            <CardSwap
              width={600}
              height={450}
              cardDistance={70}
              verticalDistance={80}
              delay={4000}
              pauseOnHover={true}
              easing="elastic"
            >
              {projects.map((project, index) => (
                <Card key={index} customClass="project-card">
                  <div className="h-full p-8 flex flex-col justify-between text-white">
                    <div>
                      <div className="inline-flex p-4 rounded-full mb-6 bg-white/20">
                        <project.icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                      <p className="text-gray-200 text-base leading-relaxed mb-6">{project.description}</p>
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-white/20 text-white rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <button className="flex items-center px-4 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors text-sm">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </button>
                        <button className="flex items-center px-4 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors text-sm">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </ContainerReveal>
      </div>
    </section>
  );
};

export default Projects;