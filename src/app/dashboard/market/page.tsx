"use client";

import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the required chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

export default function MarketDashboardPage() {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('All Seattle');
  const [timeRange, setTimeRange] = useState('3m');
  
  // Sample data for charts
  const priceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Median Price (2023)',
        data: [920000, 925000, 935000, 950000, 965000, 975000, 980000, 990000, 985000, 970000, 960000, 955000],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Median Price (2022)',
        data: [880000, 890000, 900000, 915000, 925000, 940000, 950000, 955000, 945000, 930000, 920000, 915000],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  };

  const inventoryData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Active Listings',
        data: [1200, 1250, 1400, 1550, 1650, 1700, 1800, 1850, 1750, 1600, 1450, 1350],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  };
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Seattle Real Estate Market Trends',
      },
    },
  };

  const neighborhoods = [
    'All Seattle',
    'Ballard',
    'Capitol Hill',
    'Queen Anne',
    'Fremont',
    'West Seattle',
    'Columbia City',
    'Greenwood',
    'Beacon Hill'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">SeattlePulse Market Dashboard</h1>
          <p className="text-blue-100">Real-time market analytics and intelligence</p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Controls */}
        <div className="bg-white p-4 rounded-lg shadow mb-6 flex flex-wrap gap-4 items-center">
          <div>
            <label htmlFor="neighborhood" className="block text-sm font-medium text-gray-700 mb-1">Neighborhood</label>
            <select
              id="neighborhood"
              value={selectedNeighborhood}
              onChange={(e) => setSelectedNeighborhood(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {neighborhoods.map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="timeRange" className="block text-sm font-medium text-gray-700 mb-1">Time Range</label>
            <div className="flex space-x-1">
              {['1m', '3m', '6m', '1y', '5y'].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-3 py-2 text-sm rounded-md ${
                    timeRange === range
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
          
          <div className="ml-auto">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700">
              Export Data
            </button>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-sm text-gray-500">Median Sales Price</p>
            <p className="text-2xl font-bold text-gray-800">$975,000</p>
            <p className="text-sm text-green-600">+2.5% from last month</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-sm text-gray-500">Active Listings</p>
            <p className="text-2xl font-bold text-gray-800">1,734</p>
            <p className="text-sm text-red-600">-3.1% from last month</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-sm text-gray-500">Days on Market</p>
            <p className="text-2xl font-bold text-gray-800">24</p>
            <p className="text-sm text-green-600">-2 days from last month</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-sm text-gray-500">Sale to List Ratio</p>
            <p className="text-2xl font-bold text-gray-800">99.2%</p>
            <p className="text-sm text-red-600">-0.5% from last month</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Price Trends ({selectedNeighborhood})</h2>
            <Line options={options} data={priceData} />
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Inventory Levels ({selectedNeighborhood})</h2>
            <Bar options={options} data={inventoryData} />
          </div>
        </div>

        {/* Market Insights */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-3">Market Insights - {selectedNeighborhood}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/10 p-4 rounded">
              <h3 className="font-medium mb-2">Price Trend Analysis</h3>
              <p className="text-sm">
                {selectedNeighborhood === 'All Seattle' 
                  ? 'Seattle home prices have shown resilience with a 2.5% increase over the past quarter, despite higher mortgage rates.'
                  : `${selectedNeighborhood} continues to outperform market averages with sustained buyer interest and limited inventory.`}
              </p>
            </div>
            
            <div className="bg-white/10 p-4 rounded">
              <h3 className="font-medium mb-2">Supply & Demand</h3>
              <p className="text-sm">
                Inventory remains tight with new listings coming on market slightly below seasonal averages, keeping upward pressure on prices.
              </p>
            </div>
            
            <div className="bg-white/10 p-4 rounded">
              <h3 className="font-medium mb-2">Forecast</h3>
              <p className="text-sm">
                Our AI models predict modest price appreciation of 3-4% over the next 6 months with potential seasonal volatility.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 