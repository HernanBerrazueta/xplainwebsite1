import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../utils/device";

export const menuItems = [
  { to: "/prisma", label: "Prisma – For Treasurers" },
  { to: "/lumina", label: "Lumina – For Fund Admins" },
  { to: "/aurea", label: "Aurea – For Auditors" },
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
  font-family: "CircularXXWeb-Medium", sans-serif;
  font-size: 16px;
  padding-bottom: ${({ inSubMenu }) => (inSubMenu ? "5px" : "10px")};
  border-bottom: ${({ active }) => (active ? "2px solid #00ff00" : "none")};
  margin-bottom: ${({ active }) => (active ? "-2px" : "none")};
  display: inline-block;
  width: fit-content;
  height: 38px;
  transition: border-bottom 0.1s ease-in-out, margin-bottom 0.1s ease-in-out;

  ${({ active, inSubMenu }) =>
    (active || inSubMenu) &&
    css`
      border-bottom-width: 2px;
      margin-bottom: -2px;
      padding-bottom: 10px;
    `}
  @media ${device.mobileOnly} {
    margin: 5px;
  }

  @media ${device.desktop} {
    font-size: 18px;
  }
`;

export const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 20px;
  padding-bottom: 1px;
  background-color: #805cddb3;
  box-shadow: 0 0 4px #805cdd;

  z-index: 999;
  width: 280px;

  ${LinkStyle} {
    color: #fff;
    display: block;
  }

  ${LinkStyle}:active {
    color: #fff;
  }
`;

export const SubMenuItemStyle = styled(LinkStyle)`
  margin: 0;
  padding: 10px 0px;
  height: 38px;
`;

export const SubMenuItemStyleWrapper = styled.div`
  padding: 0 20px;
  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: #805cdde6;
  }
`;

export const NonSubMenuLink = styled(LinkStyle)`
  &:hover {
    ${({ active }) =>
      !active &&
      css`
        border-bottom: 1px solid lime;
        margin-bottom: -1px;
      `}
  }
`;
