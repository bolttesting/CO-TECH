import React, { useEffect, useRef } from 'react';

const ProvenResults: React.FC = () => {
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

  const cases = [
    {
      category: 'Emergency & Elder Care',
      title: "Hangzhou Ninth People's Hospital",
      description: 'Optimizing patient flow and accelerating staff response in high-stakes environments through sub-meter coordinate integrity.',
      color: 'red',
      stats: [
        { label: 'Critical', value: 'Minutes Saved', color: 'red' },
        { label: 'Optimized', value: 'Triage Flow', color: 'red' }
      ]
    },
    {
      category: 'Aviation Logistics',
      title: 'Baiyun Airport Air Logistics',
      description: 'Unifying indoor/outdoor tracking for aviation containers integrated with Bluetooth AoA across 140,000 m².',
      color: 'sky',
      stats: [
        { label: '90%', value: 'Search Time Reduction', color: 'sky' }
      ]
    },
    {
      category: 'Smart Retail Rollout',
      title: 'Wumart Group Retail Strategy',
      description: 'Analytics across over 2,000 stores providing shelf-level navigation and behavioral heat-mapping for 110B CNY annual sales.',
      color: 'green',
      stats: [
        { label: 'Enhanced', value: 'Shelf Strategy', color: 'green' }
      ]
    },
    {
      category: 'Cultural Security',
      title: 'State-Level Cultural Museum',
      description: 'Deployed invisible digital fences and sub-meter intrusion alarms to protect high-value relics while optimizing visitor journey flow.',
      color: 'yellow',
      stats: [
        { label: '60%', value: 'Artifact Risk Reduction', color: 'yellow' }
      ]
    }
  ];

  const colorClasses: { [key: string]: { border: string; text: string; bg: string; borderColor: string } } = {
    red: { border: 'border-red-500', text: 'text-red-500', bg: 'bg-red-500/10', borderColor: '#ef4444' },
    sky: { border: 'border-sky-500', text: 'text-sky-500', bg: 'bg-sky-500/10', borderColor: '#0ea5e9' },
    green: { border: 'border-green-500', text: 'text-green-500', bg: 'bg-green-500/10', borderColor: '#10b981' },
    yellow: { border: 'border-[#FDB813]', text: 'text-[#FDB813]', bg: 'bg-[#FDB813]/10', borderColor: '#FDB813' }
  };

  return (
    <section 
      ref={sectionRef}
      id="results" 
      className="relative py-8 md:py-12 bg-white text-gray-800 min-h-screen flex items-center overflow-hidden snap-start"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 w-full z-10">
        <div className="text-center mb-8 md:mb-12 reveal">
          <h3 className="text-5xl md:text-6xl font-black mb-6 text-primary">
            Proven Real-World Success
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Measurable ROI and operational impact across global infrastructure projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((caseItem, idx) => {
            const colors = colorClasses[caseItem.color];
            return (
              <div
                key={idx}
                className="reveal card-premium p-10 bg-white rounded-3xl shadow-xl border-l-8 flex flex-col h-full text-left border-t border-r border-b border-gray-100 hover:border-gray-200 transition-all"
                style={{ borderLeftColor: colors.borderColor }}
              >
                <span className={`text-xs font-black uppercase ${colors.text} mb-4 tracking-widest inline-block px-3 py-1 ${colors.bg} rounded-lg`}>
                  {caseItem.category}
                </span>
                <h4 className="text-3xl font-black text-primary mb-6">{caseItem.title}</h4>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  {caseItem.description}
                </p>
                <div className="mt-auto flex gap-4 flex-wrap">
                  {caseItem.stats.map((stat, statIdx) => (
                    <div key={statIdx} className="glass rounded-xl px-6 py-4 border border-gray-200 hover:border-gray-300 transition-colors">
                      <span className={`text-3xl font-black ${colors.text} block mb-1`}>{stat.label}</span>
                      <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Schedule Demo CTA */}
        <div className="mt-8 md:mt-12 text-center reveal">
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-premium px-10 py-4 bg-secondary text-white font-bold rounded-xl shadow-2xl shadow-secondary/50 hover:shadow-secondary/70 hover:scale-105 transition-all duration-300 text-lg relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Schedule Demo
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProvenResults;
