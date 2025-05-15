"use client";

import React from 'react';
import Image from 'next/image';

const PropertySearchPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Property Search</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find your next investment property with our powerful search tools
          </p>
        </div>

        {/* Search Interface */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="relative">
                <input
                  type="text"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter location, neighborhood, or MLS number"
                />
                <div className="absolute left-4 top-3.5 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors">
                Search Properties
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option value="">All Property Types</option>
                <option value="single-family">Single Family</option>
                <option value="multi-family">Multi-Family</option>
                <option value="condo">Condo/Townhouse</option>
                <option value="commercial">Commercial</option>
                <option value="land">Land</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <div className="grid grid-cols-2 gap-2">
                <input type="text" placeholder="Min" className="p-2 border border-gray-300 rounded-md" />
                <input type="text" placeholder="Max" className="p-2 border border-gray-300 rounded-md" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
              <span>Advanced Filters</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Featured Properties */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Investment Properties</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PropertyCard 
              imageUrl="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
              title="Modern Duplex in Ballard"
              price="$799,000"
              location="Ballard, Seattle"
              beds={4}
              baths={3}
              sqft={2600}
              cap={5.2}
            />
            <PropertyCard 
              imageUrl="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
              title="Renovated Multi-Family in Beacon Hill"
              price="$1,299,000"
              location="Beacon Hill, Seattle"
              beds={8}
              baths={5}
              sqft={3800}
              cap={6.1}
            />
            <PropertyCard 
              imageUrl="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6"
              title="Lakefront Single Family Home"
              price="$1,150,000"
              location="Kenmore, WA"
              beds={4}
              baths={3.5}
              sqft={3200}
              cap={4.8}
            />
          </div>

          <div className="mt-8 text-center">
            <button className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors">
              View All Properties
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Investment Tools */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-lg p-8 text-white mb-16">
          <h2 className="text-2xl font-bold mb-6">Advanced Investment Search Tools</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Financial Metrics</h3>
              <p className="mb-6 text-blue-100">
                Search properties by investment criteria including cap rate, cash-on-cash return, and gross rent multiplier.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Minimum cap rate filter</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Cash flow positive properties</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Property expense ratios</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Property Potential</h3>
              <p className="mb-6 text-blue-100">
                Identify properties with renovation potential, additional unit conversion opportunities, and value-add scenarios.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>BRRRR strategy opportunities</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>ADU/DADU potential</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Zoning opportunity alerts</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8">
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors">
              Access Investment Search Tools
            </button>
          </div>
        </div>
        
        {/* Market Areas */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Investment Markets</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MarketCard 
              name="North Seattle"
              imageUrl="https://images.unsplash.com/photo-1573599852326-2b9998f533e3"
              properties={142}
              avgCap={5.3}
            />
            <MarketCard 
              name="South King County"
              imageUrl="https://images.unsplash.com/photo-1627216790179-03c90c631b31"
              properties={215}
              avgCap={6.2}
            />
            <MarketCard 
              name="Eastside"
              imageUrl="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
              properties={87}
              avgCap={4.8}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

interface PropertyCardProps {
  imageUrl: string;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  cap: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ 
  imageUrl, title, price, location, beds, baths, sqft, cap 
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-48">
        <Image 
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded-md text-sm font-semibold">
          {cap}% Cap
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-500 mb-2">{location}</p>
        <p className="text-xl font-bold text-gray-900 mb-4">{price}</p>
        
        <div className="flex justify-between text-sm text-gray-600">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>{beds} BD</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{baths} BA</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
            </svg>
            <span>{sqft} SQFT</span>
          </div>
        </div>
        
        <button className="w-full mt-4 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-md font-medium transition-colors">
          View Property
        </button>
      </div>
    </div>
  );
};

interface MarketCardProps {
  name: string;
  imageUrl: string;
  properties: number;
  avgCap: number;
}

const MarketCard: React.FC<MarketCardProps> = ({ name, imageUrl, properties, avgCap }) => {
  return (
    <div className="relative h-60 rounded-lg overflow-hidden group">
      <Image 
        src={imageUrl}
        alt={name}
        fill
        className="object-cover transition-transform group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <div className="flex justify-between text-sm">
          <span>{properties} Properties</span>
          <span>Avg. {avgCap}% Cap Rate</span>
        </div>
        <button className="mt-3 text-white border border-white hover:bg-white hover:text-blue-600 px-4 py-1 rounded-md text-sm font-medium transition-colors">
          Explore Area
        </button>
      </div>
    </div>
  );
};

export default PropertySearchPage; 