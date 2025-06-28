import styled from "styled-components";
import Theme from "../../theme";


const ArtistListCont = styled.section `
    background-color: ${props => props.theme.colors.secondary};
    margin: 2%;
    overflow: hidden;
    padding: 0;
    border-radius: 15px;
`

const Encontrados = styled.h2 `
    color: ${props => props.theme.colors.primary};
    text-align: center;
`

const ListArt = styled.ul `
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 2%;
    padding: 0;
`

const ArtistRes = styled.li `
    margin: 9px;
` 

const ArtistSelect = styled.button`
    height: 50px;
    width: 120px;
    font-size: 2.1vh;
    font-weight: bolder;
    color: #8a8a8a;
    background: rgba(255, 255, 255, 0.164) ;
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(11.3px);
    border: 3px solid rgb(0, 0, 0);
    align-items: center;
    cursor: pointer;
    transition: ease-out 0.8s;
    overflow: hidden;
    box-sizing: border-box;

    &:hover {
        transition: ease-in 0.3s;
        scale: 1.2;
        color: #000;
        background-color: #fff;
    }
`

export {
    ArtistListCont,
    Encontrados,
    ListArt,
    ArtistSelect,
    ArtistRes,
}                                                                                                                                