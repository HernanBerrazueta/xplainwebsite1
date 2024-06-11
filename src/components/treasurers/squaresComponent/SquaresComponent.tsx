import React from "react";
import { useLocation } from "react-router-dom";
import theme from "../../../theme";
import { ContainerStyled, GridWrapper } from "./SquaresComponent.styled";
import SquareItem from "./SquareItem";

interface ColumnData {
  title: string;
}

interface Props {
  data: ColumnData[];
}

const SquaresColumn: React.FC<Props> = ({ data }) => {
  const location = useLocation();
  const isFundPage = location.pathname === "/lumina";

  const backgroundColorLight: string = isFundPage
    ? theme.palette.primary.light
    : theme.palette.primary.main;
  const backgroundColorDark: string = isFundPage
    ? theme.palette.primary.main
    : theme.palette.primary.light;

  return (
    <ContainerStyled>
      <GridWrapper container spacing={8}>
        {data.map((item, index) => (
          <SquareItem
            key={index}
            title={item.title}
            backgroundColor={
              index % 2 === 0 ? backgroundColorLight : backgroundColorDark
            }
          />
        ))}
      </GridWrapper>
    </ContainerStyled>
  );
};

export default SquaresColumn;
