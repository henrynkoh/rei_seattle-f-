"use client";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";

// Import error boundary
const ErrorBoundary = dynamic(() => import("./ErrorBoundary"), { ssr: false });

// Dynamic imports with improved error handling and loading states
const Header = dynamic(() => import("./Header"), { 
  ssr: false,
  loading: () => <div className="h-[51px] bg-gray-50"></div>
});

const HeroSection = dynamic(() => import("./HeroSection"), { 
  ssr: false,
  loading: () => <div className="min-h-[300px] bg-gray-50"></div>
});

const InvestorBrokerageSection = dynamic(() => import("./InvestorBrokerageSection"), { 
  ssr: false,
  loading: () => <div className="min-h-[200px] bg-gray-50"></div>
});

const FreeSoftwareSection = dynamic(() => import("./FreeSoftwareSection"), { 
  ssr: false,
  loading: () => <div className="min-h-[200px] bg-gray-50"></div>
});

const Footer = dynamic(() => import("./Footer"), { 
  ssr: false,
  loading: () => <div className="min-h-[100px] bg-gray-50"></div>
});

const ChatButton = dynamic(() => import("./ChatButton"), { 
  ssr: false,
  loading: () => <div></div>
});

const ComponentWrapper = ({ children }: { children: React.ReactNode }) => (
  <ErrorBoundary>
    <Suspense fallback={<div className="min-h-[100px] flex items-center justify-center bg-gray-50">Loading...</div>}>
      {children}
    </Suspense>
  </ErrorBoundary>
);

const SeattlePulseLandingPage: React.FC = () => {
  return (
    <main className="flex flex-col bg-white min-h-screen">
      <ComponentWrapper>
        <Header />
      </ComponentWrapper>
      
      <ComponentWrapper>
        <HeroSection />
      </ComponentWrapper>
      
      <ComponentWrapper>
        <InvestorBrokerageSection />
      </ComponentWrapper>
      
      <ComponentWrapper>
        <FreeSoftwareSection />
      </ComponentWrapper>
      
      <ComponentWrapper>
        <Footer />
      </ComponentWrapper>
      
      <ErrorBoundary>
        <ChatButton />
      </ErrorBoundary>
    </main>
  );
};

export default SeattlePulseLandingPage; 