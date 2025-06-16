import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const SearchResults = ({ albums, artistName, onAddToLibrary }) => {
  const [selectedAlbumId, setSelectedAlbumId] = useState(null);
  const [tracks, setTracks] = useState({});
  const [loading, setLoading] = useState(false);

  const toggleTracks = async (albumId) => {
    if (selectedAlbumId === albumId) {
      setSelectedAlbumId(null);
    } else {
      setSelectedAlbumId(albumId);
      if (!tracks[albumId]) {
        setLoading(true);
        try {
          const response = await axios.get(
            `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${albumId}/tracks`
          );
          setTracks((prev) => ({ ...prev, [albumId]: response.data.data }));
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
    }
  };

  return (
    <section className="searchResutlsContainter">
      {albums.map((album) => (
        <article className="albums" 
          key={album.id}>
          <img className="imgAlbum" src={album.cover_medium} alt={album.title} />
          <h1 className="artistName">{artistName}</h1>
          <p className="songLink" onClick={() => toggleTracks(album.id)}>{album.title}</p>
          
                    
          {selectedAlbumId === album.id && (
            <article className="listCont">
              {loading ? (
                <p>Cargando canciones...</p>
              ) : (
                <ul className="contSongs">
                  {tracks[album.id]?.map((track) => (
                    <li className="songsList"
                      key={track.id}>
                      <Link className="song" to={`/song/${track.id}`}>{track.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          )}

          <button
          className="addLibrary" 
          onClick={() => onAddToLibrary({ album, artistName })}>
            Agregar a Libreria
          </button>

          
        </article>
      ))}
    </section>
  );
};

export default SearchResults;

