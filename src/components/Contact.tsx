import React from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, ExternalLink, User, Building, MessageSquare, CheckCircle } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import VariableProximity from './VariableProximity';
import Stepper, { Step } from './Stepper';

const Contact = () => {
  const contactContainerRef = React.useRef<HTMLDivElement>(null);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Cloud Migration',
    message: ''
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [emailSent, setEmailSent] = React.useState(false);
  const [emailError, setEmailError] = React.useState<string | null>(null);
  const [validationErrors, setValidationErrors] = React.useState<{[key: string]: string}>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear validation error when user starts typing
    if (validationErrors[field]) {
      setValidationErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateStep = (step: number): boolean => {
    const errors: {[key: string]: string} = {};
    
    if (step === 1) {
      // Validate name
      if (!formData.name.trim()) {
        errors.name = 'Name is required';
      } else if (formData.name.trim().length < 2) {
        errors.name = 'Name must be at least 2 characters';
      }
      
      // Validate email
      if (!formData.email.trim()) {
        errors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = 'Please enter a valid email address';
      }
    } else if (step === 2) {
      // Validate company name (now required)
      if (!formData.company.trim()) {
        errors.company = 'Company name is required';
      } else if (formData.company.trim().length < 2) {
        errors.company = 'Company name must be at least 2 characters';
      }
    } else if (step === 3) {
      // Validate message
      if (!formData.message.trim()) {
        errors.message = 'Project description is required';
      } else if (formData.message.trim().length < 10) {
        errors.message = 'Please provide at least 10 characters describing your project';
      }
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleStepperComplete = async () => {
    if (!validateStep(3)) {
      return;
    }
    
    setIsLoading(true);
    setEmailError(null);
    
    try {
      await sendEmail(formData);
      setEmailSent(true);
    } catch (error) {
      setEmailError('Failed to send email. Please try again.');
      console.error('Email sending failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStepperStepChange = (step: number) => {
    // Validate current step before allowing navigation
    if (step > 1 && !validateStep(step - 1)) {
      return false;
    }
    
    console.log('Form submitted:', formData);
    console.log('Current step:', step);
    return true;
  };

  const sendEmail = async (data: typeof formData) => {
    // In a real application, you would use a service like EmailJS, Formspree, or your own backend
    // For demonstration, we'll simulate the email sending with a delay
    
    const emailData = {
      to_email: 'vangarasandeepkumar@gmail.com',
      from_name: data.name,
      from_email: data.email,
      company: data.company || 'Not provided',
      project_type: data.projectType,
      message: data.message,
      subject: `New Contact Form Submission - ${data.projectType}`
    };

    // Simulate API call delay (2-3 seconds to make it realistic)
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    // Simulate potential failure (uncomment to test error handling)
    // if (Math.random() < 0.1) {
    //   throw new Error('Network error');
    // }
    
    // In production, replace this with actual email service
    console.log('Email sent successfully with data:', emailData);
    
    // You can integrate with services like:
    // - EmailJS: await emailjs.send('service_id', 'template_id', emailData)
    // - Formspree: await fetch('https://formspree.io/f/your-form-id', { method: 'POST', body: JSON.stringify(emailData) })
    // - Your own backend API
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'vangarasandeepkumar@gmail.com',
      href: 'mailto:vangarasandeepkumar@gmail.com',
      color: 'blue'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91-7331132162',
      href: 'tel:+917331132162',
      color: 'teal'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Hyderabad, India',
      href: 'https://maps.google.com/?q=Hyderabad,India',
      color: 'purple'
    }
  ];

  const socialMedia = [
    {
      icon: Github,
      name: 'GitHub',
      username: '@vangara-sandeep',
      href: 'https://github.com/vangara-sandeep',
      color: 'gray'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      username: 'vangara-sandeep',
      href: 'https://linkedin.com/in/vangara-sandeep',
      color: 'blue'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; hover: string; spotlight: string } } = {
      blue: { 
        bg: 'bg-blue-500/10', 
        text: 'text-blue-600', 
        hover: 'group-hover:bg-blue-500/20',
        spotlight: 'rgba(59, 130, 246, 0.3)'
      },
      teal: { 
        bg: 'bg-teal-500/10', 
        text: 'text-teal-600', 
        hover: 'group-hover:bg-teal-500/20',
        spotlight: 'rgba(20, 184, 166, 0.3)'
      },
      purple: { 
        bg: 'bg-purple-500/10', 
        text: 'text-purple-600', 
        hover: 'group-hover:bg-purple-500/20',
        spotlight: 'rgba(147, 51, 234, 0.3)'
      },
      gray: { 
        bg: 'bg-gray-500/10', 
        text: 'text-gray-600', 
        hover: 'group-hover:bg-gray-500/20',
        spotlight: 'rgba(107, 114, 128, 0.3)'
      },
      sky: { 
        bg: 'bg-sky-500/10', 
        text: 'text-sky-600', 
        hover: 'group-hover:bg-sky-500/20',
        spotlight: 'rgba(14, 165, 233, 0.3)'
      },
      pink: { 
        bg: 'bg-pink-500/10', 
        text: 'text-pink-600', 
        hover: 'group-hover:bg-pink-500/20',
        spotlight: 'rgba(236, 72, 153, 0.3)'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="contact" ref={contactContainerRef} className="py-12 sm:py-16 lg:py-20 bg-gray-50 relative px-4 sm:px-6 lg:pl-20 pt-24 sm:pt-28 lg:pt-32">
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

        <div className="grid lg:grid-cols-3 gap-8 sm:gap-12 mb-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <SpotlightCard
                    key={index}
                    className="group cursor-pointer transition-all duration-300 hover:scale-105 py-3 px-4"
                    spotlightColor={getColorClasses(contact.color).spotlight}
                    onClick={() => window.open(contact.href, '_blank')}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-full transition-all ${getColorClasses(contact.color).bg} ${getColorClasses(contact.color).text} ${getColorClasses(contact.color).hover}`}>
                        <contact.icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-gray-900">{contact.title}</h4>
                        <p className="text-sm text-gray-600 break-all sm:break-normal">{contact.value}</p>
                      </div>
                      <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0" />
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </div>

            {/* Social Media - Desktop Only */}
            <div className="hidden lg:block mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Connect With Me</h4>
              <div className="space-y-3">
                {socialMedia.map((social, index) => (
                  <SpotlightCard
                    key={index}
                    className="group cursor-pointer transition-all duration-300 hover:scale-105 py-2 px-3"
                    spotlightColor={getColorClasses(social.color).spotlight}
                    onClick={() => window.open(social.href, '_blank')}
                  >
                    <div className="flex items-center space-x-2">
                      <div className={`p-1.5 rounded-full transition-all ${getColorClasses(social.color).bg} ${getColorClasses(social.color).text} ${getColorClasses(social.color).hover}`}>
                        <social.icon className="w-3 h-3" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="text-sm font-semibold text-gray-900">{social.name}</h5>
                        <p className="text-sm text-gray-500">{social.username}</p>
                      </div>
                      <ExternalLink className="w-2.5 h-2.5 text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0" />
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            {/* Mobile Pills - Show only on mobile */}
            <div className="block lg:hidden mb-8">
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {/* Contact Pills */}
                {contactInfo.map((contact, index) => (
                  <button
                    key={`mobile-${index}`}
                    onClick={() => window.open(contact.href, '_blank')}
                    className={`flex items-center gap-2 px-3 py-2 rounded-full border transition-all duration-300 hover:scale-105 text-sm font-medium ${getColorClasses(contact.color).bg} ${getColorClasses(contact.color).text} border-current/20 hover:border-current/40`}
                  >
                    <contact.icon className="w-3 h-3" />
                    <span>{contact.title}</span>
                  </button>
                ))}
                
                {/* Social Pills */}
                {socialMedia.map((social, index) => (
                  <button
                    key={`mobile-social-${index}`}
                    onClick={() => window.open(social.href, '_blank')}
                    className={`flex items-center gap-2 px-3 py-2 rounded-full border transition-all duration-300 hover:scale-105 text-sm font-medium ${getColorClasses(social.color).bg} ${getColorClasses(social.color).text} border-current/20 hover:border-current/40`}
                  >
                    <social.icon className="w-3 h-3" />
                    <span>{social.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Form Stepper */}
            <Stepper
              initialStep={1}
              onStepChange={handleStepperStepChange}
              onFinalStepCompleted={handleStepperComplete}
              backButtonText="Previous"
              nextButtonText="Next"
            >
              <Step>
                <div>
                  <h3 className="stepper-step-title">Personal Information</h3>
                  <p className="stepper-step-description">Let's start with your basic details</p>
                  
                  <div className="stepper-grid two-columns">
                    <div className="stepper-form-group">
                      <label className="stepper-form-label">
                        <User className="w-4 h-4 inline mr-2" />
                        Full Name *
                      </label>
                      <input 
                        type="text" 
                        required
                        className={`stepper-form-input ${validationErrors.name ? 'border-red-500 focus:border-red-500' : ''}`}
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                      />
                      {validationErrors.name && (
                        <p className="text-red-500 text-sm mt-1">{validationErrors.name}</p>
                      )}
                    </div>
                    <div className="stepper-form-group">
                      <label className="stepper-form-label">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        required
                        className={`stepper-form-input ${validationErrors.email ? 'border-red-500 focus:border-red-500' : ''}`}
                        placeholder="your.email@company.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                      {validationErrors.email && (
                        <p className="text-red-500 text-sm mt-1">{validationErrors.email}</p>
                      )}
                    </div>
                  </div>
                </div>
              </Step>
              
              <Step>
                <div>
                  <h3 className="stepper-step-title">Company & Project Details</h3>
                  <p className="stepper-step-description">Tell us about your organization and project type</p>
                  
                  <div className="stepper-grid two-columns">
                    <div className="stepper-form-group">
                      <label className="stepper-form-label">
                        <Building className="w-4 h-4 inline mr-2" />
                        Company Name
                      </label>
                      <input 
                        type="text" 
                        className={`stepper-form-input ${validationErrors.company ? 'border-red-500 focus:border-red-500' : ''}`}
                        placeholder="Your company name"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                      />
                      {validationErrors.company && (
                        <p className="text-red-500 text-sm mt-1">{validationErrors.company}</p>
                      )}
                    </div>
                    <div className="stepper-form-group">
                      <label className="stepper-form-label">
                        <MessageSquare className="w-4 h-4 inline mr-2" />
                        Project Type
                      </label>
                      <select 
                        className="stepper-form-select"
                        value={formData.projectType}
                        onChange={(e) => handleInputChange('projectType', e.target.value)}
                      >
                        <option>Cloud Migration</option>
                        <option>CI/CD Implementation</option>
                        <option>Infrastructure Automation</option>
                        <option>Security & Compliance</option>
                        <option>Monitoring & Observability</option>
                        <option>Consultation</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              </Step>
              
              <Step>
                <div>
                  <h3 className="stepper-step-title">Project Details</h3>
                  <p className="stepper-step-description">Describe your project requirements and challenges</p>
                  
                  <div className="stepper-form-group">
                    <label className="stepper-form-label">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Project Description *
                    </label>
                    <textarea 
                      required
                      className={`stepper-form-textarea ${validationErrors.message ? 'border-red-500 focus:border-red-500' : ''}`}
                      placeholder="Tell me about your project requirements, timeline, and any specific challenges you're facing..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                    ></textarea>
                    {validationErrors.message && (
                      <p className="text-red-500 text-sm mt-1">{validationErrors.message}</p>
                    )}
                  </div>
                </div>
              </Step>
              
              <Step>
                <div>
                  {isLoading ? (
                    <div className="stepper-success">
                      <div className="stepper-success-icon bg-blue-500">
                        <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                      </div>
                      <h3 className="stepper-success-title">Sending Message...</h3>
                      <p className="stepper-success-description">
                        Please wait while we send your message.
                      </p>
                    </div>
                  ) : emailError ? (
                    <div className="stepper-success">
                      <div className="stepper-success-icon bg-red-500">
                        <X className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="stepper-success-title text-red-600">Failed to Send Message</h3>
                      <p className="stepper-success-description text-red-600">
                        {emailError}
                      </p>
                      <button
                        onClick={() => {
                          setEmailError(null);
                          handleStepperComplete();
                        }}
                        className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                      >
                        Try Again
                      </button>
                    </div>
                  ) : emailSent ? (
                    <div className="stepper-success">
                      <div className="stepper-success-icon">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="stepper-success-title">Message Sent Successfully!</h3>
                      <p className="stepper-success-description">
                        ⚠️ SIMULATION ONLY: No real email was sent! This is just a demo.
                        <br />
                        In a real application, this would send an actual email.
                      </p>
                      <div className="text-sm text-gray-500 space-y-1">
                        <p><strong>Name:</strong> {formData.name}</p>
                        <p><strong>Email:</strong> {formData.email}</p>
                        <p><strong>Project Type:</strong> {formData.projectType}</p>
                        {formData.company && <p><strong>Company:</strong> {formData.company}</p>}
                      </div>
                    </div>
                  ) : null}
                </div>
              </Step>
            </Stepper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;