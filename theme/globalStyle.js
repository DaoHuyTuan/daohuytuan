import { createGlobalStyle } from "styled-components";
import { FONT_THEME, SIZE } from "./variable";
import { BLACK_THEME } from "./theme";
const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
html {
  font: 100%/1.75 Merriweather;
  font-size: 15px;
  font-family: ${FONT_THEME};
  color: ${props => props.theme.stateTheme && props.theme.stateTheme.theme.color};
  background-color: ${props => props.theme.stateTheme && props.theme.stateTheme.theme.bg};
  transition: background-color 0.2s;
}
`;
export default GlobalStyle;
