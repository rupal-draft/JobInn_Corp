import React from "react";
import { TextField } from "@mui/material";

interface FormTextFieldProps {
  placeholder: string;
  type: string;
  name: string;
  variant?: "filled" | "outlined" | "standard";
  fullWidth?: boolean;
  margin?: "none" | "dense" | "normal";
  sx?: object;
  value: string;
  onBlur: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  error?: boolean;
}

const FormTextField: React.FC<FormTextFieldProps> = ({
  placeholder,
  type,
  name,
  variant = "outlined",
  fullWidth = true,
  margin = "normal",
  sx,
  value,
  onBlur,
  onChange,
  error = false,
}) => {
  return (
    <TextField
      placeholder={placeholder}
      type={type}
      name={name}
      variant={variant}
      fullWidth={fullWidth}
      margin={margin}
      sx={sx}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      error={error}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default FormTextField;
