import Footer from "../../components/footer/Footer";
import Carousel from "../../components/carousel/Carousel";
import HeroComponent from "../../components/treasurers/heroComponent/HeroComponent";
import { aureaSlides } from "../../components/carousel/data";

const Auditors = () => {
  return (
    <>
      <HeroComponent />
      <Carousel slides={aureaSlides} />
      <Footer />
    </>
  );
};

export default Auditors;
