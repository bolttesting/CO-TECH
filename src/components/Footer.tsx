import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    quickLinks: false,
    contactInfo: false
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-primary border-t border-white/10 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Logo Section */}
          <div className="flex flex-col">
            <div className="mb-4">
              <img 
                src="/Artboard 6@4x.png" 
                alt="COTECH Logo" 
                className="h-10 md:h-12 lg:h-14 w-auto max-w-[180px] md:max-w-[220px] lg:max-w-[250px] object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm mt-2">
              High-Precision BLE Location Tracking
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <button
              onClick={() => toggleSection('quickLinks')}
              className="w-full flex items-center justify-between md:justify-start mb-4 md:mb-6"
            >
              <h3 className="text-white font-semibold text-lg uppercase tracking-wider">
                Quick Links
              </h3>
              <svg
                className={`w-5 h-5 text-accent md:hidden transition-transform duration-300 ${
                  openSections.quickLinks ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <ul className={`space-y-3 overflow-hidden transition-all duration-300 ${
              openSections.quickLinks ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 md:max-h-96 md:opacity-100'
            }`}>
              <li>
                <button
                  onClick={() => scrollToSection('technology')}
                  className="text-gray-400 hover:text-accent transition-colors duration-300 text-sm md:text-base"
                >
                  Technology
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('use-case-demos')}
                  className="text-gray-400 hover:text-accent transition-colors duration-300 text-sm md:text-base"
                >
                  Use Case
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('visuals')}
                  className="text-gray-400 hover:text-accent transition-colors duration-300 text-sm md:text-base"
                >
                  Visuals
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('results')}
                  className="text-gray-400 hover:text-accent transition-colors duration-300 text-sm md:text-base"
                >
                  Proven Results
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-accent transition-colors duration-300 text-sm md:text-base"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <button
              onClick={() => toggleSection('contactInfo')}
              className="w-full flex items-center justify-between md:justify-start mb-4 md:mb-6"
            >
              <h3 className="text-white font-semibold text-lg uppercase tracking-wider">
                Contact Info
              </h3>
              <svg
                className={`w-5 h-5 text-accent md:hidden transition-transform duration-300 ${
                  openSections.contactInfo ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`space-y-3 overflow-hidden transition-all duration-300 ${
              openSections.contactInfo ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 md:max-h-96 md:opacity-100'
            }`}>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-400 text-sm md:text-base">
                  Dubai, UAE
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href="mailto:admin@thecoconsultants.com" 
                  className="text-gray-400 hover:text-accent transition-colors duration-300 text-sm md:text-base"
                >
                  admin@thecoconsultants.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-gray-400 text-sm md:text-base">
                  <p>Mon–Fri: 8AM–6PM</p>
                  <p>Sat: 9AM–4PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              CoTech © 2025 — An extension of the Coconsultants group
            </p>
            <div className="flex gap-6 text-sm">
              <a 
                href="https://thecoconsultants.com/privacy-policy" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a 
                href="https://thecoconsultants.com/terms-and-conditions" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors duration-300"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
