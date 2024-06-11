import React from "react";
import theme from "../../../theme";

export const sectionStyle: React.CSSProperties = {
  backgroundColor: "#815bdb",
  position: "relative",
};

export const container: React.CSSProperties = {
  display: "flex",
  minWidth: "100%",
};

export const gridItem: React.CSSProperties = {
  maxWidth: "500px",
};

export const flex: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
};

export const mainTitle: React.CSSProperties = {
  fontFamily: "CircularXXWeb-Regular, sans-serif",
  fontOpticalSizing: "auto",
  fontSize: 20,
  color: "#fff",
  maxWidth: "400px",
  margin: 0,
};

export const headerTitle: React.CSSProperties = {
  fontFamily: "CircularXXWeb-Regular, sans-serif",
  fontOpticalSizing: "auto",
  fontSize: 30,
  color: "#fff",
  maxWidth: "400px",
  margin: 0,
};

export const mainText: React.CSSProperties = {
  fontFamily: "CircularXXWeb-Regular, sans-serif",
  fontOpticalSizing: "auto",
  fontSize: 16,
  maxWidth: 360,
  lineHeight: 1.5,
  fontWeight: 400,
  margin: 0,
};

export const buttonStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  color: theme.palette.primary.light,
  fontSize: "16px",
  borderRadius: 0,
  textTransform: "capitalize",
  fontFamily: "CircularXXWeb-Regular, sans-serif",
  marginTop: "40px",
};
