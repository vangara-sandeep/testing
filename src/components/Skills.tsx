import React from 'react';
import { 
  Cloud, 
  Container, 
  GitBranch, 
  Server, 
  Shield,
  Monitor,
} from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import VariableProximity from './VariableProximity';

const Skills = () => {
  const skillsContainerRef = React.useRef<HTMLDivElement>(null);

  // Technology-specific brand colors with CSS custom properties
  const techColors: { [key: string]: { bg: string; text: string; border: string; spotlight: string } } = {
    // Cloud Platforms
    'Microsoft Azure': { 
      bg: 'rgba(255, 153, 0, 0.15)', 
      text: '#FF9900', 
      border: 'rgba(255, 153, 0, 0.3)',
      spotlight: 'rgba(255, 153, 0, 0.4)'
    },
    'Amazon Web Services (AWS)': { 
      bg: 'rgba(0, 120, 212, 0.15)', 
      text: '#0078D4', 
      border: 'rgba(0, 120, 212, 0.3)',
      spotlight: 'rgba(0, 120, 212, 0.4)'
    },
    'Google Cloud Platform (GCP)': { 
      bg: 'rgba(234, 67, 53, 0.15)', 
      text: '#EA4335', 
      border: 'rgba(234, 67, 53, 0.3)',
      spotlight: 'rgba(234, 67, 53, 0.4)'
    },
    
    // Containerization
    'Docker': { 
      bg: 'rgba(33, 150, 243, 0.15)', 
      text: '#2196F3', 
      border: 'rgba(33, 150, 243, 0.3)',
      spotlight: 'rgba(33, 150, 243, 0.4)'
    },
    'Kubernetes': { 
      bg: 'rgba(63, 81, 181, 0.15)', 
      text: '#3F51B5', 
      border: 'rgba(63, 81, 181, 0.3)',
      spotlight: 'rgba(63, 81, 181, 0.4)'
    },
    'Helm': { 
      bg: 'rgba(0, 188, 212, 0.15)', 
      text: '#00BCD4', 
      border: 'rgba(0, 188, 212, 0.3)',
      spotlight: 'rgba(0, 188, 212, 0.4)'
    },
    'Docker Compose': { 
      bg: 'rgba(33, 150, 243, 0.15)', 
      text: '#2196F3', 
      border: 'rgba(33, 150, 243, 0.3)',
      spotlight: 'rgba(33, 150, 243, 0.4)'
    },
    
    // CI/CD
    'Jenkins': { 
      bg: 'rgba(213, 43, 30, 0.15)', 
      text: '#D52B1E', 
      border: 'rgba(213, 43, 30, 0.3)',
      spotlight: 'rgba(213, 43, 30, 0.4)'
    },
    'GitHub Actions': { 
      bg: 'rgba(36, 41, 46, 0.15)', 
      text: '#24292E', 
      border: 'rgba(36, 41, 46, 0.3)',
      spotlight: 'rgba(36, 41, 46, 0.4)'
    },
    'Bamboo': { 
      bg: 'rgba(0, 82, 204, 0.15)', 
      text: '#0052CC', 
      border: 'rgba(0, 82, 204, 0.3)',
      spotlight: 'rgba(0, 82, 204, 0.4)'
    },
    
    // Infrastructure
    'Terraform': { 
      bg: 'rgba(98, 70, 237, 0.15)', 
      text: '#6246EA', 
      border: 'rgba(98, 70, 237, 0.3)',
      spotlight: 'rgba(98, 70, 237, 0.4)'
    },
    'Ansible': { 
      bg: 'rgba(238, 53, 36, 0.15)', 
      text: '#EE3524', 
      border: 'rgba(238, 53, 36, 0.3)',
      spotlight: 'rgba(238, 53, 36, 0.4)'
    },
    
    // Monitoring
    'Prometheus': { 
      bg: 'rgba(230, 126, 34, 0.15)', 
      text: '#E67E22', 
      border: 'rgba(230, 126, 34, 0.3)',
      spotlight: 'rgba(230, 126, 34, 0.4)'
    },
    'Grafana': { 
      bg: 'rgba(242, 73, 92, 0.15)', 
      text: '#F2495C', 
      border: 'rgba(242, 73, 92, 0.3)',
      spotlight: 'rgba(242, 73, 92, 0.4)'
    },
    'New Relic': { 
      bg: 'rgba(0, 206, 166, 0.15)', 
      text: '#00CEA6', 
      border: 'rgba(0, 206, 166, 0.3)',
      spotlight: 'rgba(0, 206, 166, 0.4)'
    },
    'Dynatrace': { 
      bg: 'rgba(26, 13, 171, 0.15)', 
      text: '#1A0DAB', 
      border: 'rgba(26, 13, 171, 0.3)',
      spotlight: 'rgba(26, 13, 171, 0.4)'
    },
    
    // Security
    'OWASP': { 
      bg: 'rgba(0, 123, 191, 0.15)', 
      text: '#007BBF', 
      border: 'rgba(0, 123, 191, 0.3)',
      spotlight: 'rgba(0, 123, 191, 0.4)'
    },
    'Vault': { 
      bg: 'rgba(255, 211, 0, 0.15)', 
      text: '#FFD300', 
      border: 'rgba(255, 211, 0, 0.3)',
      spotlight: 'rgba(255, 211, 0, 0.4)'
    },
    'SSL/TLS': { 
      bg: 'rgba(76, 175, 80, 0.15)', 
      text: '#4CAF50', 
      border: 'rgba(76, 175, 80, 0.3)',
      spotlight: 'rgba(76, 175, 80, 0.4)'
    },
    'Security Scanning': { 
      bg: 'rgba(244, 67, 54, 0.15)', 
      text: '#F44336', 
      border: 'rgba(244, 67, 54, 0.3)',
      spotlight: 'rgba(244, 67, 54, 0.4)'
    }
  };

  const skillCategories = [
    {
      title: 'Cloud Platforms',
      icon: Cloud,
      skills: ['Microsoft Azure', 'Amazon Web Services (AWS)', 'Google Cloud Platform (GCP)'],
      color: 'blue'
    },
    {
      title: 'Containerization',
      icon: Container,
      skills: ['Docker', 'Kubernetes', 'Helm'],
      color: 'teal'
    },
    {
      title: 'Continous Integration (CI)',
      icon: GitBranch,
      skills: ['Azure DevOps', 'Bamboo', 'GitHub Actions', 'Jenkins'],
      color: 'purple'
    },
        {
      title: 'Continous Deployment (CD)',
      icon: GitBranch,
      skills: ['Octopus Deploy'],
      color: 'purple'
    },
    {
      title: 'Version Control',
      icon: GitBranch,
      skills: ['GitHub', 'Bitbucket'],
      color: 'grey'
    },
    {
      title: 'Infrastructure',
      icon: Server,
      skills: ['Terraform', 'Ansible'],
      color: 'green'
    },
    {
      title: 'Monitoring',
      icon: Monitor,
      skills: ['Prometheus', 'Grafana', 'New Relic', 'Dynatrace'],
      color: 'orange'
    },
    {
      title: 'Security',
      icon: Shield,
      skills: ['SonarQube', 'SonarCloud', 'Coverity'],
      color: 'red'
    },
            {
      title: 'Ticket Management',
      icon: GitBranch,
      skills: ['Atlassian Jira'],
      color: 'purple'
    },
               {
      title: 'Scripting',
      icon: GitBranch,
      skills: ['PowerSehll', 'Python'],
      color: 'purple'
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'bg-blue-500/10 text-blue-600 border-blue-200',
      teal: 'bg-teal-500/10 text-teal-600 border-teal-200',
      purple: 'bg-purple-500/10 text-purple-600 border-purple-200',
      green: 'bg-green-500/10 text-green-600 border-green-200',
      orange: 'bg-orange-500/10 text-orange-600 border-orange-200',
      red: 'bg-red-500/10 text-red-600 border-red-200'
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="skills" ref={skillsContainerRef} className="py-12 sm:py-16 lg:py-20 bg-gray-50 relative px-4 sm:px-6 lg:pl-20 pt-20 sm:pt-24 lg:pt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="mb-6">
            <VariableProximity
              label="Technical Skills"
              className="variable-proximity-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
              fromFontVariationSettings="'wght' 700, 'opsz' 32"
              toFontVariationSettings="'wght' 900, 'opsz' 32"
              containerRef={skillsContainerRef}
              radius={130}
              falloff="exponential"
            />
          </div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            A comprehensive toolkit for modern DevOps practices and cloud-native solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-8 group hover:shadow-lg transition-all duration-300"
            >
              <div className={`inline-flex p-4 rounded-full mb-6 ${getColorClasses(category.color)} group-hover:scale-110 transition-transform`}>
                <category.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <SpotlightCard
                    key={skillIndex}
                    className="skill-pill group/pill flex items-center px-3 py-2 rounded-full border transition-all duration-300 cursor-pointer bg-white/50 text-gray-700 border-gray-200 hover:shadow-lg hover:scale-105 hover:-translate-y-1"
                    spotlightColor={techColors[skill]?.spotlight || 'rgba(156, 163, 175, 0.3)'}
                    style={{
                      '--hover-bg': techColors[skill]?.bg || 'rgba(156, 163, 175, 0.15)',
                      '--hover-text': techColors[skill]?.text || '#6B7280',
                      '--hover-border': techColors[skill]?.border || 'rgba(156, 163, 175, 0.3)'
                    } as React.CSSProperties}
                  >
                    <div className="w-2 h-2 bg-current rounded-full mr-3 opacity-60 group-hover/pill:opacity-100 transition-opacity"></div>
                    <span className="text-sm sm:text-base font-medium transition-colors">{skill}</span>
                    
                    {/* Brand color indicator */}
                    <div 
                      className="ml-auto w-3 h-3 rounded-full opacity-0 group-hover/pill:opacity-100 transition-all duration-300 transform scale-0 group-hover/pill:scale-100"
                      style={{ backgroundColor: techColors[skill]?.text || '#6B7280' }}
                    ></div>
                  </SpotlightCard>
                ))}
              </div>
              
              {/* Floating indicator */}
              <div className={`absolute top-4 right-4 w-3 h-3 rounded-full ${getColorClasses(category.color)}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;