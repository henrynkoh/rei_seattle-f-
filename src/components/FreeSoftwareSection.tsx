"use client";
import React from "react";
import Image from "next/image";

const FreeSoftwareSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Free Investment Analysis Software
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Leverage our powerful property analysis tools to evaluate potential investments, 
              calculate cash flow, ROI, and more - completely free for registered users.
            </p>
            
            <div className="space-y-6">
              <FeatureItem 
                title="Cash Flow Analysis"
                description="Calculate monthly and annual cash flow with detailed income and expense breakdowns."
              />
              
              <FeatureItem 
                title="Return on Investment"
                description="Analyze ROI, cash-on-cash return, cap rate, and gross rent multiplier."
              />
              
              <FeatureItem 
                title="Comparative Market Analysis"
                description="Compare properties against similar listings in the area to ensure you're making the right investment."
              />
              
              <FeatureItem 
                title="Property Value Estimator"
                description="Use our AI-powered estimator to determine current market value and potential appreciation."
              />
            </div>
            
            <div className="mt-10">
              <a 
                href="#" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition-colors mr-4"
              >
                Start Free Analysis
              </a>
              <a 
                href="#" 
                className="inline-block border border-gray-300 hover:border-gray-400 text-gray-700 font-medium px-6 py-3 rounded-md transition-colors"
              >
                View Demo
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-100 rounded-full opacity-50 filter blur-xl"></div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-green-100 rounded-full opacity-50 filter blur-xl"></div>
            
            <div className="relative bg-white p-2 rounded-xl shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                alt="Investment Analysis Software" 
                width={800}
                height={600}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem: React.FC<{
  title: string;
  description: string;
}> = ({ title, description }) => {
  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-4">
        <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-medium text-gray-800 mb-1">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FreeSoftwareSection; 