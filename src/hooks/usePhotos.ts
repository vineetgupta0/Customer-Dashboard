import { useState, useEffect } from 'react';
import axios from 'axios';
import { Photo } from '../types/Photo';
import { wait } from '@testing-library/user-event/dist/utils';

// Interface for environment variables (optional but recommended)
interface Environment {
  REACT_APP_UNSPLASH_ACCESS_KEYS: string; // Comma-separated list of access keys
}

export const usePhotos = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [currentApiKeyIndex, setCurrentApiKeyIndex] = useState(0); // Index for current API key

  const apiKeyList = (process.env.REACT_APP_UNSPLASH_ACCESS_KEYS || '').split(','); // Get keys from env var

  const fetchPhotos = async () => {
    try {
      const apiKey = apiKeyList[currentApiKeyIndex];
      const response = await axios.get('https://api.unsplash.com/photos/random', {
        params: { count: 9, client_id: apiKey },
      });
      setPhotos(response.data.map((photo: any) => ({ id: photo.id, url: photo.urls.small })));
    } catch (error) {
      console.error('Error fetching photos:', error);
        // Move to the next API key if available
        const nextIndex = (currentApiKeyIndex + 1) % apiKeyList.length;
        setCurrentApiKeyIndex(nextIndex);
        //fetchPhotos(); // Retry with the next key
        wait(100);
    }
  };

  useEffect(() => {
    fetchPhotos();
    const interval = setInterval(fetchPhotos, 10000); // Fetch every 10 seconds

    return () => clearInterval(interval);
  }, [currentApiKeyIndex]); // Refetch photos when the current API key changes

  return photos;
};