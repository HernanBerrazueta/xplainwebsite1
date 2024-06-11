import React from "react";
import { useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import { mainTitle, gridItem, mainText } from "./VideoComponent.styled";

interface TextGridProps {
  title: string;
  text: string;
  backgroundColor?: string;
}

const TextGridComponent: React.FC<TextGridProps> = ({
  title,
  text,
  backgroundColor,
}) => {
  const theme = useTheme();
  const location = useLocation();
  const isFundPage = location.pathname === "/lumina";

  const fontColor: string = isFundPage
    ? theme.palette.text.primary
    : theme.palette.primary.main;

  return (
    <Grid item xs={6} style={{ ...gridItem, backgroundColor }}>
      <h1 style={{ ...mainTitle, color: fontColor }}>{title}</h1>
      <p style={{ ...mainText, color: fontColor }}>{text}</p>
    </Grid>
  );
};

export default TextGridComponent;
