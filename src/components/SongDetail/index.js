import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function SongDetail() {
  const { id } = useParams();
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrack = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`
        );
        setTrack(response.data);
      } catch (err) {
        setError('Error al cargar los detalles de la canción');
      } finally {
        setLoading(false);
      }
    };

    fetchTrack();
  }, [id]);

  if (loading) return <p>Cargando detalles...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className='songDetalisCont'>
      {track && (
        <>
          <img className='songCover' src={track.album?.cover} alt={track.album?.title} />
          <h2>{track.title}</h2>
          <p>{track.artist?.name}</p>
          <p>{track.album?.title}</p>
          <audio controls src={ track.preview} />
          
        </>
      )}
    </section>
  );
}

export default SongDetail;
