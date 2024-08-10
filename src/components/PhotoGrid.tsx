// src/components/PhotoGrid.tsx
import React from 'react';
import { Photo } from '../types/Photo';
import { Grid, Box } from '@mui/material';

interface Props {
  photos: Photo[];
}

export const PhotoGrid: React.FC<Props> = ({ photos }) => (
  <Grid container spacing={2}>
    {photos.map(photo => (
      <Grid item xs={4} key={photo.id}>
        <Box
          component="img"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            aspectRatio: '1 / 1',
            borderRadius: '12px', // This makes the image edges round
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
          src={photo.url}
          alt="Random"
        />
      </Grid>
    ))}
  </Grid>
);