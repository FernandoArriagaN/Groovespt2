import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { LibraryItem, LibraryContainer, TitleLibrary, LibraryList, ImgAlbm, Empty, AlbumName, ShowSongLibrary, TrackListCont, TrackList, LiTrack, Track, NameArtist, LoadingText, } from "./styles";


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
    return <Empty className="empty">Nada por aqui...</Empty>;
  }

  return (
    <LibraryContainer className="library">
      <TitleLibrary className="titeLibrary">Libreria</TitleLibrary>
      <LibraryList className="libraryList">
        {library.map((item, index) => (
          <LibraryItem 
          key={index} className="libraryItem">
          <ImgAlbm className="imgAlbm"
          src={item.image} 
          alt={item.album}  />


            
              <NameArtist className="nameArtist">{item.artist}</NameArtist>
              <AlbumName className="albumName">{item.album}</AlbumName>
              <ShowSongLibrary 
                className="showSongLibrary" 
                onClick={() => toggleTracks(item.id)}>
                {selectedAlbumId === item.id ? "Ocultar canciones" : "Mostrar canciones"} 
              </ShowSongLibrary>
              
              {selectedAlbumId === item.id && (
                <TrackListCont className="trackListCont">
                  {loading ? (
                    <LoadingText>Cargando canciones...</LoadingText>
                  ) : (
                    <TrackList className="trackList">
                      {(tracks[item.id] || []).map((track) => (
                        <LiTrack className="litrak"
                        key={track.id}>
                        <Track className="track" to={`/song/${track.id}`}>{track.title}</Track>
                        </LiTrack>
                        
                      ))}
                    </TrackList>
                  )}
                </TrackListCont>
              )}
            
          </LibraryItem>
        ))}
      </LibraryList>
    </LibraryContainer>
  );
};

export default Library;
