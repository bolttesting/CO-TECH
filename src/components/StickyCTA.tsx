import React from 'react';

const StickyCTA: React.FC = () => {
  const handleClick = () => {
    window.location.href = 'mailto:admin@thecoconsultants.com?subject=Schedule Demo Request';
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 bg-secondary text-white px-4 py-3 sm:px-6 sm:py-3 rounded-full shadow-lg hover:shadow-2xl hover:bg-[#1d4ed8] transition-all duration-300 hover:scale-105 active:scale-95 font-semibold text-xs sm:text-sm md:text-base flex items-center gap-2 backdrop-blur-sm"
      aria-label="Contact / Schedule Demo"
    >
      <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
      <span className="hidden sm:inline whitespace-nowrap">Schedule Demo</span>
      <span className="sm:hidden">Contact</span>
    </button>
  );
};

export default StickyCTA;

