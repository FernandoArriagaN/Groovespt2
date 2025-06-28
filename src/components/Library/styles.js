import styled from "styled-components";
import Theme from "../../theme";
import { Link } from "react-router-dom";


const LibraryContainer = styled.section `
    background: rgba(126, 5, 126, 0.27);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(11.3px);
    border: 3px solid rgba(179, 179, 179, 0.493);
    text-align: center;
    margin: 2%;
    color: ${props => props.theme.colors.primary } ;


`
const NameArtist = styled.h1 `
    margin: 2px;


`
const LibraryList = styled.ul `
    padding: 0;
    margin: 2%;

`

const TitleLibrary = styled.h2 `
    margin: 0;
    text-align: center;
`


const AlbumName = styled.p `
    text-align: center;
    margin: 0;
    font-weight: bold;

`


const LibraryItem = styled.li `
    display: flex;
    align-items: center;
    margin: 2%;
    justify-content: space-between;
`

const ImgAlbm = styled.img `
    border-radius: 50%;
    width: 7%;
`
const TrackListCont = styled.article `
    text-align: center;
    margin: 0;
`

const LiTrack = styled.li `
    list-style: none;
    transition: ease-in-out 0.8s;


    &:hover {
        scale: 1.2;
        transition: ease-out 0.1;
        
    }
`

const Track = styled(Link) `
    color: ${props => props.theme.colors.primary} ;
    text-decoration: none;
    font-weight: bolder;

    &:hover {
        color: ${props => props.theme.colors.GroovesPurple};
    }
    
`

const TrackList = styled.ul `
    padding: 0;

`

const Empty = styled.p `
    display: flex;
    color: ${props => props.theme.colors.secondary};
    justify-content: center;
    font-weight: bold;
    font-size: 40px;

`

const LoadingText = styled.p `
    text-align: center;
`

const ShowSongLibrary = styled.button `
    height: 40px;
    width: 100px;
    font-size: 1.5vh;
    font-weight: bolder;
    color: ${props => props.theme.colors.secondary};
    background:transparent;
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(11.3px);
    border: 1px solid rgba(255, 255, 255, 0.705);
    align-items: center;
    cursor: pointer;
    transition: ease-out 0.8s;

    &:hover {
        scale: 1.2;
        transition: ease-out 0.2s;
        color: ${props => props.theme.colors.primary};
    }

`



export {       
    LibraryContainer,
    LibraryList,
    TitleLibrary,
    AlbumName,
    LibraryItem,
    TrackListCont,
    ImgAlbm,
    LiTrack,
    Track,
    TrackList,
    Empty,
    ShowSongLibrary,
    NameArtist,
    LoadingText
    
}