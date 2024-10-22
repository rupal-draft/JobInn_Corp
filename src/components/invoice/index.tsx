"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Chip,
  Grid,
  IconButton,
  LinearProgress,
  Typography,
} from "@mui/material";
import { IMAGES, rowData } from "../../utils/constants";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Invoice: React.FC = () => {
  const [activeButton, setActiveButton] = useState("External Hirrings");

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          py: 2,
          px: 6,
        }}
      >
        <Box
          sx={{
            width: "45%",
            minHeight: "250px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#e9ecef",
              padding: "14px",
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6">Current Plan Summary</Typography>
            <Button
              type="submit"
              sx={{
                backgroundColor: "primary.main",
                color: "#fff",
                padding: "4px 12px",
                fontSize: "0.875rem",
              }}
            >
              Upgrade
            </Button>{" "}
          </Box>

          <Box sx={{ padding: "20px" }}>
            {/* Flex container for the headings and values */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* Plan Name */}
              <Box>
                <Typography variant="subtitle2" color="secondary.main">
                  Plan Name
                </Typography>
                <Typography variant="body1">Growth Plan</Typography>
              </Box>

              {/* Billing Cycle */}
              <Box>
                <Typography variant="subtitle2" color="secondary.main">
                  Billing Cycle
                </Typography>
                <Typography variant="body1">Monthly</Typography>
              </Box>

              {/* Plan Cost */}
              <Box>
                <Typography variant="subtitle2" color="secondary.main">
                  Plan Cost
                </Typography>
                <Typography variant="body1">$1200/month</Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ width: "100%", padding: "20px" }}>
            <Typography variant="body2" color="secondary" gutterBottom>
              Active Workers
            </Typography>
            <Typography variant="body2" color="secondary" gutterBottom>
              275 out of 300
            </Typography>
            <LinearProgress
              variant="determinate"
              value={(275 / 300) * 100}
              sx={{
                height: 20,
                borderRadius: 1,
                width: 650,
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            width: "45%",
            minHeight: "250px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Heading */}
          <Box
            sx={{
              backgroundColor: "#e9ecef",
              padding: "14px",
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
            }}
          >
            <Typography variant="h6">Payment Method</Typography>
          </Box>

          {/* Content */}
          <Box sx={{ padding: "20px" }}>
            <Box
              sx={{
                padding: "16px",
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                display: "flex",
              }}
            >
              {/* Image */}
              <img
                src={IMAGES.Invoices.mastercardLogo}
                alt="Mastercard"
                style={{ width: "60px", height: "40px", marginRight: "16px" }}
              />

              {/* Text Section */}
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="body1">Mastercard</Typography>
                <Typography variant="body2" color="#000">
                  *** *** *** 402
                </Typography>
                <Typography variant="body2">Expiry on 20/2024</Typography>
                <Typography variant="body2">billing@acme.corp</Typography>
              </Box>

              {/* Change Button */}
              <Button variant="outlined" size="small" sx={{ height: "40px" }}>
                Change
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ py: 2, mt: 2, px: 6 }}>
        <ButtonGroup
          sx={{
            overflow: "hidden",
            height: "34px",
            width: "60%",
            border: "none",
          }}
        >
          <Button
            onClick={() => handleButtonClick("Monthly Invoices")}
            sx={{
              backgroundColor:
                activeButton === "Monthly Invoices"
                  ? "primary.main"
                  : "#f5f5f5",
              color:
                activeButton === "Monthly Invoices" ? "#fff" : "secondary.main",
              borderRadius: "10px",
              width: "280px",
              border: "none",
              "&:hover": {
                backgroundColor:
                  activeButton === "Monthly Invoices"
                    ? "primary.main"
                    : "#f5f5f5",
                border: "none",
              },
            }}
          >
            Monthly Invoices{" "}
          </Button>
          <Button
            onClick={() => handleButtonClick("External Hirrings")}
            sx={{
              backgroundColor:
                activeButton === "External Hirrings"
                  ? "primary.main"
                  : "#f5f5f5",
              color:
                activeButton === "External Hirrings"
                  ? "#fff"
                  : "secondary.main",
              borderRadius: "10px",
              width: "280px",
              border: "none",
              "&:hover": {
                backgroundColor:
                  activeButton === "External Hirrings"
                    ? "primary.main"
                    : "#f5f5f5",
                border: "none",
              },
            }}
          >
            External Hirrings{" "}
          </Button>
        </ButtonGroup>
      </Box>
      {activeButton === "External Hirrings" ? (
        <Box
          sx={{
            py: 1,
            mt: 1,
            px: 6,
            backgroundColor: "#fff",
            borderRadius: "8px",
          }}
        >
          {/* Headings */}
          <Grid container spacing={2} sx={{ mb: 4 }}>
            {["Invoice Id", "Billing Date", "Plan", "Amount", "Status"].map(
              (heading) => (
                <Grid
                  item
                  xs={2}
                  key={heading}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Typography variant="subtitle2" color="secondary">
                    {heading}
                  </Typography>
                  <ArrowDropDownIcon sx={{ color: "grey.500", ml: 1 }} />
                </Grid>
              )
            )}
            {/* Empty column for MoreHorizIcon */}
            <Grid item xs={2}></Grid>
          </Grid>

          {/* Rows */}
          {rowData.map((row, index) => (
            <Grid container spacing={2} key={index} sx={{ mb: 4 }}>
              <Grid item xs={2} sx={{ backgroundColor: "#f8f9fa" }}>
                <Typography>{row.invoiceId}</Typography>
              </Grid>
              <Grid item xs={2} sx={{ backgroundColor: "#f8f9fa" }}>
                <Typography>{row.billingDate}</Typography>
              </Grid>
              <Grid item xs={2} sx={{ backgroundColor: "#f8f9fa" }}>
                <Typography>{row.plan}</Typography>
              </Grid>
              <Grid item xs={2} sx={{ backgroundColor: "#f8f9fa" }}>
                <Typography>{row.amount}</Typography>
              </Grid>
              <Grid item xs={2} sx={{ backgroundColor: "#f8f9fa" }}>
                <Chip label="Paid" color="success" size="medium" />
              </Grid>
              <Grid item xs={2} sx={{ backgroundColor: "#f8f9fa" }}>
                <IconButton>
                  <MoreHorizIcon />
                </IconButton>
              </Grid>
            </Grid>
          ))}
        </Box>
      ) : (
        <Box sx={{ py: 1, mt: 1, px: 6 }}>
          <Typography>No Data</Typography>
        </Box>
      )}
    </React.Fragment>
  );
};

export default Invoice;
