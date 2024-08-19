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
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Typography from "../common/typography";
import { IMAGES, Languages, LOCALSTORAGE_KEYS } from "../../utils/constants";
import { ErrorMessage, Form, Formik } from "formik";
import {
  ImageValidationSchema,
  SettingsUpdateSchema,
} from "../../utils/schemas";
import FormTextField from "../common/inputField";
import ChangePassword from "./changePassword";
import Image from "next/image";
import Layout from "../layout";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

interface RegistrationInfo {
  firstName: string;
  lastName: string;
  businessName: string;
  email: string;
  Settings_Profile_Image: string;
}

const Settings: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [userInfo, setUserInfo] = useState<RegistrationInfo | null>(null);

  const handleImageChange = (formik) => (e) => {
    const file = e.currentTarget.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        formik.setFieldValue("image", file);
        formik.setFieldValue("imagePreview", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const userRegistrationInfo = JSON.parse(
      localStorage.getItem(LOCALSTORAGE_KEYS.Registration_Info)
    );
    userRegistrationInfo.language = selectedLanguage;
    localStorage.setItem(
      LOCALSTORAGE_KEYS.Registration_Info,
      JSON.stringify(userRegistrationInfo)
    );
  };

  useEffect(() => {
    const updateInfo = () => {
      const userRegistrationInfo = JSON.parse(
        localStorage.getItem(LOCALSTORAGE_KEYS.Registration_Info)
      );
      const language = userRegistrationInfo.language || "";
      setUserInfo(userRegistrationInfo);
      setSelectedLanguage(language);
    };
    updateInfo();

    window.addEventListener("storage", updateInfo);

    return () => {
      window.removeEventListener("storage", updateInfo);
    };
  }, []);

  return (
    <React.Fragment>
      <Box
        sx={{
          px: 5,
          pt: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontSize: "1.25rem" }}
          textlabel="User"
        />
        <Typography
          variant="body2"
          sx={{ color: "gray", mb: 1 }}
          textlabel="Edit your personal information"
        />
        <Divider />
        <Formik
          initialValues={
            {
              firstName: userInfo ? userInfo["firstName"] : "",
              lastName: userInfo ? userInfo["lastName"] : "",
              email: userInfo ? userInfo["email"] : "",
            } as FormValues
          }
          enableReinitialize
          validationSchema={SettingsUpdateSchema}
          validateOnChange={true}
          validateOnBlur={true}
          onSubmit={(values, actions) => {
            const storedRegistrationInfo = JSON.parse(
              localStorage.getItem(LOCALSTORAGE_KEYS.Registration_Info)
            );
            storedRegistrationInfo.firstName = values.firstName;
            storedRegistrationInfo.lastName = values.lastName;
            storedRegistrationInfo.email = values.email;
            localStorage.setItem(
              LOCALSTORAGE_KEYS.Registration_Info,
              JSON.stringify(storedRegistrationInfo)
            );
            window.dispatchEvent(new Event("storage"));
            actions.resetForm();
          }}
        >
          {(formik) => (
            <Form onSubmit={formik.handleSubmit}>
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
                      textlabel="First Name"
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
                      !!(formik.touched.firstName && formik.errors.firstName)
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
                </Grid>
                <Grid item xs={4}></Grid>

                <Grid item xs={4}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      variant="body2"
                      sx={{ color: "black" }}
                      textlabel="Last Name"
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
                      !!(formik.touched.lastName && formik.errors.lastName)
                    }
                    fullWidth
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
                    placeholder={userInfo?.email}
                    disabled
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
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "0.875rem", color: "black" }}
                    textlabel="Password"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Button
                    onClick={handleOpen}
                    sx={{
                      height: "35px",
                      width: "70%",
                      borderRadius: "8px",
                      textAlign: "left",
                      padding: "0 14px",
                      color: "#5f6973",
                      background: "#d9dee2",
                    }}
                  >
                    Change Password
                  </Button>

                  <ChangePassword open={modalOpen} onClose={handleClose} />
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
          textlabel="Profile Picture"
        />
        <Typography
          variant="body2"
          sx={{ color: "gray", mb: 1 }}
          textlabel="Change your profile picture"
        />
        <Divider />{" "}
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
            Registration_Info.Settings_Profile_Image = values.imagePreview;
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
                    {userInfo?.Settings_Profile_Image ? (
                      <img
                        src={userInfo?.Settings_Profile_Image}
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
          textlabel="Language"
        />
        <Typography
          variant="body2"
          sx={{ color: "gray", mb: 1 }}
          textlabel="Please select a preferred language for your dashboard"
        />
        <Divider />
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
            {" "}
            <FormControl fullWidth variant="outlined">
              <Select
                labelId="language-select-label"
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                sx={{
                  height: "35px",
                  width: "50%",
                  "& .MuiOutlinedInput-input": {
                    height: "35px",
                    width: "50%",
                    padding: "0 14px",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderRadius: "8px",
                  },
                }}
              >
                {Languages.map((lang) => (
                  <MenuItem key={lang.code} value={lang.name}>
                    {lang.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
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
        <Typography
          variant="h6"
          sx={{ fontSize: "1.25rem", mb: 0.5 }}
          textlabel="Organizations"
        />
        <Typography
          variant="body2"
          sx={{ color: "gray", mb: 1 }}
          textlabel="The list of accounts to which you are a member"
        />
        <Divider />
        <Grid
          container
          spacing={0.5}
          sx={{
            mb: 4,
            pt: 2,
            px: 2,
          }}
        >
          <Grid item xs={4}>
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", color: "black", pb: 1 }}
              textlabel="Organization"
            />
          </Grid>
          <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", color: "black", pb: 1 }}
              textlabel="Role"
            />
          </Grid>
          <Grid
            item
            xs={4}
            sx={{ display: "flex", justifyContent: "flex-end", pb: 1 }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", color: "black" }}
              textlabel="Action"
            />
          </Grid>

          <Grid item xs={4}>
            <Typography
              variant="body2"
              textlabel="Microsoft Brossad(Microsoft)"
              sx={{ color: "black" }}
            />
          </Grid>
          <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="body2"
              textlabel="Administrator"
              sx={{ color: "black" }}
            />
          </Grid>
          <Grid
            item
            xs={4}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <IconButton sx={{ color: "black" }}>
              <MoreHorizIcon />
            </IconButton>
          </Grid>

          <Grid item xs={4}>
            <Typography
              variant="body2"
              textlabel="Microsoft Montreal(Microsoft)"
              sx={{ color: "black" }}
            />
          </Grid>
          <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="body2"
              textlabel="Administrator"
              sx={{ color: "black" }}
            />
          </Grid>
          <Grid
            item
            xs={4}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <IconButton sx={{ color: "black" }}>
              <MoreHorizIcon />
            </IconButton>
          </Grid>

          <Grid item xs={4}>
            <Typography
              variant="body2"
              textlabel="Microsoft Longueuil(Microsoft)"
              sx={{ color: "black" }}
            />
          </Grid>
          <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="body2"
              textlabel="Administrator"
              sx={{ color: "black" }}
            />
          </Grid>
          <Grid
            item
            xs={4}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <IconButton sx={{ color: "black" }}>
              <MoreHorizIcon />
            </IconButton>
          </Grid>

          <Grid item xs={4}>
            <Typography
              variant="body2"
              textlabel="Microsoft La Chine(Microsoft)"
              sx={{ color: "black" }}
            />
          </Grid>
          <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="body2"
              textlabel="Administrator"
              sx={{ color: "black" }}
            />
          </Grid>
          <Grid
            item
            xs={4}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <IconButton sx={{ color: "black" }}>
              <MoreHorizIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Settings;
