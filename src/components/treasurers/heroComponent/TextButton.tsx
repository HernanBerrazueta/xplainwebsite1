import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import useMatchMedia from "../../../hooks/useMediaQuery";
import theme from "../../../theme";
import Image from "./Image";
import {
  MainTitleStyled,
  MainTextStyled,
  LogoStyled,
  ReverseButtonStyle,
} from "./HeroComponent.styled";
import { GridItemStyled } from "../../fundAdmins/HeroAdmins.styled";
import { FadeInAnimation } from "../../hero/Hero.styled";
import {
  treasurerData,
  auditorData,
  adminsData,
  insightsData,
} from "./herosData";
import FooterForm from "../../footer/FooterForm";

const TextComponent = () => {
  const { isMobile, isUltraLarge, isTablet, isLaptop, isDesktop } =
    useMatchMedia();
  const location = useLocation();
  const isTreasurersPage = location.pathname === "/prisma";
  const isAuditorsPage = location.pathname === "/aurea";
  const isInsightsPage = location.pathname === "/insights";
  let bgColor = theme.palette.text.primary;
  let btnColor = theme.palette.primary.light;

  const selectedData = isTreasurersPage
    ? treasurerData
    : isAuditorsPage
    ? auditorData
    : isInsightsPage
    ? insightsData
    : adminsData;

  const titleRef = useRef<HTMLDivElement>(null);

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
            style={{ width: isUltraLarge ? 300 : 250 }}
          />
        </div>
      </FadeInAnimation>
      <FadeInAnimation $delay="0.1s">
        <div
          style={{
            display: "inline-block",
            maxWidth: isMobile
              ? 280
              : isTablet
              ? 320
              : isLaptop || isDesktop
              ? 370
              : 400,
          }}
          ref={titleRef}
        >
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
            maxWidth: isUltraLarge ? 540 : 600,
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
        {isInsightsPage ? (
          <FooterForm bgColor={bgColor} btnColor={btnColor} />
        ) : isMobile ? (
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
                Learn More
              </ReverseButtonStyle>
            </Link>
          </div>
        ) : (
          <Link to="/contact-us">
            <ReverseButtonStyle variant="contained" color="primary">
              Learn More
            </ReverseButtonStyle>
          </Link>
        )}
      </FadeInAnimation>
    </GridItemStyled>
  );
};

export default TextComponent;
