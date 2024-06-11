import React from "react";
import HeroAbout from "../../components/aboutPageComponents/hero/HeroAbout";
import Story from "../../components/aboutPageComponents/Story";
import Footer from "../../components/footer/Footer";
// import JoinUsComponent from "../../components/aboutPageComponents/joinUsComponent/JoinUsComponent";
import ContactUsComponent from "../../components/aboutPageComponents/contactUsComponent/ContactUsComponent";
import { SectionBackGroundStyled } from "../../components/treasurers/heroComponent/HeroComponent.styled";
import Comments from "../../components/aboutPageComponents/commentsComponent/Comments";
import { comments } from "../../components/aboutPageComponents/commentsComponent/data";

const About: React.FC = () => {
  return (
    <>
      <HeroAbout />
      <Story />
      <Comments comments={comments} />
      {/* <JoinUsComponent /> */}
      <ContactUsComponent />
      <Footer />
    </>
  );
};

export default About;
