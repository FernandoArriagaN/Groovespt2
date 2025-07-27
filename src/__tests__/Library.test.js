import { MemoryRouter } from "react-router-dom";
import { screen, render, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from "axios";
import { ThemeProvider } from "styled-components";
import Theme from "../theme";
import Library from "../components/Library";
import libraryReducer from "../redux/slices/librarySlice";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";


  jest.mock('axios', () => ({
    get: jest.fn(() => Promise.resolve({ data: { data: [] } })),
  }));



  
  const renderStatus = (preloadedState) => {
    const store = configureStore({
      reducer: {library: libraryReducer},
      preloadedState,
    })
  return render(
      <Provider store={store}>
        <MemoryRouter>
          <ThemeProvider theme={Theme}>
            <Library />
          </ThemeProvider>
        </MemoryRouter>
      </Provider>
    );
     
  }

  

describe('Library component', () => {


  it('should render album from state', () => {
   
   const preloadedState = {
        library: {
          library: [
            {
              id: 5,
              artist: 'Nine',
              album: 'Closer',
              image: 'album_coverNine.jpg',
            }
          ]
        }
      };

      renderStatus(preloadedState);
    expect(screen.getByText('Nine')).toBeInTheDocument();
    
  });


  it('should remove album when button is clicked ', () => {
    
    const preloadedState = {
        library: {
          library: [
            {
              id: 5,
              artist: 'Metallica',
              album: 'Master of Puppets',
              image: 'album_coverMetallica.jpg',
            }
          ]
        }
      };

      renderStatus(preloadedState);
    const buttonDelete = screen.getByAltText('Eliminar Album');
    fireEvent.click(buttonDelete);


    expect(screen.queryByText('Metallica')).not.toBeInTheDocument();
  });


  it('should show a message when library is empty ', () => {
    const preloadedState = {
      library: {
        library: []
      }
    };

    renderStatus(preloadedState);
    expect(screen.getByText('Nada por aqui...')).toBeInTheDocument();
  });



  it('should show songs on click', async () => {
    
    axios.get.mockResolvedValueOnce({
    data:{
      data: [
              {id:'2654', title: 'Fragile'},
              {id:'6254', title: 'Head Like a Hole'},
              {id:'8944', title: 'SomeWhat '}
          ]
    }
})
    const preloadedState = {
        library: {
          library: [
            {
              id: 5,
              artist: 'Nine',
              album: 'Closer',
              image: 'album_coverNine.jpg',
             
            }
          ]
        }
      };

    renderStatus(preloadedState);

    const songsButtons = screen.getAllByText('Mostrar canciones');
    await act(async () => {
      fireEvent.click(songsButtons[0]);
    })

      const song = await screen.getByText('Fragile');
    expect(song).toBeInTheDocument();
   });
});
