import React, { useState, useEffect, useRef } from 'react';

interface InfographicItem {
  title: string;
  color: string;
  bgColor: string;
  image: string;
}

const infographics: InfographicItem[] = [
  { 
    title: 'How it works', 
    color: '#2563eb', 
    bgColor: 'bg-secondary/10', 
    image: '/images/infographics/0. how it works infograph portrait.png'
  },
  { 
    title: 'Construction Data', 
    color: '#fbcc14', 
    bgColor: 'bg-accent/10', 
    image: '/images/infographics/1. Construction Infograph.png'
  },
  { 
    title: 'Smart Museum', 
    color: '#6366F1', 
    bgColor: 'bg-indigo-500/10', 
    image: '/images/infographics/2. Museum.png'
  },
  { 
    title: 'Intelligent Warehouse', 
    color: '#F97316', 
    bgColor: 'bg-orange-500/10', 
    image: '/images/infographics/3. Warehouse Infograph.png'
  },
  { 
    title: 'Smart Hospital', 
    color: '#EF4444', 
    bgColor: 'bg-red-500/10', 
    image: '/images/infographics/4. Hospital Infograph.png'
  },
  { 
    title: 'Retail Intelligence', 
    color: '#10B981', 
    bgColor: 'bg-green-500/10', 
    image: '/images/infographics/5. Retail Infograph.png'
  },
  { 
    title: 'Airport Operations', 
    color: '#0EA5E9', 
    bgColor: 'bg-sky-500/10', 
    image: '/images/infographics/6. Airport Infograph.png'
  },
];

const VisualSolutions: React.FC = () => {
  const [selectedInfographic, setSelectedInfographic] = useState<InfographicItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(4);
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(4); // Desktop: 4 items
      } else if (window.innerWidth >= 640) {
        setItemsPerView(2); // Tablet: 2 items
      } else {
        setItemsPerView(1); // Mobile: 1 item
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          const maxIndex = Math.max(0, infographics.length - itemsPerView);
          if (prev >= maxIndex) {
            return 0; // Loop back to start
          }
          return prev + 1;
        });
      }, 4000); // Change slide every 4 seconds
    } else {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, itemsPerView]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        // If at start, go to the last possible position
        return Math.max(0, infographics.length - itemsPerView);
      }
      return prev - 1;
    });
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => {
      // Maximum index is length - itemsPerView to always show the correct number of items
      const maxIndex = Math.max(0, infographics.length - itemsPerView);
      if (prev >= maxIndex) {
        return 0; // Loop back to start
      }
      return prev + 1;
    });
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <>
      <section 
        ref={sectionRef}
        id="visuals" 
        className="relative py-8 md:py-12 bg-primary text-white overflow-hidden min-h-screen flex items-center snap-start"
      >
        {/* Background Decorations */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="text-center mb-8 md:mb-12 reveal">
            <h3 className="text-5xl md:text-6xl font-black mb-6 text-white">
              Challenges & Solutions
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              High-definition infographics for technical implementation and spatial awareness.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative reveal">
            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 w-12 h-12 md:w-16 md:h-16 glass-dark rounded-full flex items-center justify-center text-white hover:text-accent hover:scale-110 transition-all duration-300 shadow-2xl border border-white/20 group"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 w-12 h-12 md:w-16 md:h-16 glass-dark rounded-full flex items-center justify-center text-white hover:text-accent hover:scale-110 transition-all duration-300 shadow-2xl border border-white/20 group"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Carousel */}
            <div 
              ref={carouselRef}
              className="relative overflow-hidden rounded-3xl"
            >
              <div 
                className="flex transition-transform duration-700 ease-in-out items-stretch"
                style={{ 
                  transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` 
                }}
              >
                {infographics.map((item, idx) => (
                  <div
                    key={idx}
                    className="min-w-full sm:min-w-[50%] lg:min-w-[25%] px-2 md:px-3 h-full"
                  >
                    <div
                      onClick={() => setSelectedInfographic(item)}
                      className="card-premium group relative bg-primary rounded-3xl overflow-hidden shadow-2xl cursor-pointer border border-white/10 h-full flex flex-col"
                      style={{ borderTop: `4px solid ${item.color}` }}
                    >
                      <div className={`${item.bgColor} rounded-2xl h-64 md:h-80 relative overflow-hidden flex-shrink-0`}>
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                          decoding="async"
                          width="400"
                          height="320"
                          onError={(e) => {
                            // Fallback if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&q=80&w=800';
                          }}
                        />
                        <div className="absolute inset-0 bg-primary/20 z-10"></div>
                        <div className="absolute inset-0 bg-primary/60 z-20"></div>
                      </div>
                      <div className="p-6 md:p-8 bg-primary relative flex-shrink-0 min-h-28 md:min-h-32 flex flex-col justify-center">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-white/20"></div>
                        <h5 className="text-white font-black text-base md:text-lg mb-2 line-clamp-2 break-words whitespace-normal">{item.title}</h5>
                        <p className="text-gray-400 text-xs uppercase tracking-wider">Click for full version</p>
                      </div>
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="text-white font-bold text-lg md:text-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          View Details
                          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center items-center gap-3 mt-8">
              {Array.from({ length: Math.max(1, infographics.length - itemsPerView + 1) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    idx === currentIndex
                      ? 'w-12 h-3 bg-accent shadow-lg shadow-accent/50'
                      : 'w-3 h-3 bg-gray-400 hover:bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full View Modal */}
      {selectedInfographic && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedInfographic(null)}
        >
          <button
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white text-4xl md:text-5xl hover:text-accent transition-all duration-300 z-10 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-black/50 rounded-full hover:bg-black/80 hover:scale-110"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedInfographic(null);
            }}
          >
            &times;
          </button>
          <div
            className="w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedInfographic.image} 
              alt={selectedInfographic.title}
              className="max-w-full max-h-full w-auto h-auto object-contain"
              loading="eager"
              decoding="async"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&q=80&w=800';
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default VisualSolutions;
