import React from "react";
import { useNavigate } from "react-router-dom";
import { ArtistListCont,ArtistRes,ArtistSelect,Encontrados, ListArt } from "./styles";

const ArtistList = ({ artists, onSelect }) => {
  const navigate = useNavigate();

  const handleClick = async (id, name) => {
  await onSelect(id, name);  
  navigate('/SearchResults');
};


  return (
    <ArtistListCont className="artisListCont">
      <Encontrados className="encontrados">Artistas encontrados:</Encontrados>
      <ListArt className="listArt">
        {artists.map((artist) => (
          <ArtistRes className="artistRes" key={artist.id}>
            <ArtistSelect
              className="artistSelect"
              onClick={() => handleClick(artist.id, artist.name)}
            >
              {artist.name}
            </ArtistSelect>
          </ArtistRes>
        ))}
      </ListArt>
    </ArtistListCont>
  );
};

export default ArtistList;
