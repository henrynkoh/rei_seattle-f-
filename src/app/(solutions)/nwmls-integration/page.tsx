"use client";

import React from 'react';
import Image from 'next/image';

const NWMLSIntegrationPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">NWMLS Integration</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time data from Northwest Multiple Listing Service for accurate, up-to-date property information
          </p>
        </div>

        {/* NWMLS Overview */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Live NWMLS Data Access</h2>
              <p className="text-gray-600 mb-6">
                Pellego provides direct integration with Northwest Multiple Listing Service (NWMLS), 
                the primary MLS system for Western Washington. This integration gives you access 
                to real-time listing data across King, Pierce, and Snohomish counties.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-md">
                  <h3 className="font-medium text-blue-800 mb-2">Data Coverage</h3>
                  <ul className="list-disc pl-5 text-blue-700 space-y-1">
                    <li>All NWMLS listings</li>
                    <li>Historical sales data</li>
                    <li>Price changes and days on market</li>
                    <li>Property details and status changes</li>
                    <li>Agent and brokerage information</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-md">
                  <h3 className="font-medium text-blue-800 mb-2">Update Frequency</h3>
                  <ul className="list-disc pl-5 text-blue-700 space-y-1">
                    <li>New listings: 15-minute intervals</li>
                    <li>Status changes: 15-minute intervals</li>
                    <li>Price updates: 15-minute intervals</li>
                    <li>Sold data: Daily updates</li>
                    <li>Historical data: Weekly refreshes</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-center text-gray-500 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>Pellego is an authorized NWMLS data consumer with full compliance certification</span>
              </div>
            </div>
            
            <div className="lg:col-span-2 relative h-80 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-90 z-10"></div>
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-2xl font-bold mb-4">NWMLS Coverage</h3>
                <p className="text-center mb-4">
                  Complete data for all properties in King, Pierce, and Snohomish counties
                </p>
                <div className="flex gap-2 items-center">
                  <div className="bg-white bg-opacity-20 px-3 py-1 rounded text-sm">King County</div>
                  <div className="bg-white bg-opacity-20 px-3 py-1 rounded text-sm">Pierce County</div>
                  <div className="bg-white bg-opacity-20 px-3 py-1 rounded text-sm">Snohomish County</div>
                </div>
              </div>
              <Image 
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Seattle area map"
                layout="fill"
                objectFit="cover"
                className="z-0"
              />
            </div>
          </div>
        </div>

        {/* Integration Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Real-Time Data</h3>
            <p className="text-gray-600">
              Get the most up-to-date property information with our 15-minute refresh cycle, ensuring 
              you're always working with current listing data.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Comprehensive Coverage</h3>
            <p className="text-gray-600">
              Access all NWMLS-listed properties across the Greater Seattle area, including residential, 
              multi-family, and investment properties.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Advanced Analytics</h3>
            <p className="text-gray-600">
              Combine NWMLS data with our proprietary analytics to get deeper insights into market 
              trends and investment opportunities.
            </p>
          </div>
        </div>

        {/* Integration Features */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">NWMLS Integration Features</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Property Search API</h3>
                <p className="text-gray-600 mb-4">
                  Our advanced search API lets you filter NWMLS properties based on dozens of parameters, 
                  including investment-specific criteria like cap rate, cash flow potential, and ROI.
                </p>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <h4 className="font-medium text-gray-700 mb-2">Available Search Parameters:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm text-gray-600">• Price range</div>
                    <div className="text-sm text-gray-600">• Property type</div>
                    <div className="text-sm text-gray-600">• Bedrooms/bathrooms</div>
                    <div className="text-sm text-gray-600">• Square footage</div>
                    <div className="text-sm text-gray-600">• Year built</div>
                    <div className="text-sm text-gray-600">• Location/zip code</div>
                    <div className="text-sm text-gray-600">• Cap rate range</div>
                    <div className="text-sm text-gray-600">• Cash flow potential</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Custom Alerts</h3>
                <p className="text-gray-600 mb-4">
                  Set up custom alerts based on your investment criteria to be notified as soon as 
                  matching properties hit the market or have price changes.
                </p>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <h4 className="font-medium text-gray-700 mb-2">Alert Delivery Options:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm text-gray-600">• Email notifications</div>
                    <div className="text-sm text-gray-600">• SMS text alerts</div>
                    <div className="text-sm text-gray-600">• In-app notifications</div>
                    <div className="text-sm text-gray-600">• Weekly digest</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Historical Data Access</h3>
                <p className="text-gray-600 mb-4">
                  Access historical sales data and price trends going back 10+ years to identify patterns 
                  and make more informed investment decisions.
                </p>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <h4 className="font-medium text-gray-700 mb-2">Historical Data Points:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm text-gray-600">• Sales prices by year</div>
                    <div className="text-sm text-gray-600">• Days on market trends</div>
                    <div className="text-sm text-gray-600">• Price per square foot</div>
                    <div className="text-sm text-gray-600">• Listing-to-sale ratios</div>
                    <div className="text-sm text-gray-600">• Neighborhood comps</div>
                    <div className="text-sm text-gray-600">• Seasonal variations</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Advanced Reports</h3>
                <p className="text-gray-600 mb-4">
                  Generate detailed property and market reports using NWMLS data combined with 
                  our proprietary analytics and investment metrics.
                </p>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <h4 className="font-medium text-gray-700 mb-2">Report Types:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm text-gray-600">• CMA reports</div>
                    <div className="text-sm text-gray-600">• Investment analysis</div>
                    <div className="text-sm text-gray-600">• Market trend reports</div>
                    <div className="text-sm text-gray-600">• Neighborhood analysis</div>
                    <div className="text-sm text-gray-600">• ROI projections</div>
                    <div className="text-sm text-gray-600">• Cash flow statements</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* NWMLS Data Example */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-8 rounded-lg shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Experience NWMLS Data Integration</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Try our NWMLS-powered property search and see the difference real-time, comprehensive data makes
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-md font-medium text-lg hover:bg-blue-50 transition-colors">
              Try NWMLS Search
            </button>
            <button className="bg-transparent border border-white text-white px-8 py-3 rounded-md font-medium text-lg hover:bg-blue-800 transition-colors">
              View Sample Property
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NWMLSIntegrationPage; 