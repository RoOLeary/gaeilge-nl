import React, { useRef, useEffect, useState } from 'react';

interface VoxStyleStoryProps {
  enableAnimations?: boolean;
}

const VoxStyleStory: React.FC<VoxStyleStoryProps> = ({
  enableAnimations = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enableAnimations) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [enableAnimations]);

  const storyItems = [
    {
      title: 'Foghlaim agus Labhairt',
      description: 'Regular conversation sessions where beginners and fluent speakers practice Irish together in a supportive environment.',
      highlight: 'Every Tuesday'
    },
    {
      title: 'Cultural Events',
      description: 'Traditional music sessions, storytelling evenings, and celebrations that bring Irish culture to life in Amsterdam.',
      highlight: 'Monthly'
    },
    {
      title: 'Community Support',
      description: 'A welcoming network where Irish language enthusiasts connect, share resources, and build lasting friendships.',
      highlight: 'Always'
    }
  ];

  return (
    <div 
      ref={sectionRef}
      className="bg-gray-50 py-20 px-8"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div 
          className={`mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="text-sm font-medium text-gray-700 mb-4">
            <span className="border-b-2 border-gray-300 pb-1">FÚINNE</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
            BIGÍ LINN, AG CEILURADH ÁR DTEANGA ÁLAINN
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl leading-relaxed">
            Trí phríomhcholún dár bpobal Gaeilge thar lear
          </p>
        </div>

        {/* Story Grid */}
        <div className="space-y-16">
          {storyItems.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{transitionDelay: `${0.2 + index * 0.2}s`}}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                {/* Number */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-black text-white font-bold text-lg flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed max-w-xl">
                        {item.description}
                      </p>
                    </div>
                    
                    {/* Highlight Box */}
                    <div className="bg-white px-4 py-2 border border-gray-200 md:ml-8">
                      <div className="text-sm font-medium text-gray-700">
                        {item.highlight}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Separator */}
              {index < storyItems.length - 1 && (
                <div className="mt-12 h-px bg-gray-300" />
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div 
          className={`mt-20 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{transitionDelay: '1.0s'}}
        >
          <p className="text-lg text-gray-600 mb-8 font-light">
            Ready to get involved?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-black text-white font-medium text-base hover:bg-gray-800 transition-colors duration-200"
          >
            Contact Us
            <svg className="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default VoxStyleStory;
