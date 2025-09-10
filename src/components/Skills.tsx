import React from 'react';
import { 
  Cloud, 
  Container, 
  Database, 
  GitBranch, 
  Server, 
  Shield,
  Monitor,
  Code,
  Settings
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import ContainerReveal from './ContainerReveal';
import SpotlightCard from './SpotlightCard';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud Platforms',
      icon: Cloud,
      skills: ['AWS', 'Azure', 'Google Cloud'],
      color: 'blue'
    },
    {
      title: 'Containerization',
      icon: Container,
      skills: ['Docker', 'Kubernetes', 'Helm', 'Docker Compose'],
      color: 'teal'
    },
    {
      title: 'CI/CD',
      icon: GitBranch,
      skills: ['Jenkins', 'GitHub Actions', 'Bamboo'],
      color: 'purple'
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
      skills: ['OWASP', 'Vault', 'SSL/TLS', 'Security Scanning'],
      color: 'red'
    }
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
    <section id="skills" className="py-20 bg-gray-50 relative pl-20">
      <div className="max-w-6xl mx-auto px-6">
        <ContainerReveal direction="scale" scaleAmount={0.7} duration={1.3} stagger={0.2}>
          <div className="text-center mb-16">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={4}
              blurStrength={12}
              direction="auto"
              translateDistance={60}
              containerClassName="mb-6"
              textClassName="text-4xl md:text-5xl font-bold text-gray-900"
            >
              Technical Skills
            </ScrollReveal>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={1}
              blurStrength={6}
              direction="up"
              translateDistance={40}
              containerClassName=""
              textClassName="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              A comprehensive toolkit for modern DevOps practices and cloud-native solutions.
            </ScrollReveal>
          </div>
        </ContainerReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <ContainerReveal 
              key={index}
              direction={index % 2 === 0 ? 'up' : 'down'}
              distance={60}
              duration={1.2}
              delay={index * 0.15}
              enableParallax={true}
              parallaxSpeed={0.3}
            >
              <SpotlightCard 
                className="spotlight-skill group"
                spotlightColor={
                  category.color === 'blue' ? 'rgba(59, 130, 246, 0.3)' :
                  category.color === 'teal' ? 'rgba(20, 184, 166, 0.3)' :
                  category.color === 'purple' ? 'rgba(147, 51, 234, 0.3)' :
                  category.color === 'green' ? 'rgba(34, 197, 94, 0.3)' :
                  category.color === 'orange' ? 'rgba(249, 115, 22, 0.3)' :
                  'rgba(239, 68, 68, 0.3)'
                }
              >
                <div className={`inline-flex p-4 rounded-full mb-6 ${getColorClasses(category.color)} group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <SpotlightCard 
                      key={skillIndex}
                      className="spotlight-small flex items-center"
                      spotlightColor="rgba(255, 255, 255, 0.5)"
                    >
                      <div className="w-2 h-2 bg-current rounded-full mr-3 opacity-60"></div>
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </SpotlightCard>
                  ))}
                </div>
                
                {/* Floating indicator */}
                <div className={`absolute top-4 right-4 w-3 h-3 rounded-full animate-pulse ${getColorClasses(category.color)}`}></div>
              </SpotlightCard>
            </ContainerReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;