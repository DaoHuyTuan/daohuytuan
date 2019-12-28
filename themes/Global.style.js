import { createGlobalStyle } from "styled-components";

import { sizeSm, sizeLg } from "./responsive";
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Montserrat"
  }
  html {
      font-size: 20px;
      box-sizing: border-box;
      overflow-y: scroll;
  }
  a {
    text-decoration: none;
    color: unset;
  }
  body {
    margin: 0px;
  }
  .main {
      transition: 0.5s;
      background-color: ${({ theme }) => theme.bg}
      color: ${({ theme }) => theme.colorText}
  }
`;
export default GlobalStyle;
