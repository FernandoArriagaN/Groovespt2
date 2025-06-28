const { default: styled } = require("styled-components");


const SongDetailsCont = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2%;
`

const SongCover = styled.img `
    width: 230px;
`

const LetrasExplicitas = styled.p `
    font-size: 20px;
    color: ${props => props.$ExplicitLiryc ? '#ff0000' : '#11e21d' } ;

`

const TrackTitle = styled.h2 `
    text-align: center;
    margin: 30px;
    font-size: 35px;
    color: ${props => props.theme.colors.GroovesPurple};
    font-weight: bolder;
`

const ArtistName = styled.p `
    text-align: center;
    font-size: 25px; 
    font-family: ${props => props.theme.fonts.title};   

`

const AlbumName = styled.p `
    text-align: center;
    font-style: italic;
`

export {
    SongDetailsCont,
    SongCover,
    TrackTitle,
    ArtistName,
    AlbumName,
    LetrasExplicitas

}