import React from 'react';
import { Award, Calendar, ExternalLink, X, CheckCircle, Star, Shield, Cloud, Server, GitBranch } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import VariableProximity from './VariableProximity';

interface Certificate {
  id: string;
  name: string;
  provider: string;
  issueDate: string;
  expiryDate?: string;
  credentialId: string;
  verificationUrl: string;
  description: string;
  skills: string[];
  badgeImage: string;
  providerLogo: string;
  level: 'Associate' | 'Professional' | 'Expert' | 'Specialty';
  category: 'Cloud' | 'Infrastructure' | 'Security' | 'DevOps';
  providerColor: string;
  logoUrl: string;
}

const Certifications = () => {
  const certificationsContainerRef = React.useRef<HTMLDivElement>(null);
  const [selectedCertificate, setSelectedCertificate] = React.useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      id: 'az-104',
      name: 'Microsoft Azure Administrator',
      provider: 'Microsoft Azure',
      issueDate: '2024-01-15',
      expiryDate: '2025-01-15',
      credentialId: 'AZ-104-2024-001',
      verificationUrl: 'https://learn.microsoft.com/en-us/certifications/azure-administrator/',
      description: 'Demonstrates skills in implementing, managing, and monitoring identity, governance, storage, compute, and virtual networks in a cloud environment, plus provision, size, monitor, and adjust resources, when needed.',
      skills: ['Azure Virtual Machines', 'Azure Storage', 'Azure Networking', 'Azure Active Directory', 'Azure Monitor', 'Resource Management'],
      badgeImage: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=200',
      providerLogo: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=100',
      level: 'Associate',
      category: 'Cloud',
      providerColor: '#0078D4',
      logoUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 'az-400',
      name: 'Microsoft Azure DevOps Engineer Expert',
      provider: 'Microsoft Azure',
      issueDate: '2024-03-20',
      expiryDate: '2025-03-20',
      credentialId: 'AZ-400-2024-002',
      verificationUrl: 'https://learn.microsoft.com/en-us/certifications/devops-engineer/',
      description: 'Demonstrates expertise in combining people, process, and technologies to continuously deliver valuable products and services that meet end user needs and business objectives.',
      skills: ['Azure DevOps', 'CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging', 'Security & Compliance', 'Source Control'],
      badgeImage: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=200',
      providerLogo: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=100',
      level: 'Expert',
      category: 'DevOps',
      providerColor: '#0078D4',
      logoUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 'az-305',
      name: 'Microsoft Azure Solutions Architect Expert',
      provider: 'Microsoft Azure',
      issueDate: '2024-02-28',
      expiryDate: '2025-02-28',
      credentialId: 'AZ-305-2024-004',
      verificationUrl: 'https://learn.microsoft.com/en-us/certifications/azure-solutions-architect/',
      description: 'Demonstrates advanced skills in designing cloud and hybrid solutions that run on Microsoft Azure, including compute, network, storage, monitoring, and security.',
      skills: ['Solution Architecture', 'Azure Infrastructure', 'Security Design', 'Cost Optimization', 'Migration Strategies', 'Governance'],
      badgeImage: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=200',
      providerLogo: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=100',
      level: 'Expert',
      category: 'Cloud',
      providerColor: '#0078D4',
      logoUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 'terraform-associate',
      name: 'HashiCorp Certified: Terraform Associate',
      provider: 'HashiCorp',
      issueDate: '2023-11-10',
      expiryDate: '2025-11-10',
      credentialId: 'TERRAFORM-ASSOC-2023-003',
      verificationUrl: 'https://www.hashicorp.com/certification/terraform-associate',
      description: 'Validates foundational skills and knowledge in using Terraform for infrastructure automation. Covers Terraform basics, configuration language, state management, and best practices.',
      skills: ['Infrastructure as Code', 'Terraform Configuration', 'State Management', 'Modules', 'Providers', 'Terraform Cloud'],
      badgeImage: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=200',
      providerLogo: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=100',
      level: 'Associate',
      category: 'Infrastructure',
      providerColor: '#7B42BC',
      logoUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Associate':
        return { bg: 'bg-blue-500/10', text: 'text-blue-600', border: 'border-blue-200' };
      case 'Professional':
        return { bg: 'bg-purple-500/10', text: 'text-purple-600', border: 'border-purple-200' };
      case 'Expert':
        return { bg: 'bg-red-500/10', text: 'text-red-600', border: 'border-red-200' };
      case 'Specialty':
        return { bg: 'bg-green-500/10', text: 'text-green-600', border: 'border-green-200' };
      default:
        return { bg: 'bg-gray-500/10', text: 'text-gray-600', border: 'border-gray-200' };
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Cloud':
        return '#3B82F6';
      case 'Infrastructure':
        return '#9333EA';
      case 'Security':
        return '#EF4444';
      case 'DevOps':
        return '#14B8A6';
      default:
        return '#6B7280';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cloud': return Cloud;
      case 'Infrastructure': return Server;
      case 'Security': return Shield;
      case 'DevOps': return GitBranch;
      default: return Award;
    }
  };

  const isExpiringSoon = (expiryDate?: string) => {
    if (!expiryDate) return false;
    const expiry = new Date(expiryDate);
    const now = new Date();
    const threeMonthsFromNow = new Date(now.getTime() + (90 * 24 * 60 * 60 * 1000));
    return expiry <= threeMonthsFromNow;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  const handleCertificateClick = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
  };

  return (
    <section id="certifications" ref={certificationsContainerRef} className="py-12 sm:py-16 lg:py-20 bg-gray-50 relative px-4 sm:px-6 lg:pl-20 pt-20 sm:pt-24 lg:pt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="mb-6">
            <VariableProximity
              label="Certifications"
              className="variable-proximity-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
              fromFontVariationSettings="'wght' 700, 'opsz' 32"
              toFontVariationSettings="'wght' 900, 'opsz' 32"
              containerRef={certificationsContainerRef}
              radius={120}
              falloff="exponential"
            />
          </div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Professional certifications validating expertise in cloud platforms, infrastructure automation, and DevOps practices.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {certificates.map((certificate) => {
            const levelColors = getLevelColor(certificate.level);
            const isExpiring = isExpiringSoon(certificate.expiryDate);
            const CategoryIcon = getCategoryIcon(certificate.category);
            
            return (
              <SpotlightCard
                key={certificate.id}
                className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-2 bg-white border border-gray-200 rounded-2xl p-6 relative overflow-hidden hover:shadow-xl hover:border-gray-300"
                spotlightColor={certificate.providerColor + '40'}
                onClick={() => handleCertificateClick(certificate)}
              >
                {/* Large Certificate Logo */}
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="relative mb-4 w-24 h-24 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow" style={{ backgroundColor: certificate.providerColor + '10' }}>
                    <img 
                      src={certificate.logoUrl} 
                      alt={`${certificate.provider} certificate`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
                    <div className="absolute bottom-2 right-2">
                      <CategoryIcon className="w-4 h-4" style={{ color: getCategoryColor(certificate.category) }} />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                    {certificate.name}
                  </h3>
                  
                  <div className="flex flex-col items-center space-y-2 mb-3">
                    <span className="text-sm font-medium" style={{ color: certificate.providerColor }}>{certificate.provider}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${levelColors.bg} ${levelColors.text} ${levelColors.border}`}>
                      {certificate.level}
                    </span>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="flex justify-center mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${isExpiring ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'}`}>
                    {isExpiring ? 'Expires Soon' : 'Active'}
                  </span>
                </div>

                {/* Click indicator */}
                <div className="text-center">
                  <span className="text-xs text-gray-400 group-hover:text-gray-600 transition-colors">
                    Click for details →
                  </span>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>

      {/* Certificate Detail Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                    <img 
                      src={selectedCertificate.providerLogo} 
                      alt={`${selectedCertificate.provider} logo`}
                      className="w-4 h-4 rounded-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedCertificate.name}</h3>
                  <div className="flex items-center space-x-3 mt-2">
                    <span className="text-lg font-medium text-gray-600">{selectedCertificate.provider}</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getLevelColor(selectedCertificate.level).bg} ${getLevelColor(selectedCertificate.level).text} ${getLevelColor(selectedCertificate.level).border}`}>
                      {selectedCertificate.level}
                    </span>
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
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                      Certificate Details
                    </h4>
                    <p className="text-gray-700 leading-relaxed">{selectedCertificate.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <Star className="w-5 h-5 mr-2 text-yellow-500" />
                      Skills Validated
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedCertificate.skills.map((skill, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                          <span className="text-gray-700">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                      Certification Information
                    </h4>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide">Issue Date</div>
                            <div className="text-sm font-semibold text-gray-900">{formatDate(selectedCertificate.issueDate)}</div>
                          </div>
                          {selectedCertificate.expiryDate && (
                            <div>
                              <div className="text-xs text-gray-500 uppercase tracking-wide">Expiry Date</div>
                              <div className={`text-sm font-semibold ${isExpiringSoon(selectedCertificate.expiryDate) ? 'text-orange-600' : 'text-gray-900'}`}>
                                {formatDate(selectedCertificate.expiryDate)}
                              </div>
                            </div>
                          )}
                          <div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide">Credential ID</div>
                            <div className="text-sm font-semibold text-gray-900 font-mono">{selectedCertificate.credentialId}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide">Category</div>
                            <div className="text-sm font-semibold text-gray-900">{selectedCertificate.category}</div>
                          </div>
                        </div>
                      </div>
                      
                      {isExpiringSoon(selectedCertificate.expiryDate) && (
                        <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                            <span className="text-orange-800 font-medium">This certification expires soon</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <ExternalLink className="w-5 h-5 mr-2 text-purple-500" />
                      Verification
                    </h4>
                    <a
                      href={selectedCertificate.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Verify Certificate
                    </a>
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

export default Certifications;