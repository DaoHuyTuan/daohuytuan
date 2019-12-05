import { createGlobalStyle } from "styled-components";

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
`;

export default GlobalStyle;