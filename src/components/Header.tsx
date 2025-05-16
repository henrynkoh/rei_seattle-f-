"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (menu: string) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    setActiveDropdown(null); // Close dropdown after navigation
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-lg py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className={`text-2xl font-bold ${isScrolled ? "text-blue-600" : "text-white"} transition-colors duration-300`}>
            SEATTLEPULSE
          </span>
          <span className={`ml-2 text-sm ${isScrolled ? "text-gray-500" : "text-gray-300"} transition-colors duration-300`}>
            Real Estate Analytics
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <NavDropdown 
            label="Solutions" 
            isActive={activeDropdown === 'solutions'} 
            isScrolled={isScrolled}
            onClick={() => toggleDropdown('solutions')} 
            items={[
              { label: "Investment Analysis", path: "/solutions/investment-analysis" },
              { label: "Property Research", path: "/solutions/property-research" },
              { label: "Market Intelligence", path: "/solutions/market-intelligence" },
              { label: "NWMLS Integration", path: "/solutions/nwmls-integration" }
            ]}
            onItemClick={handleNavigation}
            isOpen={activeDropdown === 'solutions'}
          />
          
          <NavDropdown 
            label="Features" 
            isActive={activeDropdown === 'features'} 
            isScrolled={isScrolled}
            onClick={() => toggleDropdown('features')} 
            items={[
              { label: "Property Analysis", path: "/features/property-analysis" },
              { label: "Property Search", path: "/features/property-search" },
              { label: "Financial Calculator", path: "/features/financial-calculator" },
              { label: "Market Reports", path: "/features/market-reports" },
              { label: "Investment Alerts", path: "/features/investment-alerts" },
              { label: "Portfolio Tracker", path: "/features/portfolio-tracker" },
              { label: "Comparable Sales", path: "/features/comparable-sales" }
            ]}
            onItemClick={handleNavigation}
            isOpen={activeDropdown === 'features'}
          />
          
          <NavItem 
            label="About" 
            isActive={false} 
            isScrolled={isScrolled}
            onClick={() => handleNavigation('/about')} 
          />

          <div className="ml-4">
            <button 
              className={`
                ${isScrolled 
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md" 
                  : "bg-white/10 hover:bg-white/20 text-white border border-white/30"}
                px-5 py-2 rounded-md transition-all duration-300 font-medium
              `}
            >
              Get Started
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            className={`p-2 rounded-md ${isScrolled ? "text-gray-700" : "text-white"}`}
            onClick={() => toggleDropdown('mobile')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          {/* Mobile Dropdown */}
          {activeDropdown === 'mobile' && (
            <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg mt-1 py-4 px-4 z-20 border-t border-gray-100 animate-fade-in">
              <div className="flex flex-col space-y-4 py-2">
                <div className="font-semibold text-gray-800 uppercase text-sm">Solutions</div>
                <div className="flex flex-col space-y-2 pl-4">
                  <button className="text-left text-gray-600 hover:text-blue-600 py-2 hover:bg-gray-50 px-2 rounded-md transition-colors" onClick={() => handleNavigation('/solutions/investment-analysis')}>Investment Analysis</button>
                  <button className="text-left text-gray-600 hover:text-blue-600 py-2 hover:bg-gray-50 px-2 rounded-md transition-colors" onClick={() => handleNavigation('/solutions/property-research')}>Property Research</button>
                  <button className="text-left text-gray-600 hover:text-blue-600 py-2 hover:bg-gray-50 px-2 rounded-md transition-colors" onClick={() => handleNavigation('/solutions/market-intelligence')}>Market Intelligence</button>
                  <button className="text-left text-gray-600 hover:text-blue-600 py-2 hover:bg-gray-50 px-2 rounded-md transition-colors" onClick={() => handleNavigation('/solutions/nwmls-integration')}>NWMLS Integration</button>
                </div>
                
                <div className="font-semibold text-gray-800 uppercase text-sm mt-2">Features</div>
                <div className="flex flex-col space-y-2 pl-4">
                  <button className="text-left text-gray-600 hover:text-blue-600 py-2 hover:bg-gray-50 px-2 rounded-md transition-colors" onClick={() => handleNavigation('/features/property-analysis')}>Property Analysis</button>
                  <button className="text-left text-gray-600 hover:text-blue-600 py-2 hover:bg-gray-50 px-2 rounded-md transition-colors" onClick={() => handleNavigation('/features/property-search')}>Property Search</button>
                  <button className="text-left text-gray-600 hover:text-blue-600 py-2 hover:bg-gray-50 px-2 rounded-md transition-colors" onClick={() => handleNavigation('/features/market-reports')}>Market Reports</button>
                  <button className="text-left text-gray-600 hover:text-blue-600 py-2 hover:bg-gray-50 px-2 rounded-md transition-colors" onClick={() => handleNavigation('/features/portfolio-tracker')}>Portfolio Tracker</button>
                </div>
                
                <button className="text-left font-semibold text-gray-800 uppercase text-sm py-2 mt-2 hover:bg-gray-50 px-2 rounded-md transition-colors" onClick={() => handleNavigation('/about')}>About</button>
                
                <button className="bg-blue-600 text-white py-3 rounded-md mt-4 font-medium hover:bg-blue-700 transition-colors shadow-md">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

interface NavItemProps {
  label: string;
  isActive?: boolean;
  isScrolled: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ label, isActive = false, isScrolled, onClick }) => {
  return (
    <button 
      className={`
        font-medium transition-colors duration-300
        ${isActive 
          ? "text-blue-600" 
          : isScrolled 
            ? "text-gray-800 hover:text-blue-600" 
            : "text-white hover:text-blue-300"}
      `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

interface NavDropdownProps extends NavItemProps {
  items: { label: string; path: string }[];
  onItemClick: (path: string) => void;
  isOpen: boolean;
}

const NavDropdown: React.FC<NavDropdownProps> = ({ 
  label, 
  isActive = false, 
  isScrolled,
  onClick, 
  items, 
  onItemClick,
  isOpen
}) => {
  return (
    <div className="relative">
      <button 
        className={`
          flex items-center space-x-1 font-medium transition-colors duration-300
          ${isActive 
            ? "text-blue-600" 
            : isScrolled 
              ? "text-gray-800 hover:text-blue-600" 
              : "text-white hover:text-blue-300"}
        `}
        onClick={onClick}
      >
        <span>{label}</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute mt-2 w-64 bg-white/95 rounded-lg shadow-xl overflow-hidden z-20 py-1 border border-gray-100 backdrop-blur-md animate-fade-in">
          {items.map((item, index) => (
            <button 
              key={index}
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              onClick={() => onItemClick(item.path)}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header; 