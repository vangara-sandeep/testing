import React from 'react';
import { Mail, MapPin, Phone, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
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
      blue: 'bg-blue-500/10 text-blue-600 group-hover:bg-blue-500 group-hover:text-white',
      teal: 'bg-teal-500/10 text-teal-600 group-hover:bg-teal-500 group-hover:text-white',
      purple: 'bg-purple-500/10 text-purple-600 group-hover:bg-purple-500 group-hover:text-white'
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your next DevOps project or infrastructure challenge? Let's build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div>
            <div className="space-y-6 mb-8">
              {contactMethods.map((method, index) => (
                <div 
                  key={index}
                  className="flex items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all group cursor-pointer transform hover:-translate-y-1"
                >
                  <div className={`p-4 rounded-full mr-6 transition-all ${getColorClasses(method.color)}`}>
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{method.title}</h3>
                    <p className="text-gray-600">{method.value}</p>
                  </div>
                  
                  {/* Floating indicator */}
                  <div className="ml-auto">
                    <div className="w-3 h-3 bg-gray-300 rounded-full group-hover:bg-blue-500 transition-colors"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <MessageCircle className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Quick Response</h3>
              </div>
              <p className="text-gray-600 mb-4">
                I typically respond within 24 hours. For urgent infrastructure matters, feel free to call directly.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-600 font-medium">Available for new projects</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="your.email@company.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project requirements..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Background floating elements */}
      <div className="absolute top-20 right-20 w-16 h-16 bg-blue-500/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-teal-500/10 rounded-lg animate-bounce"></div>
    </section>
  );
};

export default Contact;