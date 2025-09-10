import React from 'react';
import { Award, Users, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, value: '5+', label: 'Years Experience' },
    { icon: Users, value: '50+', label: 'Projects Deployed' },
    { icon: Zap, value: '99.9%', label: 'Uptime Achieved' }
  ];

  return (
    <section id="about" className="py-20 bg-white relative">
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate DevOps engineer with expertise in cloud infrastructure, automation, and continuous integration/deployment pipelines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I specialize in designing and implementing scalable infrastructure solutions using modern DevOps practices. 
              My expertise spans cloud platforms, containerization, infrastructure as code, and monitoring systems.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I believe in automation-first approaches and have successfully reduced deployment times by 80% while 
              improving system reliability across multiple organizations.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm">Cloud Architecture</span>
              <span className="px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm">CI/CD Pipelines</span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm">Infrastructure as Code</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 transform hover:scale-105 transition-transform">
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-3 bg-blue-500/10 rounded-full">
                      <stat.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-teal-500/20 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;