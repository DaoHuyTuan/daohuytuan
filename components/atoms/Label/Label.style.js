import styled from "styled-components";
import { COLOR_THEME, BLACK_THEME,BLACK_THEME_2 } from "../../../theme/theme";
import { SIZE } from "../../../theme/variable";
const typeList = {
  link: `
    margin-right: 20px;
    font-size: 1.1rem;
    font-weight: 600;
    color: ${BLACK_THEME}
    text-decoration: none;
    cursor: pointer;
    &.drawer-active {
      color: ${COLOR_THEME}
      position: relative;
      @media only screen and (min-width: ${SIZE.MD}px) {
        &:after {
          content: "";
          width: 100%;
          height: 2px;
          display: block;
          background-color: red;
          position: absolute;
          margin-top: 5px;
        }
      }
    }
    `,
  linkMobile: `
    font-weight: 400;
    color: ${BLACK_THEME};
    height: 50px;
    padding-left: 20px;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    &.drawer-active {
      font-weight: 600;
      position: relative;
      color: ${COLOR_THEME}
      @media only screen and (max-width: ${SIZE.MD}px) {
        &:after {
          content: "";
          width: 18%;
          height: 2px;
          display: block;
          background-color: red;
          position: absolute;
          margin-top: 20px;
        }
      }
    }

  `
};
const handleTypeLabel = (type, active) => {
  let result;
  switch (type) {
    case "link":
      return (result = typeList.link);
    case "linkMobile":
      return (result = typeList.linkMobile);
    default:
      return result;
  }
};

const LabelWrapper = styled.a`
  ${props => handleTypeLabel(props.type)}
`;
export { LabelWrapper };
