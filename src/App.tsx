import React, { useEffect } from 'react';
import { Home, User, Code, FolderOpen, Mail, Github, Linkedin } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Dock from './components/Dock';

function App() {
  const dockItems = [
    { 
      icon: <Home size={18} />, 
      label: 'Home', 
      onClick: () => {
        document.getElementById('root')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    { 
      icon: <User size={18} />, 
      label: 'About', 
      onClick: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    { 
      icon: <Code size={18} />, 
      label: 'Skills', 
      onClick: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    { 
      icon: <FolderOpen size={18} />, 
      label: 'Projects', 
      onClick: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    { 
      icon: <Mail size={18} />, 
      label: 'Contact', 
      onClick: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  ];

  const socialDockItems = [
    { 
      icon: <Github size={18} />, 
      label: 'GitHub', 
      onClick: () => window.open('https://github.com', '_blank')
    },
    { 
      icon: <Mail size={18} />, 
      label: 'Gmail', 
      onClick: () => window.open('mailto:vangarasandeepkumar@gmail.com', '_blank')
    },
    { 
      icon: <Linkedin size={18} />, 
      label: 'LinkedIn', 
      onClick: () => window.open('https://linkedin.com', '_blank')
    }
  ];

  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Add scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white relative">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      
      {/* Fixed Dock */}
      <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
        <div className="pointer-events-auto">
          <Dock 
            items={dockItems}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
          />
        </div>
      </div>
      
      {/* Social Media Dock */}
      <div className="fixed left-0 top-0 bottom-0 z-40 pointer-events-none">
        <div className="pointer-events-auto">
          <Dock 
            items={socialDockItems}
            isVertical={true}
            panelHeight={180}
            baseItemSize={40}
            magnification={55}
            distance={150}
          />
        </div>
      </div>
    </div>
  );
}

export default App;