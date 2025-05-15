"use client";

import { useState, useCallback } from 'react';
import apiService, { Property, SearchFilters } from '../services/api';

interface UsePropertySearchReturn {
  properties: Property[];
  loading: boolean;
  error: string | null;
  search: (filters: SearchFilters) => Promise<void>;
  searchByAddress: (address: string) => Promise<void>;
  totalResults: number;
}

export const usePropertySearch = (): UsePropertySearchReturn => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [totalResults, setTotalResults] = useState<number>(0);

  const search = useCallback(async (filters: SearchFilters) => {
    setLoading(true);
    setError(null);
    
    try {
      const results = await apiService.searchProperties(filters);
      setProperties(results);
      setTotalResults(results.length);
    } catch (err) {
      console.error('Error searching properties:', err);
      setError('Failed to search properties. Please try again.');
      setProperties([]);
      setTotalResults(0);
    } finally {
      setLoading(false);
    }
  }, []);
  
  const searchByAddress = useCallback(async (address: string) => {
    if (!address.trim()) {
      setError('Please enter an address to search');
      return;
    }
    
    setLoading(true);
    setError(null);
    
    // Format address for Seattle if not specified
    const formattedAddress = address.toLowerCase().includes('seattle') 
      ? address 
      : `${address}, Seattle, WA`;
    
    try {
      // Create a filter that searches by address string
      const results = await apiService.searchProperties({
        address: formattedAddress
      });
      
      setProperties(results);
      setTotalResults(results.length);
    } catch (err) {
      console.error('Error searching by address:', err);
      setError('Failed to find property at this address. Please check and try again.');
      setProperties([]);
      setTotalResults(0);
    } finally {
      setLoading(false);
    }
  }, []);
  
  return {
    properties,
    loading,
    error,
    search,
    searchByAddress,
    totalResults
  };
};

export default usePropertySearch; 