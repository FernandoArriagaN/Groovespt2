import styled from "styled-components";
import Theme from "../../theme";

const HeaderContainer = styled.header `
    background: linear-gradient(to bottom, ${props => props.theme.colors.GroovesPurple}, ${props => props.theme.colors.secondary});
    margin: 12px;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 10px;
`

const NavContainer = styled.nav `  
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    
`
const AppTittle = styled.h1 `
    background: linear-gradient(to top, ${props => props.theme.colors.GroovesPurple}, ${props => props.theme.colors.primary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    margin: 20px;
    font-weight: 200;
    font-size: 50px;
    font-family: ${props => props.theme.fonts.title}
`

const IconHome = styled.img `
    margin: 10px;
    width: 40px;
    transition: transform 0.5s ease-out;

    &:hover {
        transform: scale(1.1) translateY(-10px);
    }
` 


const IconLibrary = styled.img `
     margin: 10px;
    width: 40px;
    transition: transform 0.5s ease-out;

    &:hover {
        transform: scale(1.1) translateY(-10px);
    }

`

export {
    HeaderContainer,
    NavContainer,
    AppTittle,
    IconHome,
    IconLibrary,

}