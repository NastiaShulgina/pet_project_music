import styled from "styled-components";

export const StyledLanding = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Syne+Tactile&display=swap');

    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    h2, h2 * {
        display: flex;
        justify-content: center;
        font-family: 'Syne Tactile', cursive;
        font-size: 1.2em;
    }

    h2 * {
        max-width: max-content;
        margin: auto 7px;
        font-weight: bold;
        color: #ef6461;
        margin-top: -4px;
    }

    img {
        align-self: center;
        max-width: 99%;
        margin-top: 170px;
        z-index: -1;
        position: absolute;
    }
`