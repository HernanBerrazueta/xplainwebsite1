import React from "react";
import Grid from "@mui/material/Grid";
import { Link, useLocation } from "react-router-dom";
import theme from "../../../theme";
import truncateString from "../../../utils/stringFunctions";
import {
  PaperStyled,
  ImageStyled,
  TitleStyled,
  TextStyled,
} from "./ThreeColumnsComponent.styled";

interface ColumnData {
  title: string;
  image: string;
  text: string;
  id: number;
}

interface ColumnItemProps {
  item: ColumnData;
}

const ColumnItem: React.FC<ColumnItemProps> = ({ item }) => {
  const location = useLocation();

  const isAuditorsPage = location.pathname === "/aurea";
  const isInsightsPage = location.pathname === "/articles";
  const isMainPage = location.pathname === "/";
  console.log("item222", item);

  const toForm = isInsightsPage
    ? { pathname: `/article/${item.id}`, state: { item } }
    : { pathname: "/contact-us" };

  const titleStyle = isMainPage
    ? {
        color: `${theme.palette.primary.light}`,
      }
    : { color: `${theme.palette.primary.main}` };
  const textAlignStyle = isAuditorsPage ? "center" : "left";

  return (
    <>
      <Grid item xs={12} sm={4}>
        <Link to={toForm}>
          <PaperStyled style={{ backgroundColor: "inherit" }}>
            <ImageStyled src={item.image} alt={`Decoration`} />
            <TitleStyled style={{ ...titleStyle, textAlign: textAlignStyle }}>
              {truncateString(item?.title || "", 64)}
            </TitleStyled>
            <TextStyled style={{ textAlign: textAlignStyle }}>
              {item.text}
            </TextStyled>
          </PaperStyled>
        </Link>
      </Grid>
    </>
  );
};

export default ColumnItem;
