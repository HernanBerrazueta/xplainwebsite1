import React from "react";
import Grid from "@mui/material/Grid";
import { headerTitle } from "./JoinUsComponent.styled";

interface HeaderProps {
  title: string;
}

const HeaderColumn: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Grid item xs={12} style={{ textAlign: "center" }}>
      <h1 style={headerTitle}>{title}</h1>
    </Grid>
  );
};

export default HeaderColumn;
