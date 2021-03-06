import styled from "styled-components";

const DrawerWrapper = styled.div`
  position: fixed;
  width: 0;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 9999;
  &.drawer-open {
    width: 100%;
    height: 100%;
  }
`;
const DrawerMask = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0px;
  right: 0px;
  height: 0%;
  left: 0px;
  opacity: 0;
  &.drawer-open {
    opacity: 0.3;
    height: 100%;
  }
`;
const DrawerContent = styled.div`
  width: 300px;
  background-color: ${props => props.theme.stateTheme && props.theme.stateTheme.theme.bg};
  position: fixed;
  top: 0;
  bottom: 0;
  transform: translate(-105%);
  ${props => props.theme.stateTheme && props.theme.stateTheme.light ? "box-shadow: 3px 0px 5px #bababa;" : "" };
  
  &.drawer-open {
    transform: translate(0%);
    transition: 0.3s;
  }
`;
export { DrawerWrapper, DrawerMask, DrawerContent };
