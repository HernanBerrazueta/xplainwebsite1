import React, { useEffect } from "react";
import Footer from "../../../components/footer/Footer";
import { Container, Header, TextStyled } from "../cookies/Cookies.styled";
const protectionPolicy = require("../../../assets/dataProtectionPolicy/Solum Financial Data Protection Policy 2024.pdf");

const DataProtection: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container style={{ paddingBottom: 250 }}>
        <Header>Data Protection Policy</Header>
        <TextStyled>
          Please click{" "}
          <a
            href={protectionPolicy}
            target="_blank"
            rel="noreferrer noopener"
            style={{ textDecoration: "underline" }}
          >
            here
          </a>{" "}
          to view our Data Protection Policy.
        </TextStyled>
      </Container>
      <Footer />
    </>
  );
};

export default DataProtection;
