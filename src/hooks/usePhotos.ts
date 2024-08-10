// src/hooks/usePhotos.ts
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Photo } from '../types/Photo';

// Interface for environment variables (optional but recommended)
interface Environment {
  REACT_APP_UNSPLASH_ACCESS_KEY: string;
}

export const usePhotos = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  const apiKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY as string;

  const fetchPhotos = async () => {
    try {
      const response = await axios.get('https://api.unsplash.com/photos/random', {
        params: { count: 9, client_id: apiKey  },
      });
      setPhotos(response.data.map((photo: any) => ({ id: photo.id, url: photo.urls.small })));
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  useEffect(() => {
    fetchPhotos();
    const interval = setInterval(fetchPhotos, 10000);
    return () => clearInterval(interval);
  }, []);

  return photos;
};