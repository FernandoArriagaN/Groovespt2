import React, { useState }  from 'react';
import Header from './components/Header';
import Library from './components/Library';
import SearchResults from './components/SearchResults';
import ArtistList from './components/ArtistList';
import SearchInput from './components/SearchInput';
import SongDetail from './components/SongDetail';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Theme from './theme'
import GlobalStyle from './theme/GlobalStyles';
import { AddToLibrary, ErrorMsg, MsgSearching } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { addAlbum,  } from './redux/slices/librarySlice';
import { fetchArtist } from './redux/slices/searchSlice';
import { fetchAlbums } from './redux/slices/albumsSlice';





const App = () => {
  const dispatch = useDispatch();
  const loadingArtists = useSelector(state => state.search.loading);
  const errorArtists = useSelector(state => state.search.error);
  const artists = useSelector(state => state.search.results);
  const successArtists = !loadingArtists && !errorArtists && artists.length > 0;
 
  const albums = useSelector(state => state.albums.albums);
  const loadingAlbums = useSelector(state => state.albums.loading);
  const errorAlbums = useSelector(state => state.albums.error);
  const successAlbums = !loadingAlbums && !errorAlbums && albums.length > 0;

  const library = useSelector((state) => state.library.library);
  const [search, setSearch] = useState('');
  const [selectedArtistName, setSelectedArtistName] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();



  const handleSearch = () => {
    if(search.trim() === "") {
      return;
    }
    dispatch(fetchArtist(search));
    setSelectedArtistName('');
  };

  const handleSelectArtist =  (id, name) => {
    setSelectedArtistName(name);
    dispatch(fetchAlbums(id));
    navigate('/SearchResults');
    
  };

  const handleGoHome = () => {
    setSelectedArtistName('');
    navigate('/');
  }



  const handleAddToLibrary = ({ album, artistName }) => {
  
    if (!library.some((item) => item.id === album.id)) {
    dispatch(addAlbum({
        id: album.id,
        album: album.title,
        artist: artistName,
        image: album.cover_medium,
      }));
    setMessage("Agregado a Libreria");
    setTimeout(() => setMessage(""),1500)
  }
};


 

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

              {loadingArtists && <MsgSearching>Buscando Artistas...</MsgSearching>}
              {errorArtists && <ErrorMsg>{errorArtists}</ErrorMsg>}
              {successArtists && artists.length === 0 && <p>No se encontraron artistas...</p>}

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
                {loadingAlbums && <MsgSearching>Cargando álbumes...</MsgSearching>}
                {errorAlbums && <ErrorMsg>{errorAlbums}</ErrorMsg>}
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
            element={<Library library={library} />} />

        </Routes>
      
      </main>
    </ThemeProvider>
  );
};


export default App;
