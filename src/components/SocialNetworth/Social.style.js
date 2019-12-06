import styled from "styled-components"
import { colorTheme } from "../../theme/variable"

export const SocialNetWrapper = styled.div`
  display: flex;
`
export const SocialNetItem = styled.div`
  font-size: 16px;
  font-family: monospace;
  color: black;
  margin-right: 10px;
  font-weight: bold;
  & > a {
    border-bottom: 1px solid black;
  }
  &:hover {
    color: ${colorTheme};
  }
  &:hover > a {
    border-bottom: 1px solid ${colorTheme};
  }
  &:after {
    content: "•";
    margin-left: 10px;
    color: black;
  }
  &:last-child:after {
    content: "";
  }
`
