// CenteredTextBox.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

interface CenteredTextBoxProps {
  text: string;
  bgcolor?: string;
}

const CenteredTextBox: React.FC<CenteredTextBoxProps> = ({ text, bgcolor="" }) => {
  return (
    <Box
      sx={{
        backgroundColor: bgcolor,
        color: "#fff",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        p: 2,
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 1,
        }}
      >
        <FormatQuoteIcon
          sx={{
            fontSize: "4rem",
            color: "rgba(255, 255, 255, 0.8)",
          }}
        />
        <Typography
          variant="h6"
          sx={{
            maxWidth: "80%",
            lineHeight: "1.5",
            mt: 1,
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default CenteredTextBox;
