import { useState } from "react";
import axios from "axios";

const useFetchAlbums = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [succes, setSucces] = useState(false);

  const fetchAlbums = async (artistId) => {
    if (!artistId) return;

    setLoading(true);
    setError(null);
    setSucces(false);
    try {
      const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${artistId}/albums`);

      const data = response.data?.data || [];

      if (data.length === 0) {
        setError("Este artista no tiene albumes disponibles");
        setAlbums([]);
      } else {
        setAlbums(data);
        setSucces(true);
      }
    } catch (err) {
      setError("Error al obtener los álbumes");
      setAlbums([]);
    }
      finally {
            setLoading(false);
          }
  };

  return { albums, fetchAlbums, loading, error, succes };
};
export default useFetchAlbums;
