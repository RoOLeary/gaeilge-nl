import React, { useState, useEffect } from 'react';

export interface VoxStyleEventProps {
  title: string;
  description: string;
  eventDate?: string;
  endDate?: string;
  location?: string;
  venue?: string;
  address?: string;
  city?: string;
  country?: string;
  price?: string;
  organizer?: string;
  organizerEmail?: string;
  languageLevel?: string;
  tags?: string[];
  registrationUrl?: string;
}

const VoxStyleEvent: React.FC<VoxStyleEventProps> = ({
  title,
  description,
  eventDate,
  endDate,
  location,
  venue,
  address,
  city,
  country,
  price,
  organizer,
  organizerEmail,
  languageLevel,
  tags,
  registrationUrl
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const formatDate = (dateString: string | Date) => {
    if (!dateString) return 'TBD';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return 'TBD';
    }
    return new Intl.DateTimeFormat("en-US", {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  const formatLocation = () => {
    if (venue && address && city) {
      return `${venue}, ${address}, ${city}`;
    }
    if (venue && city) {
      return `${venue}, ${city}`;
    }
    if (location) {
      return location;
    }
    return city || 'Location TBD';
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-8 py-20">
        {/* Event Type Label */}
        <div 
          className={`text-sm font-medium text-gray-700 mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
          style={{transitionDelay: '0.1s'}}
        >
          <span className="border-b-2 border-gray-300 pb-1">IMEACHT</span>
        </div>

        {/* Main Title */}
        <h1 
          className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-black mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
          }`}
          style={{transitionDelay: '0.2s'}}
        >
          <span className="block italic">
            {title}
          </span>
        </h1>

        {/* Description */}
        <div 
          className={`text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
          style={{transitionDelay: '0.4s'}}
        >
          {description}
        </div>

        {/* Event Details Grid */}
        <div 
          className={`grid md:grid-cols-3 gap-8 mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{transitionDelay: '0.6s'}}
        >
          {/* Date & Time */}
          <div className="space-y-2">
            <div className="text-sm font-medium text-gray-700 uppercase tracking-wide">Date & Time</div>
            <div className="text-lg font-semibold text-black">{formatDate(eventDate)}</div>
            {endDate && (
              <div className="text-sm text-gray-600">Until {formatDate(endDate)}</div>
            )}
          </div>

          {/* Location */}
          <div className="space-y-2">
            <div className="text-sm font-medium text-gray-700 uppercase tracking-wide">Location</div>
            <div className="text-lg font-semibold text-black">{formatLocation()}</div>
            {country && (
              <div className="text-sm text-gray-600">{country}</div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-2">
            <div className="text-sm font-medium text-gray-700 uppercase tracking-wide">Details</div>
            <div className="text-lg font-semibold text-black">{price || 'Free'}</div>
            {languageLevel && (
              <div className="text-sm text-gray-600">{languageLevel}</div>
            )}
          </div>
        </div>

        {/* Organizer */}
        {organizer && (
          <div 
            className={`mb-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{transitionDelay: '0.8s'}}
          >
            <div className="text-sm font-medium text-gray-700 mb-2">Organized by</div>
            <div className="text-lg font-semibold text-black">{organizer}</div>
            {organizerEmail && (
              <div className="text-sm text-gray-600">{organizerEmail}</div>
            )}
          </div>
        )}

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div 
            className={`mb-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{transitionDelay: '1.0s'}}
          >
            <div className="flex flex-wrap gap-3">
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium border border-gray-200 hover:bg-gray-200 transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div 
          className={`flex flex-wrap gap-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{transitionDelay: '1.2s'}}
        >
          {registrationUrl ? (
            <a
              href={registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-black text-white font-medium text-base hover:bg-gray-800 transition-colors duration-200"
            >
              Register Now
              <svg className="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ) : (
            <a
              href={`mailto:${organizerEmail || 'info@gaeltachammsterdam.com'}`}
              className="inline-flex items-center px-8 py-4 bg-black text-white font-medium text-base hover:bg-gray-800 transition-colors duration-200"
            >
              Register Now
              <svg className="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          )}
          
          <a
            href="/imeachtaí"
            className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-medium text-base hover:border-black hover:text-black transition-colors duration-200"
          >
            View All Events
          </a>
        </div>
      </div>
    </div>
  );
};

export default VoxStyleEvent;
