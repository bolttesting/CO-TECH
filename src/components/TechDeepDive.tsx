import React, { useState, useRef, useEffect } from 'react';
import { videoUrls } from '../config/videoUrls';

const TechDeepDive: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch((e) => console.log('Auto-play blocked or failed', e));
          } else {
            video.pause();
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="tech-deep-dive" 
      className="relative py-32 bg-primary overflow-hidden min-h-screen flex items-center justify-center"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center justify-center">
        <div className="text-center mb-8 reveal">
          <span className="inline-block px-4 py-2 bg-secondary/20 border border-secondary/30 rounded-full text-secondary text-sm font-semibold mb-3">
            Deep Dive
          </span>
          <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            How it works
          </h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            See the physics of Phase Delay and Vector Triangulation in action.
          </p>
        </div>
        
        <div className="reveal relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 bg-black aspect-video group/container card-premium">
          <video
            ref={videoRef}
            className="w-full h-full object-cover opacity-80"
            muted={isMuted}
            loop
            playsInline
            controls
          >
            <source src={videoUrls.howItWorks} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-primary/10 pointer-events-none"></div>

          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-30 glass-dark hover:bg-accent/20 text-white p-2 md:p-4 rounded-xl backdrop-blur-md transition-all flex items-center gap-2 md:gap-3 border border-white/20 group shadow-2xl hover:scale-110"
          >
            <span className="text-lg md:text-2xl leading-none">{isMuted ? '🔇' : '🔊'}</span>
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest hidden sm:inline">
              {isMuted ? 'Unmute Technical Audio' : 'Mute Audio'}
            </span>
          </button>
          
          <div className="absolute inset-0 pointer-events-none flex flex-col justify-start md:justify-end p-4 md:p-8 lg:p-12">
            <div className="flex items-center gap-2 md:gap-4 text-accent mt-2 md:mt-0 md:mb-4">
              <div className="relative">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-accent animate-ping"></div>
                <div className="absolute inset-0 w-2 h-2 md:w-3 md:h-3 rounded-full bg-accent"></div>
              </div>
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] glass px-2 py-1 md:px-4 md:py-2 rounded-lg border border-accent/30">
                Live Technology Logic Demo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechDeepDive;
