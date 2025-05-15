"use client";

import React from 'react';
import Image from 'next/image';

const MarketIntelligencePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Market Intelligence</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced analytics and insights to help you make data-driven investment decisions in the Seattle real estate market
          </p>
        </div>

        {/* Market Trends Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Real-Time Market Trends</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <p className="text-gray-600 mb-6">
                Stay ahead of the market with our real-time analytics dashboard. Monitor price trends, 
                inventory levels, days on market, and more across all Seattle neighborhoods. Our proprietary 
                AI algorithms detect pattern changes before they become obvious in the marketplace.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-3">Price Trend Analysis</h3>
                  <p className="text-blue-700">
                    Track price movements by property type, neighborhood, and market segment with daily updates.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-3">Supply & Demand Metrics</h3>
                  <p className="text-blue-700">
                    Monitor inventory levels, absorption rates, and buyer demand indicators in real-time.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-3">Early Warning Signals</h3>
                  <p className="text-blue-700">
                    Receive alerts when our algorithms detect early signs of market shifts in specific areas.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-3">Seasonal Adjustment</h3>
                  <p className="text-blue-700">
                    View seasonally-adjusted data to identify true market movements beyond cyclical patterns.
                  </p>
                </div>
              </div>
              
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
                View Market Dashboard
              </button>
            </div>
            
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Market analytics dashboard"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
            </div>
          </div>
        </div>

        {/* Neighborhood Analysis Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Neighborhood Analysis</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <p className="text-gray-600 mb-6">
                Dive deep into Seattle's diverse neighborhoods with comprehensive demographic, economic, and 
                real estate data. Our neighborhood reports provide detailed insights into current conditions and 
                future growth projections for every area in the Greater Seattle region.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800 mb-2">Demographics & Income</h3>
                  <p className="text-gray-600 text-sm">Population trends, income levels, employment statistics, and education metrics</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800 mb-2">Development Pipeline</h3>
                  <p className="text-gray-600 text-sm">Upcoming residential and commercial projects, zoning changes, and infrastructure plans</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800 mb-2">School Performance</h3>
                  <p className="text-gray-600 text-sm">Test scores, ratings, and enrollment trends for public and private schools</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800 mb-2">Crime & Safety</h3>
                  <p className="text-gray-600 text-sm">Crime statistics, trends, and safety indicators with historical comparisons</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Top Emerging Neighborhoods</h3>
              <p className="text-blue-100 mb-6">
                Based on our proprietary scoring algorithm, these neighborhoods show the highest investment potential for 2023
              </p>
              
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span className="font-medium">Columbia City</span>
                  <span className="bg-blue-500 px-3 py-1 rounded text-sm">9.4/10</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">West Seattle Junction</span>
                  <span className="bg-blue-500 px-3 py-1 rounded text-sm">9.2/10</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">Greenwood</span>
                  <span className="bg-blue-500 px-3 py-1 rounded text-sm">8.9/10</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">Central District</span>
                  <span className="bg-blue-500 px-3 py-1 rounded text-sm">8.7/10</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">Beacon Hill</span>
                  <span className="bg-blue-500 px-3 py-1 rounded text-sm">8.5/10</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Economic Forecast Section */}
        <div className="bg-gradient-to-r from-indigo-700 to-blue-700 text-white p-8 rounded-lg shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Seattle Real Estate Forecast Report</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our quarterly forecast report combines macroeconomic analysis, local market indicators, and predictive 
              analytics to project Seattle's real estate market performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Short-Term Outlook</h3>
              <p className="text-blue-100">
                3-6 month projections for price movements, inventory changes, and market conditions by neighborhood
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Interest Rate Impact</h3>
              <p className="text-blue-100">
                Analysis of how projected interest rate changes will affect the Seattle housing market
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Tech Sector Influence</h3>
              <p className="text-blue-100">
                How hiring trends, remote work policies, and tech industry growth impact property values
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-md font-medium text-lg hover:bg-blue-50 transition-colors">
              Download Sample Report
            </button>
            <button className="bg-transparent border border-white text-white px-8 py-3 rounded-md font-medium text-lg hover:bg-blue-800 transition-colors">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MarketIntelligencePage; 