// src/components/CustomerCard.tsx
import React from 'react';
import { Customer } from '../types/Customer';
import { ListItemButton, ListItemText, Typography } from '@mui/material';

interface Props {
  customer: Customer;
  isSelected: boolean;
  onClick: () => void;
}

export const CustomerCard: React.FC<Props> = React.memo(({ customer, isSelected, onClick }) => (
  <ListItemButton 
    onClick={onClick}
    selected={isSelected}
    sx={{ 
      width: '100%',
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
      '&:last-child': {
        borderBottom: 'none',
      },
    }}
  >
    <ListItemText
      primary={<Typography variant="subtitle1">{customer.name}</Typography>}
      secondary={<Typography variant="body2">{customer.details}</Typography>}
    />
  </ListItemButton>
));