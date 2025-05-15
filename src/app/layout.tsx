import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Metadata must be exported from a server component
export const metadata: Metadata = {
  title: "Pellego Seattle - Property Research for Real Estate Professionals",
  description: "Property research and analysis platform for real estate professionals in the Greater Seattle area.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
