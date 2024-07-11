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
import useMatchMedia from "../../../hooks/useMediaQuery";

interface ColumnData {
  item: {
    title: string;
    image: string;
    text: string[];
    id: number;
  };
}

const ColumnItem: React.FC<ColumnData> = ({ item }) => {
  const { isMobile } = useMatchMedia();
  const location = useLocation();
  const isAuditorsPage = location.pathname === "/aurea";
  const isMainPage = location.pathname === "/";

  const toForm = `/insights/news-digests/${item.id}`;
  const titleStyle = isMainPage
    ? {
        color: `${theme.palette.primary.light}`,
      }
    : { color: `${theme.palette.primary.main}` };
  const textAlignStyle = isAuditorsPage ? "center" : "left";

  return (
    <>
      <Grid item xs={12} sm={12}>
        <Link to={toForm}>
          <PaperStyled
            style={{
              backgroundColor: "inherit",
              flexDirection: isMobile ? "column" : undefined,
            }}
          >
            <ImageStyled src={item.image} alt={`Decoration`} />
            <div
              style={{
                marginLeft: isMobile ? 0 : 20,
                display: "flex",
                flexDirection: "column",
                borderBottom: `1px solid ${theme.palette.primary.light}`,
                paddingBottom: isMobile ? 20 : 0,
              }}
            >
              <TitleStyled style={{ ...titleStyle, textAlign: textAlignStyle }}>
                {item.title}
              </TitleStyled>
              <TextStyled style={{ textAlign: textAlignStyle }}>
                {truncateString(item?.text[0] || "", 137)}
              </TextStyled>
            </div>
          </PaperStyled>
        </Link>
      </Grid>
    </>
  );
};

export default ColumnItem;
