import React from "react";
import Footer from "../../components/footer/Footer";
import HeroComponent from "../../components/treasurers/heroComponent/HeroComponent";
import Carousel from "../../components/carousel/Carousel";
import { luminaSlides } from "../../components/carousel/data";

const Admins: React.FC = () => {
  return (
    <>
      <HeroComponent />
      <Carousel slides={luminaSlides} />
      <Footer />
    </>
  );
};

export default Admins;
