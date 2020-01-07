import { createGlobalStyle } from "styled-components";
import { FONT_THEME } from "./variable";
const GlobalStyle = createGlobalStyle`
  html {
      padding: 0px;
      margin: 0px;
      font-family: ${FONT_THEME}
  }
  body {
    background-color: #ffffff;  
    margin: 0px;
    padding: 0px;
  }
`;
export default GlobalStyle;
