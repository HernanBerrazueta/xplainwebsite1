import React from "react";
import Grid from "@mui/material/Grid";
import { ContainerStyled } from "./ThreeColumnsComponent.styled";
import ColumnItem from "./ColumnItem";

interface ColumnData {
  title: string;
  image: string;
  text: string;
  id: number;
}

interface Props {
  data: ColumnData[];
}

const ThreeColumn: React.FC<Props> = ({ data }) => {
  return (
    <>
      <ContainerStyled>
        <Grid container spacing={3}>
          {data.map((item) => (
            <ColumnItem key={item.id} item={item} />
          ))}
        </Grid>
      </ContainerStyled>
    </>
  );
};

export default ThreeColumn;
