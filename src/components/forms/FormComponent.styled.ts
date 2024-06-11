import React from "react";
import styled from "styled-components";
import { TextField, Select, MenuItem, Grid, Typography } from "@mui/material";
import { device } from "../../utils/device";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.ultraLarge} {
    display: block;
  }
`;

export const ImageContainer = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const HeaderTextStyle = styled(Typography)`
  margin-bottom: 40px !important;
  font-family: "CircularXXWeb-Regular", sans-serif !important;
  font-weight: 500 !important;

  @media ${device.smallTablet} {
    margin-left: 30px !important;
  }
`;

export const ParagraphStyled = styled(Typography)`
  font-family: "CircularXXWeb-Regular", sans-serif !important;
  color: #bba5e0 !important;
  max-width: 80% !important;
  padding-left: 30px !important;
`;

export const GridWrapperStyled = styled(Grid)`
  margin: 0 !important;
  width: 100% !important;

  @media ${device.tablet} {
    padding: 0 26px;
  }

  @media ${device.desktop} {
    padding: 0 76px;
  }

  @media ${device.ultraLarge} {
    padding: 0 126px;
  }
`;

export const GridItemStyled = styled(Grid)`
  padding: 0px 24px !important;
  margin-bottom: 15px !important;
`;

export const FontStyled = styled(Typography)`
  font-family: "CircularXXWeb-Regular", sans-serif !important;
  color: #bba5e0;
`;

export const FieldStyled = styled(TextField)`
  color: #000;

  & > .MuiFormHelperText-root.Mui-error {
    margin: 0;
    padding: 5px 0 0 20px;
    background-color: #fff;
    font-weight: bold;
  }

  &&:hover {
    ${(props) => !props.error && "outline: 1px solid #c4c4c4;"}
  }
`;

export const SelectStyled = styled(Select)`
  color: #000 !important;
  border-radius: 0px !important;

  &&:hover {
    outline: 1px solid #c4c4c4;
  }
`;

export const MenuItemStyled = styled(MenuItem)`
  color: #000 !important;
  background-color: #e6e6e6;
`;
export const FormStyled = styled.form`
  min-height: calc(100vh - 433px);
  padding-top: 50px;
  flex: 1;
`;

export const ButtonWrapper = styled(Grid)`
  padding-bottom: 50px;

  @media ${device.mobile} {
    padding-right: 26px;
  }
  @media ${device.tablet} {
    padding-right: 50px;
  }

  @media ${device.desktop} {
    padding-right: 100px;
  }

  @media ${device.ultraLarge} {
    padding-right: 150px;
  }
`;

export const GridFlex = styled(Grid)`
  display: flex;
  flex-direction: column !important;
`;
export const LabelsWrapper = styled(Grid)`
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0px;

  @media ${device.smallTablet} {
    flex-wrap: nowrap;
    gap: 20px;
  }
  @media ${device.desktop} {
    gap: 80px;
  }
`;

export const buttonStyle: React.CSSProperties = {
  backgroundColor: "#805CDD",
  fontFamily: "CircularXXWeb-Regular, sans-serif",
  width: "200px",
  fontSize: 16,
  borderRadius: 0,
  marginTop: 20,
  textTransform: "capitalize",
  marginRight: "50px",
  color: "#fff",
  marginBottom: "30px",
};

export const disabledButtonStyle: React.CSSProperties = {
  backgroundColor: "#CCCCCC",
  color: "#FFFFFF",
};

export const interestAreas: React.CSSProperties = {
  paddingBottom: "20px",
  marginRight: 0,
};
