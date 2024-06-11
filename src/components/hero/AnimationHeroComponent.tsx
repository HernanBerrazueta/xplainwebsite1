import React, { useEffect, useState } from "react";
import useMatchMedia from "../../hooks/useMediaQuery";
import { size } from "../../utils/device";
import { VideoStyled } from "./Hero.styled";

const mp4 = require("../../assets/images/hero/grid/XPLAIN Home Screen Comp (927 x 927).mp4");

interface AnimationProps {
  controls: boolean;
}
const AnimationHeroComponent: React.FC<AnimationProps> = ({ controls }) => {
  const [height, setHeight] = useState(window.innerHeight);
  const { isMobile } = useMatchMedia();

  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxHeight = parseInt(size.maxHeight.replace("px", ""));

  const videoHeight =
    isMobile || height > maxHeight ? "auto" : "calc(100vh - 104px)";

  return (
    <VideoStyled
      id="hero-video"
      controls={controls}
      autoPlay
      muted
      loop
      style={{ height: videoHeight }}
    >
      <source src={mp4} type="video/mp4" />
      Your browser does not support the video tag.
    </VideoStyled>
  );
};

export default AnimationHeroComponent;
