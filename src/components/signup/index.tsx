import { Box, Card, Grid, Typography, Button } from "@mui/material";
import React from "react";
import CenteredTextBox from "../common/text";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";
import DynamicCard from "../common/card";

const Signup = () => {
  return (
    <div
      style={{
        height: "100vh",
        color: "#f5f5f5",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container sx={{ height: "100vh", width: "100%" }}>
        <Grid item xs={12} lg={6} sx={{ height: "100%", overflow: "hidden" }}>
          <CenteredTextBox
            text="Coming together is a beginning; Keeping together is progress; Working together is success."
            bgcolor="primary.main"
          />
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            p: 4,
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 40,
              right: 40,
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography variant="body2">Already have an account?</Typography>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#ff9800",
                color: "#ff9800",
                "&:hover": {
                  borderColor: "#ff9800",
                  backgroundColor: "#ffe0b2",
                },
                fontSize: "0.8rem",
                padding: "4px 8px",
              }}
            >
              Sign In
            </Button>
          </Box>
          <Box
            sx={{
              width: "400px",
              textAlign: "left",
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ color: "#000", mb: 2 }}>
              Welcome to JobInn
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{
                lineHeight: "1.5",
                color: "#555",
                mt: 1,
                mb: 4,
                maxWidth: "600px",
              }}
            >
              Whether you are seeking opportunities or need to augment your
              team, JobInn is your gateway to flexible, skilled employment
              solutions.
            </Typography>
          </Box>
          <DynamicCard
            Icon={BusinessIcon}
            heading="Business"
            subheading="To hire people as an organization."
          />
          <DynamicCard
            Icon={PersonIcon}
            heading="Individual"
            subheading="To work or to hire for my personal needs."
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Signup;
