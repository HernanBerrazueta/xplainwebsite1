import React from "react";
import {
  GridImageItem,
  ImageStyled,
  PaperStyled,
  SvgOverlay,
} from "./TwoColumnsComponent.styled";
import overlay from "../../../assets/images/hero/grid/Xplain_Graphic Patterns-03_Transparent.svg";

interface ImageColumnProps {
  image: string;
  isOdd: string;
}

const ImageColumn: React.FC<ImageColumnProps> = ({ image, isOdd }) => {
  return (
    <GridImageItem item xs={12} sm={6} isOdd={isOdd}>
      <PaperStyled style={{ backgroundColor: "inherit" }}>
        <ImageStyled src={image} alt={`img`} />
        {isOdd === "false" && <SvgOverlay src={overlay} alt="svg overlay" />}
      </PaperStyled>
    </GridImageItem>
  );
};

export default ImageColumn;
