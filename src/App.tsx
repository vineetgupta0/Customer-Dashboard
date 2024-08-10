// src/App.tsx
import React, { useState } from 'react';
import { CustomerList } from './components/CustomerList';
import { CustomerDetails } from './components/CustomerDetails';
import { useCustomers } from './hooks/useCustomers';
import { Customer } from './types/Customer';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Box, Typography, Container, Grid } from '@mui/material';

const theme = createTheme();

const App: React.FC = () => {
  const { customers, loading } = useCustomers();
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  if (loading) return <Typography>Loading...</Typography>;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom align="center">
            Customer Details Portal
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={4}>
              <CustomerList
                customers={customers}
                selectedCustomerId={selectedCustomer?.id ?? null}
                onSelectCustomer={setSelectedCustomer}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <CustomerDetails customer={selectedCustomer} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;