"use client";

import React from 'react';

export default function PropertyAnalysisPage() {
  return (
    <div>
      <div className="bg-blue-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Property Analysis Dashboard</h1>
          <p className="text-blue-100">Detailed analysis and projections for individual properties</p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
          <p className="text-lg text-gray-600 mb-6">
            Our property analysis dashboard is currently under development. Please check back soon for detailed property valuation tools, 
            rental income projections, and investment analysis calculators.
          </p>
          <p className="text-gray-500">
            In the meantime, you can explore our <a href="/dashboard/market" className="text-blue-600 hover:underline">Market Dashboard</a>.
          </p>
        </div>
      </main>
    </div>
  );
} 