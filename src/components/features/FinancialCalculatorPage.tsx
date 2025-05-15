"use client";

import React, { useState } from 'react';

const FinancialCalculatorPage = () => {
  const [purchasePrice, setPurchasePrice] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('30');
  const [rentalIncome, setRentalIncome] = useState('');
  const [propertyTax, setPropertyTax] = useState('');
  const [insurance, setInsurance] = useState('');
  const [maintenance, setMaintenance] = useState('');
  const [vacancy, setVacancy] = useState('5');
  const [propertyManagement, setPropertyManagement] = useState('10');
  const [showResults, setShowResults] = useState(false);

  const calculateMortgage = () => {
    const principal = parseFloat(purchasePrice) - parseFloat(downPayment);
    const monthlyRate = parseFloat(interestRate) / 100 / 12;
    const payments = parseFloat(loanTerm) * 12;
    
    const x = Math.pow(1 + monthlyRate, payments);
    const monthly = (principal * x * monthlyRate) / (x - 1);
    
    return monthly;
  };

  const calculateCashflow = () => {
    const monthlyMortgage = calculateMortgage();
    const monthlyRental = parseFloat(rentalIncome);
    const monthlyTax = parseFloat(propertyTax) / 12;
    const monthlyInsurance = parseFloat(insurance) / 12;
    const monthlyMaintenance = parseFloat(maintenance) / 12;
    const monthlyVacancy = monthlyRental * (parseFloat(vacancy) / 100);
    const monthlyManagement = monthlyRental * (parseFloat(propertyManagement) / 100);
    
    const totalExpenses = monthlyMortgage + monthlyTax + monthlyInsurance + monthlyMaintenance + monthlyVacancy + monthlyManagement;
    return monthlyRental - totalExpenses;
  };

  const calculateCapRate = () => {
    const annualIncome = parseFloat(rentalIncome) * 12;
    const annualTax = parseFloat(propertyTax);
    const annualInsurance = parseFloat(insurance);
    const annualMaintenance = parseFloat(maintenance);
    const annualVacancy = parseFloat(rentalIncome) * 12 * (parseFloat(vacancy) / 100);
    const annualManagement = parseFloat(rentalIncome) * 12 * (parseFloat(propertyManagement) / 100);
    
    const annualExpenses = annualTax + annualInsurance + annualMaintenance + annualVacancy + annualManagement;
    const noi = annualIncome - annualExpenses;
    return (noi / parseFloat(purchasePrice)) * 100;
  };

  const calculateCashOnCash = () => {
    const annualCashflow = calculateCashflow() * 12;
    return (annualCashflow / parseFloat(downPayment)) * 100;
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Investment Property Calculator</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Analyze potential real estate investments with our comprehensive financial calculator
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Property Details</h2>
              
              <form onSubmit={handleCalculate}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Purchase Price ($)</label>
                    <input
                      type="number"
                      value={purchasePrice}
                      onChange={(e) => setPurchasePrice(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g. 350000"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Down Payment ($)</label>
                    <input
                      type="number"
                      value={downPayment}
                      onChange={(e) => setDownPayment(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g. 70000"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Interest Rate (%)</label>
                    <input
                      type="number"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g. 4.5"
                      step="0.01"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Loan Term (years)</label>
                    <select
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="15">15 years</option>
                      <option value="20">20 years</option>
                      <option value="30">30 years</option>
                    </select>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-6">Income & Expenses</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Rental Income ($)</label>
                    <input
                      type="number"
                      value={rentalIncome}
                      onChange={(e) => setRentalIncome(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g. 2500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Annual Property Tax ($)</label>
                    <input
                      type="number"
                      value={propertyTax}
                      onChange={(e) => setPropertyTax(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g. 3600"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Annual Insurance ($)</label>
                    <input
                      type="number"
                      value={insurance}
                      onChange={(e) => setInsurance(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g. 1200"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Annual Maintenance ($)</label>
                    <input
                      type="number"
                      value={maintenance}
                      onChange={(e) => setMaintenance(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g. 2400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Vacancy Rate (%)</label>
                    <input
                      type="number"
                      value={vacancy}
                      onChange={(e) => setVacancy(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g. 5"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Property Management (%)</label>
                    <input
                      type="number"
                      value={propertyManagement}
                      onChange={(e) => setPropertyManagement(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g. 10"
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors"
                  >
                    Calculate Returns
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Investment Analysis</h2>
              
              {!showResults ? (
                <div className="text-center py-12 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <p>Enter property details and calculate to see your investment analysis</p>
                </div>
              ) : (
                <div>
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Monthly Figures</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-500">Mortgage</p>
                        <p className="text-xl font-bold text-gray-800">${calculateMortgage().toFixed(2)}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-500">Cash Flow</p>
                        <p className={`text-xl font-bold ${calculateCashflow() >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          ${calculateCashflow().toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Return Metrics</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm text-blue-700">Cap Rate</p>
                        <p className="text-2xl font-bold text-blue-800">{calculateCapRate().toFixed(2)}%</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm text-blue-700">Cash-on-Cash Return</p>
                        <p className="text-2xl font-bold text-blue-800">{calculateCashOnCash().toFixed(2)}%</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-xs text-gray-500 mb-1">
                      * Results are estimates only. Consult with a financial advisor before making investment decisions.
                    </p>
                    <button
                      onClick={() => setShowResults(false)}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Reset Calculator
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-lg p-8 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Save and Compare Your Investments</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Create a free account to save property analyses and compare multiple investment opportunities
            </p>
          </div>
          
          <div className="flex justify-center">
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md font-medium text-lg transition-colors">
              Sign Up For Free
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FinancialCalculatorPage; 