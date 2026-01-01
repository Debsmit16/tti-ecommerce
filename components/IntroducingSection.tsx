// *********************
// Role of the component: Introducing section for merchandise
// Name of the component: IntroducingSection.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 2.0 - Updated to match TTI design
// Component call: <IntroducingSection />
// Input parameters: no input parameters
// Output: Section highlighting courses and merchandise
// *********************

import Link from "next/link";
import React from "react";

const IntroducingSection = () => {
  return (
    <div className="w-full py-16 px-4 bg-white">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 
          className="text-2xl font-medium text-[#565656] mb-4"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          Shop the best quality.
        </h2>
        <p 
          className="text-base text-[#565656] mb-8 max-w-4xl mx-auto"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          Discover our premium merchandise collection. From stylish apparel and accessories to study essentials, our products are crafted with quality and comfort in mind.
        </p>
        <Link 
          href="/shop" 
          className="inline-block px-10 py-3 bg-white border border-gray-400 text-[#8A8C8F] rounded-md hover:border-gray-600 hover:text-gray-800 transition-all"
          style={{ fontFamily: 'Outfit, sans-serif', fontSize: '15px' }}
        >
          Show all products
        </Link>
      </div>
    </div>
  );
};

export default IntroducingSection;
