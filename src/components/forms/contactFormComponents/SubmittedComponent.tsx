import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ButtonStyled } from "../../treasurers/heroComponent/HeroComponent.styled";
import { Wrapper, InnerContainer } from "./Submitted.styled";

const Submitted: React.FC = () => {
  return (
    <>
      <Wrapper>
        <InnerContainer>
          <Typography
            variant="h4"
            align="center"
            style={{ color: "#fff", fontWeight: "bold" }}
          >
            Thank you!
            <br /> Your form has been submitted and we will be in touch with you
            shortly.
          </Typography>
        </InnerContainer>
        <Link to="/">
          <ButtonStyled variant="contained" color="primary">
            {/* <Typography
            variant="h5"
            align="center"
            style={{
              fontWeight: "bold",
              marginTop: 50,
              textDecoration: "underline",
              color: "lime",
            }}
          > */}
            To Home
            {/* </Typography> */}
          </ButtonStyled>
        </Link>
      </Wrapper>
    </>
  );
};

export default Submitted;
