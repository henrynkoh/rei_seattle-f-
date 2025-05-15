"use client";

import React from 'react';
import Image from 'next/image';

const PropertyResearchPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Property Research</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced research tools to find and evaluate the best investment properties in the Greater Seattle area
          </p>
        </div>

        {/* Search & Filter Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Property Search Platform</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <p className="text-gray-600 mb-6">
                Our comprehensive search platform allows you to find investment properties using dozens of specialized 
                filters designed specifically for investors. Search by cap rate, cash flow potential, 
                renovation opportunity, and more.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-md">
                  <h3 className="font-medium text-blue-800 mb-2">Investment Filters</h3>
                  <ul className="list-disc pl-5 text-blue-700 space-y-1">
                    <li>Cash flow positive properties</li>
                    <li>BRRRR strategy opportunities</li>
                    <li>Fix and flip candidates</li>
                    <li>Multi-family properties</li>
                    <li>Properties with assumable loans</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-md">
                  <h3 className="font-medium text-blue-800 mb-2">Market Insights</h3>
                  <ul className="list-disc pl-5 text-blue-700 space-y-1">
                    <li>Neighborhood appreciation forecasts</li>
                    <li>School district ratings</li>
                    <li>Crime statistics by area</li>
                    <li>Rental demand indicators</li>
                    <li>Zoning and development plans</li>
                  </ul>
                </div>
              </div>
              
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
                Try Advanced Search
              </button>
            </div>
            
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                alt="Property search dashboard"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
            </div>
          </div>
        </div>

        {/* Property Reports Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Comprehensive Property Reports</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="relative h-72 rounded-lg overflow-hidden lg:order-last">
              <Image 
                src="https://images.unsplash.com/photo-1554469384-e58fac937c33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                alt="Property report"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
            </div>
            
            <div className="lg:col-span-2">
              <p className="text-gray-600 mb-6">
                Generate detailed property reports for any listing in our database. Our reports include 
                title history, permit records, tax assessments, and historic sales data to give you 
                the complete picture before making an investment decision.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div className="border border-gray-200 rounded p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Title & Ownership</h3>
                  <p className="text-gray-600 text-sm">Complete ownership history with title transfer details</p>
                </div>
                
                <div className="border border-gray-200 rounded p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Tax History</h3>
                  <p className="text-gray-600 text-sm">Property tax assessments and payment history</p>
                </div>
                
                <div className="border border-gray-200 rounded p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Permits & Repairs</h3>
                  <p className="text-gray-600 text-sm">Historical permits and major renovations</p>
                </div>
                
                <div className="border border-gray-200 rounded p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Sales History</h3>
                  <p className="text-gray-600 text-sm">Previous sale prices and days on market</p>
                </div>
                
                <div className="border border-gray-200 rounded p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Rental Estimates</h3>
                  <p className="text-gray-600 text-sm">Current market rent projections for the property</p>
                </div>
                
                <div className="border border-gray-200 rounded p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Inspection Records</h3>
                  <p className="text-gray-600 text-sm">Any available inspection findings and issues</p>
                </div>
              </div>
              
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
                Generate Sample Report
              </button>
            </div>
          </div>
        </div>
        
        {/* Off-Market Properties */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-8 rounded-lg shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Off-Market Properties Database</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Get access to our exclusive off-market properties database with potential investment opportunities 
              not available on the MLS
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-md font-medium text-lg hover:bg-blue-50 transition-colors">
              View Off-Market Properties
            </button>
            <button className="bg-transparent border border-white text-white px-8 py-3 rounded-md font-medium text-lg hover:bg-blue-800 transition-colors">
              Join Investor Network
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PropertyResearchPage; 