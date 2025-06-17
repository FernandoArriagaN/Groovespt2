import React from "react";



const SearchInput = ({search, setSearch, handleSearch}) => (


  
    <section className="imputContainer">
        <article className="titleContainer">
            <h1 className="titleSearch">Busqueda por Artista</h1>
        </article>
        <article className="inputSearch">
            <input placeholder="BUSQUEDA DE ARTISTA" className="labelInput"
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
            <button className="buttonInput" 
            onClick={handleSearch}
            
            > 
            Buscar </button>
        </article>
    </section>
);

export default SearchInput;