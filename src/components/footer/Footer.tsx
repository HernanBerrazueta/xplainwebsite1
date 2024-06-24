import React, {
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  FormEvent,
} from "react";
import { Link } from "react-router-dom";
import { Toolbar, Box, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import logo from "../../assets/logos/xplain.svg";
import linkedinLogo from "../../assets/logos/linkedin.svg";
import {
  FooterContainer,
  LogoImage,
  LinkStyled,
  Paragraph,
  ProductParagraph,
  ButtonStyled,
  BoxStyled,
  AddressWrapper,
  SpanStyled,
  LinksWrapper,
  LinkedInLogoImage,
  footerText,
  productText,
} from "./Footer.styled";
import { linkData, addressData } from "./data";
import Copyright from "./copyright/Copyright";
import useMatchMedia from "../../hooks/useMediaQuery";

const Footer: React.FC = () => {
  const theme = useTheme();
  const { isMobile, isTablet, isLaptop } = useMatchMedia();
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [touchedFields, setTouchedFields] = useState({
    name: false,
    email: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const footerTextRef = useRef<HTMLParagraphElement>(null);
  const [containerWidth, setContainerWidth] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    if (footerTextRef.current) {
      setContainerWidth(footerTextRef.current.offsetWidth);
    }
  }, [isMobile, isTablet, isLaptop]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (field: string) => {
    setTouchedFields({ ...touchedFields, [field]: true });
  };

  const isFormValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return formData.name !== "" && emailRegex.test(formData.email);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (isFormValid()) {
      setIsSubmitted(true);
    }
  };

  return (
    <>
      <FooterContainer>
        <Toolbar
          style={{
            display: isMobile ? "block" : "flex",
            alignItems: "flex-start",
            maxWidth: "2788px",
            margin: "0 auto",
          }}
        >
          <BoxStyled style={{ minWidth: 125 }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <LogoImage src={logo} alt="Footer Logo" />
            </Link>
            <Link
              to="https://solum-financial.com/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <ProductParagraph
                variant="body2"
                style={{
                  maxWidth: 145,
                }}
              >
                {productText}
              </ProductParagraph>
            </Link>
          </BoxStyled>
          <LinksWrapper>
            {!isMobile &&
              linkData.map(({ to, text }) => (
                <LinkStyled key={to} to={to}>
                  {text}
                </LinkStyled>
              ))}
          </LinksWrapper>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginLeft: isMobile ? 0 : isTablet ? 10 : 65,
              marginTop: isMobile ? 50 : 0,
              gap: 20,
              maxWidth: containerWidth,
              width: "100%",
            }}
          >
            <Paragraph
              ref={footerTextRef}
              style={{
                maxWidth: isTablet ? 150 : isLaptop ? undefined : 380,
                fontSize: isMobile ? "16px" : undefined,
              }}
              variant="body2"
            >
              {footerText}
            </Paragraph>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                <Box
                  style={{
                    width: "100%",
                    gap: "10px",
                    marginBottom: "20px",
                  }}
                >
                  <TextField
                    variant="outlined"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur("name")}
                    InputProps={{
                      style: {
                        fontSize: "16px",
                        fontFamily: "CircularXXWeb-Regular, sans-serif",
                        width: "155px",
                        height: "35px",
                        margin: "0 5px 5px 0",
                      },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: theme.palette.text.secondary,
                        },
                        "&:hover fieldset": {
                          borderColor: theme.palette.text.secondary,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: theme.palette.text.secondary,
                        },
                      },
                      "& .MuiInputBase-input::placeholder": {
                        fontFamily: "CircularXXWeb-Regular, sans-serif",
                      },
                    }}
                  />
                  <TextField
                    variant="outlined"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur("email")}
                    InputProps={{
                      style: {
                        fontSize: "16px",
                        fontFamily: "CircularXXWeb-Regular, sans-serif",
                        width: "155px",
                        height: "35px",
                      },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: theme.palette.text.secondary,
                        },
                        "&:hover fieldset": {
                          borderColor: theme.palette.text.secondary,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: theme.palette.text.secondary,
                        },
                      },
                      "& .MuiInputBase-input::placeholder": {
                        fontFamily: "CircularXXWeb-Regular, sans-serif",
                      },
                    }}
                  />
                </Box>
                <ButtonStyled
                  type="submit"
                  variant="contained"
                  color="secondary"
                  disabled={!isFormValid()}
                >
                  <SpanStyled>Subscribe</SpanStyled>
                </ButtonStyled>
              </form>
            ) : (
              <Typography
                style={{
                  fontSize: "16px",
                  color: "#00FF00",
                  fontFamily: "CircularXXWeb-Regular, sans-serif",
                }}
              >
                Thanks for signing up!
              </Typography>
            )}
            <Link
              to="https://www.linkedin.com/company/solum-financial-partners-llp/"
              target="_blank"
            >
              <LinkedInLogoImage src={linkedinLogo} alt="LinkedIn Logo" />
            </Link>
          </Box>
          <AddressWrapper>
            {addressData.map(({ text, marginBottom }) => (
              <Paragraph
                key={text}
                variant="body2"
                sx={{ marginBottom: marginBottom || 0 }}
              >
                {text}
              </Paragraph>
            ))}
          </AddressWrapper>
        </Toolbar>
        <Copyright />
      </FooterContainer>
    </>
  );
};

export default Footer;
