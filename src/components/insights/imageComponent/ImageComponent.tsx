import React from "react";
import { ContainerStyled } from "../../treasurers/heroComponent/HeroComponent.styled";
import theme from "../../../theme";
import Image from "../../treasurers/heroComponent/Image";
import TextGrid from "./TextGrid";

const ImageComponent: React.FC = () => {
  return (
    <section style={{ backgroundColor: theme.palette.primary.main }}>
      <ContainerStyled container>
        <TextGrid />
        <Image />
      </ContainerStyled>
    </section>
  );
};

export default ImageComponent;
