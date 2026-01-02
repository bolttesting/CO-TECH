import React, { useState, useEffect, useRef } from 'react';
import { industryData } from '../data/industryData';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  title: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoSrc, title }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[250] bg-black/80 backdrop-blur-md flex flex-col items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 card-premium"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close Video"
          className="absolute top-3 right-3 md:top-6 md:right-6 z-50 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center glass-dark hover:bg-red-500/20 text-white rounded-full transition-all text-xl md:text-3xl font-light hover:scale-110"
        >
          &times;
        </button>
        <video
          autoPlay
          muted={false}
          controls
          playsInline
          controlsList="nodownload"
          className="w-full h-full object-cover rounded-3xl"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-b from-black/90 via-black/60 to-transparent text-white font-bold text-base md:text-lg tracking-tight pointer-events-none">
          {title}
        </div>
      </div>
    </div>
  );
};

const UseCaseDemos: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<{ src: string; title: string } | null>(null);
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

  const openVideoModal = (idx: number) => {
    const item = industryData[idx];
    setSelectedVideo({ src: item.video.src, title: item.video.title });
    setModalOpen(true);
  };

  const closeVideoModal = () => {
    setModalOpen(false);
    setSelectedVideo(null);
  };

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeVideoModal();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      <section 
        ref={sectionRef}
        id="use-case-demos" 
        className="relative py-8 md:py-12 bg-white min-h-screen flex items-center overflow-hidden snap-start"
      >
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-gray-900 w-full z-10">
          <div className="text-center mb-8 md:mb-12 reveal">
            <h3 className="text-5xl md:text-6xl font-black text-primary tracking-tighter mb-6">
              Use Case Scenarios
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              High-precision deployment scenarios powered by advanced spatial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryData.map((item, idx) => {
              const featureList = item.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 mb-3 text-left">
                  <span className="text-accent mt-1.5 flex-shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-300 font-medium text-sm leading-relaxed">{f}</span>
                </li>
              ));

              return (
                <div
                  key={idx}
                  className="reveal card-premium bg-primary rounded-2xl border border-white/10 overflow-hidden flex flex-col group shadow-xl hover:shadow-2xl"
                >
                  <div
                    className="aspect-video relative overflow-hidden bg-slate-100 cursor-pointer"
                    onClick={() => openVideoModal(idx)}
                  >
                    <img
                      src={item.video.thumbnail}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      width="800"
                      height="450"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/40 transition-all duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center text-primary shadow-2xl transition-all duration-300">
                        <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 px-4 py-2 glass rounded-lg text-xs font-black uppercase tracking-widest text-white border border-white/20">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h5 className="text-xl font-black text-white mb-6 tracking-tight leading-tight text-left">
                      {item.title}
                    </h5>
                    <ul className="text-gray-300 text-sm leading-relaxed flex-grow space-y-2">{featureList}</ul>
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
      <VideoModal
        isOpen={modalOpen}
        onClose={closeVideoModal}
        videoSrc={selectedVideo?.src || ''}
        title={selectedVideo?.title || ''}
      />
    </>
  );
};

export default UseCaseDemos;
