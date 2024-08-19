"use client";

import { Box, Grid, Button } from "@mui/material";
import React from "react";
import Typography from "../../common/typography";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { passwordSchema } from "../../../utils/schemas";
import PasswordField from "../../common/passwordField";
import {
  LOCALSTORAGE_KEYS,
  PasswordRequirements,
} from "../../../utils/constants";
import Hero from "../../common/hero";

interface PasswordValues {
  password: string;
  confirmPassword: string;
}

const CreatePassword = () => {
  const validationSchema = Yup.object({
    password: passwordSchema,
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("This field is required"),
  });
  const initialValues: PasswordValues = { password: "", confirmPassword: "" };

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
              width: "450px",
              textAlign: "left",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: "#000", mb: 2, width: "100%" }}
              textlabel="Create Your New Password"
            />
            <Typography
              variant="body2"
              gutterBottom
              sx={{
                lineHeight: "1.5",
                color: "secondary.main",
                mt: 1,
                mb: 2,
                maxWidth: "600px",
              }}
              textlabel="To ensure the security of your account, please create a new password"
            />

            <Box sx={{ mb: 2 }}>
              <Typography
                variant="body2"
                sx={{ color: "secondary.main", textAlign: "left" }}
                textlabel="Password requirements"
              />
              <ul
                style={{
                  color: "secondary.main",
                  paddingLeft: "20px",
                  margin: 0,
                }}
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
                const storedRegistrationInfo = JSON.parse(
                  localStorage.getItem(LOCALSTORAGE_KEYS.Registration_Info)
                );
                storedRegistrationInfo.password = values.password;
                localStorage.setItem(
                  LOCALSTORAGE_KEYS.Registration_Info,
                  JSON.stringify(storedRegistrationInfo)
                );
                localStorage.setItem(
                  LOCALSTORAGE_KEYS.Force_Change_Password,
                  "true"
                );
                window.dispatchEvent(new Event("storage"));
                window.location.href = "/dashboard";
                actions.resetForm();
              }}
            >
              {(formik) => (
                <Form onSubmit={formik.handleSubmit}>
                  <Box sx={{ mb: 2 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{ mb: 0.3, color: "#555", textAlign: "left" }}
                      textlabel="Create Password"
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
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CreatePassword;
