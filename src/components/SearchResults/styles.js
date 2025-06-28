import styled, { keyframes } from "styled-components";
import Theme from "../../theme";
import { Link } from "react-router-dom";


const SearchResutlsContainter = styled.section `
    margin: 2%;
    background: rgba(255, 255, 255, 0.27);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(11.3px);
    border: 3px solid rgba(179, 179, 179, 0.493);
    align-items: center;
`

const Albums = styled.article `
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 2%;
    justify-content: space-between;

`

const ImgAlbum = styled.img `
    border-radius: 50%;
    width: 80px;
`
const ArtistName = styled.h1 `
    text-align: center;
` 

const SongLink = styled.p `
    text-align: center;
` 

const Loading = styled.p ` 
    text-align: center;
` 

const ShowSongs = styled.button `
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

    &:hover{
        scale: 1.2;
        transition: ease-out 0.2s;
    }

`


const SongsList = styled.li `
    display: flex;
    justify-content: center;
` 


const ColorsTransition = keyframes `
     13% {
    color: ${props => props.theme.colors.secondary};
  }

  85.5% {
    color: #5c015c;
  }
`


const Song = styled(Link) `
    text-decoration: none;
    color: #000;
    font-weight: bolder;
    cursor: pointer;
    transition:  scale ease-out 0.8s;

    &:hover {
        transition: ease-in 0.2s;
        scale: 1.1;
        animation: ${ColorsTransition} 5s infinite alternate ease-in-out;
    }
`



const ListCont = styled.article `
    text-align: center;
    overflow: scroll;
    scrollbar-width: thin;

`

const ContSong = styled.ul `
    padding: 0;
    margin: 0;
    height: 80px;
`
const AddLibrary = styled.button `
    height: 50px;
    width: 180px;
    font-size: 1.8vh;
    font-weight: bolder;
    color: #8a8a8a;
    background: rgba(255, 255, 255, 0.507) transparent;
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(11.3px);
    border: 3px solid rgba(179, 179, 179, 0.493);
    align-items: center;
    cursor: pointer;
    transition: ease-out 0.8s;

    &:hover{
        transition: ease-in 0.2s;
        color: #000;
        scale: 1.1;
        background-color: transparent;
        border: 1.5px solid #fff;
    }
`


export {
    SearchResutlsContainter,
    ImgAlbum,
    ArtistName,
    SongLink,
    Song,
    SongsList,
    Albums,
    ShowSongs,
    ListCont,
    ContSong,
    AddLibrary,
    Loading,

}