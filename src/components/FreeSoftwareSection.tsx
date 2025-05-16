"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ToolCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ToolCard: React.FC<ToolCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] group border border-gray-100 hover:border-blue-100">
      <div className="text-blue-600 mb-4 transform group-hover:scale-110 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center group-hover:font-bold transition-all">
        Try Now
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:ml-2 transition-all" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </Link>
    </div>
  );
};

const FreeSoftwareSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">FREE ACCESS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional-Grade <span className="text-gradient">Investment Tools</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our suite of comprehensive analysis tools at no cost to discover your next investment opportunity
          </p>
        </div>
        
        <div className="relative">
          {/* Decorative element */}
          <div className="hidden lg:block absolute -left-10 top-1/2 transform -translate-y-1/2 w-20 h-20 bg-blue-600/10 rounded-full blur-2xl"></div>
          <div className="hidden lg:block absolute -right-10 top-1/4 transform -translate-y-1/2 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ToolCard 
              title="Property Analysis Calculator" 
              description="Calculate ROI, cash flow, and cap rate for any property in the Greater Seattle area."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              }
            />
            
            <ToolCard 
              title="Rental Income Estimator" 
              description="Get accurate rental income projections based on comparable properties and market trends."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
            
            <ToolCard 
              title="Comparable Sales Finder" 
              description="Find recent comparable property sales in any Seattle neighborhood for accurate valuations."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2h3zm-3-5h8m-8-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
            
            <ToolCard 
              title="Rehab Cost Estimator" 
              description="Estimate renovation costs for any property type with our Seattle-area construction cost database."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              }
            />
            
            <ToolCard 
              title="Market Trend Analyzer" 
              description="Analyze real estate market trends and forecasts for any Seattle neighborhood."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
            />
            
            <ToolCard 
              title="Mortgage Calculator" 
              description="Calculate monthly payments, interest costs, and amortization schedules with various loan options."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
            />
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            href="/tools" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50"
          >
            View All Free Tools
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:ml-3 transition-all" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
          
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto border border-gray-100">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <div className="relative h-48 w-full rounded-lg overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1554469384-e58fac937c33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" 
                    alt="Seattle real estate analytics dashboard"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                  <div className="absolute inset-0 bg-blue-600/10"></div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Create Your Free Account</h3>
                <p className="text-gray-600 mb-6">
                  Sign up in less than 30 seconds to get immediate access to all our free investment analysis tools. No credit card required.
                </p>
                <Link 
                  href="/signup" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all shadow-md"
                >
                  Sign Up Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeSoftwareSection; 