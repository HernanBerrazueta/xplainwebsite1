import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { useLocation } from "react-router-dom";
import { data } from "./HeroComponent.styled";
import { MoveLeftToRightAnimation } from "../../hero/Hero.styled";
import useMatchMedia from "../../../hooks/useMediaQuery";
import { size } from "../../../utils/device";

const ImageComponent = () => {
  const { isMobile } = useMatchMedia();
  const location = useLocation();
  const isAdminsPage = location.pathname === "/lumina";
  const isArticlesPage = location.pathname === "/articles";
  const isAuditorsPage = location.pathname === "/aurea";

  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let imageIndex, textIndex;

  if (isArticlesPage) {
    imageIndex = 2;
    textIndex = 2;
  } else if (isAuditorsPage) {
    imageIndex = 3;
    textIndex = 3;
  } else if (isAdminsPage) {
    imageIndex = 4;
    textIndex = 4;
  } else {
    imageIndex = 1;
    textIndex = 1;
  }

  const maxHeight = parseInt(size.maxHeight.replace("px", ""));

  const imageHeight =
    isMobile || height > maxHeight ? "auto" : "calc(100vh - 104px)";

  return (
    <Grid item xs={isMobile ? 12 : 6}>
      <MoveLeftToRightAnimation
        style={{ margin: isMobile ? "0 -30px" : undefined }}
      >
        <img
          src={data[imageIndex].image}
          alt={data[textIndex].text}
          style={{
            height: imageHeight,
          }}
        />
      </MoveLeftToRightAnimation>
    </Grid>
  );
};

export default ImageComponent;
