// src/hooks/useCustomers.ts
import { useState, useEffect } from 'react';
import { Customer } from '../types/Customer';

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

export const useCustomers = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mockCustomers: Customer[] = Array.from({ length: 1000 }, (_, i) => ({
      id: i + 1,
      name: `Customer ${i + 1}`,
      title: `Title ${i + 1}`,
      address: `Address ${i + 1}`,
      details: loremIpsum,
    }));
    setCustomers(mockCustomers);
    setLoading(false);
  }, []);

  return { customers, loading };
};