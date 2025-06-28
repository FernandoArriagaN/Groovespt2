import React from "react";
import { ButtonImput, InputContainer, InputSearch, LabelInput, TitleContainer, TitleSearch } from "./styles";



const SearchInput = ({search, setSearch, handleSearch}) => (


  
    <InputContainer className="imputContainer">
        <TitleContainer className="titleContainer">
            <TitleSearch className="titleSearch">Busqueda por Artista</TitleSearch>
        </TitleContainer>
        <InputSearch className="inputSearch">
            <LabelInput placeholder="BUSQUEDA DE ARTISTA" className="labelInput"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSearch();
              }
            } }
            />
            <ButtonImput className="buttonInput" 
            onClick={handleSearch}
            
            > 
            Buscar </ButtonImput>
        </InputSearch>
    </InputContainer>
);

export default SearchInput;