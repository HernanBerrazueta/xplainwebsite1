import React from "react";
import { PaperStyled } from "../../homepage/threeColumnsComponent/ThreeColumnsComponent.styled";
import {
  InnerCardStyled,
  LinkStyled,
  TextStyled,
  TitleStyled,
} from "./comments.styled";

interface ColumnData {
  title: string;
  position: string;
  text: string;
}

interface ColumnItemProps {
  comment: ColumnData;
}

const CommentItem: React.FC<ColumnItemProps> = ({ comment }) => {
  return (
    <InnerCardStyled item xs={12} sm={4}>
      <PaperStyled>
        <TitleStyled>
          {comment.title.includes("TraditionData") ? (
            <LinkStyled to="https://www.traditiondata.com/">
              {comment.title}
            </LinkStyled>
          ) : (
            comment.title
          )}
        </TitleStyled>
        <TitleStyled>{comment.position}</TitleStyled>
        <TextStyled>{comment.text}</TextStyled>
      </PaperStyled>
    </InnerCardStyled>
  );
};

export default CommentItem;
