"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Typography from "../common/typography";
import {
  BusinessSelection,
  headings,
  IMAGES,
  LOCALSTORAGE_KEYS,
} from "../../utils/constants";
import { ErrorMessage, Form, Formik } from "formik";
import {
  ImageValidationSchema,
  OrganizationDetailsSchema,
} from "../../utils/schemas";
import FormTextField from "../common/inputField";
import Image from "next/image";

interface RegistrationInfo {
  firstName: string;
  lastName: string;
  email: string;
  businessName: string;
  Organization_Profile_Image: string;
  Settings_Profile_Image: string;
}
interface OrganizationDetail {
  organizationName: string;
  location: string;
  phone: string;
}
const Profile: React.FC = () => {
  const handleImageChange = (formik) => (e) => {
    const file = e.currentTarget.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        formik.setFieldValue("image", file);
        formik.setFieldValue("imagePreview", reader.result);
        formik.setFieldError("image", "");
      };
      reader.readAsDataURL(file);
    } else {
      formik.setFieldError("image", "No file selected");
    }
  };

  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [userInfo, setUserInfo] = useState<RegistrationInfo>(null);
  const handleSave = () => {
    const storedRegistrationInfo = JSON.parse(
      localStorage.getItem(LOCALSTORAGE_KEYS.Registration_Info)
    );
    storedRegistrationInfo.industry = selectedIndustry;
    localStorage.setItem(
      LOCALSTORAGE_KEYS.Registration_Info,
      JSON.stringify(storedRegistrationInfo)
    );
  };

  useEffect(() => {
    const updateInfo = () => {
      const userRegistrationInfo = JSON.parse(
        localStorage.getItem(LOCALSTORAGE_KEYS.Registration_Info)
      );
      const industry = userRegistrationInfo.industry;
      setUserInfo(userRegistrationInfo);
      setSelectedIndustry(industry);
    };
    updateInfo();
    window.addEventListener("storage", updateInfo);

    return () => {
      window.removeEventListener("storage", updateInfo);
    };
  }, []);

  const initialValues: OrganizationDetail = {
    organizationName: userInfo ? userInfo["businessName"] : "",
    location: userInfo ? userInfo["location"] : "",
    phone: userInfo ? userInfo["phone"] : "",
  };
  return (
    <Box
      sx={{
        px: 5,
        pt: 2,
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontSize: "1.25rem" }}
        textlabel="General Information"
      />
      <Typography
        variant="body2"
        sx={{ color: "gray", mb: 1 }}
        textlabel="Edit the organization general information"
      />
      <Divider />

      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={OrganizationDetailsSchema}
        validateOnChange={true}
        validateOnBlur={true}
        onSubmit={(values, actions) => {
          const userRegistrationInfo = JSON.parse(
            localStorage.getItem(LOCALSTORAGE_KEYS.Registration_Info)
          );
          userRegistrationInfo.businessName = values.organizationName;
          userRegistrationInfo.location = values.location;
          userRegistrationInfo.phone = values.phone;
          localStorage.setItem(
            LOCALSTORAGE_KEYS.Registration_Info,
            JSON.stringify(userRegistrationInfo)
          );
          window.dispatchEvent(new Event("storage"));
          actions.resetForm();
        }}
      >
        {(formik) => (
          <Form>
            <Grid
              container
              spacing={2}
              sx={{
                mb: 4,
                pt: 2,
                px: 2,
              }}
            >
              <Grid item xs={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    variant="body2"
                    sx={{ color: "black" }}
                    textlabel="Organization Name"
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "red", display: "inline" }}
                    textlabel="*"
                  />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <FormTextField
                  variant="outlined"
                  fullWidth
                  placeholder="Organization Name"
                  key="organizationName"
                  type="text"
                  name="organizationName"
                  value={formik.values.organizationName}
                  onChange={(e) => {
                    formik.setValues({
                      ...formik.values,
                      organizationName: e.target.value,
                    });
                  }}
                  onBlur={formik.handleBlur}
                  error={
                    !!(
                      formik.touched.organizationName &&
                      formik.errors.organizationName
                    )
                  }
                  sx={{
                    height: "35px",
                    width: "70%",
                    "& .MuiOutlinedInput-input": {
                      height: "35px",
                      width: "70%",
                      padding: "0 14px",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderRadius: "8px",
                    },
                    mb: 0,
                    mt: 0,
                  }}
                />
                <ErrorMessage name="organizationName">
                  {(msg) => (
                    <Typography
                      variant="caption"
                      color="error"
                      sx={{ display: "block", mt: 0.5, mb: 0 }}
                      textlabel={msg}
                    />
                  )}
                </ErrorMessage>
              </Grid>
              <Grid item xs={4}></Grid>

              <Grid item xs={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    variant="body2"
                    sx={{ color: "black" }}
                    textlabel="Location"
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "red", display: "inline" }}
                    textlabel="*"
                  />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <FormTextField
                  variant="outlined"
                  fullWidth
                  placeholder="Location"
                  key="location"
                  type="text"
                  name="location"
                  value={formik.values.location}
                  onChange={(e) => {
                    formik.setValues({
                      ...formik.values,
                      location: e.target.value,
                    });
                  }}
                  onBlur={formik.handleBlur}
                  error={!!(formik.touched.location && formik.errors.location)}
                  sx={{
                    height: "35px",
                    width: "70%",
                    "& .MuiOutlinedInput-input": {
                      height: "35px",
                      width: "70%",
                      padding: "0 14px",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderRadius: "8px",
                    },
                    mb: 0,
                    mt: 0,
                  }}
                />
                <ErrorMessage name="location">
                  {(msg) => (
                    <Typography
                      variant="caption"
                      color="error"
                      sx={{ display: "block", mt: 0.5, mb: 0 }}
                      textlabel={msg}
                    />
                  )}
                </ErrorMessage>
              </Grid>
              <Grid item xs={4}></Grid>

              <Grid item xs={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    variant="body2"
                    sx={{ color: "black" }}
                    textlabel="Email"
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "red", display: "inline" }}
                    textlabel="*"
                  />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="email"
                  key="email"
                  type="text"
                  disabled
                  placeholder={userInfo?.email}
                  sx={{
                    height: "35px",
                    width: "70%",
                    "& .MuiOutlinedInput-input": {
                      height: "35px",
                      width: "70%",
                      padding: "0 14px",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderRadius: "8px",
                    },
                    mb: 0,
                    mt: 0,
                  }}
                />
              </Grid>
              <Grid item xs={4}></Grid>

              <Grid item xs={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    variant="body2"
                    sx={{ color: "black" }}
                    textlabel="Phone"
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "red", display: "inline" }}
                    textlabel="*"
                  />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <FormTextField
                  variant="outlined"
                  fullWidth
                  placeholder="Phone"
                  key="phone"
                  type="text"
                  name="phone"
                  value={formik.values.phone}
                  onChange={(e) => {
                    formik.setValues({
                      ...formik.values,
                      phone: e.target.value,
                    });
                  }}
                  onBlur={formik.handleBlur}
                  error={!!(formik.touched.phone && formik.errors.phone)}
                  sx={{
                    height: "35px",
                    width: "70%",
                    "& .MuiOutlinedInput-input": {
                      height: "35px",
                      width: "70%",
                      padding: "0 14px",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderRadius: "8px",
                    },
                    mb: 0,
                    mt: 0,
                  }}
                />
                <ErrorMessage name="phone">
                  {(msg) => (
                    <Typography
                      variant="caption"
                      color="error"
                      sx={{ display: "block", mt: 0.5, mb: 0 }}
                      textlabel={msg}
                    />
                  )}
                </ErrorMessage>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    backgroundColor: "primary.main",
                    color: "#fff",
                    padding: "8px 16px",
                    fontSize: "0.875rem",
                  }}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
      <Typography
        variant="h6"
        sx={{ fontSize: "1.25rem", mb: 0.5 }}
        textlabel="Organization Picture"
      />
      <Typography
        variant="body2"
        sx={{ color: "gray", mb: 1 }}
        textlabel="Change your organization picture"
      />
      <Divider />
      <Formik
        initialValues={{
          image: null,
          imagePreview: "",
        }}
        validationSchema={ImageValidationSchema}
        onSubmit={(values) => {
          console.log(values);
          const Registration_Info = JSON.parse(
            localStorage.getItem(LOCALSTORAGE_KEYS.Registration_Info)
          );
          Registration_Info.Organization_Profile_Image = values.imagePreview;
          localStorage.setItem(
            LOCALSTORAGE_KEYS.Registration_Info,
            JSON.stringify(Registration_Info)
          );
          window.dispatchEvent(new Event("storage"));
        }}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
            <Grid
              container
              spacing={4}
              sx={{
                mb: 4,
                pt: 2,
                pr: 2,
              }}
            >
              <Grid item xs={8}>
                <Box
                  sx={{
                    mt: 2,
                    mb: 4,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {userInfo?.Organization_Profile_Image ? (
                    <img
                      src={userInfo?.Organization_Profile_Image}
                      alt="Preview"
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "8px",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <IconButton
                      sx={{
                        width: "100px",
                        height: "100px",
                        border: "2px dashed gray",
                        borderRadius: "8px",
                        mb: 1,
                      }}
                    >
                      <Image
                        alt="profile"
                        src={IMAGES.Headers.profileLogo}
                        width={100}
                        height={100}
                      />
                    </IconButton>
                  )}
                  <input
                    accept="image/*"
                    style={{ display: "none" }}
                    id="file-input"
                    type="file"
                    onChange={handleImageChange(formik)}
                  />
                  <label htmlFor="file-input">
                    <Button
                      variant="outlined"
                      component="span"
                      sx={{
                        width: "100px",
                        height: "20px",
                        borderRadius: "8px",
                        textTransform: "none",
                        fontSize: "0.62rem",
                        borderColor: "gray",
                        mt: 1,
                        color: "gray",
                        "&:hover": {
                          borderColor: "black",
                          color: "black",
                        },
                      }}
                    >
                      Upload Image
                    </Button>
                  </label>
                  <ErrorMessage name="image">
                    {(msg) => (
                      <Typography
                        variant="caption"
                        color="error"
                        sx={{
                          display: "block",
                          mt: 0.5,
                          mb: 0,
                          textAlign: "left",
                        }}
                        textlabel={msg}
                      />
                    )}
                  </ErrorMessage>
                </Box>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  height: "fit-content",
                  mt: 15,
                }}
              >
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    backgroundColor: "primary.main",
                    color: "#fff",
                    padding: "8px 16px",
                    fontSize: "0.875rem",
                  }}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
      <Typography
        variant="h6"
        sx={{ fontSize: "1.25rem", mb: 0.5 }}
        textlabel="Industry"
      />
      <Typography
        variant="body2"
        sx={{ color: "gray", mb: 1 }}
        textlabel="Please select the industry your organization operates in"
      />
      <Divider />
      <Grid
        container
        spacing={4}
        sx={{
          mb: 4,
          pt: 2,
        }}
      >
        <Grid item xs={8}>
          {" "}
          <FormControl fullWidth variant="outlined">
            <Select
              labelId="language-select-label"
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              sx={{
                height: "35px",
                width: "50%",
                "& .MuiOutlinedInput-input": {
                  height: "35px",
                  width: "50%",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderRadius: "8px",
                },
              }}
            >
              {BusinessSelection.industry.map((industry) => (
                <MenuItem key={industry.id} value={industry.name}>
                  {industry.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4} sx={{ display: "flex", justifyContent: "flex-end" }}>
          {" "}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "primary.main",
              color: "#fff",
              padding: "8px 16px",
              fontSize: "0.875rem",
            }}
            onClick={handleSave}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
