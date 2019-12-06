import styled from "styled-components"
import { colorTheme } from "../../theme/variable"
const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
`
const MenuList = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-end;
`
const MenuItem = styled.div`
  margin-right: 20px;

  font-weight: bold;
  font-family: monospace;
  font-size: 16px;
  ${props =>
    props.ischecked &&
    `
    color: ${colorTheme};
    box-shadow: 0 2px 0 0 ${colorTheme};
  `}
  &:last-child {
    margin-right: 0px;
  }
`
const MenuTitle = styled.div`
  font-size: 35px;
  font-family: Montserrat, sans-serif;
  font-weight: 800;
  ${props => props.isRootPath && `
    color: ${colorTheme};
   
  `}
`

export { MenuWrapper, MenuItem,MenuList,MenuTitle }
