import { Box, Card, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const DynamicCard = ({ Icon, heading, subheading }) => {
  return (
    <Card
      sx={{
        mb: 2,
        width: "400px",
        height: "100px",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        padding: "16px",
        position: "relative",
        "&:hover": {
          backgroundColor: "#fff3e0",
          borderColor: "#ff9800",
          borderWidth: "1px",
          borderStyle: "solid",
          "& .MuiSvgIcon-root, & .MuiTypography-root": {
            color: "#ff9800",
          },
          "& .arrow-icon": {
            display: "block",
          },
        },
      }}
    >
      <Icon
        sx={{
          fontSize: "2rem",
          color: "#ff9800",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexGrow: 1,
          ml: 2,
        }}
      >
        <Typography variant="h6" component="div">
          {heading}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {subheading}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minWidth: "24px",
        }}
      >
        <ArrowForwardIcon
          className="arrow-icon"
          sx={{
            display: "none",
            color: "#ff9800",
          }}
        />
      </Box>
    </Card>
  );
};

export default DynamicCard;
