import React from "react";
import Grid from "@mui/material/Grid";
import { headerTitle } from "./ContactUsComponent.styled";
import useMatchMedia from "../../../hooks/useMediaQuery";

interface HeaderProps {
  title: string;
}

const HeaderColumn: React.FC<HeaderProps> = ({ title }) => {
  const { isMobile } = useMatchMedia();

  return (
    <Grid item xs={12} style={{ textAlign: isMobile ? "left" : "center" }}>
      <h1 style={headerTitle}>{title}</h1>
    </Grid>
  );
};

export default HeaderColumn;
