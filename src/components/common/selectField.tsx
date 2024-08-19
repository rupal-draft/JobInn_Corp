import React from "react";
import {
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";

interface FormSelectFieldProps {
  name: string;
  placeholder: string;
  value: string | number;
  onChange: (event: SelectChangeEvent<string | number>) => void;
  onBlur: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  error?: boolean;
  options: Array<{ value: string | number; label: string }>;
  displayEmpty?: boolean;
  sx?: object;
  disabled?: boolean;
}

const FormSelectField: React.FC<FormSelectFieldProps> = ({
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  error = false,
  options,
  sx = {},
  disabled = false,
}) => {
  return (
    <FormControl fullWidth error={error} sx={sx} disabled={disabled}>
      <Select
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        displayEmpty
        renderValue={(selected) => {
          const selectedArray = Array.isArray(selected) ? selected : [selected];

          if (selectedArray.length === 0) {
            return <em style={{ color: "gray" }}>{placeholder}</em>;
          }
          return selectedArray.join(", ");
        }}
        sx={{ textAlign: "left" }}
      >
        <MenuItem disabled value="">
          <span>{placeholder}</span>
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FormSelectField;
