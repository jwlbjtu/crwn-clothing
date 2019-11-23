import styled, { css } from 'styled-components';
import { CustomButtonProps } from 'custom-button-component-types';


const getButtonStyles = (props: CustomButtonProps) => {
    if(props.isGoogleSignIn) {
        return googleButtonStyle;
    }

    return props.inverted ? invertedStyle : buttonStyle;
}

const buttonStyle = css`
    background-color: black;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

const googleButtonStyle = css`
    background-color: #4285f4;
    color: white;

    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
`;

const invertedStyle = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
`;

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;

    ${getButtonStyles}
`;



