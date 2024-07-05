import React, { useState, ChangeEvent, FormEvent } from "react";
import { Box, TextField, Typography } from "@mui/material";
import theme from "../../theme";
import useMatchMedia from "../../hooks/useMediaQuery";
import { ButtonStyled } from "./Footer.styled";

interface FooterFormProps {
  containerWidth?: number;
  bgColor: string;
  btnColor: string;
}

const FooterForm: React.FC<FooterFormProps> = ({
  containerWidth,
  bgColor,
  btnColor,
}) => {
  const { isMobile } = useMatchMedia();
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [touchedFields, setTouchedFields] = useState({
    name: false,
    email: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginTop: isMobile ? 50 : 0,
        gap: 20,
        maxWidth: containerWidth,
        width: "100%",
      }}
    >
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
              placeholder="First Name"
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
                "& .MuiInputBase-input": {
                  padding: "0px 14px",
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
                "& .MuiInputBase-input": {
                  padding: "0px 14px",
                },
              }}
            />
          </Box>
          <ButtonStyled
            style={{ backgroundColor: bgColor, color: btnColor }}
            type="submit"
            variant="contained"
            color="secondary"
            disabled={!isFormValid()}
          >
            Subscribe
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
    </Box>
  );
};

export default FooterForm;
