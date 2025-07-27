
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Theme from "../theme";
import Library from "../components/Library";
import SearchInput from "../components/SearchInput"
import SearchResults from "../components/SearchResults"
import axios from "axios";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from "../redux/slices/librarySlice";
import '@testing-library/jest-dom';



jest.mock('axios', () => ({
    get: jest.fn(() => Promise.resolve({data: {data: []}})),
}));


const renderStatus = (preloadedState) => {
   
const mockAlbums = [
  {
    id: 1,
    artistName:"Nine",
    title: "Closer",
    cover_medium: "album_coverNine.jpg",
    
  },
  {
    id: 2,
    artistName:"Oasis",
    title: "Yellow",
    cover_medium: "album_cover.jpg",
  }
];

   const store = configureStore({
        reducer: {library: libraryReducer},
        preloadedState,
    })
  return render(
      <Provider store={store}>
        <MemoryRouter>
          <ThemeProvider theme={Theme}>
            <Header/>
                <SearchInput/>
                <Library />
                <SearchResults albums={mockAlbums}/>
          </ThemeProvider>
        </MemoryRouter>
      </Provider>
    );
     
}


  

describe('App test', () => {


    it('should render components', () => {
 
        renderStatus();

        const headerTitle = screen.getByText('Grooves App');
        const inputSearch = screen.getByPlaceholderText('BUSQUEDA DE ARTISTA');
        const libraryText = screen.getByText('Nada por aqui...')
        expect(headerTitle).toBeInTheDocument();
        expect(inputSearch).toBeInTheDocument();
        expect (libraryText).toBeInTheDocument();

    });


    it('should change input ', () => {
        const mockSetSearch= jest.fn();
        render(<SearchInput setSearch={mockSetSearch} />);
        
        const input = screen.getByPlaceholderText('BUSQUEDA DE ARTISTA');
        fireEvent.change(input, {target: {value: 'metallica'} } );
       expect(mockSetSearch).toHaveBeenCalledWith('metallica');
    });

    it('should ', () => {
      
      
      const preloadedState = {
              library: {
                library: [
                  {
                    id: 25,
                    artist: 'Sound Garden',
                    album: 'Black Hole Sun',
                    image: 'album_coverSound.jpg',
                  }
                ]
              }
            };
      
            renderStatus(preloadedState);
          expect(screen.getByText('Sound Garden')).toBeInTheDocument();
    });

})

