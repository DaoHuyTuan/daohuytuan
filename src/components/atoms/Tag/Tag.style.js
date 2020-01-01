import styled from "styled-components"
import { colorTheme, fontMonst } from "../../../theme/variable"
const handleThemeTag = props => {
  switch (props) {
    case "#vim":
      return "#039833"
    case "#FrontEnd":
      return "#644EF0"
    case "#design":
      return "#3E87BA"
    default:
      return colorTheme
  }
}
const handleTextColorTag = props => {
  switch (props) {
    case "#vim":
      return "#ffffff"
    case "#FrontEnd":
      return "#ffffff"
    case "#design":
      return "#ffffff"
    default:
      return "#ffffff"
  }
}
export const TagWrapper = styled.div`
  display: block;
`
export const TagStyle = styled.p`
  padding: 2px 8px;
  margin-right: 20px;
  font-size: 14px;
  margin-bottom: 0px;
  display: inline-block;
  cursor: pointer;
  font-family: ${fontMonst};
  font-weight: 700;
  border-radius: 4px;
  color: ${props => handleTextColorTag(props.themeText)};
  background-color: ${props => handleThemeTag(props.theme)}};
`
