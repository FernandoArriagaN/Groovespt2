import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AddLibrary, Albums, ArtistName, ContSong, ImgAlbum, ListCont, Loading, SearchResutlsContainter, ShowSongs, Song, SongLink, SongsList } from "./styles";


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
    <SearchResutlsContainter className="searchResutlsContainter">
      {albums.map((album) => (
        <Albums className="albums" 
          key={album.id}>
          <ImgAlbum className="imgAlbum" src={album.cover_medium} alt={album.title} />
          <ArtistName className="artistName">{artistName}</ArtistName>
          <SongLink className="songLink" >{album.title}</SongLink>
          <ShowSongs className="showSongs" onClick={() => toggleTracks(album.id)}> 
            {selectedAlbumId === album.id ? "Ocultar canciones" : "Mostrar canciones"}
          </ShowSongs>
          
                    
          {selectedAlbumId === album.id && (
            <ListCont className="listCont">
              {loading ? (
                <Loading>Cargando canciones...</Loading>
              ) : (
                <ContSong className="contSongs">
                  {tracks[album.id]?.map((track) => (
                    <SongsList className="songsList"
                      key={track.id}>
                      <Song className="song" to={`/song/${track.id}`}>{track.title}</Song>
                    </SongsList>
                  ))}
                </ContSong>
              )}
            </ListCont>
          )}

          <AddLibrary
          className="addLibrary" 
          onClick={() => {
            
            onAddToLibrary({ album, artistName });
          }}
>
            Agregar a Libreria
            
          </AddLibrary>

          
        </Albums>
      ))}
    </SearchResutlsContainter>
  );
};

export default SearchResults;

