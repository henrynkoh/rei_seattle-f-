"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioTrackerPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Investment Portfolio Tracker</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Track, analyze, and optimize your real estate investments in the Greater Seattle area
          </p>
        </div>

        {/* Portfolio Summary */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Portfolio Overview</h2>
              <p className="text-gray-600">Last updated: June 15, 2023</p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Add Property
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Portfolio Value</h3>
              <div className="text-3xl font-bold text-blue-700 mb-2">$4,235,000</div>
              <div className="flex items-center text-sm">
                <span className="text-green-600 font-medium mr-1">+12.3%</span>
                <span className="text-gray-500">since last year</span>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Monthly Cash Flow</h3>
              <div className="text-3xl font-bold text-green-700 mb-2">$12,450</div>
              <div className="flex items-center text-sm">
                <span className="text-green-600 font-medium mr-1">+5.7%</span>
                <span className="text-gray-500">since last quarter</span>
              </div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Average Cap Rate</h3>
              <div className="text-3xl font-bold text-purple-700 mb-2">6.8%</div>
              <div className="flex items-center text-sm">
                <span className="text-green-600 font-medium mr-1">+0.4%</span>
                <span className="text-gray-500">since last quarter</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8">
            <div className="flex space-x-6 mb-8 overflow-x-auto">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${activeTab === 'overview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Overview
              </button>
              <button 
                onClick={() => setActiveTab('properties')}
                className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${activeTab === 'properties' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Properties (7)
              </button>
              <button 
                onClick={() => setActiveTab('cashflow')}
                className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${activeTab === 'cashflow' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Cash Flow Analysis
              </button>
              <button 
                onClick={() => setActiveTab('metrics')}
                className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${activeTab === 'metrics' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Investment Metrics
              </button>
            </div>
            
            {activeTab === 'overview' && (
              <div>
                <div className="relative h-[300px] bg-gray-100 rounded-lg mb-8">
                  <Image 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070"
                    alt="Portfolio performance chart"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Portfolio Distribution</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-gray-700">Single Family (3)</span>
                          <span className="text-sm font-medium text-gray-900">45%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '45%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-gray-700">Multi-Family (2)</span>
                          <span className="text-sm font-medium text-gray-900">30%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{width: '30%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-gray-700">Condominium (1)</span>
                          <span className="text-sm font-medium text-gray-900">15%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-purple-600 h-2.5 rounded-full" style={{width: '15%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-gray-700">Commercial (1)</span>
                          <span className="text-sm font-medium text-gray-900">10%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-yellow-500 h-2.5 rounded-full" style={{width: '10%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Top Performing Properties</h4>
                    <div className="space-y-4">
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <div className="relative w-12 h-12 rounded-md overflow-hidden mr-4">
                          <Image 
                            src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070"
                            alt="Property thumbnail"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <h5 className="text-sm font-semibold">Fremont Triplex</h5>
                          <p className="text-xs text-gray-500">3924 Fremont Ave N</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold text-green-600">12.4% ROI</div>
                          <p className="text-xs text-gray-500">8.5% Cap Rate</p>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <div className="relative w-12 h-12 rounded-md overflow-hidden mr-4">
                          <Image 
                            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075"
                            alt="Property thumbnail"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <h5 className="text-sm font-semibold">Ballard Single Family</h5>
                          <p className="text-xs text-gray-500">2418 NW Market St</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold text-green-600">10.8% ROI</div>
                          <p className="text-xs text-gray-500">7.2% Cap Rate</p>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <div className="relative w-12 h-12 rounded-md overflow-hidden mr-4">
                          <Image 
                            src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2070"
                            alt="Property thumbnail"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <h5 className="text-sm font-semibold">Queen Anne Duplex</h5>
                          <p className="text-xs text-gray-500">412 Queen Anne Ave N</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold text-green-600">9.7% ROI</div>
                          <p className="text-xs text-gray-500">6.8% Cap Rate</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab !== 'overview' && (
              <div className="bg-gray-50 rounded-lg p-12 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Feature Coming Soon</h3>
                <p className="text-gray-600 mb-4 max-w-md mx-auto">
                  We're currently developing this feature to provide even more detailed insights into your portfolio.
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors inline-flex items-center">
                  Request Early Access
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* Pro Features Callout */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-lg p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Upgrade to Pro Portfolio Tools</h2>
              <p className="mb-6 text-gray-300">
                Get access to advanced portfolio analytics, tax optimization strategies, and custom reporting tools.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Advanced performance tracking</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Tax planning and optimization</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Automatic depreciation tracking</span>
                </li>
              </ul>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
                Upgrade to Pro
              </button>
            </div>
            <div className="hidden md:block relative h-64">
              <Image 
                src="https://images.unsplash.com/photo-1460467820054-c87ab43e9b59?q=80&w=2067"
                alt="Portfolio analytics dashboard"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PortfolioTrackerPage; 