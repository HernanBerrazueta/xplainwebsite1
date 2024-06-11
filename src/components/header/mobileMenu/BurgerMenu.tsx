import React, { useCallback, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { burgerMenuPages, menuItems } from "../Header.styled";
import Logo from "../logo/Logo";
import {
  HamburgerMenu,
  MenuBox,
  MenuBtn,
  MenuItem,
  MenuTitle,
  MenuToggle,
} from "./BurgerMenu.styled";

interface BurgerProps {
  closeMobMenu: () => void;
  mobileMenuIsOpen: boolean;
  toggleMenu: () => void;
}

const BurgerMenu: React.FC<BurgerProps> = ({
  closeMobMenu,
  mobileMenuIsOpen,
  toggleMenu,
}) => {
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMobMenu();
      }
    },
    [closeMobMenu]
  );

  useEffect(() => {
    if (mobileMenuIsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuIsOpen, handleClickOutside]);

  const handleMenuBtnClick = (e: React.MouseEvent<HTMLLabelElement>) => {
    e.preventDefault();
    toggleMenu();
  };

  return (
    <HamburgerMenu ref={menuRef}>
      <MenuToggle
        id="menu__toggle"
        type="checkbox"
        checked={mobileMenuIsOpen}
        onChange={toggleMenu}
      />
      <MenuBtn htmlFor="menu__toggle" onClick={handleMenuBtnClick}>
        <span></span>
      </MenuBtn>
      <MenuBox style={{ display: mobileMenuIsOpen ? "block" : "none" }}>
        <li style={{ paddingLeft: 16, marginBottom: 30 }}>
          <Logo />
        </li>
        <MenuTitle>Solutions</MenuTitle>
        {menuItems.map(({ to, label }) => (
          <li key={label}>
            <MenuItem
              to={to}
              active={location.pathname === to ? "true" : undefined}
            >
              {label}
            </MenuItem>
          </li>
        ))}
        <MenuTitle>Information</MenuTitle>
        {burgerMenuPages.map(({ to, label }) => (
          <li key={label}>
            <MenuItem
              to={to}
              active={location.pathname === to ? "true" : undefined}
            >
              {label}
            </MenuItem>
          </li>
        ))}
      </MenuBox>
    </HamburgerMenu>
  );
};

export default BurgerMenu;
