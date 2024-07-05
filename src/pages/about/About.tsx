import React from "react";
import HeroAbout from "../../components/aboutPageComponents/hero/HeroAbout";
import Story from "../../components/aboutPageComponents/Story";
import Footer from "../../components/footer/Footer";
import Testimonials from "../../components/aboutPageComponents/testimonials/Testimonials";
import { aboutPageCarouselData } from "../../components/aboutPageComponents/testimonials/data";
import ContactUsComponent from "../../components/aboutPageComponents/contactUsComponent/ContactUsComponent";

const About: React.FC = () => {
  return (
    <>
      <HeroAbout />
      <Story index={0} />
      <Story index={1} />
      <Testimonials data={aboutPageCarouselData} />
      <ContactUsComponent />
      <Footer />
    </>
  );
};

export default About;
