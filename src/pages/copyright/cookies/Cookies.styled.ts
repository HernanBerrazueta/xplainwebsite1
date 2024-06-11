import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  MainTextStyled,
  MainTitleStyled,
} from "../../../components/treasurers/heroComponent/HeroComponent.styled";
import theme from "../../../theme";
import { device } from "../../../utils/device";

export const TextStyled = styled(MainTextStyled)`
  color: ${theme.palette.primary.main};
  width: 100%;
  max-width: 100%;
  font-weight: 500;
  margin: 40px 0 0;

  @media ${device.mobileOnly} {
    margin: 0px;
    padding: 10px;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding: 100px 250px;

  @media ${device.mobileOnly} {
    padding: 20px;
  }
  @media ${device.ultraLarge} {
    margin: 0 auto;
    max-width: 2000px;
  }
`;

export const TitleStyled = styled(MainTitleStyled)`
  color: ${theme.palette.primary.main};
  text-align: left;
  margin: 40px 0 0;
  max-width: 660px;
`;

export const Header = styled.h1`
  color: ${theme.palette.primary.main};
  text-align: left;
`;

export const SubHeader = styled.h2`
  color: ${theme.palette.primary.main};
  margin-top: 50px;
  text-align: left;

  @media ${device.mobileOnly} {
    margin-top: 20px;
  }
`;

export const CookiesList = styled.ul`
  list-style-type: initial;
  padding-left: 50px;
`;
export const PrivacyList = styled.ol`
  list-style-type: auto;
  padding-left: 20px;
`;
export const AbcList = styled.ol`
  list-style: lower-latin;
  padding-left: 40px;
`;

export const LiStyled = styled.li`
  color: ${theme.palette.primary.main};
  width: 100%;
  font-weight: 500;

  & > p {
    margin-top: 0;
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: underline;
`;
