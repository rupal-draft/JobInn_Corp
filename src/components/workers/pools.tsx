"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  Chip,
  Menu,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import InfoIcon from "@mui/icons-material/Info";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  BusinessSelection,
  PollsData,
  LOCALSTORAGE_KEYS,
} from "../../utils/constants";
import DataGrid from "../common/datagrid";
import AddWorker from "./addWorker";

const Pools: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    const updateInfo = () => {
      const userRegistrationInfo = JSON.parse(
        localStorage.getItem(LOCALSTORAGE_KEYS.Registration_Info)
      );
      const industry = userRegistrationInfo.industry;
      setSelectedIndustry(industry);
    };
    updateInfo();
  }, []);

  const filteredRows = useMemo(
    () =>
      PollsData.filter((row) =>
        Object.values(row).some((value) =>
          value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      ),
    [PollsData, searchQuery]
  );

  const columns = [
    { field: "col1", headerName: "Worker Name", width: 220 },
    { field: "col2", headerName: "Age", width: 270 },
    {
      field: "col3",
      headerName: "Ratings",
      width: 270,
      renderCell: (params) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <StarIcon sx={{ color: "primary.main" }} />{" "}
          <span style={{ color: "orange" }}>{params.value}</span>
        </div>
      ),
    },
    {
      field: "col4",
      headerName: "Trainings",
      width: 270,
      renderCell: (params) => (
        <Chip
          label={params.value}
          style={{ backgroundColor: "#fbde74", color: "#000" }}
        />
      ),
    },
    { field: "col5", headerName: "Since", width: 270 },
    {
      field: "col6",
      headerName: "Status",
      width: 220,
      renderCell: (params) => (
        <Chip
          label={params.value}
          style={{ backgroundColor: "green", color: "#fff" }}
        />
      ),
    },
  ];

  return (
    <React.Fragment>
      {/* Header with Select option and Button */}
      <Box sx={{ display: "flex", gap: 3, py: 1, px: 4 }}>
        <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
          Organization Workers Polls (5)
        </Typography>
        <Button
          variant="text"
          sx={{
            color: "primary.main",
            textTransform: "none",
            fontWeight: "bold",
            padding: 0,
            fontSize: "1rem",
          }}
          startIcon={<AddIcon />}
        >
          Create New Pool
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 1,
          px: 4,
        }}
      >
        {/* Select option on the left */}
        <Select
          labelId="industry-select-label"
          value={selectedIndustry}
          onChange={(e) => setSelectedIndustry(e.target.value)}
          sx={{
            height: "35px",
            width: "20%",
            "& .MuiOutlinedInput-input": {
              height: "35px",
              width: "20%",
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

        {/* Button on the right */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="outlined"
            sx={{
              color: "#ee9b00",
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              padding: "6px 10px",
              fontSize: "1rem",
            }}
            startIcon={<InfoIcon />}
          >
            Poll details{" "}
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#ffffff",
              backgroundColor: "red",
              borderRadius: "12px",
              padding: "6px 10px",
              fontSize: "1rem",
            }}
            startIcon={<DeleteIcon />}
          >
            Delete Poll{" "}
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#ffffff",
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.05)",
          borderRadius: "8px",
          py: 1,
          px: 4,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", mr: 4 }}>
          <Typography variant="body1" sx={{ fontSize: "1rem" }}>
            Wrokers in :
            <span style={{ color: "orange" }}> Micorosoft Montreal</span>
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <Button
              startIcon={<AddIcon />}
              sx={{
                backgroundColor: "primary.main",
                color: "#fff",
                borderRadius: "15px",
              }}
              onClick={handleOpen}
            >
              Add worker in pool
            </Button>
            <AddWorker open={open} onClose={handleClose} />
            <TextField
              variant="outlined"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{
                flex: 1,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "5px",
                  height: "35px",
                },
              }}
            />
            <Button
              startIcon={<FilterAltIcon />}
              sx={{
                border: "0.8px solid black",
                backgroundColor: "#ffffff",
                color: "#000000",
                borderRadius: "5px",
                height: "35px",
                minWidth: "auto",
                px: 2,
              }}
            >
              Filter
            </Button>
            <Button
              endIcon={<ArrowDropDownIcon />}
              onClick={handleClick}
              sx={{
                border: "0.8px solid black",
                backgroundColor: "#ffffff",
                color: "#000000",
                borderRadius: "5px",
                height: "35px",
                minWidth: "auto",
                px: 2,
              }}
            >
              Action
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleCloseMenu}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem onClick={handleCloseMenu}>Update</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Delete</MenuItem>
            </Menu>
          </Box>
        </Box>
        <Box sx={{ height: 635, width: "98%", p: 0 }}>
          <DataGrid
            rows={filteredRows}
            columns={columns}
            pageSizeOptions={[5, 10, 20]}
            initialPage={0}
            initialPageSize={10}
          />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Pools;
