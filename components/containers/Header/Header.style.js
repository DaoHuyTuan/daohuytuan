import styled from "styled-components";
const HeaderWrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  height: 80px;
  box-shadow: ${props =>
    props.theme.stateTheme.light ? "0px 0px 5px #ddd" : "unset"};
  align-items: center;
  padding: 0px 20px 0px 20px;
  background-color: ${props => (props.theme.stateTheme.light ? "" : "#394254")};
`;

export { HeaderWrapper };
