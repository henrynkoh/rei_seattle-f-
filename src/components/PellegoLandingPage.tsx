"use client";

import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import InvestorBrokerageSection from "./InvestorBrokerageSection";
import FreeSoftwareSection from "./FreeSoftwareSection";
import Footer from "./Footer";
import ChatButton from "./ChatButton";
import ErrorBoundary from "./ErrorBoundary";

const PellegoLandingPage: React.FC = () => {
  return (
    <main className="flex flex-col bg-white min-h-screen">
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <HeroSection />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <InvestorBrokerageSection />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <FreeSoftwareSection />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <ChatButton />
      </ErrorBoundary>
    </main>
  );
};

export default PellegoLandingPage; 