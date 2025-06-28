import React, { useState }  from 'react';
import Header from './components/Header';
import Library from './components/Library';
import SearchResults from './components/SearchResults';
import ArtistList from './components/ArtistList';
import SearchInput from './components/SearchInput';
import SongDetail from './components/SongDetail';
import { Route, Routes, useNavigate } from 'react-router-dom';

import useArtistSearch from './hooks/useArtistSearch';
import useFetchAlbums from './hooks/useFetchAlbums'
import { ThemeProvider } from 'styled-components';
import Theme from './theme'
import GlobalStyle from './theme/GlobalStyles';
import { AddToLibrary } from './styles';





const App = () => {
  const [library, setLibrary] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedArtistName, setSelectedArtistName] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();


  const {
    artists,
    searchArtists,
    loading: loadingArtists,
    error: errorArtists,
    success: successArtists
  } = useArtistSearch();

  const {
    albums,
    fetchAlbums,
    loading: loadingAlbums,
    error: errorAlbums,
    succes: successAlbums,
  } = useFetchAlbums();


  console.log("Álbumes cargados:", albums);

  const handleSearch = () => {
    searchArtists(search);
    setSelectedArtistName('');
  };

  const handleSelectArtist = async (id, name) => {
    setSelectedArtistName(name);
    await fetchAlbums(id, name);
    navigate('/SearchResults');
    
  };

  const handleGoHome = () => {
    setSelectedArtistName('');
    navigate('/');
  }

  const handleAddToLibrary = ({ album, artistName }) => {
  if (!library.some((item) => item.id === album.id)) {
    setLibrary([
      ...library,
      {
        id: album.id,
        album: album.title,
        artist: artistName,
        image: album.cover_medium,
      },
    ]);
    setMessage("Agregado a Libreria");
    setTimeout(() => setMessage(""),1500)
  }
};



  console.log(handleAddToLibrary)

  return (

    <ThemeProvider theme={ Theme }>
      <GlobalStyle/>
      <main>
        <Header />

        {message && (
          <AddToLibrary className='addToLibrary'>{message} </AddToLibrary>
        )}

        <Routes>
          <Route
          path='/'
          element = { 
            <>
              <SearchInput
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
              />

              {loadingArtists && <p>Buscando artistas...</p>}
              {errorArtists && <p>{errorArtists}</p>}
              {successArtists && artists.length === 0 && <p>No se encontraron artistas.</p>}

              {artists.length > 0 && !selectedArtistName && (
                <ArtistList 
                artists={artists} 
                onSelect={handleSelectArtist} />
              )}


            </>
          }
          />

          <Route
            path="/SearchResults"
            element={
              <>
                {loadingAlbums && <p>Cargando álbumes...</p>}
                {errorAlbums && <p>{errorAlbums}</p>}
                {successAlbums && albums.length > 0 && selectedArtistName &&(
                  <SearchResults
                    albums={albums}
                    artistName={selectedArtistName}
                    onAddToLibrary={handleAddToLibrary}
                  />
                )}
              </>
            }
          />

          <Route 
            path="/song/:id" 
            element={<SongDetail />} />
        
            <Route
            path="/library" 
            element={<Library library={library} />}
            />

        </Routes>
      
      </main>
    </ThemeProvider>
  );
};


export default App;
