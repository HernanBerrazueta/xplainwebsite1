import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Grid,
  Checkbox,
  FormControlLabel,
  Button,
  FormControl,
  FormHelperText,
  SelectChangeEvent,
} from "@mui/material";
import {
  buttonStyle,
  HeaderTextStyle,
  FontStyled,
  interestAreas,
  FieldStyled,
  SelectStyled,
  MenuItemStyled,
  ParagraphStyled,
  GridItemStyled,
  FormStyled,
} from "./FormComponent.styled";
import theme from "../../theme";
import { countryList } from "./countries";
import ArticleImage from "./ArticleImage";
import { threeColumnData } from "../insights/threeColumnsComponent/data";
import truncateString from "../../utils/stringFunctions";

interface FormProps {
  onSubmit: () => void;
}

const ArticleFormComponent: React.FC<FormProps> = ({ onSubmit }) => {
  const { id } = useParams<{ id: string }>();
  const renderItem = threeColumnData.find((item) => item.id === Number(id));
  console.log("renderItem", renderItem);

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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (isFormValid()) {
      onSubmit();
    }
  };

  const handleDownloadPDF = () => {
    const pdfUrl =
      "https://dspace.mit.edu/bitstream/handle/1721.1/4795/RLE-TR-285-14266170.pdf";

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Staffing_Study_on_the_Impact_of_Changes.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ backgroundColor: "#805CDD", paddingTop: 50 }}>
      <FormStyled onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <HeaderTextStyle variant="h4" align="left" gutterBottom>
              {truncateString(renderItem?.title || "", 120)}
            </HeaderTextStyle>
            <ParagraphStyled variant="body1" gutterBottom>
              Please fill in the below form to download. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Quisque lorem ex, tincidunt eu
              efficitur vitae, blandit a lectus.
            </ParagraphStyled>
          </Grid>
          <ArticleImage item={renderItem} />
          <GridItemStyled item xs={6}>
            <FontStyled variant="subtitle1" gutterBottom>
              First name
            </FontStyled>
            <FieldStyled
              fullWidth
              InputProps={{ style: { color: "black" } }}
              name="firstName"
              value={formData.firstName}
              onChange={(e) =>
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
          <GridItemStyled item xs={6}>
            <FontStyled variant="subtitle1" gutterBottom>
              Last name
            </FontStyled>
            <FieldStyled
              fullWidth
              InputProps={{ style: { color: "black" } }}
              name="lastName"
              value={formData.lastName}
              onChange={(e) =>
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
          <GridItemStyled item xs={6}>
            <FontStyled variant="subtitle1" gutterBottom>
              Business email
            </FontStyled>
            <FieldStyled
              fullWidth
              InputProps={{ style: { color: "black" } }}
              name="businessEmail"
              value={formData.businessEmail}
              onChange={(e) =>
                setFormData({ ...formData, businessEmail: e.target.value })
              }
              onBlur={() => handleBlur("businessEmail")}
              error={
                touchedFields.businessEmail &&
                (formData.businessEmail === "" ||
                  !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail))
              }
              helperText={
                touchedFields.businessEmail && formData.businessEmail === ""
                  ? "Please enter your email"
                  : touchedFields.businessEmail &&
                    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)
                  ? "Please enter a valid email"
                  : null
              }
            />
          </GridItemStyled>
          <GridItemStyled item xs={6}>
            <FontStyled variant="subtitle1" gutterBottom>
              Telephone number
            </FontStyled>
            <FieldStyled
              fullWidth
              InputProps={{ style: { color: "black" } }}
              name="telephoneNumber"
              value={formData.telephoneNumber}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                setFormData({ ...formData, telephoneNumber: value });
              }}
              onBlur={() => handleBlur("telephoneNumber")}
              error={
                touchedFields.telephoneNumber &&
                (formData.telephoneNumber === "" ||
                  formData.telephoneNumber.length < 10)
              }
              helperText={
                touchedFields.telephoneNumber && formData.telephoneNumber === ""
                  ? "Please enter your telephone number"
                  : touchedFields.telephoneNumber &&
                    formData.telephoneNumber.length < 10
                  ? "Please enter a valid telephone number with at least 10 digits"
                  : null
              }
            />
          </GridItemStyled>
          <GridItemStyled item xs={6}>
            <FontStyled variant="subtitle1" gutterBottom>
              Company name
            </FontStyled>
            <FieldStyled
              fullWidth
              InputProps={{ style: { color: "black" } }}
              name="companyName"
              value={formData.companyName}
              onChange={(e) =>
                setFormData({ ...formData, companyName: e.target.value })
              }
              onBlur={() => handleBlur("companyName")}
              error={touchedFields.companyName && formData.companyName === ""}
              helperText={
                touchedFields.companyName &&
                formData.companyName === "" &&
                "Please enter your company name"
              }
            />
          </GridItemStyled>
          <GridItemStyled item xs={6}>
            <FontStyled variant="subtitle1" gutterBottom>
              Job title
            </FontStyled>
            <FieldStyled
              fullWidth
              InputProps={{ style: { color: "black" } }}
              name="jobTitle"
              value={formData.jobTitle}
              onChange={(e) =>
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
          <GridItemStyled item xs={6}>
            <FontStyled variant="subtitle1" gutterBottom>
              Country Region
            </FontStyled>
            <FormControl
              fullWidth
              error={
                touchedFields.countryRegion && formData.countryRegion === ""
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
              {touchedFields.countryRegion && formData.countryRegion === "" && (
                <FormHelperText>
                  Please select your country region
                </FormHelperText>
              )}
            </FormControl>
          </GridItemStyled>
          <GridItemStyled item xs={6}>
            <FontStyled
              variant="subtitle1"
              gutterBottom
              style={{ marginBottom: "15px" }}
            >
              Please check areas of interest
            </FontStyled>
            <Grid container justifyContent="space-between">
              <Grid item>
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
                      onChange={handleCheckboxChange("Market Data Cleansing")}
                    />
                  }
                  label="Market Data Cleansing"
                  style={interestAreas}
                />
              </Grid>
              <Grid item>
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
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleCheckboxChange("xVA Calculations")}
                    />
                  }
                  label="xVA Calculations"
                  style={interestAreas}
                />
              </Grid>
              <Grid item>
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
                      onChange={handleCheckboxChange("Curve Configurations")}
                    />
                  }
                  label="Curve Configurations"
                  style={interestAreas}
                />
              </Grid>
            </Grid>
          </GridItemStyled>
        </Grid>
        <Grid container justifyContent="flex-end">
          <Button
            variant="contained"
            color="primary"
            style={{
              ...buttonStyle,
              backgroundColor: theme.palette.primary.main,
              textTransform: "capitalize",
            }}
            onClick={handleDownloadPDF}
            disabled={!isFormValid()}
          >
            Download
          </Button>
        </Grid>
      </FormStyled>
    </div>
  );
};

export default ArticleFormComponent;
