// src/components/CustomerList.tsx
import React from 'react';
import { CustomerCard } from './CustomerCard';
import { Customer } from '../types/Customer';
import { List, Paper } from '@mui/material';

interface Props {
  customers: Customer[];
  selectedCustomerId: number | null;
  onSelectCustomer: (customer: Customer) => void;
}

export const CustomerList: React.FC<Props> = ({ customers, selectedCustomerId, onSelectCustomer }) => (
  <Paper elevation={3} sx={{ height: '100%', maxHeight: '80vh', overflowY: 'auto' }}>
    <List disablePadding>
      {customers.map(customer => (
        <CustomerCard
          key={customer.id}
          customer={customer}
          isSelected={customer.id === selectedCustomerId}
          onClick={() => onSelectCustomer(customer)}
        />
      ))}
    </List>
  </Paper>
);