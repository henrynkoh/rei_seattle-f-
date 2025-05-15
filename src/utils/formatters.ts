/**
 * Utility functions for formatting data
 */

/**
 * Format a number as currency (USD)
 */
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(value);
};

/**
 * Format a decimal number as percentage
 */
export const formatPercentage = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value / 100);
};

/**
 * Format a number with commas for thousands
 */
export const formatNumber = (value: number): string => {
  return new Intl.NumberFormat('en-US').format(value);
};

/**
 * Format a date string to MM/DD/YYYY
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric'
  });
};

/**
 * Format a Seattle address (add WA if missing)
 */
export const formatSeattleAddress = (address: string, city?: string, zipCode?: string): string => {
  let formattedAddress = address.trim();
  
  if (city) {
    formattedAddress += `, ${city}`;
  } else if (!formattedAddress.includes('Seattle')) {
    formattedAddress += ', Seattle';
  }
  
  if (!formattedAddress.includes('WA')) {
    formattedAddress += ', WA';
  }
  
  if (zipCode) {
    formattedAddress += ` ${zipCode}`;
  }
  
  return formattedAddress;
};

/**
 * Format square footage
 */
export const formatSquareFeet = (sqft: number): string => {
  return `${formatNumber(sqft)} sq ft`;
};

/**
 * Format a property type for display
 */
export const formatPropertyType = (type: string): string => {
  const propertyTypes: Record<string, string> = {
    'SFR': 'Single Family',
    'MFR': 'Multi-Family',
    'CND': 'Condo',
    'TH': 'Townhouse',
    'LL': 'Land/Lot'
  };
  
  return propertyTypes[type] || type;
}; 