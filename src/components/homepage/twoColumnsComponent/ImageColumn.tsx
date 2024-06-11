import React from "react";
import Grid from "@mui/material/Grid";
import { ImageStyled, PaperStyled } from "./TwoColumnsComponent.styled";

interface ImageColumnProps {
  image: string;
}

const ImageColumn: React.FC<ImageColumnProps> = ({ image }) => {
  return (
    <Grid item xs={12} sm={6} style={{ padding: 0 }}>
      <PaperStyled style={{ backgroundColor: "inherit" }}>
        <ImageStyled src={image} alt={`img`} />
      </PaperStyled>
    </Grid>
  );
};

export default ImageColumn;
