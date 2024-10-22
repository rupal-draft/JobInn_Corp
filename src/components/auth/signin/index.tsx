"use client";
import { Box, Grid, Button, Link } from "@mui/material";
import React, { useState } from "react";
import Typography from "../../common/typography";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Formik, ErrorMessage, Form } from "formik";
import { SigninSchema } from "../../../utils/schemas";
import PasswordField from "../../common/passwordField";
import FormTextField from "../../common/inputField";
import { useRouter } from "next/navigation";
import InfoIcon from "@mui/icons-material/Info";
import { LOCALSTORAGE_KEYS } from "../../../utils/constants";
import Hero from "../../common/hero";

interface SigninValues {
  email: string;
  password: string;
}

const Signin = () => {
  const initialValues: SigninValues = {
    email: "",
    password: "",
  };

  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  return (
    <Box
      sx={{
        color: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
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
            overflow: "hidden",
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
            <Typography
              variant="body2"
              sx={{ fontSize: "1rem" }}
              textlabel="Don't have an account?"
            />

            <Button
              variant="outlined"
              component={Link}
              href="/signup"
              sx={{
                borderColor: "#ff9800",
                color: "#ff9800",
                "&:hover": {
                  borderColor: "#ff9800",
                  backgroundColor: "#ffe0b2",
                },
                fontSize: "0.8rem",
                padding: "8px 10px",
              }}
            >
              Create Account
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
            <ArrowBackIosIcon sx={{ color: "secondary.main" }} />

            <Link
              href="/signup"
              sx={{
                textDecoration: "none",
                color: "secondary.main",
              }}
            >
              Back
            </Link>
          </Box>
          <Formik
            initialValues={initialValues}
            validationSchema={SigninSchema}
            onSubmit={(values, actions) => {
              const userRegistrationInfo = JSON.parse(
                localStorage.getItem(LOCALSTORAGE_KEYS.Registration_Info)
              );
              if (
                values.email == userRegistrationInfo.email &&
                values.password === userRegistrationInfo.password
              ) {
                localStorage.setItem(
                  LOCALSTORAGE_KEYS.Force_Change_Password,
                  "false"
                );
                window.location.href = `/create-password/${userRegistrationInfo.userId}`;
                window.dispatchEvent(new Event("storage"));
              } else {
                setErrorMessage("Invalid credentials");
              }
              actions.resetForm();
            }}
          >
            {(formik) => (
              <Form>
                <Box
                  sx={{
                    width: "400px",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{ color: "#000", mb: 2 }}
                    textlabel="Login to your account"
                  />
                  <Typography
                    variant="body2"
                    gutterBottom
                    sx={{
                      lineHeight: "1.5",
                      color: "secondary.main",
                      mt: 1,
                      mb: 4,
                      maxWidth: "600px",
                    }}
                    textlabel="Please enter your credentials to access your account and continue with JobInn"
                  />
                  <Box sx={{ mb: 2 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{ mb: 0.3, color: "#555", textAlign: "left" }}
                      textlabel="Email"
                    />
                    <FormTextField
                      placeholder="Email"
                      type="email"
                      name="email"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      value={formik.values.email}
                      onChange={(e) => {
                        formik.setValues({
                          ...formik.values,
                          email: e.target.value,
                        });
                      }}
                      onBlur={formik.handleBlur}
                      error={!!(formik.touched.email && formik.errors.email)}
                      sx={{ mb: 0 }}
                    />
                    <ErrorMessage name="email">
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
                      sx={{ mb: 0.3, color: "#555", textAlign: "left" }}
                      textlabel="Password"
                    />
                    <PasswordField
                      value={formik.values.password}
                      onChange={(e) => {
                        formik.setValues({
                          ...formik.values,
                          password: e.target.value,
                        });
                      }}
                      onBlur={formik.handleBlur}
                      error={
                        !!(formik.touched.password && formik.errors.password)
                      }
                      sx={{ mb: 0 }}
                      name="password"
                      placeholder="Password"
                      fullWidth
                      margin="normal"
                      variant="outlined"
                    />
                    <ErrorMessage name="password">
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

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      width: "100%",
                      mb: 2,
                    }}
                  >
                    <Link
                      href="/forgot-password"
                      sx={{
                        fontSize: "0.875rem",
                        textDecoration: "none",
                        color: "secondary.main",
                        mt: 1,
                        mb: 1,
                      }}
                    >
                      Forgot Password?
                    </Link>
                  </Box>
                  {errorMessage && (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mt: 0,
                        mb: 1,
                        textAlign: "left",
                      }}
                    >
                      <InfoIcon color="error" sx={{ mr: 0.2 }} />
                      <Typography
                        variant="caption"
                        color="error"
                        sx={{
                          display: "block",
                          mt: 0,
                          mb: 0,
                        }}
                        textlabel={errorMessage}
                      />
                    </Box>
                  )}
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      backgroundColor: "#ff9800",
                      color: "#fff",
                      padding: "12px 24px",
                      fontSize: "1rem",
                      "&:hover": {
                        backgroundColor: "#e68900",
                      },
                      width: "100%",
                    }}
                  >
                    Log In
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Signin;
