import styled, { keyframes } from "styled-components"

const FadeInOut = keyframes `
    0% { opacity: 0; transform: translateX(-50%) translateY(-10px); }
    10% { opacity: 1; transform: translateX(-50%) translateY(0); }
    90% { opacity: 1; }
    100% { opacity: 0; transform: translateX(-50%) translateY(-10px); }

`

const AddToLibrary = styled.h1 ` 
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(126, 5, 126, 0.27);
    color: ${props => props.theme.colors.primary};
    padding: 12px 24px;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.colors.GroovesPurple};
    backdrop-filter: blur(11.3px);
    font-weight: bold;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    z-index: 10000;
    animation: ${FadeInOut} 2s ease forwards;

` 


export {
    AddToLibrary
}