import React from "react";
import {
  ContainerStyled,
  NewsDigestWrapperStyled,
  PreviousDigestsStyled,
} from "./ThreeColumnsComponent.styled";
import ColumnItem from "./ColumnItem";

interface ColumnData {
  data: {
    title: string;
    image: string;
    text: string[];
    id: number;
  }[];
}

const NewsDigest: React.FC<ColumnData> = ({ data }) => {
  return (
    <>
      <ContainerStyled>
        <NewsDigestWrapperStyled container>
          {data.map((item) => (
            <ColumnItem key={item.id} item={item} />
          ))}
          <PreviousDigestsStyled to="/contact-us">
            Previous news digests
          </PreviousDigestsStyled>
        </NewsDigestWrapperStyled>
      </ContainerStyled>
    </>
  );
};

export default NewsDigest;
