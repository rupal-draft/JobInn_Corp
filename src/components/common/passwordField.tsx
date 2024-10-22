import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface FormPasswordFieldProps {
  placeholder: string;
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

const PasswordField: React.FC<FormPasswordFieldProps> = ({
  placeholder,
  name,
  variant = "outlined",
  fullWidth = true,
  margin = "normal",
  sx = { mb: 2 },
  value,
  onBlur,
  onChange,
  error = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <TextField
      placeholder={placeholder}
      name={name}
      type={showPassword ? "text" : "password"}
      variant={variant}
      fullWidth={fullWidth}
      margin={margin}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      error={error}
      sx={sx}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordField;
