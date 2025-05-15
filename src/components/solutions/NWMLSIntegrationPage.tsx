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
            Seamlessly connect to Northwest Multiple Listing Service data for comprehensive real estate analysis
          </p>
        </div>

        {/* Integration Overview */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Real-Time MLS Data</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <p className="text-gray-600 mb-6">
                Access the complete Northwest Multiple Listing Service database through our secure API integration. 
                Our platform connects directly to NWMLS, ensuring you have the most up-to-date property information, 
                listing statuses, and market data available to licensed real estate professionals.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-3">Current Listings</h3>
                  <p className="text-blue-700">
                    Access all active, pending, and sold listings with complete property details and media.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-3">Property History</h3>
                  <p className="text-blue-700">
                    View comprehensive listing history, price changes, and historical transaction data.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-3">Agent Communication</h3>
                  <p className="text-blue-700">
                    Send and receive showing requests, offers, and communications through our secure platform.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-3">Listing Alerts</h3>
                  <p className="text-blue-700">
                    Receive instant notifications when new properties matching your criteria hit the market.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1581092921461-6484e3a4371b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Real estate data dashboard"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
            </div>
          </div>
        </div>

        {/* Integration Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#3b82f6" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Instant Data Access</h3>
            <p className="text-gray-600">
              Connect to NWMLS data with millisecond response times, ensuring you have the latest information for time-sensitive decisions.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#3b82f6" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Compliant & Secure</h3>
            <p className="text-gray-600">
              Our integration follows all NWMLS data security protocols and compliance requirements for licensed professionals.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#3b82f6" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Advanced Filtering</h3>
            <p className="text-gray-600">
              Search and filter NWMLS data using dozens of parameters including investment-specific metrics like cap rate and cash flow.
            </p>
          </div>
        </div>

        {/* Integration Process */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Connecting Your NWMLS Account</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Create Pellego Account</h3>
              <p className="text-gray-600">
                Sign up for a Pellego account with your professional information and license details.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Verify Credentials</h3>
              <p className="text-gray-600">
                We'll verify your NWMLS membership and real estate license information.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Connect Accounts</h3>
              <p className="text-gray-600">
                Link your NWMLS account to Pellego through our secure authorization process.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">4</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Access Data</h3>
              <p className="text-gray-600">
                Immediately start using Pellego's tools with your full NWMLS data access.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-lg shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Ready to connect your NWMLS account?</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Licensed real estate professionals can integrate with NWMLS data in minutes
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-md font-medium text-lg hover:bg-blue-50 transition-colors">
              Connect NWMLS Account
            </button>
            <button className="bg-transparent border border-white text-white px-8 py-3 rounded-md font-medium text-lg hover:bg-blue-800 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NWMLSIntegrationPage; 