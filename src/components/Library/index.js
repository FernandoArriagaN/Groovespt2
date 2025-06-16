import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Library = ({ library }) => {
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
          const url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${albumId}/tracks`;
          const response = await axios.get(url);
          setTracks((prev) => ({ ...prev, [albumId]: response.data.data }));
        } catch (error) {
          console.error("Error al cargar canciones:", error);
        } finally {
          setLoading(false);
        }
      }
    }
  };

  if (!library || library.length === 0) {
    return <i>nada por aqui</i>;
  }

  return (
    <section className="library">
      <h2 className="titeLibrary">Libreria</h2>
      <ul className="libraryList">
        {library.map((item, index) => (
          <li 
          key={index} className="libraryItem">
          <img className="imgAlbm"
          src={item.image} 
          alt={item.album}  />


            
              <h1 className="nameArtist">{item.artist}</h1>
              <p className="albumName"
              onClick={() => toggleTracks(item.id)}>{item.album}</p>
              
              {selectedAlbumId === item.id && (
                <article className="trackListCont">
                  {loading ? (
                    <p>Cargando canciones...</p>
                  ) : (
                    <ul className="trackList">
                      {(tracks[item.id] || []).map((track) => (
                        <li className="litrak"
                        key={track.id}>
                        <Link className="track" to={`/song/${track.id}`}>{track.title}</Link>
                        </li>
                        
                      ))}
                    </ul>
                  )}
                </article>
              )}
            
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Library;
