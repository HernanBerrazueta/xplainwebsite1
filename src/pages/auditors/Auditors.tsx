// import VideoComponent from "../../components/auditors/videoComponent/VideoComponent";
import Footer from "../../components/footer/Footer";
import Carousel from "../../components/carousel/Carousel";
// import { threeColumnData } from "../../components/auditors/threeColumnsComponent/data";
// import ThreeColumn from "../../components/homepage/threeColumnsComponent/ThreeColumnsComponent";
import HeroComponent from "../../components/treasurers/heroComponent/HeroComponent";
import { sampleSlides } from "../../components/carousel/data";

const Auditors = () => {
  return (
    <>
      {/* <VideoComponent /> */}
      <HeroComponent />
      <Carousel slides={sampleSlides} />
      {/* <ThreeColumn data={threeColumnData} /> */}
      <Footer />
    </>
  );
};

export default Auditors;
