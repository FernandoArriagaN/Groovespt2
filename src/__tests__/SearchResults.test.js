import { MemoryRouter } from "react-router-dom";
import SearchResults from "../components/SearchResults";
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from "axios";
import { ThemeProvider } from "styled-components";
import Theme from "../theme";


jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: { data: [] } })),
}));

const mockHandleAddToLibrary = jest.fn();

const mockAlbums = [
  {
    id: 1,
    artistName:"Nine",
    title: "Closer",
    cover_medium: "album_coverNine.jpg",
    tracks: [
      {
        id:'2654', title: 'Fragile',
        id:'6254', title: 'Head Like a Hole',
        id:'8944', title: 'SomeWhat '
      }
    ]
    
  },
  {
    id: 2,
    artistName:"Oasis",
    title: "Dont Believe The Truth",
    cover_medium: "album_coverOasis.jpg",
    tracks: [
      {
        id:'56', title: 'Lyla',
        id:'613', title: 'Love Like a Bomb',
        id:'298', title: 'Keep The Dreem Alive'
      }
    ]
  }
];

describe('SearchResults component', () => {
  it('should render fetched albums', async () => {
    axios.get.mockResolvedValue({
      data: {
        data: mockAlbums 
      }
    });

    render(
      <MemoryRouter>
        <ThemeProvider theme={Theme}>
            <SearchResults albums={mockAlbums} />
        </ThemeProvider>
      </MemoryRouter>
    );

    expect(screen.getByText('Dont Believe The Truth')).toBeInTheDocument();
    expect(screen.getByText('Closer')).toBeInTheDocument();
    expect(screen.getByText('Oasis')).toBeInTheDocument();
    expect(screen.getByText('Nine')).toBeInTheDocument();

});


it('should add to my library', () => {
  render(
      <MemoryRouter>
        <ThemeProvider theme={Theme}>
            <SearchResults albums={mockAlbums} artistName="Nine" onAddToLibrary={mockHandleAddToLibrary} />
        </ThemeProvider>
      </MemoryRouter>
    );

    const buttons = screen.getAllByRole('button');
    
    fireEvent.click(buttons[1]); 
    expect(mockHandleAddToLibrary).toHaveBeenCalledWith({
      album: mockAlbums[0],
      artistName: "Nine"
    });
   });

   it('should show songs on click', () => {
    const mockHandleSearch = jest.fn();

    render(<MemoryRouter>
        <ThemeProvider theme={Theme}>
            <SearchResults albums={mockAlbums} artistName="Nine" handleSearch={mockHandleSearch} />
        </ThemeProvider>
      </MemoryRouter>);

    const songsButtons = screen.getAllByText('Mostrar canciones');
    fireEvent.click(songsButtons[0]);


    expect (songsButtons[0]).toBeInTheDocument();
   });

});
