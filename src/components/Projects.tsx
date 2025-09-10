import React from 'react';
import { ExternalLink, Github, Cloud, Container, Shield } from 'lucide-react';

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

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'bg-blue-500/10 text-blue-600 border-blue-200',
      teal: 'bg-teal-500/10 text-teal-600 border-teal-200',
      purple: 'bg-purple-500/10 text-purple-600 border-purple-200'
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="projects" className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world implementations showcasing modern DevOps practices and infrastructure solutions.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl p-8 md:p-12 hover:bg-gray-100 transition-all group"
            >
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-2">
                  <div className={`inline-flex p-6 rounded-full ${getColorClasses(project.color)} group-hover:scale-110 transition-transform`}>
                    <project.icon className="w-12 h-12" />
                  </div>
                </div>
                
                <div className="md:col-span-7">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm border border-gray-200 hover:border-gray-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="md:col-span-3 flex flex-col sm:flex-row md:flex-col gap-4">
                  <button className="flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors group-hover:scale-105 transform">
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </button>
                  <button className="flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full hover:border-gray-400 hover:bg-white transition-colors group-hover:scale-105 transform">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;