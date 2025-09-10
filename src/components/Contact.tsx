import React from 'react';
import { Mail, MapPin, Phone, Send, MessageCircle } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import VariableProximity from './VariableProximity';

const Contact = () => {
  const contactContainerRef = React.useRef<HTMLDivElement>(null);

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'vangarasandeepkumar@gmail.com',
      color: 'blue'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91-7331132162',
      color: 'teal'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Hyderabad, India',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'bg-blue-500/10 text-blue-600 group-hover:bg-blue-500/20',
      teal: 'bg-teal-500/10 text-teal-600 group-hover:bg-teal-500/20',
      purple: 'bg-purple-500/10 text-purple-600 group-hover:bg-purple-500/20'
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="contact" ref={contactContainerRef} className="py-12 sm:py-16 lg:py-20 bg-gray-50 relative px-4 sm:px-6 lg:pl-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="mb-6">
            <VariableProximity
              label="Let's Connect"
              className="variable-proximity-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
              fromFontVariationSettings="'wght' 700, 'opsz' 32"
              toFontVariationSettings="'wght' 900, 'opsz' 32"
              containerRef={contactContainerRef}
              radius={120}
              falloff="linear"
            />
          </div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Ready to discuss your next DevOps project or infrastructure challenge? Let's build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Methods */}
          <div>
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {contactMethods.map((method, index) => (
                <SpotlightCard
                  key={index}
                  className="group cursor-pointer"
                  spotlightColor={
                    method.color === 'blue' ? 'rgba(59, 130, 246, 0.3)' :
                    method.color === 'teal' ? 'rgba(20, 184, 166, 0.3)' :
                    'rgba(147, 51, 234, 0.3)'
                  }
                >
                  <div className="flex items-center">
                    <div className={`p-3 sm:p-4 rounded-full mr-4 sm:mr-6 transition-all ${getColorClasses(method.color)}`}>
                      <method.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">{method.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600 break-all sm:break-normal">{method.value}</p>
                    </div>
                    
                    {/* Floating indicator */}
                    <div className="ml-auto">
                      <div className="w-3 h-3 bg-gray-400 rounded-full group-hover:bg-blue-500 transition-colors"></div>
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>

            <SpotlightCard 
              className=""
              spotlightColor="rgba(34, 197, 94, 0.3)"
            >
              <div>
                <div className="flex items-center mb-6">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mr-3" />
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Quick Response</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  I typically respond within 24 hours. For urgent infrastructure matters, feel free to call directly.
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-green-600 font-medium">Available for new projects</span>
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Contact Form */}
          <SpotlightCard 
            className=""
            spotlightColor="rgba(255, 255, 255, 0.4)"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                  placeholder="your.email@company.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                <select className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base">
                  <option>Cloud Migration</option>
                  <option>CI/CD Implementation</option>
                  <option>Infrastructure Automation</option>
                  <option>Security & Compliance</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project requirements..."
                ></textarea>
              </div>
              
              <SpotlightCard 
                as="button"
                className="spotlight-button w-full bg-blue-600 text-white text-sm sm:text-base py-2 sm:py-3"
                spotlightColor="rgba(59, 130, 246, 0.4)"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Send Message
              </SpotlightCard>
            </form>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;