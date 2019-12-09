import styled from "styled-components"
import { colorTheme } from "../../../theme/variable"
export const AboutBlockContentStyle = styled.div`
  & > ul {
    padding-left: 30px;
  }
`
export const StrongContentStyle = styled.strong`
  font-family: Montserrat, sans-serif;
  font-weight: 800;
`
export const LinkContentStyle = styled.a`
  color: ${colorTheme};
  box-shadow: 0 2px 0 0 ${colorTheme};
`
