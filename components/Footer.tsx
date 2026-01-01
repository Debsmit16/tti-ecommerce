// *********************
// Role of the component: Footer component
// Name of the component: Footer.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 2.0 - Updated to match TTI main website design
// Component call: <Footer />
// Input parameters: no input parameters
// Output: Footer component with newsletter subscription
// *********************

import { navigation } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#111820]" aria-labelledby="footer-heading">
      <div>
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Company Links */}
            <div>
              <h3 
                className="text-base font-semibold text-white mb-6" 
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="/" className="text-sm text-gray-300 hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-sm text-gray-300 hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                    About us
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-sm text-gray-300 hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-sm text-gray-300 hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Subscription */}
            <div>
              <h3 
                className="text-base font-semibold text-white mb-4" 
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Subscribe to our newsletter
              </h3>
              <p 
                className="text-sm text-gray-300 mb-6 leading-relaxed" 
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                The latest news, articles, and resources, sent to your inbox weekly.
              </p>
              <div className="flex gap-2 max-sm:flex-col">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-[#1F2937] border border-gray-600 rounded text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
                <button 
                  className="px-6 py-2 bg-[#2563EB] text-white text-sm font-medium rounded hover:bg-blue-600 transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <p 
              className="text-sm text-center text-gray-400" 
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Copyright 2025 © AcademyIQ. All Right Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
