import React from "react";
import { Link } from "react-router-dom";
import useMatchMedia from "../../../hooks/useMediaQuery";
import logo from "../../../assets/logos/xplain.svg";
import { LogoStyle } from "../Header.styled";

const Logo: React.FC = () => {
  const { isMobile } = useMatchMedia();

  return (
    <Link
      to="/"
      style={{
        textDecoration: "none",
        padding: !isMobile ? "20px 20px 26px" : undefined,
      }}
    >
      <LogoStyle src={logo} alt="Logo" />
    </Link>
  );
};

export default Logo;
