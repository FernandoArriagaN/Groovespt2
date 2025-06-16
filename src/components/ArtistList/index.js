
const ArtistList = ({ artists, onSelect }) => (
  <section className="artisListCont">
    <h2 className="encontrados">Artistas encontrados:</h2>
    <ul className="listArt">
      {artists.map((artist) => (
        <li className="artistRes"
         key={artist.id} >
          <button className="artistSelect" 
          onClick={() => onSelect(artist.id, artist.name)}>
            {artist.name}
          </button>
        </li>
      ))}
    </ul>
  </section>
);


export default ArtistList; 