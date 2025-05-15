"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const InvestmentAlertsPage = () => {
  const [alertName, setAlertName] = useState('');
  const [minROI, setMinROI] = useState('7');
  const [minCapRate, setMinCapRate] = useState('5');
  const [minCashFlow, setMinCashFlow] = useState('200');
  const [maxPrice, setMaxPrice] = useState('750000');
  const [selectedFrequency, setSelectedFrequency] = useState('daily');
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [alertCreated, setAlertCreated] = useState(false);
  
  const handleAreaToggle = (area: string) => {
    if (selectedAreas.includes(area)) {
      setSelectedAreas(selectedAreas.filter(a => a !== area));
    } else {
      setSelectedAreas([...selectedAreas, area]);
    }
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAlertCreated(true);
    // In a real app, this would send the data to the server
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Investment Opportunity Alerts</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Never miss a good deal again. Get notified when properties matching your investment criteria hit the market.
          </p>
        </div>

        {/* Alert Creation Form */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="flex items-center mb-8">
            <div className="bg-blue-100 p-2 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Create Investment Alert</h2>
          </div>
          
          {alertCreated ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Alert Created Successfully!</h3>
              <p className="text-gray-600 mb-4">
                You will now receive alerts when properties matching your investment criteria become available.
              </p>
              <div className="flex justify-center gap-4">
                <button 
                  onClick={() => setAlertCreated(false)}
                  className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Create Another Alert
                </button>
                <Link 
                  href="/features/property-search"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Search Properties Now
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Alert Name</label>
                  <input
                    type="text"
                    value={alertName}
                    onChange={(e) => setAlertName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g. Seattle Multi-Family Deals"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Cap Rate (%)</label>
                  <input
                    type="number"
                    value={minCapRate}
                    onChange={(e) => setMinCapRate(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    step="0.1"
                    min="0"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Minimum ROI (%)</label>
                  <input
                    type="number"
                    value={minROI}
                    onChange={(e) => setMinROI(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    step="0.1"
                    min="0"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Monthly Cash Flow ($)</label>
                  <input
                    type="number"
                    value={minCashFlow}
                    onChange={(e) => setMinCashFlow(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    step="10"
                    min="0"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Maximum Purchase Price ($)</label>
                  <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    step="10000"
                    min="0"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Alert Frequency</label>
                  <select 
                    value={selectedFrequency}
                    onChange={(e) => setSelectedFrequency(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="instant">Instant (As Soon as Listed)</option>
                    <option value="daily">Daily Digest</option>
                    <option value="weekly">Weekly Summary</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-4">Target Neighborhoods</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {['Ballard', 'Queen Anne', 'Capitol Hill', 'Fremont', 'Green Lake', 'Wallingford', 
                    'West Seattle', 'Columbia City', 'Beacon Hill', 'Central District', 'University District',
                    'Ravenna', 'North Seattle', 'South Seattle', 'Eastside', 'Bellevue'].map((area) => (
                    <div key={area} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`area-${area}`}
                        checked={selectedAreas.includes(area)}
                        onChange={() => handleAreaToggle(area)}
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor={`area-${area}`} className="ml-2 text-sm text-gray-700">
                        {area}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors"
                >
                  Create Alert
                </button>
              </div>
            </form>
          )}
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">How Investment Alerts Work</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">1. Define Your Criteria</h3>
              <p className="text-gray-600">
                Set your investment parameters such as cap rate, cash flow, ROI, and target neighborhoods.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">2. Get Alerts</h3>
              <p className="text-gray-600">
                Receive notifications whenever properties matching your criteria become available on the market.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">3. Act Quickly</h3>
              <p className="text-gray-600">
                Gain a competitive advantage by being one of the first to know about new investment opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Sample Alerts */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Example Investment Opportunities</h2>
          <p className="text-gray-600 mb-8">
            Here are some recent properties that matched our users' investment criteria. Create your alert to discover similar opportunities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075" 
                  alt="Single Family Investment Property in Ravenna"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                  10.2% Cap Rate
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">5-Unit Apartment Building</h3>
                <p className="text-gray-700 mb-4">Ravenna, Seattle</p>
                
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-500">Price</p>
                    <p className="font-semibold">$1,250,000</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Monthly NOI</p>
                    <p className="font-semibold">$10,625</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Cash Flow</p>
                    <p className="font-semibold text-green-600">$4,200/mo</p>
                  </div>
                </div>
                
                <p className="text-xs text-gray-500">Alerted to 23 investors • 2 made offers</p>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2070" 
                  alt="Duplex in Wallingford"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                  8.7% Cap Rate
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Duplex with ADU Potential</h3>
                <p className="text-gray-700 mb-4">Wallingford, Seattle</p>
                
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-500">Price</p>
                    <p className="font-semibold">$925,000</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Monthly NOI</p>
                    <p className="font-semibold">$6,700</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Cash Flow</p>
                    <p className="font-semibold text-green-600">$2,100/mo</p>
                  </div>
                </div>
                
                <p className="text-xs text-gray-500">Alerted to 18 investors • SOLD in 5 days</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pro Features */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-lg shadow-lg p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Upgrade to Pro Alerts</h2>
              <p className="mb-6 text-indigo-100">
                Get advanced notification features and be the first to know about off-market properties and pocket listings.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Pre-market and off-market property alerts</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>SMS text notifications for high-priority matches</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Advanced filters including renovation potential</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Unlimited alert configurations (Basic: 3 max)</span>
                </li>
              </ul>
              <button className="bg-white text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-md font-medium transition-colors">
                Upgrade to Pro – $29/month
              </button>
            </div>
            <div className="hidden md:block relative h-64">
              <Image 
                src="https://images.unsplash.com/photo-1586892477838-2b96e85e0f96?q=80&w=2069"
                alt="Real-time investment alerts on mobile device"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/60 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InvestmentAlertsPage; 