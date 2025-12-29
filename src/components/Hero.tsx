import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative bg-primary h-screen flex items-center overflow-hidden snap-start"
      style={{ height: '100vh' }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full z-10 flex flex-col justify-center items-center" style={{ height: '100%' }}>
        <div className="w-full">
          <h2 className="reveal text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-2 sm:mb-3 md:mb-4 leading-tight tracking-tight px-2">
            <span className="text-white block mb-1 sm:mb-2">Pinpoint Accuracy,</span>
            <span className="text-secondary">
              Real-Time Insight.
            </span>
          </h2>

          <p className="reveal text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Next-Generation Bluetooth AoA technology bringing <span className="text-accent font-semibold">0.1m precision</span> to complex indoor and industrial environments.
          </p>

          <div className="reveal flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
            <button 
              onClick={() => scrollToSection('technology')} 
              className="btn-premium group px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-secondary text-white font-bold rounded-xl shadow-2xl shadow-secondary/50 hover:shadow-secondary/70 hover:scale-105 transition-all duration-300 text-xs sm:text-sm md:text-base relative overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                The Technology
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            
            <button 
              onClick={() => scrollToSection('use-case-demos')} 
              className="btn-premium group px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-transparent border-2 border-accent/50 text-accent font-bold rounded-xl hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300 text-xs sm:text-sm md:text-base backdrop-blur-sm hover:scale-105 shadow-lg hover:shadow-accent/50 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                Explore Solution
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="reveal mt-3 sm:mt-4 md:mt-6 lg:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto px-2 sm:px-4">
            <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/10">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-accent mb-1 sm:mb-2">0.1m</div>
              <div className="text-gray-300 text-xs sm:text-sm">Precision Accuracy</div>
            </div>
            <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/10">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-secondary mb-1 sm:mb-2">99.9%</div>
              <div className="text-gray-300 text-xs sm:text-sm">Uptime Reliability</div>
            </div>
            <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/10">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-accent mb-1 sm:mb-2">24/7</div>
              <div className="text-gray-300 text-xs sm:text-sm">Real-Time Tracking</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

