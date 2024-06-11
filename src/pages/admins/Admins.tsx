import React from "react";
import Footer from "../../components/footer/Footer";
import HeroComponent from "../../components/treasurers/heroComponent/HeroComponent";
import Carousel from "../../components/carousel/Carousel";
import { luminaSlides } from "../../components/carousel/data";

// import VideoComponent from "../../components/treasurers/videoComponent/VideoComponent";
// import adminsVideoData from "./adminsVideoData";
// import HeroComponent from "../../components/treasurers/heroComponent/HeroComponent";   //need to reuse this component in future
// import SquaresComponent from "../../components/treasurers/squaresComponent/SquaresComponent";
// import squareColumnAdminsData from "../../components/treasurers/squaresComponent/adminsPage/dataAdmins";

const Admins: React.FC = () => {
  return (
    <>
      <HeroComponent />
      {/* <HeroComponent /> */}
      <Carousel slides={luminaSlides} />
      {/* <VideoComponent
        videoSrc={adminsVideoData.src}
        title={adminsVideoData.title}
        text={adminsVideoData.text}
        backgroundColor={adminsVideoData.backgroundColor}
      /> */}
      {/* <SquaresComponent data={squareColumnAdminsData} /> */}
      <Footer />
    </>
  );
};

export default Admins;
