import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import {
  Checkbox,
  FormControlLabel,
  Button,
  FormControl,
  FormHelperText,
  SelectChangeEvent,
} from "@mui/material";
import useMatchMedia from "../../hooks/useMediaQuery";
import {
  disabledButtonStyle,
  FontStyled,
  interestAreas,
  MenuItemStyled,
  FieldStyled,
  SelectStyled,
  GridItemStyled,
  FormStyled,
  GridWrapperStyled,
  ButtonWrapper,
  GridFlex,
  LabelsWrapper,
} from "./FormComponent.styled";
import { countryList } from "./countries";
import Submitted from "./contactFormComponents/SubmittedComponent";
import theme from "../../theme";
import FormTitle from "./contactFormComponents/FormTitle";
import { FadeInAnimation, NoView } from "../hero/Hero.styled";

interface FormProps {
  onSubmit: () => void;
}

const FormComponent: React.FC<FormProps> = ({ onSubmit }) => {
  const { isMobile } = useMatchMedia();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<{
    firstName: string;
    lastName: string;
    businessEmail: string;
    telephoneNumber: string;
    companyName: string;
    jobTitle: string;
    countryRegion: string;
    interestAreas: string[];
  }>({
    firstName: "",
    lastName: "",
    businessEmail: "",
    telephoneNumber: "",
    companyName: "",
    jobTitle: "",
    countryRegion: "",
    interestAreas: [],
  });

  const [touchedFields, setTouchedFields] = useState<{
    [key: string]: boolean;
  }>({
    firstName: false,
    lastName: false,
    businessEmail: false,
    telephoneNumber: false,
    companyName: false,
    jobTitle: false,
    countryRegion: false,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (submitted) {
      window.scrollTo(0, 0);
    }
  }, [submitted]);

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const { name, value } = event.target;
    if (typeof value === "string") {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleCheckboxChange =
    (label: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const isChecked = event.target.checked;
      if (isChecked) {
        setFormData({
          ...formData,
          interestAreas: [...formData.interestAreas, label],
        });
      } else {
        setFormData({
          ...formData,
          interestAreas: formData.interestAreas.filter(
            (area) => area !== label
          ),
        });
      }
    };

  const isFormValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d+$/;
    return (
      formData.firstName !== "" &&
      formData.lastName !== "" &&
      formData.companyName !== "" &&
      formData.jobTitle !== "" &&
      (formData.businessEmail === "" ||
        emailRegex.test(formData.businessEmail)) &&
      (formData.telephoneNumber === "" ||
        (phoneRegex.test(formData.telephoneNumber) &&
          formData.telephoneNumber.length >= 10)) &&
      formData.countryRegion !== "" &&
      formData.interestAreas.length > 0
    );
  };

  const handleBlur = (field: string) => {
    setTouchedFields({ ...touchedFields, [field]: true });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (isFormValid()) {
      if (!formData.businessEmail) {
        console.error("Business email is undefined");
        return;
      }
      try {
        const response = await axios.post(
          "https://xplain-sg-1761.twil.io/api",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );

        console.log("Email sent successfully:", response.data);
        onSubmit();

        setSubmitted(true);

        setFormData({
          firstName: "",
          lastName: "",
          businessEmail: "",
          telephoneNumber: "",
          companyName: "",
          jobTitle: "",
          countryRegion: "",
          interestAreas: [],
        });
      } catch (error) {
        console.error("Error sending email:", error);
      }
    }
  };

  return (
    <NoView>
      <FormStyled
        onSubmit={submitted ? undefined : handleSubmit}
        style={{
          backgroundColor: submitted ? theme.palette.primary.main : "#fff",
        }}
      >
        {submitted ? (
          <Submitted />
        ) : (
          <>
            <FadeInAnimation $delay="0s">
              <FormTitle />
            </FadeInAnimation>
            <FadeInAnimation $delay="0.1s">
              <GridWrapperStyled container spacing={3}>
                <GridItemStyled item xs={isMobile ? 12 : 6}>
                  <FontStyled variant="subtitle1" gutterBottom>
                    First name
                  </FontStyled>
                  <FieldStyled
                    fullWidth
                    InputProps={{
                      style: { color: "black", borderRadius: 0 },
                    }}
                    name="firstName"
                    value={formData.firstName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    onBlur={() => handleBlur("firstName")}
                    error={touchedFields.firstName && formData.firstName === ""}
                    helperText={
                      touchedFields.firstName &&
                      formData.firstName === "" &&
                      "Please enter your first name"
                    }
                  />
                </GridItemStyled>
                <GridItemStyled item xs={isMobile ? 12 : 6}>
                  <FontStyled variant="subtitle1" gutterBottom>
                    Last name
                  </FontStyled>
                  <FieldStyled
                    fullWidth
                    InputProps={{ style: { color: "black", borderRadius: 0 } }}
                    name="lastName"
                    value={formData.lastName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    onBlur={() => handleBlur("lastName")}
                    error={touchedFields.lastName && formData.lastName === ""}
                    helperText={
                      touchedFields.lastName &&
                      formData.lastName === "" &&
                      "Please enter your last name"
                    }
                  />
                </GridItemStyled>
                <GridItemStyled item xs={isMobile ? 12 : 6}>
                  <FontStyled variant="subtitle1" gutterBottom>
                    Business email
                  </FontStyled>
                  <FieldStyled
                    fullWidth
                    InputProps={{ style: { color: "black", borderRadius: 0 } }}
                    name="businessEmail"
                    value={formData.businessEmail}
                    // onChange={(e) =>
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      setFormData({
                        ...formData,
                        businessEmail: e.target.value,
                      });
                    }}
                    onBlur={() => handleBlur("businessEmail")}
                    error={
                      touchedFields.businessEmail &&
                      (formData.businessEmail === "" ||
                        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                          formData.businessEmail
                        ))
                    }
                    helperText={
                      touchedFields.businessEmail &&
                      formData.businessEmail === ""
                        ? "Please enter your email"
                        : touchedFields.businessEmail &&
                          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                            formData.businessEmail
                          )
                        ? "Please enter a valid email"
                        : null
                    }
                  />
                </GridItemStyled>
                <GridItemStyled item xs={isMobile ? 12 : 6}>
                  <FontStyled variant="subtitle1" gutterBottom>
                    Telephone number
                  </FontStyled>
                  <FieldStyled
                    fullWidth
                    InputProps={{ style: { color: "black", borderRadius: 0 } }}
                    name="telephoneNumber"
                    value={formData.telephoneNumber}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                      setFormData({ ...formData, telephoneNumber: value });
                    }}
                    onBlur={() => handleBlur("telephoneNumber")}
                    error={
                      touchedFields.telephoneNumber &&
                      (formData.telephoneNumber === "" ||
                        formData.telephoneNumber.length < 10)
                    }
                    helperText={
                      touchedFields.telephoneNumber &&
                      formData.telephoneNumber === ""
                        ? "Please enter your telephone number"
                        : touchedFields.telephoneNumber &&
                          formData.telephoneNumber.length < 10
                        ? "Please enter a valid telephone number with at least 10 digits"
                        : null
                    }
                  />
                </GridItemStyled>

                <GridItemStyled item xs={isMobile ? 12 : 6}>
                  <FontStyled variant="subtitle1" gutterBottom>
                    Company name
                  </FontStyled>
                  <FieldStyled
                    fullWidth
                    InputProps={{ style: { color: "black", borderRadius: 0 } }}
                    name="companyName"
                    value={formData.companyName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setFormData({ ...formData, companyName: e.target.value })
                    }
                    onBlur={() => handleBlur("companyName")}
                    error={
                      touchedFields.companyName && formData.companyName === ""
                    }
                    helperText={
                      touchedFields.companyName &&
                      formData.companyName === "" &&
                      "Please enter your company name"
                    }
                  />
                </GridItemStyled>
                <GridItemStyled item xs={isMobile ? 12 : 6}>
                  <FontStyled variant="subtitle1" gutterBottom>
                    Job title
                  </FontStyled>
                  <FieldStyled
                    fullWidth
                    InputProps={{ style: { color: "black", borderRadius: 0 } }}
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setFormData({ ...formData, jobTitle: e.target.value })
                    }
                    onBlur={() => handleBlur("jobTitle")}
                    error={touchedFields.jobTitle && formData.jobTitle === ""}
                    helperText={
                      touchedFields.jobTitle &&
                      formData.jobTitle === "" &&
                      "Please enter your job title"
                    }
                  />
                </GridItemStyled>
                <GridItemStyled item xs={isMobile ? 12 : 6}>
                  <FontStyled variant="subtitle1" gutterBottom>
                    Country Region
                  </FontStyled>
                  <FormControl
                    fullWidth
                    error={
                      touchedFields.countryRegion &&
                      formData.countryRegion === ""
                    }
                  >
                    <SelectStyled
                      defaultValue=""
                      variant="outlined"
                      name="countryRegion"
                      value={formData.countryRegion}
                      onChange={handleChange}
                      onBlur={() => handleBlur("countryRegion")}
                      MenuProps={{
                        PaperProps: {
                          style: {
                            maxHeight: 300,
                            borderRadius: 0,
                          },
                        },
                      }}
                    >
                      <MenuItemStyled value="" disabled>
                        - Please select -
                      </MenuItemStyled>
                      {countryList.map((country) => (
                        <MenuItemStyled key={country.code} value={country.name}>
                          {country.name}
                        </MenuItemStyled>
                      ))}
                    </SelectStyled>
                    {touchedFields.countryRegion &&
                      formData.countryRegion === "" && (
                        <FormHelperText>
                          Please select your country region
                        </FormHelperText>
                      )}
                  </FormControl>
                </GridItemStyled>
                <GridItemStyled item xs={isMobile ? 12 : 6}>
                  <FontStyled
                    variant="subtitle1"
                    gutterBottom
                    style={{ marginBottom: "15px" }}
                  >
                    Please check areas of interest
                  </FontStyled>
                  <LabelsWrapper container>
                    <GridFlex item>
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={handleCheckboxChange("Pricing Engine")}
                          />
                        }
                        label="Pricing Engine"
                        style={interestAreas}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={handleCheckboxChange(
                              "Market Data Cleansing"
                            )}
                          />
                        }
                        label="Market Data Cleansing"
                        style={interestAreas}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={handleCheckboxChange(
                              "Valuation Data Cleansing"
                            )}
                          />
                        }
                        label="Valuation Data Cleansing"
                        style={interestAreas}
                      />
                    </GridFlex>
                    <GridFlex item>
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={handleCheckboxChange("xVA Calculations")}
                          />
                        }
                        label="xVA Calculations"
                        style={interestAreas}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={handleCheckboxChange("Risk Reporting")}
                          />
                        }
                        label="Risk Reporting"
                        style={interestAreas}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={handleCheckboxChange(
                              "Curve Configurations"
                            )}
                          />
                        }
                        label="Curve Configurations"
                        style={interestAreas}
                      />
                    </GridFlex>
                  </LabelsWrapper>
                </GridItemStyled>
              </GridWrapperStyled>
            </FadeInAnimation>
            <FadeInAnimation $delay="0.2s">
              <ButtonWrapper container justifyContent="flex-end">
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  style={{
                    ...(isFormValid() ? {} : disabledButtonStyle),
                    padding: "10px 60px",
                    textTransform: "capitalize",
                    fontFamily: "CircularXXWeb-Regular, sans-serif",
                  }}
                  disabled={!isFormValid()}
                >
                  Submit
                </Button>
              </ButtonWrapper>
            </FadeInAnimation>
          </>
        )}
      </FormStyled>
    </NoView>
  );
};

export default FormComponent;
