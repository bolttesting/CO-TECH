import React, { useEffect, useRef } from 'react';

const HowItWorksInfographic: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="how-it-works-infographic" 
      className="relative py-8 md:py-12 bg-white text-gray-800 min-h-screen flex items-center overflow-hidden snap-start"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="reveal flex justify-center items-center">
          <img 
            src="/images/infographics/0. how it works infograph portrait.png" 
            alt="How it works infographic"
            className="max-w-full h-auto object-contain w-full"
            loading="lazy"
            decoding="async"
            width="1200"
            height="1600"
            onError={(e) => {
              // Fallback if image doesn't exist yet
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksInfographic;
