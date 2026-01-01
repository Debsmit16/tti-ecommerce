// *********************
// Role of the component: Display learner testimonials
// Name of the component: TestimonialsSection.tsx
// Version: 1.0
// Component call: <TestimonialsSection />
// Input parameters: no input parameters
// Output: Three testimonial cards with ratings and user info
// *********************

import React from "react";
import { FaStar } from "react-icons/fa";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sandipan Pasari",
      role: "SWE 1 @ Amazon",
      text: "I've been using Tending to Infinity for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
      rating: 5,
    },
    {
      name: "Arpan Mondal",
      role: "SWE 2 @ Samsung",
      text: "I've been using Tending to Infinity for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
      rating: 5,
    },
    {
      name: "Sagnik Chakraborty",
      role: "SWE 2 @ Google",
      text: "I've been using Tending to Infinity for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
      rating: 5,
    },
  ];

  return (
    <div className="w-full py-16 px-4 bg-white">
      <div className="max-w-screen-xl mx-auto">
        {/* Section Title */}
        <h2 
          className="text-3xl font-medium text-center text-[#0E0E0E] mb-4"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          Learners' Testimonials
        </h2>
        <p 
          className="text-base text-center text-[#565656] mb-12 max-w-2xl mx-auto"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          Real stories from real users - see how we've helped them grow.
        </p>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-[#E1E1E1] rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Header with gray background */}
              <div className="bg-[#F3F3F3] p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div>
                  <h3 
                    className="text-lg font-medium text-[#4B445A]"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {testimonial.name}
                  </h3>
                  <p 
                    className="text-xs text-[#62577B] font-medium uppercase"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
              
              {/* Body */}
              <div className="p-6">
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-[#FF532E]" size={14} />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p 
                  className="text-sm text-[#6B7280] leading-relaxed"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
