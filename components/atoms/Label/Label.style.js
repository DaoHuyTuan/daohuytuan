import styled from "styled-components";
import { COLOR_THEME, BLACK_THEME } from "../../../theme/theme";
const typeList = {
  link: `
    text-decoration: none;
    margin-right: 20px;
    font-size: 1.1rem;
    font-weight: normal;
    cursor: pointer
    color: ${BLACK_THEME}
    `,
  linkMobile: `
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
    color: ${BLACK_THEME};
    height: 50px;
    padding-left: 20px;
    &:first-child {
      padding-top: 20px;
    }
  `
};
const handleTypeLabel = type => {
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
