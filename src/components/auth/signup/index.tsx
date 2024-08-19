import { Box, Grid, Button, Link } from "@mui/material";
import React from "react";
import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";
import Card from "../../common/card";
import Typography from "../../common/typography";
import Hero from "../../common/hero";

const Signup = () => {
  return (
    <Box
      sx={{
        color: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Grid container sx={{ height: "100vh", width: "100%" }}>
        <Grid item xs={12} lg={6} sx={{ height: "100%", overflow: "hidden" }}>
          <Hero
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
            overflow: "hidden",
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
            <Typography variant="body2" textlabel="Already have an account?" />

            <Button
              variant="outlined"
              component={Link}
              href="/signin"
              sx={{
                borderColor: "#ff9800",
                color: "#ff9800",
                "&:hover": {
                  borderColor: "#ff9800",
                  backgroundColor: "#ffe0b2",
                },
                fontSize: "0.8rem",
                padding: "10px 30px",
              }}
            >
              Sign In
            </Button>
          </Box>
          <Box
            sx={{
              width: "400px",
              textAlign: "left",
              mr: 4,
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: "#000", mb: 2 }}
              textlabel="Welcome to JobInn"
            />

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
              textlabel="Whether you are seeking opportunities or need to augment your
              team, JobInn is your gateway to flexible, skilled employment
              solutions."
            />
          </Box>
          <Link href="/signup/business" sx={{ textDecoration: "none" }}>
            <Card
              Icon={BusinessIcon}
              heading="Business"
              subheading="To hire people as an organization."
            />
          </Link>
          <Card
            Icon={PersonIcon}
            heading="Individual"
            subheading="To work or to hire for my personal needs."
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Signup;
