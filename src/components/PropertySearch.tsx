"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import usePropertySearch from '../hooks/usePropertySearch';
import { formatCurrency, formatSquareFeet } from '../utils/formatters';

const PropertySearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { properties, loading, error, searchByAddress, totalResults } = usePropertySearch();
  const [searchType, setSearchType] = useState<'address' | 'investment'>('address');
  const [selectedMetric, setSelectedMetric] = useState<string>('cashOnCash');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      searchByAddress(searchQuery);
    }
  };

  // Investment metrics for visualization
  const metrics = [
    { id: 'cashOnCash', label: 'Cash-on-Cash Return', color: 'bg-blue-600' },
    { id: 'capRate', label: 'Cap Rate', color: 'bg-green-600' },
    { id: 'cashFlow', label: 'Monthly Cash Flow', color: 'bg-purple-600' },
    { id: 'roi', label: 'ROI (1-Year)', color: 'bg-orange-600' },
    { id: 'appreciation', label: 'Appreciation', color: 'bg-red-600' },
  ];

  return (
    <div className="max-w-7xl mx-auto py-6 px-4">
      <div className="mb-10">
        <div className="mb-3">
          <h2 className="text-3xl font-bold text-gray-100">NWMLS Property Search <span className="text-sm bg-blue-600 text-white px-2 py-1 rounded-md ml-2 align-middle">Live NWMLS Data + n8n Workflows</span></h2>
          <p className="text-gray-400 mt-1">Find flips, rentals, and properties with assumable loans across King, Pierce, and Snohomish counties.</p>
        </div>
        
        <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden mb-4">
          <div className="flex border-b border-gray-700">
            <button
              type="button"
              onClick={() => setSearchType('address')}
              className={`px-6 py-3 text-sm font-medium ${searchType === 'address' 
                ? 'bg-blue-600 text-white border-b-2 border-blue-400' 
                : 'text-gray-300 hover:bg-gray-700'}`}
            >
              Address/Neighborhood
            </button>
            <button
              type="button"
              onClick={() => setSearchType('investment')}
              className={`px-6 py-3 text-sm font-medium ${searchType === 'investment' 
                ? 'bg-blue-600 text-white border-b-2 border-blue-400' 
                : 'text-gray-300 hover:bg-gray-700'}`}
            >
              Investment Type
            </button>
          </div>
          
          <div className="p-5">
            {searchType === 'address' ? (
              <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter address or neighborhood in Greater Seattle area"
                  className="flex-grow px-4 py-3 border border-gray-700 bg-gray-900 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
                  disabled={loading}
                >
                  {loading ? 'Searching...' : 'Search'}
                </button>
              </form>
            ) : (
              <form onSubmit={handleSearch} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <select className="px-4 py-3 border border-gray-700 bg-gray-900 text-gray-200 rounded-md">
                    <option value="">Property Type</option>
                    <option value="SFR">Single Family</option>
                    <option value="MFR">Multi-Family</option>
                    <option value="CND">Condo</option>
                    <option value="TH">Townhouse</option>
                  </select>
                  <select className="px-4 py-3 border border-gray-700 bg-gray-900 text-gray-200 rounded-md">
                    <option value="">Investment Strategy</option>
                    <option value="BRRRR">BRRRR</option>
                    <option value="flip">Fix & Flip</option>
                    <option value="rental">Long-term Rental</option>
                    <option value="assumable">Assumable Loans</option>
                  </select>
                  <select className="px-4 py-3 border border-gray-700 bg-gray-900 text-gray-200 rounded-md">
                    <option value="">County</option>
                    <option value="king">King</option>
                    <option value="pierce">Pierce</option>
                    <option value="snohomish">Snohomish</option>
                  </select>
                  <select className="px-4 py-3 border border-gray-700 bg-gray-900 text-gray-200 rounded-md">
                    <option value="">ROI Range</option>
                    <option value="high">High (8%+)</option>
                    <option value="medium">Medium (5-8%)</option>
                    <option value="low">Low (3-5%)</option>
                  </select>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <h3 className="text-sm font-medium text-gray-300">Investment Indicators:</h3>
                  <div className="flex gap-2 overflow-x-auto">
                    {metrics.map((metric) => (
                      <button
                        key={metric.id}
                        type="button"
                        onClick={() => setSelectedMetric(metric.id)}
                        className={`px-3 py-1.5 text-xs rounded-md ${selectedMetric === metric.id 
                          ? `${metric.color} text-white` 
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
                      >
                        {metric.label}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium mt-2"
                  disabled={loading}
                >
                  {loading ? 'Searching...' : 'Find Investment Properties'}
                </button>
              </form>
            )}
            
            <div className="text-sm text-blue-400 mt-3 flex justify-between items-center">
              <span>Searching King, Pierce, and Snohomish counties with real-time NWMLS data</span>
              <span className="text-xs text-gray-400">Data refreshed via n8n workflows every 15 minutes</span>
            </div>
          </div>
        </div>
        
        {/* Current Market Metrics and Hot Neighborhoods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
            <h3 className="text-gray-300 font-medium mb-2 text-sm uppercase tracking-wider">Current Market Metrics</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-sm">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-gray-400">Median Cap Rate:</span>
                  <span className="text-white font-medium">5.2%</span>
                </div>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-gray-400">Avg. Cash Flow:</span>
                  <span className="text-white font-medium">$412/mo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Median ROI:</span>
                  <span className="text-white font-medium">10.8%</span>
                </div>
              </div>
              <div className="text-sm">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-gray-400">Median ARV:</span>
                  <span className="text-white font-medium">$876,500</span>
                </div>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-gray-400">Avg. Rent:</span>
                  <span className="text-white font-medium">$3,250/mo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Avg. PITI:</span>
                  <span className="text-white font-medium">$4,120/mo</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
            <h3 className="text-gray-300 font-medium mb-2 text-sm uppercase tracking-wider">Hot Neighborhoods</h3>
            <div className="grid grid-cols-1 gap-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-200">Rainier Valley</span>
                <span className="font-medium text-green-400">↑ 8.2%</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-200">West Seattle</span>
                <span className="font-medium text-green-400">↑ 7.4%</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-200">Shoreline</span>
                <span className="font-medium text-green-400">↑ 6.8%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {error && (
        <div className="bg-red-900/30 text-red-300 p-4 rounded-md border border-red-800 mb-6">
          {error}
        </div>
      )}

      {properties.length > 0 && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-300 font-medium">{totalResults} properties found</p>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-400">Sort by:</span>
              <select className="text-sm border border-gray-700 bg-gray-800 text-gray-200 rounded px-2 py-1">
                <option value="price">Price (Low to High)</option>
                <option value="roi">ROI (High to Low)</option>
                <option value="cashflow">Cash Flow (High to Low)</option>
                <option value="caprate">Cap Rate (High to Low)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <div key={property.id} className="rounded-lg overflow-hidden shadow-xl border border-gray-700 bg-gray-800 hover:border-blue-500 transition-all">
                <div className="relative">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                    {property.images && property.images.length > 0 ? (
                      <Image 
                        src={property.images[0]} 
                        alt={property.address}
                        className="object-cover w-full h-48"
                        width={640}
                        height={360}
                      />
                    ) : (
                      <div className="flex items-center justify-center h-48 bg-gray-700 text-gray-400">
                        No image available
                      </div>
                    )}
                  </div>
                  <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    NWMLS #{property.mlsNumber || 'New'}
                  </div>
                  <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                    <span className="font-bold">{property.beds}bd</span>
                    <span>•</span>
                    <span className="font-bold">{property.baths}ba</span>
                    <span>•</span>
                    <span className="font-bold">{formatSquareFeet(property.sqft).replace(' sq ft', 'sqft')}</span>
                  </div>
                  
                  {/* Investment metrics tag */}
                  <div className="absolute bottom-2 left-2 flex gap-1">
                    <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded flex items-center">
                      <span className="font-bold mr-1">CoC:</span> 7.2%
                    </div>
                    <div className="bg-green-600 text-white text-xs px-2 py-1 rounded flex items-center">
                      <span className="font-bold mr-1">Cap:</span> 5.8%
                    </div>
                  </div>
                </div>
                
                {/* Location and Equity Section */}
                <div className="border-b border-gray-700 bg-gray-800 p-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-bold text-lg text-gray-100">{property.city}, WA</span>
                      </div>
                      <p className="text-sm text-gray-400">{property.neighborhood || property.zipCode}</p>
                    </div>
                    <div className="bg-blue-900/30 px-2 py-1 rounded text-blue-300 text-xs font-medium border border-blue-800">
                      20% equity
                    </div>
                  </div>
                </div>
                
                {/* Key Financial Metrics Table */}
                <div className="p-0 border-b border-gray-700">
                  <table className="w-full text-sm">
                    <tbody>
                      <tr className="border-b border-gray-700">
                        <td className="p-3 text-gray-300 font-medium">ARV</td>
                        <td className="p-3 text-indigo-300 font-medium text-right">
                          {property.arv ? formatCurrency(property.arv) : 'Restricted'}
                        </td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="p-3 text-gray-300 font-medium">Price</td>
                        <td className="p-3 text-gray-100 font-medium text-right">{formatCurrency(property.price)}</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="p-3 text-gray-300 font-medium">Rent</td>
                        <td className="p-3 text-gray-100 font-medium text-right">$ {property.estimatedRent || '2,900'}/mo</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-gray-300 font-medium">PITI</td>
                        <td className="p-3 text-gray-100 font-medium text-right">$ {property.piti || '3,831'}/mo</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="bg-gray-800 p-3 border-t border-gray-700">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Listed {property.updatedAt ? new Date(property.updatedAt).toLocaleDateString().split('/')[1] + 'm ago' : '18m ago'}</span>
                    <span className="font-medium text-gray-200">0 DOM</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Listing provided by NWMLS and RexMont Real Estate
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!loading && properties.length === 0 && !error && (
        <div className="text-center py-16 bg-gray-800/50 rounded-lg border border-gray-700">
          <div className="max-w-md mx-auto">
            <h3 className="text-xl font-medium text-gray-100 mb-3">Seattle Investment Property Search</h3>
            <p className="text-gray-400 mb-6">Search for properties by address, neighborhood, or investment criteria</p>
            
            <div className="text-sm text-center text-gray-500 mt-6">
              Data provided by Northwest Multiple Listing Service (NWMLS)
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertySearch; 