import React from "react";
import CommentItem from "./CommentItem";
import { CardStyled, CommentsContainerStyled } from "./comments.styled";

interface ColumnData {
  title: string;
  position: string;
  text: string;
}

interface Props {
  comments: ColumnData[];
}

const Comments: React.FC<Props> = ({ comments }) => {
  return (
    <CommentsContainerStyled>
      <CardStyled>
        {comments.map((comment, index) => (
          <CommentItem key={index} comment={comment} />
        ))}
      </CardStyled>
    </CommentsContainerStyled>
  );
};

export default Comments;
