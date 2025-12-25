import React, { useEffect, useRef } from 'react';

const Technology: React.FC = () => {
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
      id="technology" 
      className="relative py-8 md:py-12 bg-white text-gray-800 min-h-screen flex items-center overflow-hidden snap-start"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="text-center mb-8 md:mb-12 reveal">
          <h3 className="text-5xl md:text-6xl font-black mb-6 text-primary">
            Precision Technology
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Bridging the gap between standard connectivity and absolute spatial awareness.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 reveal">
            <div>
              <h4 className="text-4xl font-black text-primary mb-6">What is BLE RTLS?</h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                Bluetooth Low Energy (BLE) Real-Time Location Systems (RTLS) use small, battery-efficient tags to digitize physical movement. In today's high-velocity supply chain, it allows you to see where tracked people and assets are, <span className="font-semibold text-secondary">right now</span>.
              </p>
            </div>
            
            <div className="card-premium bg-white p-8 rounded-2xl shadow-xl border-l-4 border-accent hover:shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 mb-2 text-lg">Why GPS Fails Indoors</h5>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    GPS relies on line-of-sight signals from satellites. These signals cannot penetrate roofs or walls. Even near windows, GPS error margins (5-10m) are too large for internal logistics. Our BLE AoA solution reaches <span className="font-semibold text-accent">0.1m precision</span> where satellites cannot.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card-premium bg-primary p-10 rounded-3xl text-white shadow-2xl border border-white/10 reveal">
            <h4 className="mb-8 flex flex-col items-start gap-3">
              <span className="bg-secondary p-2 rounded-lg text-[10px] uppercase px-3 font-black tracking-wider shadow-sm">Workflow</span>
              <span className="text-3xl md:text-4xl font-black uppercase tracking-tighter">Core Architecture</span>
            </h4>
            <div className="space-y-8">
              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 font-black text-secondary text-3xl w-8 h-8 flex items-center justify-center bg-secondary/10 rounded-full">1</div>
                <div>
                  <h5 className="font-bold text-xl mb-1">Locating Tags</h5>
                  <p className="text-sm text-gray-400">Small devices attached to assets send periodic Bluetooth pulses.</p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 font-black text-secondary text-3xl w-8 h-8 flex items-center justify-center bg-secondary/10 rounded-full">2</div>
                <div>
                  <h5 className="font-bold text-xl mb-1">AoA Anchors</h5>
                  <p className="text-sm text-gray-400">Fixed ceiling receivers capture these pulses using high-density antenna arrays.</p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 font-black text-secondary text-3xl w-8 h-8 flex items-center justify-center bg-secondary/10 rounded-full">3</div>
                <div>
                  <h5 className="font-bold text-xl mb-1">Positioning Engine</h5>
                  <p className="text-sm text-gray-400">Software calculates the exact spatial coordinates (X, Y, Z) instantly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;

