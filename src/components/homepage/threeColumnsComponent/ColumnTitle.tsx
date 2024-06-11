import React from "react";
import { Grid } from "@mui/material";
import { HeadingStyled, SpanStyled } from "./ThreeColumnsComponent.styled";

const ColumnTitle: React.FC = () => {
  return (
    <>
      <Grid item xs={12}>
        <HeadingStyled>
          Other Users of <SpanStyled>XPLAIN</SpanStyled>
        </HeadingStyled>
      </Grid>
    </>
  );
};

export default ColumnTitle;
