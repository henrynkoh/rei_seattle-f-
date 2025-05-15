"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MarketReportsPage = () => {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('all');
  const [selectedReportType, setSelectedReportType] = useState('sales');
  
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Seattle Real Estate Market Reports</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive data and analysis on the Greater Seattle real estate market to inform your investment decisions
          </p>
        </div>

        {/* Market Summary */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-lg p-8 mb-16 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Seattle Market Summary: Q2 2023</h2>
              <p className="mb-6 text-blue-100">
                The Greater Seattle housing market continues to show resilience with moderate price growth and improving inventory levels compared to previous quarters.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-sm text-blue-100">Median Sale Price</p>
                  <p className="text-2xl font-bold">$847,500</p>
                  <p className="text-sm text-green-300">+3.2% year-over-year</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-sm text-blue-100">Average Days on Market</p>
                  <p className="text-2xl font-bold">18 days</p>
                  <p className="text-sm text-red-300">+5 days year-over-year</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-sm text-blue-100">Active Listings</p>
                  <p className="text-2xl font-bold">1,842</p>
                  <p className="text-sm text-green-300">+24.6% year-over-year</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-sm text-blue-100">Months of Inventory</p>
                  <p className="text-2xl font-bold">1.7</p>
                  <p className="text-sm text-green-300">+0.5 year-over-year</p>
                </div>
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              <Image 
                src="https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=2070"
                alt="Seattle skyline"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Report Selection */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Explore Market Reports</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Neighborhood</label>
                <select 
                  value={selectedNeighborhood}
                  onChange={(e) => setSelectedNeighborhood(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="all">All Seattle</option>
                  <option value="ballard">Ballard</option>
                  <option value="capitol-hill">Capitol Hill</option>
                  <option value="queen-anne">Queen Anne</option>
                  <option value="fremont">Fremont</option>
                  <option value="west-seattle">West Seattle</option>
                  <option value="green-lake">Green Lake</option>
                  <option value="wallingford">Wallingford</option>
                  <option value="north-seattle">North Seattle</option>
                  <option value="south-seattle">South Seattle</option>
                  <option value="eastside">Eastside</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
                <select 
                  value={selectedReportType}
                  onChange={(e) => setSelectedReportType(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="sales">Sales Trends</option>
                  <option value="inventory">Inventory Analysis</option>
                  <option value="price">Price Trends</option>
                  <option value="investment">Investment Metrics</option>
                  <option value="rental">Rental Market</option>
                </select>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors">
                Generate Report
              </button>
            </div>
          </div>

          {/* Sample Report */}
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Sales Trends: All Seattle</h3>
            
            <div className="mb-8">
              <div className="relative aspect-[16/9] w-full bg-gray-100 rounded-lg overflow-hidden mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070"
                  alt="Seattle sales trends chart"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-gray-600">
                Chart showing Seattle home sales volume and median prices over the past 24 months. The blue line represents sales volume, while the green line shows median sale price.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Insights</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Sales volume has increased by 12% quarter-over-quarter but remains 8% below the same period last year.</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Median home prices have shown modest growth of 3.2% year-over-year despite higher interest rates.</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>The spring/summer selling season showed a 22% increase in transaction volume compared to winter months.</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Properties priced between $700,000-$900,000 saw the fastest rate of appreciation at 4.7% year-over-year.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Neighborhood Comparison</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr className="bg-gray-100 text-gray-700">
                        <th className="py-3 px-4 text-left">Neighborhood</th>
                        <th className="py-3 px-4 text-right">Median Price</th>
                        <th className="py-3 px-4 text-right">YoY Change</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-3 px-4">Queen Anne</td>
                        <td className="py-3 px-4 text-right">$1,125,000</td>
                        <td className="py-3 px-4 text-right text-green-600">+5.2%</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Ballard</td>
                        <td className="py-3 px-4 text-right">$925,000</td>
                        <td className="py-3 px-4 text-right text-green-600">+4.1%</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Capitol Hill</td>
                        <td className="py-3 px-4 text-right">$890,000</td>
                        <td className="py-3 px-4 text-right text-green-600">+3.8%</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">West Seattle</td>
                        <td className="py-3 px-4 text-right">$780,000</td>
                        <td className="py-3 px-4 text-right text-green-600">+2.5%</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">South Seattle</td>
                        <td className="py-3 px-4 text-right">$670,000</td>
                        <td className="py-3 px-4 text-right text-red-600">-0.8%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button className="flex items-center bg-blue-100 text-blue-600 hover:bg-blue-200 px-4 py-2 rounded-md font-medium transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download Full Report (PDF)
              </button>
            </div>
          </div>
        </div>

        {/* Featured Reports */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Featured Market Reports</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ReportCard 
              title="Seattle Investment Property Market Analysis"
              description="Comprehensive overview of investment opportunities, cap rates, and cash flow potential across Seattle neighborhoods."
              date="Q2 2023"
              imageUrl="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?q=80&w=2070"
            />
            <ReportCard 
              title="Seattle Rental Market Trends"
              description="Analysis of rental rates, vacancy rates, and tenant demographics across Seattle's major rental submarkets."
              date="June 2023"
              imageUrl="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2074"
            />
            <ReportCard 
              title="Seattle Luxury Home Market Report"
              description="Performance metrics and trends for homes priced over $1.5 million in Seattle's premium neighborhoods."
              date="May 2023"
              imageUrl="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
            />
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="bg-gray-900 text-white rounded-lg shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Receive Market Reports Monthly</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Stay informed about Seattle real estate market trends with our detailed monthly reports delivered directly to your inbox.
            </p>
          </div>
          
          <form className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow p-3 border border-gray-700 bg-gray-800 rounded-md focus:ring-blue-500 focus:border-blue-500 text-white"
                required
              />
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-2 text-center">
              We respect your privacy. You can unsubscribe at any time.
            </p>
          </form>
        </div>

        {/* Custom Report Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Need a Custom Market Analysis?</h2>
              <p className="text-gray-600 mb-6">
                Our team of real estate analysts can create custom market reports tailored to your specific investment criteria and target neighborhoods.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Personalized investment property analysis</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Micro-market trend identification</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Opportunity identification in target areas</span>
                </li>
              </ul>
              <Link 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors inline-block"
              >
                Request Custom Analysis
              </Link>
            </div>
            <div className="hidden md:block relative h-80">
              <Image 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070"
                alt="Real estate analyst working on custom report"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

interface ReportCardProps {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
}

const ReportCard: React.FC<ReportCardProps> = ({ title, description, date, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image 
          src={imageUrl} 
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <span className="bg-blue-600 text-xs font-semibold px-2 py-1 rounded-full">
            {date}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
          View Report
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MarketReportsPage; 