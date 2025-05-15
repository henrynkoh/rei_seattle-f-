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
            Data-driven insights to help you understand the Greater Seattle real estate market trends
          </p>
        </div>

        {/* Market Analytics Dashboard */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Seattle Market Analytics</h2>
              <p className="text-gray-600">
                Real-time market data for neighborhoods across King, Pierce, and Snohomish counties
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex flex-wrap gap-3">
              <button className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                King County
              </button>
              <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                Pierce County
              </button>
              <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                Snohomish County
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Median Sale Price</h3>
              <p className="text-3xl font-bold text-blue-700 mb-2">$875,240</p>
              <div className="flex items-center text-green-600">
                <span className="text-sm font-medium">+5.3% YoY</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12 7a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L12 12.586V7z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Avg. Days on Market</h3>
              <p className="text-3xl font-bold text-blue-700 mb-2">16 days</p>
              <div className="flex items-center text-red-600">
                <span className="text-sm font-medium">-4 days YoY</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12 13a1 1 0 10-2 0v-5.586l-1.293 1.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L12 7.414V13z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Rent-to-Price Ratio</h3>
              <p className="text-3xl font-bold text-blue-700 mb-2">0.41%</p>
              <div className="flex items-center text-yellow-600">
                <span className="text-sm font-medium">-0.03% YoY</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="relative h-96 mb-6 bg-gray-100 rounded-lg">
            {/* This would be a chart in a real implementation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-500 mb-2">Interactive Market Trends Chart</p>
                <p className="text-sm text-gray-400">Shows price trends, inventory levels, and days on market over time</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Hottest Neighborhoods (King County)</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
                  <span className="font-medium">West Seattle</span>
                  <div className="flex items-center text-green-600">
                    <span>+8.2% YoY</span>
                  </div>
                </div>
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
                  <span className="font-medium">Ballard</span>
                  <div className="flex items-center text-green-600">
                    <span>+7.6% YoY</span>
                  </div>
                </div>
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
                  <span className="font-medium">Columbia City</span>
                  <div className="flex items-center text-green-600">
                    <span>+7.1% YoY</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Market Indicators</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
                  <span className="font-medium">Inventory Levels</span>
                  <div className="flex items-center text-red-600">
                    <span>Low (1.2 months)</span>
                  </div>
                </div>
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
                  <span className="font-medium">Price Reductions</span>
                  <div className="flex items-center text-green-600">
                    <span>12% of listings</span>
                  </div>
                </div>
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
                  <span className="font-medium">Avg. Price/Sq Ft</span>
                  <div className="flex items-center text-green-600">
                    <span>$450 (+3.8% YoY)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Neighborhood Analysis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Neighborhood Analysis</h2>
            <p className="text-gray-600 mb-6">
              Detailed analysis of 120+ neighborhoods across the Greater Seattle area, with metrics 
              on investment potential, rental demand, and appreciation forecasts.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Geographic Insights</h3>
                  <p className="text-gray-600 text-sm">School districts, amenities, transit scores, and walkability metrics</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Investment Grade</h3>
                  <p className="text-gray-600 text-sm">Proprietary scoring system for investment potential in each neighborhood</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Trend Analysis</h3>
                  <p className="text-gray-600 text-sm">5-year price and rental trends with future projections</p>
                </div>
              </div>
            </div>
            
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
              View Neighborhood Reports
            </button>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Market Forecasts</h2>
            <p className="text-gray-600 mb-6">
              Quarterly market forecasts for the Greater Seattle area, created using advanced AI 
              models and economic indicators.
            </p>
            
            <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1553025934-296397db4010?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                alt="Market forecast visualization"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-50 transition-colors">
                  View Latest Forecast
                </button>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
                <span className="font-medium">Q2 2023 Forecast</span>
                <span className="text-sm text-gray-500">Released April 2023</span>
              </div>
              <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
                <span className="font-medium">Q1 2023 Forecast</span>
                <span className="text-sm text-gray-500">Released January 2023</span>
              </div>
              <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
                <span className="font-medium">Q4 2022 Forecast</span>
                <span className="text-sm text-gray-500">Released October 2022</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Market Research Reports */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-8 rounded-lg shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Access Premium Market Research</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Get in-depth quarterly reports on the Greater Seattle real estate market, with detailed analysis 
              and investment recommendations
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-md font-medium text-lg hover:bg-blue-50 transition-colors">
              Sample Report
            </button>
            <button className="bg-transparent border border-white text-white px-8 py-3 rounded-md font-medium text-lg hover:bg-blue-800 transition-colors">
              Subscribe to Research
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MarketIntelligencePage; 