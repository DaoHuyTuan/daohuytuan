import styled from "styled-components";
import { SIZE } from "../../../theme/variable";
import { COLOR_THEME, BLACK_THEME } from "../../../theme/theme";

const ContainerWrapper = styled.div`
  &.bio {
    padding: 120px 0px 120px 0px;
    @media only screen and (max-width: ${SIZE.SM}px) {
      padding: 60px 0px 60px 0px;
    }
  }
  &.uses {
    display: flex;
    flex-flow: column;
    width: 100%;
    max-width: 940px;
    margin: 0 auto;
  }
  &.cv-page {
    width: 100%;
    max-width: 1366px;
    margin: 0 auto;
    display: flex;
  }
  &.container-uses {
    padding: 30px 30px 0px 30px;
    display: flex;
    flex-flow: column;
    & .uses-image {
      width: 100%;
      max-width: 940px;
      box-shadow: 0px 7px 12px #b0b0b0;
    }
    & li {
      margin-bottom: 24px;
      font-size: 18px;
      color: ${props => props.theme.stateTheme && props.theme.stateTheme.theme.color};
      & a:first-child {
        font-size: 24px;
        font-weight: 600;
        color: ${props => props.theme.stateTheme && props.theme.stateTheme.theme.color};
      }
      & a {
        color: ${props => props.theme.stateTheme && props.theme.stateTheme.theme.colorLink};
        font-weight: 400;
      }
    }
    @media only screen and (max-width: ${SIZE.SM}px) {
      padding: 60px 0px 60px 0px;
    }
  }
`;

export { ContainerWrapper };
