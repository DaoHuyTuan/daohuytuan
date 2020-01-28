import styled from "styled-components";
import { COLOR_THEME, BLACK_THEME } from "../../theme/theme";

const BlogContainer = styled.div`
  padding: 0px 20px 0px 20px;
  width: 100%;
  max-width: 940px;
  margin: 0 auto;
`;
const BlogItem = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: 40px;
  align-items: flex-start;
`;
const BlogItemTitle = styled.span`
  font-size: 29px;
  font-weight: 900;
  color: ${COLOR_THEME};
  text-decoration: none;
  cursor: pointer;
`;
const BlogLabel = styled.span`
  color: ${BLACK_THEME};
  font-size: 1.2rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 30px;
  position: relative;
  &:after {
    content: "";
    width: 150%;
    display: block;
    height: 2px;
    background-color: ${BLACK_THEME};
    position: absolute;
    bottom: -5px;
  }
`;
const ArrowBlog = styled.span`
  text-decoration: none;
  color: ${COLOR_THEME};
  position: relative;
  cursor: pointer;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    display: block;
    background-color: ${COLOR_THEME};
  }
`;

export { BlogContainer, BlogLabel, BlogItem, BlogItemTitle, ArrowBlog };
