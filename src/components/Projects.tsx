import React from 'react';
import { 
  ExternalLink, 
  Github, 
  Calendar, 
  Users, 
  TrendingUp, 
  Server, 
  Cloud, 
  Shield, 
  GitBranch,
  Container,
  Monitor,
  Zap,
  Database,
  Globe,
  Lock,
  Activity
} from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import VariableProximity from './VariableProximity';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'Infrastructure' | 'CI/CD' | 'Monitoring' | 'Security' | 'Cloud Migration' | 'Automation';
  technologies: string[];
  duration: string;
  teamSize: string;
  impact: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  status: 'Completed' | 'In Progress' | 'Maintenance';
  featured: boolean;
  metrics: {
    label: string;
    value: string;
    improvement?: string;
  }[];
}

const Projects = () => {
  const projectsContainerRef = React.useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = React.useState<string>('All');

  const projects: Project[] = [
    {
      id: 'kubernetes-migration',
      title: 'Enterprise Kubernetes Migration',
      description: 'Migrated legacy monolithic applications to containerized microservices architecture on Kubernetes, reducing infrastructure costs by 40%.',
      longDescription: 'Led a comprehensive migration project to modernize a legacy e-commerce platform by containerizing applications and deploying them on a managed Kubernetes cluster. This involved redesigning the architecture, implementing service mesh, and establishing robust monitoring and logging systems.',
      category: 'Cloud Migration',
      technologies: ['Kubernetes', 'Docker', 'Helm', 'Istio', 'Prometheus', 'Grafana', 'Azure AKS', 'Terraform'],
      duration: '8 months',
      teamSize: '6 engineers',
      impact: 'Reduced infrastructure costs by 40% and improved deployment frequency by 300%',
      challenges: [
        'Complex legacy application dependencies',
        'Zero-downtime migration requirements',
        'Team training on containerization',
        'Service discovery and communication patterns'
      ],
      solutions: [
        'Implemented strangler fig pattern for gradual migration',
        'Used blue-green deployment strategy',
        'Conducted comprehensive training workshops',
        'Deployed Istio service mesh for traffic management'
      ],
      results: [
        '40% reduction in infrastructure costs',
        '300% improvement in deployment frequency',
        '99.9% uptime achieved',
        'Reduced mean time to recovery from 4 hours to 15 minutes'
      ],
      githubUrl: 'https://github.com/example/k8s-migration',
      status: 'Completed',
      featured: true,
      metrics: [
        { label: 'Cost Reduction', value: '40%', improvement: 'down' },
        { label: 'Deployment Speed', value: '300%', improvement: 'up' },
        { label: 'Uptime', value: '99.9%' },
        { label: 'MTTR', value: '15min', improvement: 'down' }
      ]
    },
    {
      id: 'cicd-pipeline-automation',
      title: 'Multi-Cloud CI/CD Pipeline',
      description: 'Designed and implemented a robust CI/CD pipeline supporting deployments across AWS, Azure, and GCP with automated testing and security scanning.',
      longDescription: 'Built a comprehensive CI/CD pipeline that supports multi-cloud deployments with integrated security scanning, automated testing, and compliance checks. The pipeline handles over 200 deployments per day across different environments and cloud providers.',
      category: 'CI/CD',
      technologies: ['Jenkins', 'GitHub Actions', 'Docker', 'SonarQube', 'Snyk', 'Terraform', 'Ansible', 'AWS', 'Azure', 'GCP'],
      duration: '5 months',
      teamSize: '4 engineers',
      impact: 'Increased deployment frequency by 500% while maintaining 99.5% success rate',
      challenges: [
        'Multi-cloud complexity and vendor differences',
        'Security compliance across environments',
        'Pipeline performance optimization',
        'Rollback and disaster recovery procedures'
      ],
      solutions: [
        'Created unified deployment templates using Terraform',
        'Implemented automated security scanning at every stage',
        'Optimized pipeline with parallel execution and caching',
        'Established automated rollback mechanisms'
      ],
      results: [
        '500% increase in deployment frequency',
        '99.5% deployment success rate',
        '80% reduction in manual intervention',
        'Zero security incidents post-implementation'
      ],
      githubUrl: 'https://github.com/example/multi-cloud-pipeline',
      status: 'Completed',
      featured: true,
      metrics: [
        { label: 'Deployments/Day', value: '200+', improvement: 'up' },
        { label: 'Success Rate', value: '99.5%' },
        { label: 'Manual Work', value: '80%', improvement: 'down' },
        { label: 'Security Issues', value: '0' }
      ]
    },
    {
      id: 'infrastructure-as-code',
      title: 'Infrastructure as Code Framework',
      description: 'Developed a comprehensive IaC framework using Terraform and Ansible, managing 500+ cloud resources across multiple environments.',
      longDescription: 'Created a scalable Infrastructure as Code framework that standardizes resource provisioning and configuration management across development, staging, and production environments. The framework includes modules for common patterns and automated compliance checks.',
      category: 'Infrastructure',
      technologies: ['Terraform', 'Ansible', 'AWS', 'Azure', 'Vault', 'GitLab CI', 'Python', 'Bash'],
      duration: '6 months',
      teamSize: '3 engineers',
      impact: 'Reduced infrastructure provisioning time from days to hours and eliminated configuration drift',
      challenges: [
        'Standardizing across different cloud providers',
        'Managing secrets and sensitive data',
        'Ensuring compliance and governance',
        'Handling state management at scale'
      ],
      solutions: [
        'Built reusable Terraform modules for common patterns',
        'Integrated HashiCorp Vault for secrets management',
        'Implemented policy as code using OPA',
        'Used remote state with locking mechanisms'
      ],
      results: [
        '95% reduction in provisioning time',
        '100% infrastructure version controlled',
        'Zero configuration drift incidents',
        '90% reduction in manual configuration errors'
      ],
      githubUrl: 'https://github.com/example/iac-framework',
      status: 'Completed',
      featured: false,
      metrics: [
        { label: 'Resources Managed', value: '500+' },
        { label: 'Provisioning Time', value: '95%', improvement: 'down' },
        { label: 'Config Errors', value: '90%', improvement: 'down' },
        { label: 'Environments', value: '12' }
      ]
    },
    {
      id: 'monitoring-observability',
      title: 'Comprehensive Monitoring Stack',
      description: 'Implemented end-to-end observability solution with Prometheus, Grafana, and ELK stack, monitoring 100+ microservices.',
      longDescription: 'Designed and deployed a complete observability platform that provides metrics, logging, and tracing for a complex microservices architecture. The solution includes custom dashboards, alerting rules, and automated incident response workflows.',
      category: 'Monitoring',
      technologies: ['Prometheus', 'Grafana', 'Elasticsearch', 'Logstash', 'Kibana', 'Jaeger', 'AlertManager', 'PagerDuty'],
      duration: '4 months',
      teamSize: '3 engineers',
      impact: 'Reduced mean time to detection from 30 minutes to 2 minutes and improved system reliability',
      challenges: [
        'High cardinality metrics causing performance issues',
        'Log aggregation at scale',
        'Alert fatigue and noise reduction',
        'Distributed tracing complexity'
      ],
      solutions: [
        'Implemented metric sampling and aggregation strategies',
        'Used log parsing and filtering to reduce noise',
        'Created intelligent alerting with escalation policies',
        'Deployed Jaeger for distributed tracing'
      ],
      results: [
        '93% reduction in mean time to detection',
        '50% reduction in false positive alerts',
        '99.95% monitoring system uptime',
        '100% service coverage achieved'
      ],
      status: 'Completed',
      featured: false,
      metrics: [
        { label: 'Services Monitored', value: '100+' },
        { label: 'MTTD', value: '2min', improvement: 'down' },
        { label: 'False Alerts', value: '50%', improvement: 'down' },
        { label: 'System Uptime', value: '99.95%' }
      ]
    },
    {
      id: 'security-automation',
      title: 'DevSecOps Security Pipeline',
      description: 'Integrated security scanning and compliance checks into CI/CD pipeline, achieving 100% vulnerability detection coverage.',
      longDescription: 'Built a comprehensive security automation framework that integrates vulnerability scanning, compliance checks, and security testing into the development lifecycle. The solution includes automated remediation for common security issues.',
      category: 'Security',
      technologies: ['Snyk', 'SonarQube', 'OWASP ZAP', 'Vault', 'Falco', 'OPA', 'Twistlock', 'AWS Security Hub'],
      duration: '3 months',
      teamSize: '2 engineers',
      impact: 'Identified and resolved 95% of security vulnerabilities before production deployment',
      challenges: [
        'Integrating security without slowing development',
        'Managing false positives in security scans',
        'Ensuring compliance across multiple frameworks',
        'Developer adoption and training'
      ],
      solutions: [
        'Implemented shift-left security practices',
        'Fine-tuned scanning rules to reduce noise',
        'Created automated compliance reporting',
        'Provided security training and documentation'
      ],
      results: [
        '95% of vulnerabilities caught pre-production',
        '70% reduction in security review time',
        '100% compliance with security standards',
        'Zero security incidents in production'
      ],
      status: 'Completed',
      featured: false,
      metrics: [
        { label: 'Vulnerability Detection', value: '95%' },
        { label: 'Review Time', value: '70%', improvement: 'down' },
        { label: 'Compliance Score', value: '100%' },
        { label: 'Production Issues', value: '0' }
      ]
    },
    {
      id: 'disaster-recovery',
      title: 'Multi-Region Disaster Recovery',
      description: 'Designed and implemented automated disaster recovery solution with RTO of 15 minutes and RPO of 5 minutes.',
      longDescription: 'Architected a comprehensive disaster recovery solution spanning multiple AWS regions with automated failover, data replication, and recovery testing. The solution ensures business continuity with minimal data loss and downtime.',
      category: 'Infrastructure',
      technologies: ['AWS', 'Terraform', 'Lambda', 'RDS', 'S3', 'Route 53', 'CloudFormation', 'Python'],
      duration: '4 months',
      teamSize: '4 engineers',
      impact: 'Achieved 99.99% availability SLA with automated recovery processes',
      challenges: [
        'Cross-region data synchronization',
        'Automated failover decision making',
        'Cost optimization for standby resources',
        'Regular disaster recovery testing'
      ],
      solutions: [
        'Implemented real-time data replication',
        'Created intelligent health checks and failover logic',
        'Used spot instances and auto-scaling for cost efficiency',
        'Automated monthly DR testing procedures'
      ],
      results: [
        'RTO reduced to 15 minutes',
        'RPO achieved at 5 minutes',
        '99.99% availability maintained',
        '60% cost savings on DR infrastructure'
      ],
      status: 'In Progress',
      featured: false,
      metrics: [
        { label: 'RTO', value: '15min' },
        { label: 'RPO', value: '5min' },
        { label: 'Availability', value: '99.99%' },
        { label: 'Cost Savings', value: '60%', improvement: 'down' }
      ]
    }
  ];

  const categories = ['All', 'Infrastructure', 'CI/CD', 'Monitoring', 'Security', 'Cloud Migration', 'Automation'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Infrastructure': return Server;
      case 'CI/CD': return GitBranch;
      case 'Monitoring': return Monitor;
      case 'Security': return Shield;
      case 'Cloud Migration': return Cloud;
      case 'Automation': return Zap;
      default: return Server;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Infrastructure': return 'rgba(147, 51, 234, 0.3)';
      case 'CI/CD': return 'rgba(59, 130, 246, 0.3)';
      case 'Monitoring': return 'rgba(34, 197, 94, 0.3)';
      case 'Security': return 'rgba(239, 68, 68, 0.3)';
      case 'Cloud Migration': return 'rgba(20, 184, 166, 0.3)';
      case 'Automation': return 'rgba(249, 115, 22, 0.3)';
      default: return 'rgba(107, 114, 128, 0.3)';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'In Progress': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Maintenance': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="projects" ref={projectsContainerRef} className="py-12 sm:py-16 lg:py-20 bg-white relative px-4 sm:px-6 lg:pl-20 pt-20 sm:pt-24 lg:pt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="mb-6">
            <VariableProximity
              label="Featured Projects"
              className="variable-proximity-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
              fromFontVariationSettings="'wght' 700, 'opsz' 32"
              toFontVariationSettings="'wght' 900, 'opsz' 32"
              containerRef={projectsContainerRef}
              radius={120}
              falloff="exponential"
            />
          </div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Real-world DevOps projects showcasing infrastructure automation, cloud migrations, and scalable solutions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const CategoryIcon = getCategoryIcon(project.category);
            return (
              <div
                key={project.id}
                className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-1 bg-white border border-gray-200 rounded-xl p-6 relative overflow-hidden hover:shadow-lg hover:border-gray-300"
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <CategoryIcon className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {project.metrics.slice(0, 2).map((metric, index) => (
                    <div key={index} className="text-center bg-gray-50 rounded-lg p-2">
                      <div className="text-sm font-bold text-gray-900">{metric.value}</div>
                      <div className="text-xs text-gray-500">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{project.duration}</span>
                  <span>{project.teamSize}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedProject(null);
            }
          }}
        >
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
                  {React.createElement(getCategoryIcon(selectedProject.category), { className: "w-6 h-6 text-white" })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h3>
                  <div className="flex items-center space-x-3 mt-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {selectedProject.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(selectedProject.status)}`}>
                      {selectedProject.status}
                    </span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ExternalLink className="w-6 h-6 transform rotate-45" />
              </button>
            </div>
            
            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Project Overview</h4>
                    <p className="text-gray-700 leading-relaxed">{selectedProject.longDescription}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Challenges</h4>
                    <ul className="space-y-2">
                      {selectedProject.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Solutions Implemented</h4>
                    <ul className="space-y-2">
                      {selectedProject.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Results Achieved</h4>
                    <ul className="space-y-2">
                      {selectedProject.results.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Project Metrics</h4>
                    <div className="space-y-4">
                      {selectedProject.metrics.map((metric, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">{metric.label}</span>
                            {metric.improvement && (
                              <TrendingUp className={`w-4 h-4 ${
                                metric.improvement === 'up' ? 'text-green-500' : 'text-green-500 transform rotate-180'
                              }`} />
                            )}
                          </div>
                          <div className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Project Details</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                        <span className="text-sm text-gray-700">Duration: {selectedProject.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2 text-gray-500" />
                        <span className="text-sm text-gray-700">Team Size: {selectedProject.teamSize}</span>
                      </div>
                      <div className="flex items-center">
                        <Activity className="w-4 h-4 mr-2 text-gray-500" />
                        <span className="text-sm text-gray-700">Impact: {selectedProject.impact}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    )}
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    )}
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