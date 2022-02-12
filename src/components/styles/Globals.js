import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    // @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,300;0,400;0,700;1,100&display=swap');

    html, body {
        height: 100%;
    }

    .wrapper {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .main {
        flex: 1 1 auto;
    }

    * {
        box-sizing: border-box;
        color: #f8edeb;
        // color: ${({theme}) => theme.colors.lightPink};
        // font-family: 'Roboto', sans-serif;
        font-family: 'Fira Sans', sans-serif;
        font-size: 1.2rem;
        font-weight: lighter;
    }

    body {
        background: ${({theme}) => theme.colors.darkGrey};
    }
`

export default GlobalStyles;