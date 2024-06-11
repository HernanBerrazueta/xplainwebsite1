import React, { useEffect } from "react";
import Footer from "../../../components/footer/Footer";
import {
  Container,
  Header,
  SubHeader,
  TextStyled,
} from "../cookies/Cookies.styled";

const EsgCommitment: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container style={{ paddingBottom: 250 }}>
        <Header>ESG Commitment</Header>
        <SubHeader>Solum's ESG Commitment</SubHeader>
        <TextStyled>
          Solum Financial (we) recognise the value of ESG integration into our
          business practices, and as such are committed to being responsibly
          sustainable and fostering a culture of inclusion and integrity. We act
          with environmental responsibility and promote sustainable practices
          among our employees through active dialogue to reduce our
          environmental impact at work and at home.
        </TextStyled>
      </Container>
      <Footer />
    </>
  );
};

export default EsgCommitment;
