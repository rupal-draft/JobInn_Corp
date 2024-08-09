"use client";
import React from "react";
import { Box } from "@mui/material";
import Sidebar from "../common/sidebar";

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <h1>Dashboard Content</h1>
      </Box>
    </Box>
  );
};

export default Dashboard;
