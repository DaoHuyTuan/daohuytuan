import styled from "styled-components";

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
`;
const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background-color: #ffffff;
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
  width: 208px;
  height: 208px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`;
const BioTitle = styled.span`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 24px;
`;
const BioContent = styled.span`
  font-size: 16px;
  text-align: center;
  line-height: 2;
  word-break: break-word;
`;
export { BioWrapper, Avatar, AvatarBorder, BioTitle, BioContent };
