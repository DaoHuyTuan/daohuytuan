import styled from "styled-components";
import { FONT_THEME } from "../../theme/variable";
import { COLOR_THEME } from "../../theme/theme";

const BlogContent = styled.div`
  width: 100%;
  max-width: 940px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 60px;
  font-size: 20px;
  font-weight: 400;
  font-family: Merriweather;
`;
const BlogContentTitle = styled.span`
  font-size: 50px;
  font-weight: 900;
  font-family: ${FONT_THEME};
  color: ${COLOR_THEME};
`;
const PostPagination = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 30px;
`;
const BlogEndLine = styled.hr`
  background: #0003;
  border: none;
  height: 1px;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;
export { BlogContent, BlogContentTitle, PostPagination, BlogEndLine };
