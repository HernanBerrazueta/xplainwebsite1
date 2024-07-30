import styled from "styled-components";
import theme from "../../../theme";
import { Link } from "react-router-dom";
import { device } from "../../../utils/device";

export const DigestMainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 30px 0px 30px;
  max-width: 1400px;
  margin: 0 auto;
`;

export const DigestWrapper = styled.div`
  display: flex;
  padding: 50px 100px;
  max-width: 1200px;
  margin: 0 auto;

  @media ${device.mobile} {
    padding: 50px 20px;
    flex-direction: column-reverse;
    gap: 30px;
  }
  @media ${device.desktop} {
    flex-direction: row;
  }
`;
export const DigestShareWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 50px;

  @media ${device.desktop} {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ShareText = styled.p`
  color: #805cdd;
`;
export const ShareLink = styled.a`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

export const DigestHeader = styled.h1`
  font-family: "CircularXXWeb-Regular", sans-serif;
  font-size: 36px;

  color: #805cdd;
  margin-bottom: 30px;
`;

export const DigestSubHeader = styled.h2`
  color: ${theme.palette.primary.main};
  font-size: 36px;

  @media ${device.mobileOnly} {
    line-height: 1.4;
  }
`;

export const DigestTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 50px;
`;

export const DigestText = styled.p`
  font-size: 22px;
  color: ${theme.palette.primary.main};

  @media ${device.mobileOnly} {
    line-height: 1.4;
  }
`;

export const DigestButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: #805cdd;
  padding: 50px 30px;
  max-width: 1400px;
  margin: 0 auto;
`;

export const DigestButtons = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 22px;
`;
