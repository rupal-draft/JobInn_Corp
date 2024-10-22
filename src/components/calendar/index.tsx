"use client";
import React, { useEffect, useState } from "react";
import { Box, Select, MenuItem } from "@mui/material";
import {
  BusinessSelection,
  events,
  LOCALSTORAGE_KEYS,
} from "../../utils/constants";
import Calendar from "../common/calendar";

const CalendarPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("");

  useEffect(() => {
    const updateInfo = () => {
      const userRegistrationInfo = JSON.parse(
        localStorage.getItem(LOCALSTORAGE_KEYS.Registration_Info)
      );
      const industry = userRegistrationInfo?.industry;
      setSelectedIndustry(industry || "");
    };
    updateInfo();
  }, []);

  return (
    <React.Fragment>
      <Box sx={{ padding: "24px" }}>
        <Select
          labelId="industry-select-label"
          value={selectedIndustry}
          onChange={(e) => setSelectedIndustry(e.target.value)}
          sx={{
            height: "35px",
            width: "30%",
            "& .MuiOutlinedInput-input": {
              height: "35px",
              width: "30%",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderRadius: "8px",
            },
          }}
        >
          {BusinessSelection.industry.map((industry) => (
            <MenuItem key={industry.id} value={industry.name}>
              {industry.name}
            </MenuItem>
          ))}
        </Select>
      </Box>

      <Box sx={{ paddingX: "24px" }}>
        <Calendar events={events} />
      </Box>
    </React.Fragment>
  );
};

export default CalendarPage;
