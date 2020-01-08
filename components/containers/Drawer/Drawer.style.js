import styled from "styled-components";

const DrawerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  transition: 0.3s;
  display: ${props => (props.isOpen ? "block" : "none")};
`;
const DrawerMask = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  display: ${props => (props.isOpen ? "block" : "none")};
  transition: 0.3s;
`;
const DrawerContent = styled.div`
  width: 300px;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  bottom: 0;
`;
export { DrawerWrapper, DrawerMask, DrawerContent };
