import styled from "styled-components";
import { SIZE } from "../../../theme/variable";
const LogoWrapper = styled.span`
  font-size: 1.5rem;
  font-weight: 800;
  cursor: pointer;
  font-family: Montserrat, sans-serif;
  @media only screen and (min-width: ${SIZE.SM}px) {
    font-weight: 800;
    font-size: 2rem;
  }
  @media only screen and (min-width: ${SIZE.LG}px) {
    font-weight: 900;
    font-size: 2.2rem;
  }
`;
export { LogoWrapper };
