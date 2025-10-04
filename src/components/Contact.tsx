import React from 'react';

export default function Contact() {
  return (
    <div className="bg-white min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto px-8 py-20 w-full">
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-sm font-medium text-gray-700 mb-6">
            <span className="border-b-2 border-gray-300 pb-1">TEAGMHÁIL</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-black mb-6">
            <span className="block italic">
              Labhair Linn
            </span>
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl">
            Táimid ag tnúth le do theachtaireacht. Cuir teachtaireacht chugainn agus freagróimid ort go luath.
          </p>
        </div>

        {/* Contact Form */}
        <div>
          <form action="#" method="POST" className="space-y-8">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 uppercase tracking-wide">
                  Ainm
                </label>
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full bg-transparent border-b-2 border-gray-300 px-0 py-3 text-lg text-gray-900 placeholder-gray-400 focus:border-black focus:outline-none transition-colors duration-200"
                  placeholder="D'ainm"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 uppercase tracking-wide">
                  Sloinne
                </label>
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full bg-transparent border-b-2 border-gray-300 px-0 py-3 text-lg text-gray-900 placeholder-gray-400 focus:border-black focus:outline-none transition-colors duration-200"
                  placeholder="Do shloinne"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 uppercase tracking-wide">
                Ríomhphost
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full bg-transparent border-b-2 border-gray-300 px-0 py-3 text-lg text-gray-900 placeholder-gray-400 focus:border-black focus:outline-none transition-colors duration-200"
                placeholder="do@riomhphost.com"
              />
            </div>

            {/* Subject Field */}
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 uppercase tracking-wide">
                Ábhar
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="block w-full bg-transparent border-b-2 border-gray-300 px-0 py-3 text-lg text-gray-900 placeholder-gray-400 focus:border-black focus:outline-none transition-colors duration-200"
                placeholder="Cén fáth a bhfuil tú ag teagmháil linn?"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 uppercase tracking-wide">
                Teachtaireacht
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="block w-full bg-transparent border-b-2 border-gray-300 px-0 py-3 text-lg text-gray-900 placeholder-gray-400 focus:border-black focus:outline-none transition-colors duration-200 resize-none"
                placeholder="Scríobh do theachtaireacht anseo..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-8">
              <button
                type="submit"
                className="inline-flex items-center px-8 py-4 bg-black text-white font-medium text-base hover:bg-gray-800 transition-colors duration-200"
              >
                Seol Teachtaireacht
                <svg className="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            </div>

            {/* Privacy Notice */}
            <p className="text-sm text-gray-500 font-light">
              Trí fhoirm a chur isteach, aontaím leis an{' '}
              <a href="#" className="font-medium text-black hover:underline">
                polasaí príobháideachta
              </a>
              .
            </p>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-20 pt-20 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-sm font-medium text-gray-700 uppercase tracking-wide">Ríomhphost</div>
              <div className="text-lg font-semibold text-black">info@gaeltachammsterdam.com</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium text-gray-700 uppercase tracking-wide">Láithreán</div>
              <div className="text-lg font-semibold text-black">Amsterdam, an Ísiltír</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium text-gray-700 uppercase tracking-wide">Uaireanta</div>
              <div className="text-lg font-semibold text-black">Luan - Aoine: 9:00 - 17:00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  