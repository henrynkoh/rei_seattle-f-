"use client";
import React from "react";
import dynamic from "next/dynamic";

// Dynamic imports for client components
const Header = dynamic(() => import("./Header"), { ssr: false });
const HeroSection = dynamic(() => import("./HeroSection"), { ssr: false });
const InvestorBrokerageSection = dynamic(() => import("./InvestorBrokerageSection"), { ssr: false });
const FreeSoftwareSection = dynamic(() => import("./FreeSoftwareSection"), { ssr: false });
const Footer = dynamic(() => import("./Footer"), { ssr: false });
const ChatButton = dynamic(() => import("./ChatButton"), { ssr: false });

const PellegoLandingPage: React.FC = () => {
  return (
    <main className="flex flex-col bg-white min-h-screen">
      <Header />
      <HeroSection />
      <InvestorBrokerageSection />
      <FreeSoftwareSection />
      <Footer />
      <ChatButton />
    </main>
  );
};

export default PellegoLandingPage; 