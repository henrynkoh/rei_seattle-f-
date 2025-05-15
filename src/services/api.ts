import axios from 'axios';

// Property interface based on usage in the usePropertySearch hook
export interface Property {
  id: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  propertyType: string;
  yearBuilt: number;
  lotSize: number;
  createdAt: string;
  updatedAt: string;
  mlsNumber?: string;
  neighborhood?: string;
  county?: string;
  images?: string[];
  // Added financial metrics
  arv?: number;
  estimatedRent?: number;
  piti?: number;
  cashFlow?: number;
  capRate?: number;
  cashOnCash?: number;
  roi?: number;
  equity?: number;
  dom?: number; // Days on market
}

// Search filters interface
export interface SearchFilters {
  address?: string;
  neighborhood?: string;
  county?: string;
  minPrice?: number;
  maxPrice?: number;
  minBeds?: number;
  maxBeds?: number;
  minBaths?: number;
  maxBaths?: number;
  minSqft?: number;
  maxSqft?: number;
  propertyType?: string;
  radius?: number;
  lat?: number;
  lng?: number;
  sort?: string;
  page?: number;
  limit?: number;
}

// Base API URL from environment variable
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.pellego.local';

// API service with methods for property-related operations
const apiService = {
  // Search properties with filters
  searchProperties: async (filters: SearchFilters): Promise<Property[]> => {
    try {
      // For development, return mock data if no API URL is set
      if (process.env.NODE_ENV === 'development' && !process.env.NEXT_PUBLIC_API_URL) {
        return mockProperties;
      }
      
      const response = await axios.get(`${API_URL}/properties`, { params: filters });
      return response.data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },

  // Get a single property by ID
  getProperty: async (id: string): Promise<Property> => {
    try {
      // For development, return mock data if no API URL is set
      if (process.env.NODE_ENV === 'development' && !process.env.NEXT_PUBLIC_API_URL) {
        const property = mockProperties.find(p => p.id === id);
        if (!property) throw new Error('Property not found');
        return property;
      }
      
      const response = await axios.get(`${API_URL}/properties/${id}`);
      return response.data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }
};

// Mock data for development
const mockProperties: Property[] = [
  {
    id: "1",
    address: "123 Main St",
    city: "Seattle",
    state: "WA",
    zipCode: "98101",
    price: 750000,
    beds: 3,
    baths: 2,
    sqft: 1800,
    propertyType: "SFR",
    yearBuilt: 1985,
    lotSize: 5500,
    createdAt: "2023-01-15T08:00:00.000Z",
    updatedAt: "2023-01-15T08:00:00.000Z",
    neighborhood: "Capitol Hill",
    county: "King",
    mlsNumber: "2034981",
    images: [
      "https://placehold.co/600x400?text=Property+Image+1",
      "https://placehold.co/600x400?text=Property+Image+2"
    ],
    arv: 835000,
    estimatedRent: 3200,
    piti: 4150,
    cashFlow: 380,
    capRate: 5.1,
    cashOnCash: 7.2,
    roi: 12.4,
    equity: 20,
    dom: 4
  },
  {
    id: "2",
    address: "456 Pine Ave",
    city: "Bellevue",
    state: "WA",
    zipCode: "98005",
    price: 950000,
    beds: 4,
    baths: 2.5,
    sqft: 2200,
    propertyType: "SFR",
    yearBuilt: 2005,
    lotSize: 4200,
    createdAt: "2023-01-16T09:30:00.000Z",
    updatedAt: "2023-01-16T09:30:00.000Z",
    neighborhood: "Downtown",
    county: "King",
    mlsNumber: "2045672",
    images: [
      "https://placehold.co/600x400?text=Property+Image+1",
      "https://placehold.co/600x400?text=Property+Image+2"
    ],
    arv: 950000,
    estimatedRent: 3900,
    piti: 5200,
    cashFlow: 210,
    capRate: 4.9,
    cashOnCash: 6.8,
    roi: 10.2,
    equity: 15,
    dom: 12
  },
  {
    id: "3",
    address: "789 Spruce Rd",
    city: "Tacoma",
    state: "WA",
    zipCode: "98406",
    price: 579900,
    beds: 3,
    baths: 2.5,
    sqft: 1534,
    propertyType: "SFR",
    yearBuilt: 2018,
    lotSize: 6733,
    createdAt: "2023-02-01T10:15:00.000Z",
    updatedAt: "2023-02-01T10:15:00.000Z",
    neighborhood: "Lake Tapps",
    county: "Pierce",
    mlsNumber: "2053891",
    images: [
      "https://placehold.co/600x400?text=Property+Image+1",
      "https://placehold.co/600x400?text=Property+Image+2"
    ],
    arv: undefined, // Restricted
    estimatedRent: 2900,
    piti: 3831,
    cashFlow: 312,
    capRate: 5.8,
    cashOnCash: 7.8,
    roi: 13.6,
    equity: 20,
    dom: 0
  }
];

export default apiService; 