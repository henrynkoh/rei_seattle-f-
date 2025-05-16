"use client";

import React from 'react';

export default function PortfolioDashboardPage() {
  return (
    <div>
      <div className="bg-blue-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Portfolio Dashboard</h1>
          <p className="text-blue-100">Track and analyze your real estate portfolio</p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
          <p className="text-lg text-gray-600 mb-6">
            Our portfolio tracking dashboard is currently under development. Soon you'll be able to track your properties, 
            analyze performance, and get insights on optimizing your real estate portfolio.
          </p>
          <p className="text-gray-500">
            In the meantime, you can explore our <a href="/dashboard/market" className="text-blue-600 hover:underline">Market Dashboard</a>.
          </p>
        </div>
      </main>
    </div>
  );
} 