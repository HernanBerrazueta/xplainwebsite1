import { useRef /*useEffect, useState*/ } from "react";
import { Link, useLocation } from "react-router-dom";
import useMatchMedia from "../../../hooks/useMediaQuery";
import theme from "../../../theme";
import Image from "./Image";
import {
  MainTitleStyled,
  MainTextStyled,
  LogoStyled,
  SpanAurea,
  ReverseButtonStyle,
} from "./HeroComponent.styled";
import { GridItemStyled } from "../../fundAdmins/HeroAdmins.styled";
import { FadeInAnimation } from "../../hero/Hero.styled";
import { treasurerData, auditorData, adminsData } from "./herosData";

const TextComponent = () => {
  const { isMobile } = useMatchMedia();
  const location = useLocation();
  const isTreasurersPage = location.pathname === "/prisma";
  const isAuditorsPage = location.pathname === "/aurea";

  const logoWidth = isAuditorsPage ? "125px" : "250px";

  const selectedData = isTreasurersPage
    ? treasurerData
    : isAuditorsPage
    ? auditorData
    : adminsData;

  const titleRef = useRef<HTMLDivElement>(null);
  // const [titleWidth, setTitleWidth] = useState<number>(0);

  // useEffect(() => {
  //   if (titleRef.current) {
  //     setTitleWidth(titleRef.current.offsetWidth);
  //   }
  // }, [selectedData?.title]);

  return (
    <GridItemStyled item xs={6}>
      <FadeInAnimation $delay="0s">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            marginBottom: "25px",
          }}
        >
          <LogoStyled
            src={selectedData?.image}
            alt={selectedData?.alt}
            style={{ width: logoWidth }}
          />
          {isAuditorsPage && (
            <SpanAurea style={{ marginLeft: "10px" }}>AUREA</SpanAurea>
          )}
        </div>
      </FadeInAnimation>
      <FadeInAnimation $delay="0.1s">
        <div style={{ display: "inline-block", maxWidth: 632 }} ref={titleRef}>
          <MainTitleStyled>{selectedData?.title}</MainTitleStyled>
        </div>
      </FadeInAnimation>
      {isMobile && <Image />}
      <FadeInAnimation
        $delay="0.2s"
        style={{ margin: isMobile ? "0 -30px" : undefined }}
      >
        <div
          style={{
            maxWidth: 632,
            /*maxWidth: titleWidth*/
          }}
        >
          <MainTextStyled
            style={{
              color: theme.palette.text.secondary,
              paddingBottom: 0,
            }}
          >
            {selectedData?.text}
          </MainTextStyled>
          <MainTextStyled
            style={{
              color: theme.palette.text.secondary,
            }}
          >
            {selectedData?.secondaryText}
          </MainTextStyled>
        </div>
      </FadeInAnimation>
      <FadeInAnimation $delay="0.3s">
        {isMobile ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingBottom: "50px",
            }}
          >
            <Link to="/contact-us">
              <ReverseButtonStyle variant="contained" color="primary">
                Enquire
              </ReverseButtonStyle>
            </Link>
          </div>
        ) : (
          <Link to="/contact-us">
            <ReverseButtonStyle variant="contained" color="primary">
              Enquire
            </ReverseButtonStyle>
          </Link>
        )}
      </FadeInAnimation>
    </GridItemStyled>
  );
};

export default TextComponent;
