import React from "react";
import Grid from "@mui/material/Grid";
import { ContainerStyled } from "./ThreeColumnsComponent.styled";
import ColumnItem from "./ColumnItem";
import { Link } from "react-router-dom";
import theme from "../../../theme";

interface ColumnData {
  data: {
    title: string;
    image: string;
    text: string[];
    id: number;
  }[];
}

const NewsDigest: React.FC<ColumnData> = ({ data }) => {
  return (
    <>
      <ContainerStyled>
        <Grid
          container
          style={{
            flexDirection: "column",
            alignContent: "center",
            maxWidth: "70vw",
            margin: "0 auto",
            padding: "100px 0",
          }}
        >
          {data.map((item) => (
            <ColumnItem key={item.id} item={item} />
          ))}
          <Link
            to="/contact-us"
            style={{
              color: theme.palette.primary.light,
              margin: "100px 0 0 auto",
            }}
          >
            Previous news digests
          </Link>
        </Grid>
      </ContainerStyled>
    </>
  );
};

export default NewsDigest;
