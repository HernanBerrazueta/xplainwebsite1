import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../../../theme";
import { device } from "../../../utils/device";

export const ContainerStyled = styled.div`
  background-color: #fff;
  padding: 16px;
  min-height: 40vh;
`;

export const NewsDigestWrapperStyled = styled(Grid)`
  flex-direction: column;
  align-content: center;
  max-width: 70vw;
  margin: 0 auto;
  padding: 100px 0;

  @media ${device.mobileOnly} {
    padding: 0;
  }
`;

export const PaperStyled = styled.div`
  padding: 24px 0;
  text-align: center;
  display: flex;
  box-shadow: none;
`;

export const ImageStyled = styled.img`
  width: 129px;
  height: 129px;
  object-fit: cover;
`;

export const TitleStyled = styled.h3`
  font-family: "CircularXXWeb-Medium", sans-serif;
  font-size: 24px;
  margin-top: 20px;
  text-align: left;
`;

export const TitleStyled1 = styled.h1`
  font-family: "CircularXXWeb-Regular", sans-serif;
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 8px;
  font-weight: bold;
  text-align: center;
`;

export const TextStyled = styled.p`
  font-family: "CircularXXWeb-Regular", sans-serif;
  font-size: 22px;
  color: #9b9b9b;
  text-align: left;
  margin-top: 10px;
  text-decoration: none;
`;

export const PreviousDigestsStyled = styled(Link)`
  font-size: 22px;
  color: ${theme.palette.primary.light};
  margin: 100px 0 0 auto;

  @media ${device.mobileOnly} {
    margin: 50px 0 50px auto;
  }
`;

export const TextStyled1 = styled(Link)`
  font-family: "CircularXXWeb-Regular", sans-serif;
  font-size: 18px;
  color: #9b9b9b;
  text-align: center;
  text-decoration: none;
`;

export const HeadingStyled = styled.h1`
  font-family: "CircularXXWeb-Regular", sans-serif;
  text-align: center;
  font-weight: 500;
  color: ${theme.palette.primary.main};
  margin: 30px 0 16px;
`;

export const SpanStyled = styled.span`
  font-weight: 800;
`;
