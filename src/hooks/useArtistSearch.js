import { useState } from 'react';
import axios from 'axios';




const useArtistSearch = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const searchArtists = async (searchTerm) => {
    if (!searchTerm) return;

    setLoading(true);
    setError(null);
    setSuccess(false);
    setArtists([]);

    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=${searchTerm}`
      );
      setArtists(response.data.data);
     if (response.data.data.length)
      setSuccess(true);
    } catch (err) {
      setError('No se pudo buscar artistas.');
    } finally {
      setLoading(false);
    }
  };

  return {
    artists,
    searchArtists,
    loading,
    error,
    success
  };
};

export default useArtistSearch;
