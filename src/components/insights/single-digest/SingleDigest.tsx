import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ButtonStyled } from "../../footer/Footer.styled";
import { digestData } from "../threeColumnsComponent/data";
import ShareIcon from "@mui/icons-material/Share";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { maxWidth } from "@mui/system";

const SingleDigest: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const renderItem = digestData.find((item) => item.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!renderItem) {
    return (
      <div style={{ color: "#000", height: "calc(100vh - 104px" }}>
        No data available
      </div>
    );
  }
  const { text, title, linkText, link } = renderItem;

  const currentIndex = digestData.findIndex((item) => item.id === Number(id));
  const previousItem = currentIndex > 0 ? digestData[currentIndex - 1] : null;
  const nextItem =
    currentIndex < digestData.length - 1 ? digestData[currentIndex + 1] : null;

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "100px 30px 0px 30px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div>
          <Link to="/">
            <span style={{ color: "#000" }}>Home / </span>
          </Link>
          <Link to="/insights">
            <span style={{ color: "#805CDD" }}>News Digests</span>
          </Link>
        </div>
        <div>
          <ButtonStyled
            style={{
              backgroundColor: "#fff",
              color: "#805CDD",
              border: "1px solid #805CDD",
              boxShadow: "none",
            }}
            type="submit"
            variant="contained"
            color="secondary"
          >
            <ShareIcon style={{ marginRight: 5 }} />
            Share
          </ButtonStyled>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 30,
          padding: "50px 100px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            color: "#805CDD",
            fontSize: 36,
            marginBottom: 30,
            fontFamily: "CircularXXWeb-Regular, sans-serif",
          }}
        >
          News Digest
        </h1>
        <h2 style={{ color: "#000", fontSize: 36 }}>{title}</h2>
        <p style={{ color: "#805CDD" }}>Published on 24/7/2024</p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 30,
            marginBottom: 50,
          }}
        >
          {text.map((item: string, index: number) => (
            <p
              style={{ color: "#000", lineHeight: 1.7, fontSize: 22 }}
              key={index}
            >
              {item}
            </p>
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
              <span style={{ color: "#805CDD", fontSize: 22, lineHeight: 1.3 }}>
                {linkText}
              </span>
            </a>
          </div>
        </div>
        <div>
          <p style={{ color: "#000" }}>Tags: </p>
          <div style={{ display: "flex", gap: 30, padding: 30 }}>
            <span style={{ color: "#805CDD" }}>#xplain</span>
            <span style={{ color: "#805CDD" }}>#solum</span>
            <span style={{ color: "#805CDD" }}>#solum_financial</span>
            <span style={{ color: "#805CDD" }}>#derivatives</span>
            <span style={{ color: "#805CDD" }}>#accounting_model</span>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#805CDD",
          padding: "50px 30px",
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        <div>
          {previousItem && (
            <Link
              to={`/insights/news-digests/${previousItem.id}`}
              style={{ display: "flex", alignItems: "center", fontSize: 22 }}
            >
              <KeyboardArrowLeftIcon /> Previous
            </Link>
          )}
        </div>
        <div>
          {nextItem && (
            <Link
              to={`/insights/news-digests/${nextItem.id}`}
              style={{ display: "flex", alignItems: "center", fontSize: 22 }}
            >
              Next <KeyboardArrowRightIcon />
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleDigest;