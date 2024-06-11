import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import {
  gridItem,
  mainTitle,
  mainText,
  buttonStyle,
} from "./JoinUsComponent.styled";

interface TextButtonProps {
  title: string;
  text: string;
}

const TextButton: React.FC<TextButtonProps> = ({ title, text }) => {
  const theme = useTheme();

  return (
    <>
      <Grid item xs={6} style={gridItem}>
        <h1 style={mainTitle}>{title}</h1>
        <p style={{ ...mainText, color: theme.palette.text.secondary }}>
          {text}
        </p>
      </Grid>
      <Link to="/contact-us">
        <Button variant="contained" color="primary" style={buttonStyle}>
          Enquire
        </Button>
      </Link>
    </>
  );
};

export default TextButton;
