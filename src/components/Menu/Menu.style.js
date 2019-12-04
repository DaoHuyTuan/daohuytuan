import styled from "styled-components"
const red = "#f96969"
const MenuWrapper = styled.div`
  display: flex;
  flex-flow: row;
  margin-bottom: 24px;
  justify-content: flex-end;
`
const MenuItem = styled.div`
  margin-right: 20px;
  color: ${red};
  font-weight: bold;
  font-family: monospace;
  font-size: 16px;
  &:last-child {
    margin-right: 0px;
  }
`
// box-shadow: 0 2px 0 0 ${red};
export { MenuWrapper, MenuItem }
