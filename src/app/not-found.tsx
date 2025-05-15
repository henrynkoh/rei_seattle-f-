import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 py-16">
      <div className="text-center max-w-2xl">
        <div className="mb-8 relative w-64 h-64 mx-auto">
          <Image
            src="https://images.unsplash.com/photo-1538685634737-24b83e3fa2f8?q=80&w=2835&auto=format&fit=crop"
            alt="Seattle skyline"
            fill
            className="object-cover rounded-lg opacity-60"
          />
          <div className="absolute inset-0 bg-blue-600 mix-blend-color rounded-lg"></div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-8">Page Not Found</h2>
        
        <p className="text-lg text-gray-600 mb-12">
          We couldn't find the page you're looking for. Perhaps you were looking for one of our popular sections below:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <Link 
            href="/features/property-search"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Property Search</h3>
            <p className="text-gray-600">Find real estate investment opportunities in Seattle</p>
          </Link>
          
          <Link 
            href="/features/financial-calculator"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Financial Calculator</h3>
            <p className="text-gray-600">Analyze investment returns and cash flow</p>
          </Link>
          
          <Link 
            href="/features/comparable-sales"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Comparable Sales</h3>
            <p className="text-gray-600">Find accurate comps for property valuation</p>
          </Link>
          
          <Link 
            href="/features/market-reports"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Market Reports</h3>
            <p className="text-gray-600">Get the latest Seattle real estate market data</p>
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link 
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors"
          >
            Back to Home
          </Link>
          
          <Link 
            href="/contact"
            className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-md hover:bg-gray-50 transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
} 