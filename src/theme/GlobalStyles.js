import { createGlobalStyle } from "styled-components";

import Bg from '../assets/wallpapper2.jpg';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: ${props => props.theme.fonts.base};
        background-image: url(${Bg});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        min-height: 100vh;
    }


`


export default GlobalStyle;