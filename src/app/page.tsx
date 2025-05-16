import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InvestorBrokerageSection from "@/components/InvestorBrokerageSection";
import FreeSoftwareSection from "@/components/FreeSoftwareSection";
import Footer from "@/components/Footer";
import ChatButton from "@/components/ChatButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <HeroSection />
      <InvestorBrokerageSection />
      <FreeSoftwareSection />
      <Footer />
      <ChatButton />
    </main>
  );
}
