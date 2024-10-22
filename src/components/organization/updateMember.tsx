import React from "react";
import { Box, Button, DialogActions, Grid } from "@mui/material";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormTextField from "../common/inputField";
import Typography from "../common/typography";
import FormSelectField from "../common/selectField";
import Dialog from "../common/dialog";
import { UpdateOrgSchema } from "../../utils/schemas";
import { BusinessSelection } from "../../utils/constants";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  initialValues: MemberFormValues;
  onSubmit: (values: MemberFormValues) => void;
}

interface MemberFormValues {
  name: string;
  email: string;
  accountType: string;
}

const UpdateMemberForm: React.FC<ModalProps> = ({
  open,
  onClose,
  initialValues,
  onSubmit,
}) => {
  const accountTypeOptions = BusinessSelection.organization_type.map(
    (type) => ({
      value: type.name,
      label: type.name,
    })
  );

  const renderMemberForm = (formik) => (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="body2"
            sx={{ color: "black" }}
            textlabel="Name"
          />
          <FormTextField
            variant="outlined"
            fullWidth
            placeholder="Name"
            key="name"
            type="text"
            name="name"
            value={formik.values.name}
            onChange={(e) => {
              formik.setValues({
                ...formik.values,
                name: e.target.value,
              });
            }}
            onBlur={formik.handleBlur}
            error={!!(formik.touched.name && formik.errors.name)}
            sx={{ mb: 0, mt: 1 }}
          />
          <ErrorMessage name="name">
            {(msg) => (
              <Typography
                variant="caption"
                color="error"
                sx={{ display: "block", mt: 0.5 }}
                textlabel={msg}
              />
            )}
          </ErrorMessage>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="body2"
            sx={{ color: "black" }}
            textlabel="Email"
          />
          <FormTextField
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
            error={!!(formik.touched.email && formik.errors.email)}
            sx={{ mb: 0, mt: 1 }}
          />
          <ErrorMessage name="email">
            {(msg) => (
              <Typography
                variant="caption"
                color="error"
                sx={{ display: "block", mt: 0.5 }}
                textlabel={msg}
              />
            )}
          </ErrorMessage>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="body2"
            sx={{ color: "black" }}
            textlabel="Account Type"
          />
          <FormSelectField
            name="accountType"
            placeholder="Account Type"
            value={formik.values.accountType}
            onChange={(e) => {
              formik.setFieldValue("accountType", e.target.value as string);
            }}
            onBlur={formik.handleBlur}
            error={!!(formik.touched.accountType && formik.errors.accountType)}
            displayEmpty
            options={accountTypeOptions}
            sx={{ mb: 0, mt: 1 }}
          />
          <ErrorMessage name="accountType">
            {(msg) => (
              <Typography
                variant="caption"
                color="error"
                sx={{ display: "block", mt: 0.5 }}
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
      title="Update Member Information"
      element={
        <Formik
          initialValues={initialValues}
          validationSchema={UpdateOrgSchema}
          onSubmit={(values) => {
            onSubmit(values);
          }}
        >
          {(formik) => (
            <Form>
              {renderMemberForm(formik)}
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

export default UpdateMemberForm;
