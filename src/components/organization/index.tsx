"use client";
import React, { useState } from "react";
import Typography from "../common/typography";
import { Box, Grid } from "@mui/material";
import { headings } from "../../utils/constants";
import Profile from "./profile";
import Members from "./members";

const Organization: React.FC = () => {
  const [activeHeading, setActiveHeading] = useState("Organization Profile");
  return (
    <React.Fragment>
      <Grid
        container
        spacing={2}
        sx={{
          px: 3.6,
          mb: 2,
        }}
      >
        {headings.map((heading) => (
          <Grid
            item
            xs={4}
            key={heading.id}
            sx={{ display: "flex", justifyContent: `${heading.position}` }}
          >
            <Box
              onClick={() => setActiveHeading(heading.label)}
              sx={{
                padding: 1,
                border:
                  activeHeading === heading.label
                    ? "2px solid orange"
                    : "2px solid transparent",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "border-color 0.3s",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color:
                    activeHeading === heading.label
                      ? "primary.main"
                      : "secondary.main",
                  fontWeight:
                    activeHeading === heading.label ? "bold" : "normal",
                }}
                textlabel={heading.label}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
      {activeHeading === "Organization Profile" ? <Profile /> : <Members />}
    </React.Fragment>
  );
};

export default Organization;
