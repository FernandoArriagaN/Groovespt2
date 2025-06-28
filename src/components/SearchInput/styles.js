import styled, { keyframes } from "styled-components";


const InputContainer = styled.section `
    display: flex;
    align-items: center;
    flex-direction: column;
`
const colors = keyframes `
     0% {
            color: #000;
        }
        55% {
            color: #8a8a8a;
        }
        85.5% {
            color: #5c015c;
        }
`
const TitleContainer = styled.article `
    margin: 20px;

`

const TitleSearch = styled.h1 `
    font-weight: bold;
    font-size: 40px;
    animation: ${colors} 5s infinite alternate ease-in-out;


`



const InputSearch = styled.article `
    display: flex;
    width: 50%;
    justify-content: space-around;
    align-items: center
`
const LabelInput = styled.input `
    background: linear-gradient(to top, rgba(68, 5, 80, 0.685), transparent);
    height: 30px;
    width: 265px;
    border-radius: 16px;
    color: #fff;
    font-weight: bolder;
    text-align: center;
`

const ButtonImput = styled.button `
    height: 50px;
    width: 120px;
    font-size: 2.5vh;
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

    &:hover {
        transition: ease-in 0.2s;
    color: #000;
    scale: 1.1;
    background-color: transparent;
    border: 1.5px solid #fff;
    }
`




export {
    InputContainer,
    TitleSearch,
    InputSearch,
    LabelInput,
    ButtonImput,
    TitleContainer
}