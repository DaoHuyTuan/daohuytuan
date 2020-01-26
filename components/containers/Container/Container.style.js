import styled from "styled-components";
import { SIZE } from "../../../theme/variable";

const ContainerWrapper = styled.div`
  &.bio {
    padding: 120px 0px 120px 0px;
    @media only screen and (max-width: ${SIZE.SM}px) {
      padding: 60px 0px 60px 0px;
    }
  }
`;

export { ContainerWrapper };
