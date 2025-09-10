import React from 'react';
import { X, Download, Eye } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/demo-cv.pdf';
    link.download = 'Sandeep_Vangara_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-500/10 rounded-full">
              <Eye className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">CV Preview</h3>
              <p className="text-xs sm:text-sm text-gray-600">Sandeep Vangara - DevOps Engineer</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              onClick={handleDownload}
              className="flex items-center px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              <Download className="w-4 h-4 mr-1 sm:mr-2" />
              Download
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* PDF Preview */}
        <div className="p-4 sm:p-6 overflow-auto max-h-[calc(90vh-120px)]">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <iframe
              src="/demo-cv.pdf"
              className="w-full h-[400px] sm:h-[600px] border-0"
              title="CV Preview"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVModal;