import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../../../theme";

export const ContainerStyled = styled.div`
  background-color: "#fff";
  padding: "16px";
`;

export const PaperStyled = styled.div`
  padding: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  box-shadow: none;
`;

export const ImageStyled = styled.img`
  width: 100%;
  max-height: 70%;
  object-fit: cover;
`;

export const TitleStyled = styled.h3`
  font-family: "CircularXXWeb-Regular", sans-serif;
  font-size: 20px;
  margin-top: 20px;
  font-weight: bold;
  text-align: left;
`;

export const TitleStyled1 = styled.h1`
  font-family: "CircularXXWeb-Regular", sans-serif;
  font-size: 28px;
  margin-top: 20px;
  margin-bottom: 8px;
  font-weight: bold;
  text-align: center;
`;

export const TextStyled = styled.p`
  font-family: "CircularXXWeb-Regular", sans-serif;
  font-size: 18px;
  color: #9b9b9b;
  text-align: left;
  margin-top: 10px;
  text-decoration: none;
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
