import styled from "styled-components";
import { SIZE } from "../../../theme/variable";
const HambugerMenuWrapper = styled.div`
  cursor: pointer;
  height: 30px;
  width: 30px;
  display: none;
  @media only screen and (max-width: ${SIZE.MD}px) {
    display: block;
  }
`;
export { HambugerMenuWrapper };
