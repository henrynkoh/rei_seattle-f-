"use client";

import React from 'react';
import dynamic from 'next/dynamic';

// Use dynamic import for PellegoLandingPage with no SSR to prevent hydration issues
const PellegoLandingPage = dynamic(() => import('../components/PellegoLandingPage'), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center min-h-screen">Loading...</div>
});

export default function Home() {
  return <PellegoLandingPage />;
}
