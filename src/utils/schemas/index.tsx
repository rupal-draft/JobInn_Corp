import * as Yup from "yup";

const EMAIL_PATTERN = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const passwordSchema = Yup.string()
  .min(8, "Password must be at least 8 characters long")
  .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
  .matches(/[a-z]/, "Password must contain at least one lowercase letter")
  .matches(/[0-9]/, "Password must contain at least one number")
  .matches(/[!@#$%^&*]/, "Password must contain at least one special character")
  .required("This field is required");

export const emailSchema = Yup.string()
  .matches(EMAIL_PATTERN, "Invalid email address")
  .required("This field is required");

export const businessSignUpSchema = Yup.object().shape({
  firstName: Yup.string().required("This field is required"),
  lastName: Yup.string().required("This field is required"),
  email: emailSchema,
});

export const UpdateOrgSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: emailSchema,
  accountType: Yup.string().required("Account type is required"),
});

export const businessDetailsSchema = Yup.object().shape({
  businessName: Yup.string()
    .min(2, "Business name must be at least 2 characters")
    .max(50, "Business name must be less than 50 characters")
    .required("This field is required"),
  industry: Yup.string()
    .min(2, "Industry must be at least 2 characters")
    .max(50, "Industry must be less than 50 characters"),
  businessAddress: Yup.string()
    .min(2, "Business address must be at least 2 characters")
    .max(100, "Business address must be less than 100 characters"),
  businessUrl: Yup.string().url("Please enter a valid URL"),
});

export const SigninSchema = Yup.object().shape({
  email: emailSchema,
  password: Yup.string().required("This field is required"),
});

export const EmailSchema = Yup.object().shape({
  email: emailSchema,
});

export const SettingsUpdateSchema = Yup.object().shape({
  firstName: Yup.string().required("This field is required"),
  lastName: Yup.string().required("This field is required"),
  email: emailSchema,
});

export const OrganizationDetailsSchema = Yup.object().shape({
  organizationName: Yup.string()
    .min(2, "Business name must be at least 2 characters")
    .max(50, "Business name must be less than 50 characters")
    .required("This field is required"),
  location: Yup.string()
    .min(2, "Industry must be at least 2 characters")
    .max(50, "Industry must be less than 50 characters")
    .required("This field is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must contain only digits")
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits")
    .required("This field is required"),
});

export const ImageValidationSchema = Yup.object().shape({
  image: Yup.mixed()
    .required("Image is required")
    .test("fileType", "Only JPG, PNG, or GIF files are allowed", (value) => {
      if (!value) return false;
      return (
        value instanceof File &&
        ["image/jpeg", "image/png", "image/gif"].includes(value.type)
      );
    }),
});
