import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import CenteredTextBox from "../../components/text";

const boxstyle = {
  position: "absolute",
  top: "5%",
  left: "5%",
  width: "90%",
  height: "90%",
  bgcolor: "background.paper",
};

const Signup = () => {
  return (
    <div>
      <div
        style={{
          height: "100vh",
          color: "#f5f5f5",
          overflow: "hidden",
        }}
      >
        <Grid container sx={{ height: "100%" }}>
          <Grid item xs={6} lg={6} sx={{ height: "100%", overflow: "hidden" }}>
            <CenteredTextBox
              text="Coming together is a begining; Keeping together is progess; Working together is success."
              bgcolor="primary.main"
            />
          </Grid>
          <Grid
            item
            xs={6}
            lg={6}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              p: 4,
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ color: "#000", mb: 2 }}>
              Welcome to Our Platform
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ color: "#555", mb: 4 }}
            >
              Join us to collaborate and achieve great success together.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                mb: 2,
                width: "250px",
                height: "60px",
                borderRadius: "8px",
                fontSize: "16px",
                "&:hover": {
                  backgroundColor: "#ffcc80",
                },
              }}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                width: "250px",
                height: "60px",
                borderRadius: "8px",
                fontSize: "16px",
                "&:hover": {
                  backgroundColor: "#ffcc80",
                  borderColor: "#ffcc80",
                },
              }}
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Signup;
