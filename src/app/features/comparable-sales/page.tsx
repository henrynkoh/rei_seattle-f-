"use client";

import React, { useState, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ComparableSalesPage = () => {
  const [searchAddress, setSearchAddress] = useState('');
  const [selectedRadius, setSelectedRadius] = useState(1);
  const [selectedTimeframe, setSelectedTimeframe] = useState(6);
  const [searchInitiated, setSearchInitiated] = useState(false);
  
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchInitiated(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Comparable Property Sales</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find accurate comparables to determine property value and investment potential in the Greater Seattle area
          </p>
        </div>

        {/* Search Interface */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Property Address</label>
                <input
                  type="text"
                  value={searchAddress}
                  onChange={(e) => setSearchAddress(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter a property address"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Search Radius</label>
                <select 
                  value={selectedRadius}
                  onChange={(e) => setSelectedRadius(Number(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value={0.25}>0.25 mile</option>
                  <option value={0.5}>0.5 mile</option>
                  <option value={1}>1 mile</option>
                  <option value={2}>2 miles</option>
                  <option value={5}>5 miles</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Time Frame</label>
                <select 
                  value={selectedTimeframe}
                  onChange={(e) => setSelectedTimeframe(Number(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value={3}>Last 3 months</option>
                  <option value={6}>Last 6 months</option>
                  <option value={12}>Last 12 months</option>
                  <option value={24}>Last 24 months</option>
                </select>
              </div>
            </div>
            <div className="flex justify-center">
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors"
              >
                Find Comparables
              </button>
            </div>
          </form>
        </div>

        {searchInitiated && (
          <>
            {/* Map Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Comparable Properties Map</h2>
              <div className="relative h-[500px] bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading interactive map...</p>
                  </div>
                </div>
                <Image
                  src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07a?q=80&w=2831&auto=format&fit=crop"
                  alt="Seattle area map with comparable properties"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-md z-10">
                  <h3 className="font-semibold text-gray-800 mb-2">Legend</h3>
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
                    <span>Subject Property</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
                    <span>Sold Properties</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                    <span>Active Listings</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparable Results */}
            <div className="mb-16">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Comparable Properties</h2>
                <div className="flex gap-4">
                  <select className="p-2 border border-gray-300 rounded-md">
                    <option value="relevance">Sort by: Relevance</option>
                    <option value="price_high">Price (High to Low)</option>
                    <option value="price_low">Price (Low to High)</option>
                    <option value="recent">Most Recent</option>
                    <option value="sqft">Square Footage</option>
                  </select>
                  <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-md font-medium">
                    Export Report
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                <ComparableCard 
                  address="2418 NW Market St" 
                  neighborhood="Ballard"
                  price={875000}
                  beds={3}
                  baths={2.5}
                  sqft={1850}
                  yearBuilt={2008}
                  saleDate="Mar 2023"
                  similarity={94}
                  imageUrl="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=2070"
                  transactionType="FLIP"
                  adjustedValue={842000}
                />
                <ComparableCard 
                  address="4506 Meridian Ave N" 
                  neighborhood="Wallingford"
                  price={920000}
                  beds={3}
                  baths={2}
                  sqft={1920}
                  yearBuilt={2012}
                  saleDate="Jan 2023"
                  similarity={89}
                  imageUrl="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070"
                  transactionType="STANDARD"
                  adjustedValue={899000}
                />
                <ComparableCard 
                  address="3322 NE 65th St" 
                  neighborhood="Ravenna"
                  price={825000}
                  beds={4}
                  baths={2}
                  sqft={1780}
                  yearBuilt={1948}
                  saleDate="Feb 2023"
                  similarity={87}
                  imageUrl="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=2070"
                  transactionType="STANDARD"
                  adjustedValue={810000}
                />
                <ComparableCard 
                  address="1820 Queen Anne Ave N" 
                  neighborhood="Queen Anne"
                  price={950000}
                  beds={3}
                  baths={2.25}
                  sqft={2020}
                  yearBuilt={2015}
                  saleDate="Dec 2022"
                  similarity={83}
                  imageUrl="https://images.unsplash.com/photo-1592595896616-c37162298647?q=80&w=2070"
                  transactionType="STANDARD"
                  adjustedValue={925000}
                />
                <ComparableCard 
                  address="9208 35th Ave SW" 
                  neighborhood="West Seattle"
                  price={780000}
                  beds={3}
                  baths={2}
                  sqft={1750}
                  yearBuilt={2002}
                  saleDate="Nov 2022"
                  similarity={82}
                  imageUrl="https://images.unsplash.com/photo-1592928302636-c83041561c75?q=80&w=2070"
                  transactionType="STANDARD"
                  adjustedValue={765000}
                />
                <ComparableCard 
                  address="7522 Greenwood Ave N" 
                  neighborhood="Greenwood"
                  price={850000}
                  beds={4}
                  baths={3}
                  sqft={2100}
                  yearBuilt={2005}
                  saleDate="Feb 2023"
                  similarity={80}
                  imageUrl="https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=2070"
                  transactionType="FLIP"
                  adjustedValue={815000}
                />
              </div>

              <div className="text-center">
                <button className="inline-flex items-center bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-md transition-colors">
                  Load More Comparables
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Analysis Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Property Value Analysis</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Estimated Value Range</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">$825,000 - $895,000</div>
                  <p className="text-gray-600">Based on 6 comparable properties within 1 mile</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Average Price Per Sq Ft</h3>
                  <div className="text-3xl font-bold text-green-600 mb-2">$478</div>
                  <p className="text-gray-600">5% higher than neighborhood average</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Market Trend</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-2">+2.8%</div>
                  <p className="text-gray-600">Value increase over past 6 months</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Value Adjustments</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr className="bg-gray-100 text-gray-700">
                        <th className="py-3 px-4 text-left">Adjustment Factor</th>
                        <th className="py-3 px-4 text-right">Impact</th>
                        <th className="py-3 px-4 text-left">Details</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-3 px-4">Location</td>
                        <td className="py-3 px-4 text-right text-green-600">+$15,000</td>
                        <td className="py-3 px-4">Premium for walkable neighborhood</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Condition</td>
                        <td className="py-3 px-4 text-right text-red-600">-$12,000</td>
                        <td className="py-3 px-4">Older kitchen, needs updates</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Lot Size</td>
                        <td className="py-3 px-4 text-right text-green-600">+$8,500</td>
                        <td className="py-3 px-4">10% larger than average</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">View</td>
                        <td className="py-3 px-4 text-right text-green-600">+$22,000</td>
                        <td className="py-3 px-4">Partial water view</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Parking</td>
                        <td className="py-3 px-4 text-right text-red-600">-$5,000</td>
                        <td className="py-3 px-4">Single car garage vs. double</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        )}

        {/* NWMLS Integration Callout */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-lg p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Access NWMLS Data</h2>
              <p className="mb-6 text-blue-100">
                Our platform integrates directly with Northwest Multiple Listing Service (NWMLS) to provide you with the most accurate and up-to-date comparable sales data in the Greater Seattle area.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Real-time MLS data access</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Detailed property histories</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Proprietary valuation algorithms</span>
                </li>
              </ul>
              <Link 
                href="/solutions/nwmls-integration" 
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors inline-block"
              >
                Learn about our NWMLS integration
              </Link>
            </div>
            <div className="hidden md:block relative h-64">
              <Image 
                src="https://images.unsplash.com/photo-1460467820054-c87ab43e9b59?q=80&w=2067&auto=format&fit=crop"
                alt="Data analysis dashboard"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

interface ComparableCardProps {
  address: string;
  neighborhood: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  yearBuilt: number;
  saleDate: string;
  similarity: number;
  imageUrl: string;
  transactionType: "STANDARD" | "FLIP" | "FORECLOSURE";
  adjustedValue: number;
}

const ComparableCard: React.FC<ComparableCardProps> = ({ 
  address, neighborhood, price, beds, baths, sqft, yearBuilt, 
  saleDate, similarity, imageUrl, transactionType, adjustedValue 
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image 
          src={imageUrl} 
          alt={`${address}, ${neighborhood}`}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2 bg-white text-blue-600 px-2 py-1 rounded-full text-sm font-semibold">
          {similarity}% Match
        </div>
      </div>
      
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 truncate">{address}</h3>
        <p className="text-gray-700">{neighborhood}, Seattle</p>
      </div>
      
      <div className="p-4 grid grid-cols-3 gap-2 text-sm border-b border-gray-200">
        <div>
          <p className="text-gray-500">Beds</p>
          <p className="font-semibold">{beds}</p>
        </div>
        <div>
          <p className="text-gray-500">Baths</p>
          <p className="font-semibold">{baths}</p>
        </div>
        <div>
          <p className="text-gray-500">SqFt</p>
          <p className="font-semibold">{sqft}</p>
        </div>
      </div>
      
      <div className="p-4 grid grid-cols-2 gap-4 text-sm border-b border-gray-200">
        <div>
          <p className="text-gray-500">Year Built</p>
          <p className="font-semibold">{yearBuilt}</p>
        </div>
        <div>
          <p className="text-gray-500">Sold</p>
          <p className="font-semibold">{saleDate}</p>
        </div>
      </div>
      
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Sale Price</p>
            <p className="text-xl font-bold text-gray-900">${price.toLocaleString()}</p>
          </div>
          <div className="bg-gray-100 px-3 py-1 rounded-full">
            <p className="text-sm font-medium">{transactionType}</p>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-blue-50">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-600 text-sm">Adjusted Value</p>
            <p className="text-lg font-bold text-blue-600">${adjustedValue.toLocaleString()}</p>
          </div>
          <button className="text-blue-600 hover:text-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComparableSalesPage; 