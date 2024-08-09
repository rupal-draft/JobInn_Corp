"use client";

import { Box, Grid, Button, Link } from "@mui/material";
import React, { useState } from "react";
import Typography from "../../common/typography";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { passwordSchema } from "../../../utils/schemas";
import PasswordField from "../../common/passwordField";
import { PasswordRequirements } from "../../../utils/constants";
import Hero from "../../common/hero";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

interface PasswordValues {
  password: string;
  confirmPassword: string;
}

const ResetPassword = () => {
  const validationSchema = Yup.object({
    password: passwordSchema,
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("This field is required"),
  });
  const initialValues: PasswordValues = { password: "", confirmPassword: "" };
  const [step, setStep] = useState(1);

  return (
    <div
      style={{
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
          {step === 1 ? (
            <React.Fragment>
              <Box
                sx={{
                  width: "450px",
                  textAlign: "left",
                }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ color: "#000", mb: 2, width: "100%" }}
                  textlabel="Reset Your New Password"
                />
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    lineHeight: "1.5",
                    color: "#808B96",
                    mt: 1,
                    mb: 2,
                    maxWidth: "600px",
                  }}
                  textlabel="Please reset your new password"
                />

                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant="body2"
                    sx={{ color: "#808B96", textAlign: "left" }}
                    textlabel="Password requirements"
                  />
                  <ul
                    style={{ color: "#808B96", paddingLeft: "20px", margin: 0 }}
                  >
                    {PasswordRequirements.map((text) => (
                      <li
                        key={text}
                        style={{ fontSize: "0.8rem", lineHeight: "1.5" }}
                      >
                        {text}
                      </li>
                    ))}
                  </ul>
                </Box>

                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={(values, actions) => {
                    console.log(values);
                    setStep(2);
                    actions.resetForm();
                  }}
                >
                  {(formik) => (
                    <Form onSubmit={formik.handleSubmit}>
                      <Box sx={{ mb: 2 }}>
                        <Typography
                          variant="subtitle1"
                          sx={{ mb: 0.3, color: "#555", textAlign: "left" }}
                          textlabel="Create New Password"
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
                            !!(
                              formik.touched.password && formik.errors.password
                            )
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
                      <Box sx={{ mb: 2 }}>
                        <Typography
                          variant="subtitle1"
                          sx={{ mb: 0.3, color: "#555", textAlign: "left" }}
                          textlabel="Confirm Password"
                        />
                        <PasswordField
                          value={formik.values.confirmPassword}
                          onChange={(e) => {
                            formik.setValues({
                              ...formik.values,
                              confirmPassword: e.target.value,
                            });
                          }}
                          onBlur={formik.handleBlur}
                          error={
                            !!(
                              formik.touched.confirmPassword &&
                              formik.errors.confirmPassword
                            )
                          }
                          sx={{ mb: 0 }}
                          name="confirmPassword"
                          placeholder="Password"
                          fullWidth
                          margin="normal"
                          variant="outlined"
                        />
                        <ErrorMessage name="confirmPassword">
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
                          fontSize: "1rem",
                          "&:hover": {
                            backgroundColor: "#e68900",
                          },
                          width: "100%",
                        }}
                      >
                        Reset Password
                      </Button>
                    </Form>
                  )}
                </Formik>
              </Box>
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
                <ThumbUpAltIcon sx={{ fontSize: 180, color: "#ff9800" }} />
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
                  textlabel="Your password has been successfully updated! We take your security seriously, and we appreciate your commitment to keeping your account safe. If you did not initiate this change, please contact our support team immediately. Thank you for being a valued member of our community!"
                />
                <Link
                  href="/signin"
                  sx={{
                    backgroundColor: "#ff9800",
                    mt: 2,
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
                  Login in now{" "}
                </Link>
              </Grid>
            </React.Fragment>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default ResetPassword;
