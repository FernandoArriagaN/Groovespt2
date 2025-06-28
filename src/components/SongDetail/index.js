import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { AlbumName, ArtistName, LetrasExplicitas, SongCover, SongDetailsCont, TrackTitle } from './styles';

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
    <SongDetailsCont className='songDetalisCont'>
      {track && (
        <>
          <SongCover className='songCover' src={track.album?.cover} alt={track.album?.title} />
          <TrackTitle>{track.title}</TrackTitle>
          <ArtistName>{track.artist?.name}</ArtistName>
          <AlbumName>{track.album?.title}</AlbumName>
          <LetrasExplicitas $ExplicitLiryc={track.explicit_lyrics}> 
            {track.explicit_lyrics?  "Contiene Letras Explicitas" : "No Contiene Letras Explicitas" } </LetrasExplicitas>


          <audio controls src={ track.preview} />
          
        </>
      )}
    </SongDetailsCont>
  );
}

export default SongDetail;
