import React from "react";
import { useNavigate } from "react-router-dom";

const ArtistList = ({ artists, onSelect }) => {
  const navigate = useNavigate();

  const handleClick = async (id, name) => {
  await onSelect(id, name);  
  navigate('/SearchResults');
};


  return (
    <section className="artisListCont">
      <h2 className="encontrados">Artistas encontrados:</h2>
      <ul className="listArt">
        {artists.map((artist) => (
          <li className="artistRes" key={artist.id}>
            <button
              className="artistSelect"
              onClick={() => handleClick(artist.id, artist.name)}
            >
              {artist.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ArtistList;
