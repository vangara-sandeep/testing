import React from 'react';
import { Cloud, Container, Shield, X, TrendingUp } from 'lucide-react';
import CardSwap, { Card } from './CardSwap';
import VariableProximity from './VariableProximity';

const Projects = () => {
  const projectsContainerRef = React.useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = React.useState<number | null>(null);

  const projects = [
    {
      title: 'Multi-Cloud Infrastructure Platform',
      description: 'Designed and implemented a scalable multi-cloud infrastructure using Terraform and Kubernetes, supporting 1M+ daily users.',
      fullDescription: 'Led the design and implementation of a comprehensive multi-cloud infrastructure platform that seamlessly integrates AWS, Azure, and Google Cloud services. The platform supports over 1 million daily active users with 99.99% uptime. Built using Infrastructure as Code principles with Terraform, orchestrated through Kubernetes clusters, and monitored with comprehensive observability tools.',
      tech: ['AWS', 'Terraform', 'Kubernetes', 'Monitoring'],
      fullTech: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker', 'Helm', 'Prometheus', 'Grafana', 'ArgoCD'],
      icon: Cloud,
      color: 'blue',
      impact: '40% cost reduction',
      performanceMetric: '99.99% uptime achieved',
      duration: '8 months',
      challenges: [
        'Multi-cloud networking and security',
        'Data consistency across regions',
        'Cost optimization strategies',
        'Disaster recovery planning'
      ],
      achievements: [
        '99.99% uptime achieved',
        '40% reduction in infrastructure costs',
        'Zero-downtime deployments implemented',
        'Automated scaling for 10x traffic spikes'
      ]
    },
    {
      title: 'CI/CD Pipeline Automation',
      description: 'Built comprehensive CI/CD pipelines reducing deployment time by 80% and improving reliability across 20+ microservices.',
      fullDescription: 'Architected and implemented enterprise-grade CI/CD pipelines that transformed the development workflow for a team of 50+ developers. The solution includes automated testing, security scanning, deployment strategies, and rollback mechanisms. Reduced deployment time from 4 hours to 45 minutes while improving reliability and reducing human errors.',
      tech: ['Jenkins', 'Docker', 'GitOps', 'Helm'],
      fullTech: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Helm', 'ArgoCD', 'SonarQube', 'Nexus', 'Vault', 'Slack'],
      icon: Container,
      color: 'teal',
      impact: '80% faster deployments',
      performanceMetric: '95% reduction in deployment failures',
      duration: '6 months',
      challenges: [
        'Legacy system integration',
        'Security compliance requirements',
        'Multi-environment consistency',
        'Developer adoption and training'
      ],
      achievements: [
        '80% reduction in deployment time',
        '95% reduction in deployment failures',
        'Automated security scanning integrated',
        '20+ microservices automated'
      ]
    },
    {
      title: 'Security & Compliance Framework',
      description: 'Implemented enterprise security framework achieving SOC2 compliance with automated security scanning and monitoring.',
      fullDescription: 'Designed and implemented a comprehensive security and compliance framework that achieved SOC2 Type II certification. The framework includes automated security scanning, vulnerability management, access controls, audit logging, and compliance reporting. Integrated security into the entire SDLC while maintaining developer productivity.',
      tech: ['Security', 'Compliance', 'Monitoring', 'Automation'],
      fullTech: ['OWASP ZAP', 'Vault', 'Falco', 'OPA', 'Twistlock', 'Splunk', 'CIS Benchmarks', 'Terraform', 'Ansible'],
      icon: Shield,
      color: 'purple',
      impact: 'SOC2 compliance achieved',
      performanceMetric: '100% automated security scanning',
      duration: '10 months',
      challenges: [
        'Complex compliance requirements',
        'Legacy system security gaps',
        'Developer workflow integration',
        'Continuous monitoring setup'
      ],
      achievements: [
        'SOC2 Type II certification achieved',
        '100% automated security scanning',
        'Zero security incidents post-implementation',
        'Reduced audit preparation time by 70%'
      ]
    }
  ];

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handleCardClick = (index: number) => {
    setSelectedProject(index);
  };

  const getProjectGradient = (index: number) => {
    switch (index) {
      case 0:
        return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
      case 1:
        return 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
      case 2:
        return 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)';
      default:
        return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    }
  };

  const getModalBackgroundColor = (index: number) => {
    switch (index) {
      case 0:
        return 'rgba(102, 126, 234, 0.1)';
      case 1:
        return 'rgba(240, 147, 251, 0.1)';
      case 2:
        return 'rgba(79, 172, 254, 0.1)';
      default:
        return 'rgba(102, 126, 234, 0.1)';
    }
  };

  const getModalHeaderColor = (index: number) => {
    switch (index) {
      case 0:
        return 'rgba(102, 126, 234, 0.15)';
      case 1:
        return 'rgba(240, 147, 251, 0.15)';
      case 2:
        return 'rgba(79, 172, 254, 0.15)';
      default:
        return 'rgba(102, 126, 234, 0.15)';
    }
  };

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
            onCardClickToFront={handleCardClick}
            easing="smooth"
          >
            {projects.map((project, index) => (
              <Card
                key={index}
                customClass="project-card cursor-pointer"
                style={{
                  background: getProjectGradient(index),
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="p-8 h-full flex flex-col justify-between text-white">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm mr-4">
                        <project.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <div className="flex items-center mt-2 text-white/80">
                          <TrendingUp className="w-4 h-4 mr-2" />
                          <span className="text-sm font-medium">{project.impact}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-white/90 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm text-white/80">
                      Click to learn more →
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
      
      {/* Project Detail Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div 
            className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          >
            {/* Header */}
            <div 
              className="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50"
              style={{
                background: getModalHeaderColor(selectedProject)
              }}
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-white shadow-md">
                  {React.createElement(projects[selectedProject].icon, { 
                    className: "w-8 h-8 text-blue-600" 
                  })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{projects[selectedProject].title}</h3>
                  <div className="flex items-center mt-2 text-gray-600">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">{projects[selectedProject].performanceMetric}</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={closeModal}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)] bg-white">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Project Overview</h4>
                    <p className="text-gray-700 leading-relaxed">{projects[selectedProject].fullDescription}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[selectedProject].fullTech.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Challenges</h4>
                    <ul className="space-y-2">
                      {projects[selectedProject].challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {projects[selectedProject].achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Project Details</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-500 uppercase tracking-wide">Duration</div>
                        <div className="text-sm font-semibold text-gray-900">{projects[selectedProject].duration}</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-500 uppercase tracking-wide">Impact</div>
                        <div className="text-sm font-semibold text-blue-600">{projects[selectedProject].impact}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;