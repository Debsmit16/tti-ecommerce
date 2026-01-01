// *********************
// Role of the component: Hero section on home page
// Name of the component: Hero.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 2.0 - Updated to match TTI main website design
// Component call: <Hero />
// Input parameters: no input parameters
// Output: Hero section with headline, description, search bar
// *********************

import React from "react";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <div 
      className="w-full py-24 px-4 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(180deg, #E6FFFF 0%, white 100%)'
      }}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center">
        {/* Main Headline */}
        <h1 className="text-5xl font-bold mb-6 max-w-4xl leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
          <span className="text-[#0E0E0E]">Show your passion with</span>
          <br />
          <span className="text-[#0E0E0E]">official merchandise that</span>{' '}
          <span className="text-[#8828FE]">fits your style.</span>
        </h1>
        
        {/* Description */}
        <p className="text-[#565656] text-base mb-8 max-w-2xl leading-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Premium quality merchandise from Tending To Infinity Academy. From comfortable apparel
          <br />
          to essential study gear, represent your dedication to excellence.
        </p>
        
        {/* Search Bar */}
        <div className="w-full max-w-2xl flex items-center gap-4 max-md:flex-col">
          <div className="flex-1 w-full relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaSearch size={16} />
            </div>
            <input
              type="text"
              placeholder="Search for merchandise"
              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-md text-[#8A8C8F] focus:outline-none focus:ring-2 focus:ring-purple-500"
              style={{ 
                fontFamily: 'Outfit, sans-serif',
                fontSize: '15px'
              }}
            />
          </div>
          <button 
            className="px-12 py-4 text-white font-normal rounded-md hover:opacity-90 transition-opacity max-md:w-full"
            style={{ 
              backgroundColor: '#8828FE',
              fontFamily: 'Outfit, sans-serif',
              fontSize: '15px'
            }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
