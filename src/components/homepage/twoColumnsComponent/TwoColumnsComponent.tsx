import React from "react";
import { ContainerStyled, GridStyled } from "./TwoColumnsComponent.styled";
import ImageColumn from "./ImageColumn";
import ContentColumn from "./ContentColumn";

interface Props {
  image: string;
}

const TwoColumnsComponent: React.FC<Props> = ({ image }) => {
  return (
    <ContainerStyled>
      <GridStyled container spacing={3}>
        <ImageColumn image={image} />
        <ContentColumn />
      </GridStyled>
    </ContainerStyled>
  );
};

export default TwoColumnsComponent;
