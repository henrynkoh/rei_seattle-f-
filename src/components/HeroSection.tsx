"use client";
import React from "react";
import PropertySearch from "./PropertySearch";

const HeroSection: React.FC = () => {
  return (
    <>
      <section className="relative w-full bg-[center] bg-cover bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1946&auto=format&fit=crop')] h-[500px]">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="absolute left-0 right-0 mx-auto max-w-6xl top-[100px] px-6">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-5xl font-bold leading-[1.2] text-white max-md:text-4xl max-sm:text-3xl">
              Professional Property Research <span className="text-blue-400">Powered by NWMLS</span>
            </h1>
            <h2 className="mb-8 text-2xl leading-relaxed text-gray-200 max-md:text-xl max-sm:text-lg">
              Access real-time Greater Seattle MLS data to discover investment properties, analyze comps, and identify market opportunities.
            </h2>
            <div className="bg-gray-900/80 backdrop-blur-sm p-5 rounded-lg shadow-xl border border-gray-700">
              <div className="flex items-center mb-2">
                <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                <p className="text-green-400 font-medium text-sm">LIVE NWMLS DATA</p>
              </div>
              <p className="text-gray-300">
                <strong className="text-white">Seattle Investment Search:</strong> Find flips, rentals, and properties with assumable loans across King, Pierce, and Snohomish counties.
              </p>
            </div>
          </div>
        </div>
      </section>
      <PropertySearch />
    </>
  );
};

export default HeroSection; 