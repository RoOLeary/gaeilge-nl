import React, { useState, useEffect } from 'react';

export interface VoxStyleHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

const VoxStyleHero: React.FC<VoxStyleHeroProps> = ({
  title = 'Gaeltacht Amsterdam',
  subtitle = 'Irish Language Community',
  description = 'Practice Irish, share stories, and connect with Irish culture in Amsterdam'
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-white min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-8">
        {/* Subtitle with underline */}
        <div 
          className={`text-sm font-medium text-gray-700 mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
          style={{transitionDelay: '0.1s'}}
        >
          <span className="border-b-2 border-gray-300 pb-1">FÁILTE GO</span>
        </div>

        {/* Main headline */}
        <h1 
          className={`text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-black mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6 text-italic'
          }`}
          style={{transitionDelay: '0.2s'}}
        >
         
            <span className="block italic">
              {title}
            </span>
        
        </h1>

        {/* Subtitle/description */}
        <div 
          className={`text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-2xl mb-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
          style={{transitionDelay: '0.4s'}}
        >
          {description}
        </div>

        {/* Action buttons */}
        <div 
          className={`flex flex-wrap gap-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
          style={{transitionDelay: '0.6s'}}
        >
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-black text-white font-medium text-base hover:bg-gray-800 transition-colors duration-200"
          >
            TEIGH ISTEACH SA PHOBAL
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="/posts"
            className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium text-base hover:border-black hover:text-black transition-colors duration-200"
          >
            LEIGH SCÉALTÍ
          </a>
        </div>

        {/* Scroll indicator */}
        <div 
          className={`mt-20 flex flex-col items-center transition-all duration-700 ${
            isVisible ? 'opacity-40' : 'opacity-0'
          }`}
          style={{transitionDelay: '1s'}}
        >
          <span className="text-sm text-gray-500 mb-2 font-medium">BREIS</span>
          <svg className="w-4 h-4 animate-bounce text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default VoxStyleHero;
