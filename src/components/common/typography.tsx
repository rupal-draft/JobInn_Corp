// CustomTypography.tsx
import React from "react";
import { Typography as MUITypography, TypographyProps } from "@mui/material";

interface CustomTypographyProps extends TypographyProps {
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body1"
    | "body2"
    | "subtitle1"
    | "subtitle2"
    | "caption"
    | "overline";
  color?: string;
  textAlign?: "left" | "center" | "right";
  textlabel: string;
}

const Typography: React.FC<CustomTypographyProps> = ({
  variant,
  color,
  textAlign,
  textlabel,
  ...props
}) => {
  return (
    <MUITypography variant={variant} color={color} align={textAlign} {...props}>
      {textlabel}
    </MUITypography>
  );
};

export default Typography;
