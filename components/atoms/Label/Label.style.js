import styled from "styled-components";
import { COLOR_THEME, BLACK_THEME, BLACK_THEME_2 } from "../../../theme/theme";
import { SIZE } from "../../../theme/variable";

const handleTypeLabel = (type, themeData) => {
  const { light, theme } = themeData;
  let result;
  switch (type) {
    case "link":
      return (result = `
      margin-right: 30px;
      font-size: 1.3rem;
      font-weight: 600;
      color: ${theme.color}
      text-decoration: none;
      cursor: pointer;
      transition: color 0.5s;
      &.drawer-active {
        color: ${COLOR_THEME}
        position: relative;
        transition: color 0.5s;
        @media only screen and (min-width: ${SIZE.MD}px) {
          &:after {
            content: "";
            width: 100%;
            height: 2px;
            display: block;
            background-color: ${COLOR_THEME};
            position: absolute;
            margin-top: 5px;
          }
        }
      }`);
    case "linkMobile":
      return (result = `
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
            background-color: ${COLOR_THEME};
            position: absolute;
            margin-top: 20px;
          }
        }
      }
  
    `);
    default:
      return result;
  }
};

const LabelWrapper = styled.a`
  ${props => handleTypeLabel(props.type, props.theme.stateTheme)}
`;
export { LabelWrapper };
