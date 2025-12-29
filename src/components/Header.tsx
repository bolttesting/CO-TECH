import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (mobileMenuOpen && !target.closest('header')) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className={`glass-dark sticky top-0 z-[100] h-16 sm:h-20 md:h-20 lg:h-24 flex items-center transition-all duration-300 ${
        scrolled ? 'shadow-2xl border-b border-white/10' : ''
      }`}>
        <div className="max-w-7xl mx-auto w-full px-3 sm:px-4 md:px-6 lg:px-8 flex justify-between items-center gap-2 sm:gap-4">
          <div 
            className="cursor-pointer transition-transform duration-300 hover:scale-105 flex items-center flex-shrink-0" 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setMobileMenuOpen(false);
            }}
          >
            <img 
              src="/Artboard 6@4x.png" 
              alt="COTECH Logo" 
              className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto max-w-[140px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[250px] object-contain"
            />
          </div>
          <nav className="hidden lg:flex space-x-4 xl:space-x-6 2xl:space-x-8 text-xs xl:text-sm font-medium items-center">
            <button 
              onClick={() => scrollToSection('technology')} 
              className="text-gray-300 hover:text-accent transition-all duration-300 relative group"
            >
              Technology
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('use-case-demos')} 
              className="text-gray-300 hover:text-accent transition-all duration-300 relative group"
            >
              Solutions
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('visuals')} 
              className="text-gray-300 hover:text-accent transition-all duration-300 relative group"
            >
              Implementation
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('results')} 
              className="text-gray-300 hover:text-accent transition-all duration-300 relative group"
            >
              Proven Results
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </button>
            <a 
              href="https://thecoconsultants.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-accent border-b-2 border-accent pb-1 font-semibold hover:scale-110 transition-transform duration-300 whitespace-nowrap"
            >
              CoConsultants
            </a>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="px-3 xl:px-5 py-1.5 xl:py-2 bg-secondary text-white rounded-lg font-semibold hover:bg-[#1d4ed8] transition-all duration-300 hover:scale-105 text-xs xl:text-sm whitespace-nowrap"
            >
              Contact Us
            </button>
          </nav>
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden text-white text-2xl sm:text-3xl hover:text-accent transition-all duration-300 z-50 relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile & Tablet Menu */}
      <div 
        className={`fixed inset-0 z-[90] lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
        
        {/* Menu Panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-[280px] sm:w-80 md:w-96 max-w-[90vw] glass-dark border-l border-white/10 shadow-2xl transform transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-20 sm:pt-24 md:pt-28 px-4 sm:px-6 md:px-8">
            <nav className="flex flex-col space-y-4 sm:space-y-5 md:space-y-6">
              <button 
                onClick={() => scrollToSection('technology')} 
                className="text-left text-white text-base sm:text-lg md:text-xl font-semibold py-2.5 sm:py-3 md:py-3.5 border-b border-white/10 hover:text-accent transition-colors duration-300"
              >
                Technology
              </button>
              <button 
                onClick={() => scrollToSection('use-case-demos')} 
                className="text-left text-white text-base sm:text-lg md:text-xl font-semibold py-2.5 sm:py-3 md:py-3.5 border-b border-white/10 hover:text-accent transition-colors duration-300"
              >
                Solutions
              </button>
              <button 
                onClick={() => scrollToSection('visuals')} 
                className="text-left text-white text-base sm:text-lg md:text-xl font-semibold py-2.5 sm:py-3 md:py-3.5 border-b border-white/10 hover:text-accent transition-colors duration-300"
              >
                Implementation
              </button>
              <button 
                onClick={() => scrollToSection('results')} 
                className="text-left text-white text-base sm:text-lg md:text-xl font-semibold py-2.5 sm:py-3 md:py-3.5 border-b border-white/10 hover:text-accent transition-colors duration-300"
              >
                Proven Results
              </button>
              <a 
                href="https://thecoconsultants.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-left text-accent text-base sm:text-lg md:text-xl font-semibold py-2.5 sm:py-3 md:py-3.5 border-b border-white/10 hover:scale-105 transition-transform duration-300 inline-block"
              >
                CoConsultants
              </a>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left text-white text-base sm:text-lg md:text-xl font-semibold py-3 sm:py-3.5 md:py-4 px-4 sm:px-5 md:px-6 bg-secondary rounded-lg hover:bg-[#1d4ed8] transition-all duration-300 text-center mt-2 sm:mt-4"
              >
                Contact Us
              </button>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;


