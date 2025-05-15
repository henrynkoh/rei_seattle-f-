"use client";

import React from 'react';
import Image from 'next/image';

const InvestmentAnalysisPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Investment Analysis Tools</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tools and data to help you make informed real estate investment decisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Cash Flow Analysis</h2>
            <p className="text-gray-600 mb-6">
              Our powerful cash flow calculator helps you predict monthly and annual returns based on real market data 
              and historical trends in the Seattle area.
            </p>
            <div className="bg-blue-50 p-4 rounded-md">
              <h3 className="font-medium text-blue-800 mb-2">Key Features:</h3>
              <ul className="list-disc pl-5 text-blue-700 space-y-1">
                <li>Income and expense forecasting</li>
                <li>Tax optimization scenarios</li>
                <li>Loan amortization integration</li>
                <li>Maintenance cost projections</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">ROI Calculator</h2>
            <p className="text-gray-600 mb-6">
              Calculate potential return on investment across multiple scenarios and timeframes, with 
              neighborhood-specific appreciation models.
            </p>
            <div className="bg-blue-50 p-4 rounded-md">
              <h3 className="font-medium text-blue-800 mb-2">ROI Metrics:</h3>
              <ul className="list-disc pl-5 text-blue-700 space-y-1">
                <li>Cash-on-cash return</li>
                <li>Cap rate analysis</li>
                <li>Internal rate of return (IRR)</li>
                <li>Gross rent multiplier</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Comparative Market Analysis</h2>
          <p className="text-gray-600 mb-6">
            Our AI-powered CMA tool compares properties against similar listings to ensure you're making the right investment choices.
          </p>
          
          <div className="relative h-80 mb-8 overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-90 z-10"></div>
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white p-6">
              <h3 className="text-3xl font-bold mb-4">Seattle Property Comparison Tool</h3>
              <p className="text-lg text-center max-w-xl">
                Compare up to 5 properties side-by-side with metrics adjusted for location, condition, and market factors
              </p>
            </div>
            <Image 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
              alt="Seattle properties"
              layout="fill"
              objectFit="cover"
              className="z-0"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-lg text-gray-800 mb-3">Property Valuation</h3>
              <p className="text-gray-600">
                Get accurate property valuations based on recent sales, property condition, and neighborhood trends.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-lg text-gray-800 mb-3">Rental Income Potential</h3>
              <p className="text-gray-600">
                Estimate potential rental income with data from current market rates and seasonal adjustments.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-lg text-gray-800 mb-3">Appreciation Forecasts</h3>
              <p className="text-gray-600">
                View 5-year and 10-year appreciation forecasts based on historical performance and market indicators.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Ready to analyze your next investment?</h2>
            <p className="text-xl opacity-90">
              Our premium tools are available to all registered Pellego users
            </p>
          </div>
          <div className="flex justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium text-lg hover:bg-blue-50 transition-colors">
              Get Started for Free
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InvestmentAnalysisPage; 