"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100 group">
      <div className="text-blue-600 mb-4 transform group-hover:scale-110 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const InvestorBrokerageSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Seattle's Premier Real Estate <span className="text-gradient">Investment Platform</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built by investors, for investors. Get access to powerful tools and exclusive data to find your next opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            }
            title="Investment Analysis"
            description="Calculate cap rates, cash flow, and ROI instantly with our comprehensive property analysis tools."
          />
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            }
            title="Market Data"
            description="Access real-time data on property values, rental rates, and market trends across the Greater Seattle area."
          />
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            }
            title="Exclusive Listings"
            description="Get early access to off-market and pre-market investment properties before they're available to the public."
          />
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="md:flex">
            <div className="md:w-1/2 relative">
              <div className="h-72 md:h-full relative">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="Seattle real estate investment"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  NWMLS Data
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Investor-Focused Brokerage</h3>
              <p className="text-lg text-gray-600 mb-8">
                Our team of investor-agents understands what makes a profitable deal. We specialize in finding properties with strong ROI potential and helping you execute your investment strategy.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-5 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-colors group">
                  <h4 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">Investment Property Search</h4>
                  <p className="text-gray-600">
                    Find high-ROI opportunities with custom search filters for cap rate, cash flow, and rehab potential.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-colors group">
                  <h4 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">Market Analysis</h4>
                  <p className="text-gray-600">
                    Access detailed comps, neighborhood trends, and rental market data for informed decisions.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-colors group">
                  <h4 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">Acquisition Strategy</h4>
                  <p className="text-gray-600">
                    Expert guidance on negotiating favorable terms, assumable loans, and creative financing options.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-colors group">
                  <h4 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">Portfolio Management</h4>
                  <p className="text-gray-600">
                    Ongoing support for property management, refinancing, and portfolio expansion strategies.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/schedule"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-center transition-colors shadow-md shadow-blue-600/20 flex items-center justify-center"
                >
                  <span>Schedule Consultation</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="bg-white border border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 px-6 py-3 rounded-lg font-medium text-center transition-all flex items-center justify-center"
                >
                  <span>View Service Details</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorBrokerageSection; 