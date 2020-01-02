import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
        box-shadow: none;
        color: unset;
    }
    body {
        padding: 0px;
        margin: 0px;
        color: #444343e6
    }
    img {
        border-style: none;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: Montserrat,sans-serif
    }
`

export default GlobalStyle
