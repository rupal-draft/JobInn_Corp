import React from "react";
import { Box, Button, DialogActions, Grid } from "@mui/material";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { passwordSchema } from "../../utils/schemas";
import PasswordField from "../common/passwordField";
import Typography from "../common/typography";
import { LOCALSTORAGE_KEYS, PasswordRequirements } from "../../utils/constants";
import Dialog from "../common/dialog";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const ChangePassword: React.FC<ModalProps> = ({ open, onClose }) => {
  const passwordChangeSchema = Yup.object().shape({
    oldPassword: Yup.string().required("This field is required"),
    newPassword: passwordSchema,
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("This field is required"),
  });

  const renderPasswordForm = (formik) => (
    <React.Fragment>
      <Box
        component="ul"
        sx={{
          color: "secondary.main",
          paddingLeft: "20px",
          listStyleType: "disc",
        }}
      >
        {PasswordRequirements.map((text) => (
          <Box
            component="li"
            key={text}
            sx={{ fontSize: "0.9rem", lineHeight: "1.5" }}
          >
            {text}
          </Box>
        ))}
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="body2"
              sx={{ color: "black" }}
              textlabel="Old Password"
            />
            <Typography
              variant="subtitle1"
              sx={{ color: "#000", display: "inline" }}
              textlabel="*"
            />
          </Box>
          <PasswordField
            value={formik.values.oldPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={!!(formik.touched.oldPassword && formik.errors.oldPassword)}
            sx={{ mb: 0, mt: 0.5 }}
            name="oldPassword"
            placeholder="Old Password"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <ErrorMessage name="oldPassword">
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
        <Grid item xs={12}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="body2"
              sx={{ color: "black" }}
              textlabel="New Password"
            />
            <Typography
              variant="subtitle1"
              sx={{ color: "#000", display: "inline" }}
              textlabel="*"
            />
          </Box>
          <PasswordField
            value={formik.values.newPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={!!(formik.touched.newPassword && formik.errors.newPassword)}
            sx={{ mb: 0, mt: 0.5 }}
            name="newPassword"
            placeholder="New Password"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <ErrorMessage name="newPassword">
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
        <Grid item xs={12}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="body2"
              sx={{ color: "black" }}
              textlabel="Confirm Password"
            />
            <Typography
              variant="subtitle1"
              sx={{ color: "#000", display: "inline" }}
              textlabel="*"
            />
          </Box>
          <PasswordField
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              !!(
                formik.touched.confirmPassword && formik.errors.confirmPassword
              )
            }
            sx={{ mb: 0, mt: 0.5 }}
            name="confirmPassword"
            placeholder="Confirm Password"
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
        </Grid>
      </Grid>
    </React.Fragment>
  );

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title="Change Password"
      element={
        <Formik
          initialValues={{
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
          }}
          validationSchema={passwordChangeSchema}
          onSubmit={(values, actions) => {
            const userRegistrationInfo = JSON.parse(
              localStorage.getItem(LOCALSTORAGE_KEYS.Registration_Info)
            );
            const password = userRegistrationInfo?.password;
            if (values.oldPassword !== password) {
              actions.setFieldError("oldPassword", "Invalid old password");
            } else if (values.oldPassword === values.newPassword) {
              actions.setFieldError(
                "newPassword",
                "New password cannot be the same as the old password"
              );
            } else {
              userRegistrationInfo.password = values.newPassword;
              localStorage.setItem(
                LOCALSTORAGE_KEYS.Registration_Info,
                JSON.stringify(userRegistrationInfo)
              );
              actions.resetForm();
              onClose();
            }
          }}
        >
          {(formik) => (
            <Form>
              {renderPasswordForm(formik)}
              <DialogActions sx={{ px: 0, mt: 1 }}>
                <Button
                  type="submit"
                  sx={{
                    backgroundColor: "primary.main",
                    color: "#fff",
                    padding: "8px 16px",
                    fontSize: "0.875rem",
                  }}
                >
                  Submit
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      }
    />
  );
};

export default ChangePassword;
