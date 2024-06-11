import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../utils/device";
import theme from "../../theme";

export const menuItems = [
  { to: "/prisma", label: "Prisma — For Treasurers" },
  { to: "/lumina", label: "Lumina — For Fund Admins" },
  { to: "/aurea", label: "Aurea — For Auditors" },
];

export const burgerMenuPages = [
  { to: "/about", label: "About Us" },
  { to: "/contact-us", label: "Contact Us" },
];

export const AppBarStyle = styled.div`
  padding: 20px 0;
  width: 100%;

  @media ${device.mobileOnly} {
    position: static;
    flex-direction: column;
    align-items: center;
  }
`;

export const LogoStyle = styled.img`
  height: auto;
  width: 100px;

  @media ${device.mobileOnly} {
    width: 80px;
  }
`;

export const LinkStyle = styled(Link)<{ active?: string; inSubMenu?: boolean }>`
  color: #fff;
  text-decoration: none;
  margin: 0 40px;
  font-family: "CircularXXWeb-Regular", sans-serif;
  font-weight: 500;
  font-size: 16px;
  padding-bottom: ${({ inSubMenu }) => (inSubMenu ? "5px" : "10px")};
  border-bottom: ${({ active }) => (active ? "2px solid #00ff00" : "none")};
  display: inline-block;
  width: fit-content;

  ${({ active, inSubMenu }) =>
    (active || inSubMenu) &&
    css`
      border-bottom-width: 3px;
      padding-bottom: 10px;
    `}

  @media ${device.mobileOnly} {
    margin: 5px;
  }

  @media ${device.desktop} {
    font-size: 20px;
  }
`;

export const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  padding: 10px 10px 30px;
  background-color: ${theme.palette.primary.main};
  box-shadow: 0 0 4px #805cdd;

  z-index: 999;
  width: 305px;

  @media ${device.desktop} {
    width: 355px;
  }

  ${LinkStyle} {
    color: #fff;
    display: block;
  }

  ${LinkStyle}:hover {
    color: #fff;
  }

  ${LinkStyle}:active {
    color: #fff;
  }
`;

export const SubMenuItemStyle = styled(LinkStyle)`
  margin-top: 20px;
`;
