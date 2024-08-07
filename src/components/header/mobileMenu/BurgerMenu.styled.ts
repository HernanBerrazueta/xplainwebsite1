import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../../../theme";

export const HamburgerMenu = styled.div`
  position: relative;
`;

export const MenuToggle = styled.input`
  opacity: 0;
  &:checked + label > span {
    transform: rotate(45deg);
  }
  &:checked + label > span::before {
    top: 0;
    transform: rotate(0deg);
  }
  &:checked + label > span::after {
    top: 0;
    transform: rotate(90deg);
  }
  &:checked ~ ul {
    left: 0 !important;
  }
`;

export const MenuBtn = styled.label`
  position: absolute;
  top: 10px;
  right: 20px;
  width: 26px;
  height: 26px;
  cursor: pointer;
  z-index: 6;

  span,
  span::before,
  span::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: lime;
    transition-duration: 0.25s;
  }
  span::before {
    content: "";
    top: -8px;
  }
  span::after {
    content: "";
    top: 8px;
  }
`;

interface MenuBoxProps {
  $mobileMenuIsOpen: boolean;
}

export const MenuBox = styled.ul<MenuBoxProps>`
  display: block;
  position: fixed;
  left: 0;
  top: ${({ $mobileMenuIsOpen }) => ($mobileMenuIsOpen ? "0" : "-100%")};
  z-index: 5;

  width: 100vw;
  height: 85%;
  overflow-y: auto;
  margin: 0;
  padding: 40px 0;
  list-style: none;
  background-color: ${theme.palette.primary.main};
  box-shadow: 2px 2px 6px ${theme.palette.primary.light};
  transition: top 0.25s ease-in-out;
`;

export const MenuItem = styled(Link)<{ active?: string }>`
  display: inline-block;
  padding: 12px 24px 12px 36px;
  color: ${({ active }) => (active ? "#00ff00" : "#fff")};
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  transition-duration: 0.25s;

  &:hover {
    color: #00ff00;
    background-color: #cfd8dc;
  }
`;

export const MenuTitle = styled.li`
  display: inline-block;
  padding: 12px;
  color: ${theme.palette.primary.light};
  font-size: 20px;
  font-weight: 600;
`;
