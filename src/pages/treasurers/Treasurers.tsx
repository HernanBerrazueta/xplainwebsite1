import HeroComponent from "../../components/treasurers/heroComponent/HeroComponent";
import Carousel from "../../components/carousel/Carousel";
import Footer from "../../components/footer/Footer";
import { prismaSlides } from "../../components/carousel/data";
// import VideoComponent from "../../components/treasurers/videoComponent/VideoComponent";
// import SquaresComponent from "../../components/treasurers/squaresComponent/SquaresComponent";
// import squareColumnData from "../../components/treasurers/squaresComponent/dataTreasurers";
// import treasurersVideoData from "./treasurersVideoData";

const Treasurers = () => {
  return (
    <>
      <HeroComponent />
      <Carousel slides={prismaSlides} />
      {/* <VideoComponent
        videoSrc={treasurersVideoData.src}
        title={treasurersVideoData.title}
        text={treasurersVideoData.text}
        backgroundColor={treasurersVideoData.backgroundColor}
      /> */}
      {/* <SquaresComponent data={squareColumnData} /> */}
      <Footer />
    </>
  );
};

export default Treasurers;
