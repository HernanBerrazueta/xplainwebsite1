import React from "react";
import theme from "../../../theme";
import {
  GridInner,
  Line,
  PaperStyled,
  TitleStyled,
} from "./SquaresComponent.styled";

interface SquareItemProps {
  title: string;
  backgroundColor: string;
}

const SquareItem: React.FC<SquareItemProps> = ({ title, backgroundColor }) => {
  return (
    <GridInner item xs={12} sm={4}>
      <PaperStyled style={{ backgroundColor }}>
        <TitleStyled style={{ color: theme.palette.text.primary }}>
          {title}
        </TitleStyled>
        <Line />
      </PaperStyled>
    </GridInner>
  );
};

export default SquareItem;
