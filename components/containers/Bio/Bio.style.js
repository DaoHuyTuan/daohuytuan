import styled from "styled-components";
import { SIZE, FONT_THEME } from "../../../theme/variable";
import { COLOR_THEME, BLACK_THEME } from "../../../theme/theme";
const sizeAvatar = 200;
const sizeBorderAvatar = 8;

const BioWrapper = styled.div`
  width: 940px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  @media only screen and (min-width: ${SIZE.SM}px) {
    flex-flow: row;
  }
`;
const Avatar = styled.img`
  width: ${sizeAvatar}px;
  height: ${sizeAvatar}px;
  border-radius: 100%;
  background-color: #ffffff;
  @media only screen and (max-width: ${SIZE.MD}px) {
    width: ${sizeAvatar - 50}px;
    height: ${sizeAvatar - 50}px;
  }
`;
const AvatarBorder = styled.div`
  cursor: pointer;
  background-image: linear-gradient(
    to right top,
    #fcac0f,
    #fd9522,
    #fa7f30,
    #f36a3c,
    #e85647,
    #e44751,
    #dd395b,
    #d42d65,
    #d12174,
    #ca1b85,
    #be1e96,
    #ae27a8
  );
  width: ${sizeAvatar + sizeBorderAvatar}px;
  height: ${sizeAvatar + sizeBorderAvatar}px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${SIZE.MD}px) {
    width: ${sizeAvatar + sizeBorderAvatar - 50}px;
    height: ${sizeAvatar + sizeBorderAvatar - 50}px;
    margin-bottom: 24px;
  }
`;
const BioBody = styled.div`
  display: flex;
  width: calc(100% - ${sizeAvatar + sizeBorderAvatar}px);
  padding-left: 30px;
  flex-flow: column;
  @media only screen and (max-width: ${SIZE.SM}px) {
    width: 100%;
    text-align: center;
    padding-left: 0px;
  }
  @media only screen and (min-width: ${SIZE.SM}px) and (max-width: ${SIZE.MD}px) {
    width: calc(100% - ${sizeAvatar + sizeBorderAvatar - 50}px);

  }
`;
const BioTitle = styled.span`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 24px;
`;
const BioContent = styled.span`
  font-size: 16px;
  line-height: 2;
  word-break: break-word;
`;
const BioLink = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: ${SIZE.SM}px) {
    justify-content: center;
  }
  & a {
    font-size: 18px;
    margin-right: 30px;
    font-weight: 600;
    text-decoration: none;
    color: ${BLACK_THEME};
    font-family: monospace;
    position: relative;
    &:after {
      content: "•";
      position: absolute;
      right: -20px;
      color: ${BLACK_THEME};
    }
  }
  & a:last-child {
    &:after {
      content: "";
    }
  }
  & a:hover { 
    color: ${COLOR_THEME};
  }
`
export { BioWrapper, Avatar, AvatarBorder, BioBody, BioTitle, BioContent, BioLink };
