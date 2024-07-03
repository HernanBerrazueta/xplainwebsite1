import HeroComponent from "../../components/treasurers/heroComponent/HeroComponent";
import Carousel from "../../components/carousel/Carousel";
import Footer from "../../components/footer/Footer";
import { prismaSlides } from "../../components/carousel/data";

const Treasurers = () => {
  return (
    <>
      <HeroComponent />
      <Carousel slides={prismaSlides} />
      <Footer />
    </>
  );
};

export default Treasurers;
