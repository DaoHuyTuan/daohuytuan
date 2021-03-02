import styled from "styled-components";

const CommentContainer = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  margin-bottom: 20px;
`;
const CommentViewWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  font-family: Montserrat, sans-serif;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  background-color: #f7f7f7;
`;
const CommentName = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
`;

const CommentContent = styled.span`
  font-size: 1rem;
`;

const CommentTime = styled.span``;

const CommentAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const AvatarBorder = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  border: 1px solid #ddd;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;

export {
  CommentContainer,
  CommentViewWrapper,
  CommentName,
  CommentContent,
  CommentTime,
  CommentAvatar,
  AvatarBorder
};
