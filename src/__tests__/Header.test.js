import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from "../components/Header/index"
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Theme from '../theme';




describe('Header component', () => {
   it('should render header componet', () => {
        render(
         <MemoryRouter>
            <ThemeProvider theme={Theme}>
               <Header/>
            </ThemeProvider>
         </MemoryRouter>);

        const headerTitle = screen.getByText('Grooves App');
        const libraryLink = screen.getByAltText('imageLibrary');
        expect(headerTitle).toBeInTheDocument();
        expect(libraryLink).toBeInTheDocument();
   });


   it('should render library icon', () => {
      render(
         <MemoryRouter>
            <ThemeProvider theme={Theme}>
               <Header/>
            </ThemeProvider>
         </MemoryRouter>);

        const libraryLink = screen.getByAltText('imageLibrary');
        expect(libraryLink).toBeInTheDocument();
   });
});


