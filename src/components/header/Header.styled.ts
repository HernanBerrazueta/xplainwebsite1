import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../utils/device";

export const menuItems = [
  { to: "/prisma", label: "Prisma - For Treasurers" },
  { to: "/lumina", label: "Lumina - For Fund Admins" },
  { to: "/aurea", label: "Aurea - For Auditors" },
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
  color: ${({ active }) => (active ? "#00ff00" : "#fff")};
  text-decoration: none;
  margin: 0 40px;
  font-size: 16px;
  padding-bottom: ${({ inSubMenu }) => (inSubMenu ? "5px" : "10px")};
  // border-bottom: ${({ active }) => (active ? "2px solid #00ff00" : "none")};
  // margin-bottom: ${({ active }) => (active ? "-2px" : "0")};
  display: inline-block;
  width: fit-content;
  height: 38px;
  transition: color 0.1s ease-in-out;

  ${({ active, inSubMenu }) =>
    (active || inSubMenu) &&
    css`
      padding-bottom: 10px;
      color: #00ff00;
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
    display: block;
  }
`;

export const SubMenuItemStyle = styled(LinkStyle)<{ active?: string }>`
  margin: 0;
  padding: 10px 0px;
  height: 38px;
  ${({ active }) =>
    active &&
    css`
      color: #00ff00;
    `}
`;

export const SubMenuItemStyleWrapper = styled.div`
  padding: 0 20px;
  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: #805cdde6;

    // a {
    //   color: #00ff00;
    // }
  }
`;

export const NonSubMenuLink = styled(LinkStyle)`
  &:hover {
    color: #00ff00;
  }
`;
