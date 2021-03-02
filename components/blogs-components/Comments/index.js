import React from "react";
import { CommentWrapper, CommentBreak } from "../blog.style";
import CommentCreate from "./CommentCreate";
import CommentView from "./CommentView";

const Comments = React.memo(({ list }) => {
  return (
    <>
      <CommentWrapper>
        {list.map((item) => {
          return <CommentView key={item.id} {...item} />;
        })}
      </CommentWrapper>
      <CommentCreate />

      <CommentBreak />
      <div></div>
    </>
  );
});

export default Comments;
