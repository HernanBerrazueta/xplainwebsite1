import React, { useEffect } from "react";
import Footer from "../../../components/footer/Footer";
import {
  Container,
  Header,
  SubHeader,
  TextStyled,
} from "../cookies/Cookies.styled";

const DiversityAndInclusion: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container style={{ paddingBottom: 250 }}>
        <Header>Diversity and Inclusion</Header>
        <SubHeader>Diversity And Inclusion Statement</SubHeader>
        <TextStyled>
          We believe that creating an inclusive and supportive workplace
          environment is crucial to our way of conducting business and an
          essential part of our values system. It increases our ability to
          understand the needs of our customers and clients, and simultaneously
          creates a sense of belonging and value that enables our employees to
          perform at their best.
        </TextStyled>
        <TextStyled>
          <b>
            <q>
              We are committed to diversity, inclusion, and equality in our
              business and celebrate the unique perspectives and backgrounds
              that make us stronger. We have created a workplace inclusive of
              all people.
            </q>
          </b>
        </TextStyled>
        <TextStyled style={{ margin: 0 }}> – Vincent Dahinden</TextStyled>
      </Container>
      <Footer />
    </>
  );
};

export default DiversityAndInclusion;
