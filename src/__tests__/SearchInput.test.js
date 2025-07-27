import { fireEvent, render, screen } from "@testing-library/react"
import SearchInput from "../components/SearchInput";
import '@testing-library/jest-dom';


describe('erarch imput compomponet', () => {

    it('should render input', () => {
        render(<SearchInput/>);
        const inputSearch = screen.getByPlaceholderText('BUSQUEDA DE ARTISTA');
        expect(inputSearch).toBeInTheDocument();
    });

    it('should change input ', () => {
        const mockSetSearch= jest.fn();
        render(<SearchInput setSearch={mockSetSearch} />);
        
        const input = screen.getByPlaceholderText('BUSQUEDA DE ARTISTA');
        fireEvent.change(input, {target: {value: 'metallica'} } );
       expect(mockSetSearch).toHaveBeenCalledWith('metallica');
      
    });


    it('should search on click ', () => {
        const mockHandleSearch = jest.fn();
        render(<SearchInput search="Oasis"  handleSearch={mockHandleSearch}/> );

        const ButtonImput = screen.getByText('Buscar');
        fireEvent.click(ButtonImput);
        expect(mockHandleSearch.mock.calls[0].length).toBe(1)
    });


    it('should change input ', () => {
        const mockHandleSearch = jest.fn();
        render(<SearchInput handleSearch={mockHandleSearch} />);

        const input = screen.getByPlaceholderText('BUSQUEDA DE ARTISTA');
        fireEvent.keyDown(input,  {key: 'Enter'} );
       expect(mockHandleSearch).toHaveBeenCalledTimes(1);
      
    });
})