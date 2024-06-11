import React from "react";
import { ContainerStyled, GridStyled } from "./TwoColumnsComponent.styled";
import ImageColumn from "./ImageColumn";
import ContentColumn from "./ContentColumn";
import useMatchMedia from "../../../hooks/useMediaQuery";

interface Props {
  data: {
    [key: string]: {
      paragraph: string;
      title: string;
      text: string;
      secondaryText: string;
      link: string;
      image: string;
      logo: string;
    };
  };
  index: number;
}

const TwoColumnsComponent: React.FC<Props> = ({ data, index }) => {
  const { isMobile } = useMatchMedia();
  const isOdd = index % 2 !== 0;
  const dataKey = Object.keys(data)[0];
  const { image, ...contentData } = data[dataKey];

  return (
    <ContainerStyled>
      <GridStyled container spacing={3} isOdd={isOdd ? "true" : "false"}>
        {isMobile ? (
          <>
            <ContentColumn
              data={contentData}
              isOdd={isOdd ? "true" : "false"}
            />
            <ImageColumn image={image} isOdd={isOdd ? "true" : "false"} />
          </>
        ) : (
          <>
            {isOdd ? (
              <>
                <ContentColumn data={contentData} isOdd="true" />
                <ImageColumn image={image} isOdd="true" />
              </>
            ) : (
              <>
                <ImageColumn image={image} isOdd="false" />
                <ContentColumn data={contentData} isOdd="false" />
              </>
            )}
          </>
        )}
      </GridStyled>
    </ContainerStyled>
  );
};

export default TwoColumnsComponent;
