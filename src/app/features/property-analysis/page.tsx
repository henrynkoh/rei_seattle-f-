"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PropertyAnalysisPage = () => {
  const [tabState, setTabState] = useState('sale');
  const [propertySummary, setPropertySummary] = useState({
    address: '1820 61st St SE, Auburn, WA 98092',
    listPrice: 432000,
    afterRepairValue: 670000,
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 2084,
    lotSize: 4804,
    yearBuilt: 1999,
    lastSold: {
      date: 'Nov 29, 2020',
      price: 432000
    }
  });

  const [financialDetails, setFinancialDetails] = useState({
    purchasePrice: 432000,
    rehabCosts: 0,
    afterRepairValue: 670000,
    purchaseLoan: {
      downPayment: 20,
      interestRate: 12,
      points: 2,
      carryingMonths: 4
    },
    rehabLoan: {
      downPayment: 20,
      interestRate: 12,
      points: 2,
      carryingMonths: 4
    },
    buyingCosts: 9901,
    carryingCosts: 17581,
    sellingCosts: 48207,
    profit: 162311,
    roi: 36.62,
    cashRoi: 144.67
  });

  const comps = [
    {
      id: 'A',
      distance: '0.28 miles',
      address: '1732 51st St SE',
      price: 3200,
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 1708,
      lotSize: 0,
      yearBuilt: 2000,
      type: 'Comp',
      adjustedRent: 3071
    },
    {
      id: 'B',
      distance: '0.59 miles',
      address: '2034 65th Loop SE',
      price: 2750,
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 1670,
      lotSize: 4356,
      yearBuilt: 2002,
      type: 'Comp',
      adjustedRent: 3401
    },
    {
      id: 'C',
      distance: '0.49 miles',
      address: '5905 Peasant Drive SE unit 7-703',
      price: 2475,
      bedrooms: 2,
      bathrooms: 2.5,
      sqft: 1736,
      lotSize: 0,
      yearBuilt: 2005,
      type: 'Comp',
      adjustedRent: 3408
    },
    {
      id: 'D',
      distance: '0.56 miles',
      address: '821 67th ST SE',
      price: 3000,
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 1828,
      lotSize: 5670,
      yearBuilt: 2005,
      type: 'Comp',
      adjustedRent: 3426
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Property Header */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
          <div className="p-6">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{propertySummary.address}</h1>
                <div className="flex gap-6 mt-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 text-sm">Purchase Price:</span>
                    <span className="ml-1 font-semibold">${propertySummary.listPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 text-sm">After Repair Value:</span>
                    <span className="ml-1 font-semibold">${propertySummary.afterRepairValue.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-4 md:mt-0">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Save</button>
                <button className="px-4 py-2 border border-gray-300 rounded-md">Share</button>
              </div>
            </div>
          </div>
        </div>

        {/* Property Images & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <div className="bg-white shadow-md rounded-lg overflow-hidden h-64 relative">
              <Image
                src="https://images.unsplash.com/photo-1600566753376-12c8ab8facf1?q=80&w=2070"
                alt="Property image"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
              <div className="absolute bottom-4 right-4 text-white text-sm">
                <span className="bg-black bg-opacity-70 px-2 py-1 rounded-md">View All Photos</span>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="h-64 relative">
              <Image
                src="https://maps.googleapis.com/maps/api/staticmap?center=47.3040767,-122.2270202&zoom=14&size=400x400&maptype=roadmap&markers=color:red%7C47.3040767,-122.2270202&key=YOUR_API_KEY"
                alt="Map location"
                fill
                className="object-cover"
              />
              <div className="absolute top-0 left-0 right-0 bg-white bg-opacity-90 p-2 text-center text-sm font-medium">
                Auburn, WA
              </div>
            </div>
          </div>
        </div>

        {/* Property Details & Analysis Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Property Details */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Property Details</h2>
              </div>

              <div className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-500 text-sm">Bedrooms</p>
                    <p className="font-semibold">{propertySummary.bedrooms}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Bathrooms</p>
                    <p className="font-semibold">{propertySummary.bathrooms}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Finished Sqft</p>
                    <p className="font-semibold">{propertySummary.sqft.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Lot Size</p>
                    <p className="font-semibold">{propertySummary.lotSize.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Year Built</p>
                    <p className="font-semibold">{propertySummary.yearBuilt}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Last Sold</p>
                    <p className="font-semibold">{propertySummary.lastSold.date}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-gray-500 text-sm mb-2">Property Description</p>
                  <p className="text-gray-700">
                    Beautiful single-family home located in a desirable neighborhood. Light and bright family room with gas fireplace. Spacious kitchen with hardwood floors throughout entry, family room, and dining. This suburban retreat offers comfort and convenience.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Estimated Equity</h2>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-center h-48">
                  <div className="relative w-40 h-40">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="10"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#4f46e5"
                        strokeWidth="10"
                        strokeDasharray="251.2"
                        strokeDashoffset="50.24"
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-bold text-gray-900">80%</span>
                      <span className="text-sm text-gray-600">Equity</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-gray-500 text-sm">Value</p>
                    <p className="font-semibold">${financialDetails.afterRepairValue.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Appreciation</p>
                    <p className="font-semibold text-green-600">+55%</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Principal</p>
                    <p className="font-semibold">${financialDetails.purchasePrice.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Equity</p>
                    <p className="font-semibold">${(financialDetails.afterRepairValue - financialDetails.purchasePrice).toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Analysis Tabs */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
              <div className="border-b border-gray-200">
                <div className="flex">
                  <button
                    className={`px-6 py-3 font-medium text-sm ${tabState === 'sale' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                    onClick={() => setTabState('sale')}
                  >
                    Sale Comps
                  </button>
                  <button
                    className={`px-6 py-3 font-medium text-sm ${tabState === 'rental' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                    onClick={() => setTabState('rental')}
                  >
                    Rental Comps
                  </button>
                </div>
              </div>

              {tabState === 'rental' && (
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th className="px-3 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comp</th>
                          <th className="px-3 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Adjustments</th>
                          <th className="px-3 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bedrooms</th>
                          <th className="px-3 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bathrooms</th>
                          <th className="px-3 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Finished Sqft</th>
                          <th className="px-3 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lot Size</th>
                          <th className="px-3 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year Built</th>
                          <th className="px-3 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rent</th>
                          <th className="px-3 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Adjusted Rent</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr className="bg-blue-50">
                          <td className="px-3 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-blue-600">Subject</div>
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">-</div>
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{propertySummary.bedrooms}</div>
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{propertySummary.bathrooms}</div>
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{propertySummary.sqft.toLocaleString()}</div>
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{propertySummary.lotSize.toLocaleString()}</div>
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{propertySummary.yearBuilt}</div>
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">-</div>
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-blue-600">-</div>
                          </td>
                        </tr>

                        {comps.map((comp) => (
                          <tr key={comp.id}>
                            <td className="px-3 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">Comp {comp.id}</div>
                              <div className="text-xs text-gray-500">{comp.distance}</div>
                            </td>
                            <td className="px-3 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">-</div>
                            </td>
                            <td className="px-3 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{comp.bedrooms}</div>
                            </td>
                            <td className="px-3 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{comp.bathrooms}</div>
                            </td>
                            <td className="px-3 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{comp.sqft.toLocaleString()}</div>
                            </td>
                            <td className="px-3 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{comp.lotSize > 0 ? comp.lotSize.toLocaleString() : '-'}</div>
                            </td>
                            <td className="px-3 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{comp.yearBuilt}</div>
                            </td>
                            <td className="px-3 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">${comp.price.toLocaleString()}</div>
                            </td>
                            <td className="px-3 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-blue-600">${comp.adjustedRent.toLocaleString()}</div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {tabState === 'sale' && (
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Investment Summary</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Purchase Price</span>
                          <span className="font-medium">${financialDetails.purchasePrice.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Rehab Costs</span>
                          <span className="font-medium">${financialDetails.rehabCosts.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">After Repair Value</span>
                          <span className="font-medium">${financialDetails.afterRepairValue.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between border-t border-gray-300 pt-2 mt-2">
                          <span className="text-gray-800 font-medium">Total Profit</span>
                          <span className="text-green-600 font-bold">${financialDetails.profit.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Return Metrics</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-3 rounded-lg text-center">
                          <div className="text-3xl font-bold text-blue-600">{financialDetails.roi.toFixed(2)}%</div>
                          <p className="text-sm text-gray-600">Total ROI</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg text-center">
                          <div className="text-3xl font-bold text-green-600">{financialDetails.cashRoi.toFixed(2)}%</div>
                          <p className="text-sm text-gray-600">Cash ROI</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Cost Breakdown</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-600 mb-2">Buying Costs</h4>
                        <div className="bg-white p-3 rounded-lg">
                          <div className="text-lg font-bold text-gray-900">${financialDetails.buyingCosts.toLocaleString()}</div>
                          <div className="text-xs text-gray-600 mt-1">Title & Escrow, Origination Fee</div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-600 mb-2">Carrying Costs</h4>
                        <div className="bg-white p-3 rounded-lg">
                          <div className="text-lg font-bold text-gray-900">${financialDetails.carryingCosts.toLocaleString()}</div>
                          <div className="text-xs text-gray-600 mt-1">Insurance, Taxes, Utilities, Interest</div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-600 mb-2">Selling Costs</h4>
                        <div className="bg-white p-3 rounded-lg">
                          <div className="text-lg font-bold text-gray-900">${financialDetails.sellingCosts.toLocaleString()}</div>
                          <div className="text-xs text-gray-600 mt-1">Commissions, Excise Tax, Closing Costs</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Auburn Insights</h2>
                <p className="text-sm text-gray-600">Market data aggregated from NWMLS</p>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-600 mb-3">New Listings</h3>
                    <div className="h-32 relative bg-gray-100 rounded-lg">
                      {/* Chart placeholder */}
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                        Chart: New Listings Trend
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-600 mb-3">Median Days on Market</h3>
                    <div className="h-32 relative bg-gray-100 rounded-lg">
                      {/* Chart placeholder */}
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                        Chart: Days on Market Trend
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ask About This Property Section */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden mt-6">
          <div className="p-6">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974"
                  alt="Agent photo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium">Ask about this property</h3>
                <p className="text-gray-600">Gideon has personally flipped homes and bought rentals</p>
                <p className="text-gray-700 font-medium">Gideon Sylvan, Real Estate Agent</p>
              </div>
            </div>
            <div className="mt-4">
              <form className="space-y-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <textarea
                  placeholder="Questions?"
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                >
                  Submit
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-2">
                This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 mt-8">
          Content last updated on 05/14/2025 17:18.
        </div>

        <div className="text-center text-xs text-gray-500 mt-4 mb-8">
          All data is obtained from various sources and may not have been verified by broker or MLS GRID. Supplied Open House Information is subject to change without notice. All information should be independently reviewed and verified for accuracy. Properties may or may not be listed by the office/agent presenting the information.
        </div>
      </main>
    </div>
  );
};

export default PropertyAnalysisPage; 