import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { digestData } from "../threeColumnsComponent/data";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "../../../assets/logos/linkedin-with-circle.svg";
import theme from "../../../theme";
import {
  DigestButtons,
  DigestButtonsWrapper,
  DigestHeader,
  DigestMainWrapper,
  DigestShareWrapper,
  DigestSubHeader,
  DigestText,
  DigestTextWrapper,
  DigestWrapper,
  ShareLink,
  ShareText,
} from "./SingleDigest.styled";

const SingleDigest: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const renderItem = digestData.find((item) => item.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!renderItem) {
    return (
      <div style={{ color: "#000", height: "calc(100vh - 104px)" }}>
        No data available
      </div>
    );
  }
  const { text, title, linkText, link } = renderItem;

  const currentIndex = digestData.findIndex((item) => item.id === Number(id));
  const previousItem = currentIndex > 0 ? digestData[currentIndex - 1] : null;
  const nextItem =
    currentIndex < digestData.length - 1 ? digestData[currentIndex + 1] : null;

  const currentUrl = window.location.href;

  const linkedInShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
    currentUrl
  )}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    currentUrl
  )}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    currentUrl
  )}`;

  return (
    <div style={{ minHeight: "calc(100vh - 479px)" }}>
      <DigestMainWrapper>
        <div>
          <Link to="/">
            <span style={{ color: theme.palette.primary.main }}>Home / </span>
          </Link>
          <Link to="/insights">
            <span style={{ color: "#805CDD" }}>News Digests</span>
          </Link>
        </div>
      </DigestMainWrapper>
      <DigestWrapper>
        <DigestShareWrapper>
          <ShareText>Share</ShareText>
          <ShareLink
            href={linkedInShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "#fff" }}
          >
            <img src={LinkedInIcon} alt="LinkedIn" />
          </ShareLink>
          <ShareLink
            href={facebookShareUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookOutlinedIcon
              style={{
                width: 35,
                height: 35,
                color: theme.palette.primary.light,
              }}
            />
          </ShareLink>
          <ShareLink
            href={twitterShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: theme.palette.primary.light,
            }}
          >
            <TwitterIcon style={{ color: "white" }} />
          </ShareLink>
        </DigestShareWrapper>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 30,
          }}
        >
          <DigestHeader>News Digest</DigestHeader>
          <DigestSubHeader>{title}</DigestSubHeader>
          <p style={{ color: "#805CDD" }}>Published on 24/7/2024</p>
          <DigestTextWrapper>
            {text.map((item: string, index: number) => (
              <DigestText key={index}>{item}</DigestText>
            ))}
            <div>
              <span
                style={{
                  color: "lime",
                  fontSize: 22,
                }}
              >
                Source:{" "}
              </span>
              <a href={link} rel="noreferrer noopener" target="_blank">
                <span
                  style={{ color: "#805CDD", fontSize: 22, lineHeight: 1.3 }}
                >
                  {linkText}
                </span>
              </a>
            </div>
          </DigestTextWrapper>
        </div>
      </DigestWrapper>
      <DigestButtonsWrapper>
        <div>
          {previousItem && (
            <DigestButtons to={`/insights/news-digests/${previousItem.id}`}>
              <KeyboardArrowLeftIcon /> Previous
            </DigestButtons>
          )}
        </div>
        <div>
          {nextItem && (
            <DigestButtons to={`/insights/news-digests/${nextItem.id}`}>
              Next <KeyboardArrowRightIcon />
            </DigestButtons>
          )}
        </div>
      </DigestButtonsWrapper>
    </div>
  );
};

export default SingleDigest;
