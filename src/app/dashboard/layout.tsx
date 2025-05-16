import React from 'react';
import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-blue-800 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="font-bold text-xl flex items-center">
                <span className="ml-2">SeattlePulse</span>
              </Link>
              
              <div className="ml-10 flex items-center space-x-4">
                <Link href="/dashboard/market" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                  Market Dashboard
                </Link>
                <Link href="/dashboard/property" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                  Property Analysis
                </Link>
                <Link href="/dashboard/portfolio" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                  My Portfolio
                </Link>
              </div>
            </div>
            
            <div className="flex items-center">
              <Link href="/solutions/market-intelligence" className="text-blue-200 hover:text-white text-sm">
                Back to Solutions
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      {children}
      
      <footer className="bg-gray-800 text-gray-400 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>© 2023 SeattlePulse. All rights reserved.</p>
            <p className="mt-2 text-sm">Data is simulated for demonstration purposes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 