import React from "react";
import theme from "../../../theme";

export const sectionStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  position: "relative",
};

export const container: React.CSSProperties = {
  display: "flex",
  minWidth: "100%",
};

export const gridItem: React.CSSProperties = {
  paddingTop: "40px",
  maxWidth: "500px",
};

export const headerTitle: React.CSSProperties = {
  fontFamily: "Plus Jakarta Sans, sans-serif",
  fontOpticalSizing: "auto",
  fontSize: 30,
  color: theme.palette.primary.main,
  maxWidth: "400px",
};

export const mainText: React.CSSProperties = {
  fontFamily: "Plus Jakarta Sans, sans-serif",
  fontOpticalSizing: "auto",
  fontSize: 16,
  maxWidth: 360,
  lineHeight: 1.5,
  fontWeight: 400,
  margin: "40px 0px 0px",
};
