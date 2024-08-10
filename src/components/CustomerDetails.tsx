// src/components/CustomerDetails.tsx
import React from 'react';
import { Customer } from '../types/Customer';
import { PhotoGrid } from './PhotoGrid';
import { usePhotos } from '../hooks/usePhotos';
import { Typography, Paper, Box } from '@mui/material';

interface Props {
  customer: Customer | null;
}

export const CustomerDetails: React.FC<Props> = ({ customer }) => {
  const photos = usePhotos();

  if (!customer) return (
    <Paper elevation={3} sx={{ p: 3, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Typography>Select a customer to view details</Typography>
    </Paper>
  );

  return (
    <Paper elevation={3} sx={{ p: 3, height: '100%', maxHeight: '80vh', overflowY: 'auto' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>{customer.name}</Typography>
        <Typography variant="subtitle1"><strong>Title:</strong> {customer.title}</Typography>
        <Typography variant="body1" paragraph><strong>Address:</strong> {customer.address}</Typography>
        <Typography variant="body1" paragraph><strong></strong> {customer.details}</Typography>

        <Typography variant="h5" gutterBottom>Photos</Typography>
        <Box sx={{ mt: 2 }}>
          <PhotoGrid photos={photos} />
        </Box>
      </Box>
    </Paper>
  );
}