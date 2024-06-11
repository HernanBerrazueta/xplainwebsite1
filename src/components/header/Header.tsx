import React, { useState, useEffect } from "react";
import { Toolbar, Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  AppBarStyle,
  LinkStyle,
  SubMenu,
  SubMenuItemStyle,
  menuItems,
} from "./Header.styled";
import useMatchMedia from "../../hooks/useMediaQuery";
import BurgerMenu from "./mobileMenu/BurgerMenu";
import Logo from "./logo/Logo";
import useScrollLock from "../../hooks/useScrollLock";
// import { FadeInAnimation } from "../hero/Hero.styled";

interface Props {
  backgroundColor: string;
  boxShadow: string;
}

const Header: React.FC<Props> = ({ backgroundColor, boxShadow }) => {
  const location = useLocation();
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const { isMobile } = useMatchMedia();
  const { lockScroll, unlockScroll } = useScrollLock();

  const toggleMenu = () => {
    if (mobileMenuIsOpen) return closeMobMenu();
    setMobileMenuIsOpen(true);
    lockScroll();
  };

  const closeMobMenu = () => {
    setMobileMenuIsOpen(false);
    unlockScroll();
  };

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  useEffect(() => {
    closeMobMenu();
  }, [location]);

  return (
    <>
      <AppBarStyle style={{ backgroundColor: backgroundColor }}>
        <Toolbar
          style={{
            maxWidth: "2788px",
            margin: "0 auto",
          }}
        >
          <Logo />
          <div style={{ flexGrow: 1 }}>
            {!isMobile ? (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <div
                  style={{
                    position: "relative",
                  }}
                  onMouseEnter={toggleSubMenu}
                  onMouseLeave={toggleSubMenu}
                >
                  <LinkStyle
                    to="#"
                    active={
                      location.pathname === "/prisma" ||
                      location.pathname === "/lumina" ||
                      location.pathname === "/aurea"
                        ? "true"
                        : undefined
                    }
                    onClick={(e) => e.preventDefault()}
                  >
                    Solutions
                    <ExpandMoreIcon style={{ verticalAlign: "middle" }} />
                  </LinkStyle>
                  {showSubMenu && (
                    // <FadeInAnimation $delay="0.03s">
                    <SubMenu
                      style={{
                        // display: "block",
                        // display: showSubMenu ? "block" : "none",
                        backgroundColor,
                        boxShadow,
                      }}
                    >
                      {menuItems.map(({ to, label }) => (
                        <SubMenuItemStyle
                          key={label}
                          to={to}
                          active={location.pathname === to ? "true" : undefined}
                        >
                          {label}
                        </SubMenuItemStyle>
                      ))}
                    </SubMenu>
                    // </FadeInAnimation>
                  )}
                </div>
                <LinkStyle
                  to="/about"
                  active={location.pathname === "/about" ? "true" : undefined}
                >
                  About
                </LinkStyle>

                <LinkStyle
                  to="/contact-us"
                  active={
                    location.pathname === "/contact-us" ? "true" : undefined
                  }
                >
                  Contact
                </LinkStyle>
              </Box>
            ) : (
              <BurgerMenu
                closeMobMenu={closeMobMenu}
                mobileMenuIsOpen={mobileMenuIsOpen}
                toggleMenu={toggleMenu}
              />
            )}
          </div>
        </Toolbar>
      </AppBarStyle>
    </>
  );
};

export default Header;
