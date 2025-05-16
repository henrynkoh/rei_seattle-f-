"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[650px] flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10"></div>
        <div className="relative h-full w-full">
          <Image 
            src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Seattle skyline with real estate"
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="brightness-90"
          />
        </div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Professional Property Research <span className="text-blue-400">Powered by NWMLS</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto">
            Access real-time Greater Seattle MLS data to discover investment properties, analyze comps, and identify market opportunities.
          </p>
          
          <div className="inline-block bg-blue-600/90 backdrop-blur-sm px-8 py-4 rounded-lg mb-12 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-700/20">
            <h2 className="text-2xl font-bold text-white">LIVE NWMLS DATA</h2>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl mb-12 border border-white/20 shadow-xl max-w-4xl mx-auto animate-fade-in">
          <h3 className="text-2xl font-bold text-white mb-4">Seattle Investment Search</h3>
          <p className="text-lg text-white/90 mb-6">
            Find flips, rentals, and properties with assumable loans across King, Pierce, and Snohomish counties.
          </p>
          
          {/* Address Search Bar */}
          <div className="flex flex-col md:flex-row gap-3 mb-6">
            <input 
              type="text" 
              placeholder="Enter address or neighborhood" 
              className="flex-grow p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg shadow-inner"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-md transition-colors text-lg shadow-lg shadow-blue-700/30 hover:shadow-blue-700/50">
              Search
            </button>
          </div>
          
          <p className="text-sm text-white/80">
            Searching King, Pierce, and Snohomish counties with real-time NWMLS data
            <br />Data refreshed via n8n workflows every 15 minutes
          </p>
        </div>
        
        {/* Market Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white mb-12">
          <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10 transform hover:translate-y-[-5px] transition-all duration-300 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-300">Current Market Metrics</h3>
            <ul className="space-y-3 text-left">
              <li className="flex justify-between items-center"><span>Median Cap Rate:</span> <span className="font-bold">5.2%</span></li>
              <li className="flex justify-between items-center"><span>Avg. Cash Flow:</span> <span className="font-bold">$412/mo</span></li>
              <li className="flex justify-between items-center"><span>Median ROI:</span> <span className="font-bold">10.8%</span></li>
            </ul>
          </div>
          
          <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10 transform hover:translate-y-[-5px] transition-all duration-300 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-300">Property Values</h3>
            <ul className="space-y-3 text-left">
              <li className="flex justify-between items-center"><span>Median ARV:</span> <span className="font-bold">$876,500</span></li>
              <li className="flex justify-between items-center"><span>Avg. Rent:</span> <span className="font-bold">$3,250/mo</span></li>
              <li className="flex justify-between items-center"><span>Avg. PITI:</span> <span className="font-bold">$4,120/mo</span></li>
            </ul>
          </div>
          
          <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10 transform hover:translate-y-[-5px] transition-all duration-300 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-300">Hot Neighborhoods</h3>
            <ul className="space-y-3 text-left">
              <li className="flex justify-between items-center"><span>Rainier Valley</span> <span className="font-bold text-green-400">↑ 8.2%</span></li>
              <li className="flex justify-between items-center"><span>West Seattle</span> <span className="font-bold text-green-400">↑ 7.4%</span></li>
              <li className="flex justify-between items-center"><span>Shoreline</span> <span className="font-bold text-green-400">↑ 6.8%</span></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <Link href="/features/property-search" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all duration-300 cursor-pointer shadow-lg flex items-center">
            <span className="text-xl font-bold mr-2">Search Investment Properties</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <p className="text-sm opacity-80 ml-2">Data provided by NWMLS</p>
          </Link>
          
          <Link href="/solutions/investment-analysis" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg border border-white/20 transition-all duration-300 cursor-pointer shadow-lg flex items-center">
            <span className="text-xl font-bold mr-2">Investor-Focused Brokerage</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <p className="text-sm opacity-80 ml-2">Specialized services for investors</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 