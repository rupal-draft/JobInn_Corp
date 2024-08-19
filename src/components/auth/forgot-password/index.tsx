"use client";

import { Box, Grid, Button, Link } from "@mui/material";
import React, { useState } from "react";
import Typography from "../../common/typography";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Hero from "../../common/hero";
import { ErrorMessage, Form, Formik } from "formik";
import FormTextField from "../../common/inputField";
import { emailSchema } from "../../../utils/schemas";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

interface email {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const [step, setStep] = useState(1);
  return (
    <Box
      sx={{
        height: "100vh",
        color: "#f5f5f5",
        overflow: "hidden",
        display: "flex",
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
          {step === 1 ? (
            <React.Fragment>
              <Formik
                initialValues={{ email: "" } as email}
                validationSchema={emailSchema}
                onSubmit={(values, actions) => {
                  console.log(values);
                  setStep(2);
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
                        textlabel="Forgot your password?"
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
                        textlabel="Enter your email so that we can send your password reset link"
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
                              sx={{ display: "block", mt: 0.5, mb: 0 }}
                              textlabel={msg}
                            />
                          )}
                        </ErrorMessage>
                      </Box>
                      <Button
                        variant="contained"
                        type="submit"
                        sx={{
                          backgroundColor: "#ff9800",
                          mb: 2,
                          color: "#fff",
                          padding: "12px 24px",
                          fontSize: "1rem",
                          "&:hover": {
                            backgroundColor: "#e68900",
                          },
                          width: "100%",
                        }}
                      >
                        Send Email
                      </Button>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 1,
                      }}
                    >
                      <ArrowBackIosIcon sx={{ color: "secondary.main" }} />

                      <Link
                        href="/signin"
                        sx={{
                          textDecoration: "none",
                          color: "secondary.main",
                        }}
                      >
                        Back to login
                      </Link>
                    </Box>
                  </Form>
                )}
              </Formik>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Grid
                item
                xs={12}
                lg={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <MarkEmailReadIcon sx={{ fontSize: 180, color: "#ff9800" }} />
                <Typography
                  variant="h4"
                  sx={{ mt: 2, color: "#555" }}
                  textlabel="Check your email"
                />

                <Typography
                  variant="body2"
                  sx={{
                    mt: 3,
                    color: "#555",
                    maxWidth: "500px",
                    margin: "0 auto",
                  }}
                  textlabel="Thanks! An email was sent that will ask you to click on a link to verify
that you own this account."
                />
                <Link
                  href="https://www.gmail.com"
                  sx={{
                    backgroundColor: "#ff9800",
                    mb: 2,
                    mt: 5,
                    color: "#fff",
                    padding: "12px 24px",
                    fontSize: "1rem",
                    "&:hover": {
                      backgroundColor: "#e68900",
                    },
                    width: "80%",
                    textDecoration: "none",
                  }}
                >
                  Open email inbox{" "}
                </Link>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  <ArrowBackIosIcon sx={{ color: "secondary.main" }} />

                  <Link
                    href="#"
                    onClick={() => {
                      setStep(1);
                    }}
                    sx={{
                      textDecoration: "none",
                      color: "secondary.main",
                    }}
                  >
                    Resend Email
                  </Link>
                </Box>
              </Grid>
            </React.Fragment>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ForgotPassword;
