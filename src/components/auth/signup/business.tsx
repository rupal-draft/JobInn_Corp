"use client";

import { Box, Grid, Button, Link } from "@mui/material";
import React, { useState } from "react";
import { ErrorMessage, Form, Formik } from "formik";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  businessDetailsSchema,
  businessSignUpSchema,
} from "../../../utils/schemas";
import Typography from "../../common/typography";
import EmailIcon from "@mui/icons-material/Email";
import { BusinessSelection, LOCALSTORAGE_KEYS } from "../../../utils/constants";
import FormFormTextField from "../../common/inputField";
import FormTextField from "../../common/inputField";
import FormSelectField from "../../common/selectField";
import Hero from "../../common/hero";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

interface FormDetails {
  businessName: string;
  businessType: string;
  industry: string;
  businessAddress: string;
  businessUrl: string;
  country: string;
  state: string;
}

const BusinessSignup: React.FC = () => {
  const [step, setStep] = useState(1);
  const [userInfo, setUserInfo] = useState<FormValues | null>(null);
  const [selectedCountry, setSelectedCountry] = useState("");

  const initialValues: FormValues = {
    firstName: userInfo ? userInfo["firstName"] : "",
    lastName: userInfo ? userInfo["lastName"] : "",
    email: userInfo ? userInfo["email"] : "",
  };

  const intialDetails: FormDetails = {
    businessName: "",
    businessType: "",
    industry: "",
    businessAddress: "",
    businessUrl: "",
    country: "",
    state: "",
  };

  const generateStrongPassword = (length: number = 8): string => {
    const allCharacters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+=<>?";
    let password = "";
    for (let i = 0; i < length; i++) {
      password += allCharacters.charAt(
        Math.floor(Math.random() * allCharacters.length)
      );
    }
    return password;
  };

  const countryOptions = BusinessSelection.countries
    .map((country) => ({
      value: country.name,
      label: country.name,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));

  const industryOptions = BusinessSelection.industry
    .map((industry) => ({
      value: industry.name,
      label: industry.name,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));

  const stateOptions = selectedCountry
    ? BusinessSelection.countries
        .find((country) => country.name === selectedCountry)
        ?.states.map((state) => ({
          value: state.name,
          label: state.name,
        }))
        .sort((a, b) => a.label.localeCompare(b.label)) || []
    : [];

  const businessTypeOptions = BusinessSelection.business_type.map((type) => ({
    value: type.name,
    label: type.name,
  }));
  return (
    <div
      style={{
        height: "100vh",
        color: "#f5f5f5",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container sx={{ height: "100vh", width: "100%" }}>
        <Grid item xs={12} lg={6} sx={{ height: "100%", overflow: "hidden" }}>
          <Hero
            text="Coming together is a beginning; Keeping together is progress; Working together is success."
            bgcolor="primary.main"
          />
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            p: 4,
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 40,
              right: 40,
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography variant="body2" textlabel="Already have an account?" />
            <Button
              variant="outlined"
              component={Link}
              href="/signin"
              sx={{
                borderColor: "#ff9800",
                color: "#ff9800",
                "&:hover": {
                  borderColor: "#ff9800",
                  backgroundColor: "#ffe0b2",
                },
                fontSize: "0.8rem",
                padding: "10px 30px",
              }}
            >
              Sign In
            </Button>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 40,
              left: 40,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            {step !== 3 && (
              <React.Fragment>
                <ArrowBackIosIcon sx={{ color: "#808B96" }} />
                {step === 1 ? (
                  <Link
                    href="/signup"
                    sx={{ color: "#808B96", textDecoration: "none" }}
                  >
                    Back
                  </Link>
                ) : (
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (step === 2) setStep(1);
                    }}
                    sx={{ color: "#ff9800", textDecoration: "none" }}
                  >
                    Back
                  </Link>
                )}
              </React.Fragment>
            )}
          </Box>
          {step === 1 ? (
            <React.Fragment>
              <Box
                sx={{
                  width: "400px",
                  textAlign: "left",
                }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ color: "#000" }}
                  textlabel="Let's get started with your organization"
                />

                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    lineHeight: "1.5",
                    color: "#555",
                    mt: 0.5,
                    mb: 1,
                    maxWidth: "600px",
                  }}
                  textlabel="Please enter the primary contact details to initiate your
                  account setup."
                />
              </Box>
              <Formik
                initialValues={initialValues}
                enableReinitialize
                validationSchema={businessSignUpSchema}
                validateOnChange={true}
                validateOnBlur={true}
                onSubmit={(values, actions) => {
                  setUserInfo(values);
                  if (step == 1) setStep(2);
                }}
              >
                {(formik) => (
                  <Form
                    onSubmit={formik.handleSubmit}
                    style={{ width: "100%", maxWidth: "400px" }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        maxWidth: "400px",
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        textAlign: "left",
                      }}
                    >
                      <Box sx={{ mb: 0.5 }}>
                        <Typography
                          variant="subtitle1"
                          sx={{ color: "#808B96", textAlign: "left" }}
                          textlabel="First Name"
                        />
                        <FormTextField
                          variant="outlined"
                          fullWidth
                          placeholder="First Name"
                          key="firstName"
                          type="text"
                          name="firstName"
                          value={formik.values.firstName}
                          onChange={(e) => {
                            formik.setValues({
                              ...formik.values,
                              firstName: e.target.value,
                            });
                          }}
                          onBlur={formik.handleBlur}
                          error={
                            !!(
                              formik.touched.firstName &&
                              formik.errors.firstName
                            )
                          }
                          sx={{ mb: 0 }}
                        />
                        <ErrorMessage name="firstName">
                          {(msg) => (
                            <Typography
                              variant="caption"
                              color="error"
                              sx={{ display: "block", mt: 0.5, mb: 0 }}
                              textlabel={msg}
                            />
                          )}
                        </ErrorMessage>
                      </Box>

                      <Box sx={{ mb: 0.5 }}>
                        <Typography
                          variant="subtitle1"
                          sx={{ color: "#808B96", textAlign: "left" }}
                          textlabel="Last Name"
                        />

                        <FormFormTextField
                          variant="outlined"
                          fullWidth
                          name="lastName"
                          type="text"
                          placeholder="Last Name"
                          key="lastName"
                          value={formik.values.lastName}
                          onChange={(e) => {
                            formik.setValues({
                              ...formik.values,
                              lastName: e.target.value,
                            });
                          }}
                          onBlur={formik.handleBlur}
                          error={
                            !!(
                              formik.touched.lastName && formik.errors.lastName
                            )
                          }
                          sx={{ mb: 0 }}
                        />
                        <ErrorMessage name="lastName">
                          {(msg) => (
                            <Typography
                              variant="caption"
                              color="error"
                              sx={{ display: "block", mt: 0.5, mb: 0 }}
                              textlabel={msg}
                            />
                          )}
                        </ErrorMessage>
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Typography
                          variant="subtitle1"
                          sx={{ color: "#808B96", textAlign: "left" }}
                          textlabel="Business Email Address"
                        />

                        <FormFormTextField
                          variant="outlined"
                          fullWidth
                          name="email"
                          key="email"
                          type="text"
                          placeholder="Email Address"
                          value={formik.values.email}
                          onChange={(e) => {
                            formik.setValues({
                              ...formik.values,
                              email: e.target.value,
                            });
                          }}
                          onBlur={formik.handleBlur}
                          error={
                            !!(formik.touched.email && formik.errors.email)
                          }
                          sx={{ mb: 0 }}
                        />
                        <ErrorMessage name="email">
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
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          backgroundColor: "#ff9800",
                          color: "#fff",
                          padding: "12px 24px",
                          fontSize: "1rem",
                          "&:hover": {
                            backgroundColor: "#e68900",
                          },
                        }}
                      >
                        Next
                      </Button>
                    </Box>
                  </Form>
                )}
              </Formik>
            </React.Fragment>
          ) : step === 2 ? (
            <React.Fragment>
              <Box
                sx={{
                  width: "400px",
                  textAlign: "left",
                }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ color: "#000", mb: 1 }}
                  textlabel="Business Details"
                />

                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    lineHeight: "1.5",
                    color: "#555",
                    mt: 1,
                    mb: 2,
                    maxWidth: "600px",
                  }}
                  textlabel="For the purpose of industry regulation, your details are required."
                />
              </Box>
              <Formik
                initialValues={intialDetails}
                validationSchema={businessDetailsSchema}
                validateOnChange={true}
                validateOnBlur={true}
                onSubmit={(values, actions) => {
                  if (values.businessName.length === 0)
                    actions.setFieldError(
                      "businessName",
                      "This field is required"
                    );
                  const userId = "3YkhcEBhF8Q1yjC6VueQW5baFg73";
                  const password = generateStrongPassword();
                  const registrationInfo = {
                    ...values,
                    userId,
                    password,
                  };
                  if (step == 2) {
                    localStorage.setItem(
                      LOCALSTORAGE_KEYS.Registration_Info,
                      JSON.stringify(registrationInfo)
                    );
                    setStep(3);
                  }
                  actions.resetForm();
                }}
              >
                {(formik) => (
                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      formik.validateForm().then(() => {
                        formik.handleSubmit();
                      });
                    }}
                    style={{ width: "100%", maxWidth: "400px" }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        maxWidth: "400px",
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "left",
                        gap: 1,
                      }}
                    >
                      <Box>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              color: "#808B96",
                              textAlign: "left",
                              mr: 0.5,
                            }}
                            textlabel="Business Name"
                          />
                          <Typography
                            variant="subtitle1"
                            sx={{ color: "#FF0000", display: "inline" }}
                            textlabel="*"
                          />
                        </Box>

                        <FormTextField
                          key="businessName"
                          type="text"
                          variant="outlined"
                          name="businessName"
                          placeholder="Business Name"
                          value={formik.values.businessName}
                          onChange={(e) => {
                            formik.setValues({
                              ...formik.values,
                              businessName: e.target.value,
                            });
                          }}
                          onBlur={formik.handleBlur}
                          error={
                            !!(
                              formik.touched.businessName &&
                              formik.errors.businessName
                            )
                          }
                          sx={{ mb: 0, mt: 0.5 }}
                        />
                        <ErrorMessage name="businessName">
                          {(msg) => (
                            <Typography
                              variant="caption"
                              color="error"
                              sx={{ display: "block", mt: 0.5, mb: 0 }}
                              textlabel={msg}
                            />
                          )}
                        </ErrorMessage>
                      </Box>

                      <Box sx={{ display: "flex", gap: 1 }}>
                        <Box sx={{ width: "50%" }}>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              color: "#808B96",
                              textAlign: "left",
                              mb: 1,
                            }}
                            textlabel="Business Type"
                          />
                          <FormSelectField
                            name="businessType"
                            placeholder="Business Type"
                            value={formik.values.businessType}
                            onChange={(e) => {
                              formik.setFieldValue(
                                "businessType",
                                e.target.value as string
                              );
                            }}
                            onBlur={formik.handleBlur}
                            error={
                              !!(
                                formik.touched.businessType &&
                                formik.errors.businessType
                              )
                            }
                            displayEmpty
                            options={businessTypeOptions}
                            sx={{ mb: 0 }}
                          />

                          <ErrorMessage name="businessType">
                            {(msg) => (
                              <Typography
                                variant="caption"
                                color="error"
                                sx={{ display: "block", mt: 0.5, mb: 0 }}
                                textlabel={msg}
                              />
                            )}
                          </ErrorMessage>
                        </Box>
                        <Box sx={{ width: "50%" }}>
                          <Typography
                            variant="subtitle1"
                            sx={{ mb: 1, color: "#808B96", textAlign: "left" }}
                            textlabel="Industry"
                          />
                          <FormSelectField
                            name="industry"
                            placeholder="Industry"
                            value={formik.values.industry}
                            onChange={(e) => {
                              formik.setFieldValue(
                                "industry",
                                e.target.value as string
                              );
                            }}
                            onBlur={formik.handleBlur}
                            error={
                              !!(
                                formik.touched.industry &&
                                formik.errors.industry
                              )
                            }
                            options={industryOptions}
                            sx={{ mb: 0 }}
                          />
                          <ErrorMessage name="industry">
                            {(msg) => (
                              <Typography
                                variant="caption"
                                color="error"
                                sx={{ display: "block", mt: 0.5, mb: 0 }}
                                textlabel={msg}
                              />
                            )}
                          </ErrorMessage>
                        </Box>
                      </Box>
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <Box sx={{ width: "50%" }}>
                          <Typography
                            variant="subtitle1"
                            sx={{ mb: 1, color: "#808B96", textAlign: "left" }}
                            textlabel="Country"
                          />
                          <FormSelectField
                            name="country"
                            placeholder="Country"
                            value={formik.values.country}
                            onChange={(e) => {
                              setSelectedCountry(e.target.value as string);
                              formik.setFieldValue("country", e.target.value);
                            }}
                            onBlur={formik.handleBlur}
                            error={
                              !!(
                                formik.touched.country && formik.errors.country
                              )
                            }
                            options={countryOptions}
                            sx={{ mb: 0 }}
                            displayEmpty
                          />
                          <ErrorMessage name="country">
                            {(msg) => (
                              <Typography
                                variant="caption"
                                color="error"
                                sx={{ display: "block", mt: 0.5, mb: 0 }}
                                textlabel={msg}
                              />
                            )}
                          </ErrorMessage>
                        </Box>
                        <Box sx={{ width: "50%" }}>
                          <Typography
                            variant="subtitle1"
                            sx={{ mb: 1, color: "#808B96", textAlign: "left" }}
                            textlabel="State"
                          />
                          <FormSelectField
                            name="state"
                            placeholder="State"
                            value={formik.values.state}
                            onChange={(e) => {
                              formik.setFieldValue("state", e.target.value);
                            }}
                            onBlur={formik.handleBlur}
                            error={
                              !!(formik.touched.state && formik.errors.state)
                            }
                            options={stateOptions}
                            disabled={!selectedCountry}
                            displayEmpty
                            sx={{ mb: 0 }}
                          />
                          <ErrorMessage name="state">
                            {(msg) => (
                              <Typography
                                variant="caption"
                                color="error"
                                sx={{ display: "block", mt: 0.5, mb: 0 }}
                                textlabel={msg}
                              />
                            )}
                          </ErrorMessage>
                        </Box>
                      </Box>

                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{ color: "#808B96", textAlign: "left" }}
                          textlabel="Business Address"
                        />
                        <FormTextField
                          variant="outlined"
                          type="text"
                          fullWidth
                          name="businessAddress"
                          placeholder="Business Address"
                          value={formik.values.businessAddress}
                          onChange={(e) => {
                            formik.setValues({
                              ...formik.values,
                              businessAddress: e.target.value,
                            });
                          }}
                          onBlur={formik.handleBlur}
                          error={
                            !!(
                              formik.touched.businessAddress &&
                              formik.errors.businessAddress
                            )
                          }
                          sx={{ mb: 0, mt: 0.5 }}
                        />
                        <ErrorMessage name="businessAddress">
                          {(msg) => (
                            <Typography
                              variant="caption"
                              color="error"
                              sx={{ display: "block", mt: 0.5, mb: 0 }}
                              textlabel={msg}
                            />
                          )}
                        </ErrorMessage>
                      </Box>
                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{ color: "#808B96", textAlign: "left" }}
                          textlabel="Website URL (Optional)"
                        />

                        <FormTextField
                          variant="outlined"
                          type="text"
                          fullWidth
                          name="businessUrl"
                          placeholder="Website URL"
                          value={formik.values.businessUrl}
                          onChange={(e) => {
                            formik.setValues({
                              ...formik.values,
                              businessUrl: e.target.value,
                            });
                          }}
                          onBlur={formik.handleBlur}
                          error={
                            !!(
                              formik.touched.businessUrl &&
                              formik.errors.businessUrl
                            )
                          }
                          sx={{ mb: 0, mt: 0.5 }}
                        />
                        <ErrorMessage name="businessUrl">
                          {(msg) => (
                            <Typography
                              variant="caption"
                              color="error"
                              sx={{ display: "block", mt: 0.5, mb: 0 }}
                              textlabel={msg}
                            />
                          )}
                        </ErrorMessage>
                      </Box>
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          backgroundColor: "#ff9800",
                          color: "#fff",
                          padding: "12px 24px",
                          mt: 3,
                          fontSize: "1rem",
                          "&:hover": {
                            backgroundColor: "#e68900",
                          },
                        }}
                      >
                        Complete Registration
                      </Button>
                    </Box>
                  </Form>
                )}
              </Formik>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Grid
                container
                sx={{
                  height: "100vh",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <EmailIcon sx={{ fontSize: 180, color: "#ff9800" }} />
                  <Typography
                    variant="h4"
                    sx={{ mt: 2, color: "#555" }}
                    textlabel="Account Registration Completed!"
                  />

                  <Typography
                    variant="body2"
                    sx={{ mt: 2, color: "#555", maxWidth: "500px" }}
                    textlabel="Thank you for registering with JobInn.We have sent a link to
                    your email. Please click the link within 24 hours to
                    activate your account and create your personal password.
                    Failure to activate your account in this timeframe will
                    result in deletion of this registration."
                  />
                </Grid>
              </Grid>
            </React.Fragment>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default BusinessSignup;
