// src/hooks/useFetchAlbums.js
import { useState } from "react";
import axios from "axios";

const useFetchAlbums = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAlbums = async (artistId) => {
    if (!artistId) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${artistId}/albums`
      );
      setAlbums(response.data.data);
    } catch (err) {
      setError("Error al obtener los álbumes");
      setAlbums([]);
    } finally {
      setLoading(false);
    }
  };

  return { albums, fetchAlbums, loading, error };
};

export default useFetchAlbums;
