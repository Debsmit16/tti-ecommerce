// *********************
// Role of the component: Display TTI Academy statistics
// Name of the component: StatsSection.tsx
// Version: 1.0
// Component call: <StatsSection />
// Input parameters: no input parameters
// Output: Three statistics cards showing YouTube Views, Subscribers, and Total Learners
// *********************

import React from "react";

const StatsSection = () => {
  const stats = [
    {
      label: "YouTube Views",
      value: "5.1M",
    },
    {
      label: "Subscribers",
      value: "26.6K",
    },
    {
      label: "Total Learners",
      value: "2.9K",
    },
  ];

  return (
    <div className="w-full py-16 px-4 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 text-center hover:shadow-md transition-shadow"
            >
              <p 
                className="text-4xl font-bold text-[#0E0E0E] mb-2"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                {stat.value}
              </p>
              <p 
                className="text-sm text-[#565656] font-medium"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
