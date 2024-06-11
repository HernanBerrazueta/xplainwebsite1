import React from "react";
import truncateString from "../../utils/stringFunctions";
import { images } from "../insights/threeColumnsComponent/data";
import {
  Container,
  FirstFlexElement,
  FirstLowerSpan,
  FirstUpperSpan,
  ImageInnerWrapperStyled,
  ImageStyled,
  ImageWrapperStyled,
  InnerContainer,
  SecondFlexElement,
  SecondLowerSpan,
  SecondUpperSpan,
} from "./ArticleImage.styled";

interface RenderItem {
  title: string;
  image: string;
  text: string;
  id: number;
}

const ArticleImage: React.FC<{ item?: RenderItem }> = ({ item }) => {
  return (
    <Container>
      <ImageWrapperStyled>
        {images.map(({ image, alt }) => (
          <ImageInnerWrapperStyled key={alt}>
            <ImageStyled src={image} alt={alt} />
          </ImageInnerWrapperStyled>
        ))}
      </ImageWrapperStyled>
      <InnerContainer>
        <FirstFlexElement>
          <FirstUpperSpan>2024</FirstUpperSpan>
          <FirstLowerSpan>
            {truncateString(item?.title || "", 60)}
          </FirstLowerSpan>
        </FirstFlexElement>
        <SecondFlexElement>
          <SecondUpperSpan>XPLAIN</SecondUpperSpan>
          <br />
          <SecondLowerSpan>Dedicated to derivatives</SecondLowerSpan>
        </SecondFlexElement>
      </InnerContainer>
    </Container>
  );
};
export default ArticleImage;
