"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Chip,
  Divider,
  Grid,
  Menu,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import StarIcon from "@mui/icons-material/Star";
import {
  BusinessSelection,
  WorkerData,
  LOCALSTORAGE_KEYS,
  pools,
  TrainingPools,
} from "../../utils/constants";
import AddWorker from "./addWorker";
import DataGrid from "../common/datagrid";
import { useRouter } from "next/navigation";

const Workers: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [activeButton, setActiveButton] = useState("External");
  const [open, setOpen] = useState(false);
  const [searchPools, setSearchPool] = useState("");
  const [activePool, setActivePool] = useState(0);
  const [searchTraining, setSearchTraining] = useState("");
  const [activeTraining, setActiveTraining] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/worker/polls");
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const filteredRows = useMemo(
    () =>
      WorkerData.filter((row) =>
        Object.values(row).some((value) =>
          value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      ),
    [WorkerData, searchQuery]
  );

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleButtonClick = (button: string) => {
    setActiveButton(button);
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

  const columns = [
    { field: "col1", headerName: "Worker Name", width: 300 },
    {
      field: "col2",
      headerName: "Ratings",
      width: 300,
      renderCell: (params) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <StarIcon sx={{ color: "primary.main" }} />{" "}
          <span style={{ color: "orange" }}>{params.value}</span>
        </div>
      ),
    },
    {
      field: "col3",
      headerName: "Trainings",
      width: 300,
      renderCell: (params) => (
        <Chip
          label={params.value}
          sx={{ backgroundColor: "#fbde74", color: "#000" }}
        />
      ),
    },
    { field: "col4", headerName: "Since", width: 300 },
  ];
  const filteredPools = pools.filter((pool) =>
    pool.name.toLowerCase().includes(searchPools.toLowerCase())
  );
  const filteredTrainingPools = TrainingPools.filter((pool) =>
    pool.name.toLowerCase().includes(searchTraining.toLowerCase())
  );

  return (
    <React.Fragment>
      {/* Header with Select option and Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 2,
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

        {/* Button on the right */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ee9b00",
            color: "#ffffff",
            borderRadius: "12px",
            padding: "10px 15px",
            fontSize: "1rem",
          }}
          startIcon={<AddIcon />}
          onClick={handleOpen}
        >
          Add New Worker
        </Button>

        {/* AddWorker Dialog */}
        <AddWorker open={open} onClose={handleClose} />
      </Box>

      {/* Two-column grid layout */}
      <Grid container spacing={2} sx={{ px: 4 }}>
        {/* Left Column (acts as a sidebar) */}
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            padding: "16px",
            borderRadius: "8px",
          }}
        >
          {/* First Box */}
          <Box
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              marginBottom: "16px",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Custom Pools ({filteredPools.length})
            </Typography>

            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search"
              value={searchPools}
              onChange={(e) => setSearchPool(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  height: "40px",
                },
                height: "40px",
                mb: 2,
              }}
            />

            {filteredPools.map((pool, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: activePool === index ? "#f2d0a9" : "#ffffff",
                  cursor: "pointer",
                  p: 1,
                  borderRadius: "8px",
                }}
                onClick={() => setActivePool(index)}
              >
                <Typography variant="h6">{pool.name}</Typography>
                <Typography variant="subtitle2" sx={{ fontSize: "0.8rem" }}>
                  {pool.people}
                </Typography>
                <Typography variant="subtitle2" sx={{ fontSize: "0.8rem" }}>
                  {pool.trainings}
                </Typography>
              </Box>
            ))}

            <Divider sx={{ mb: 2 }} />
            <Button
              variant="text"
              sx={{
                color: "primary.main",
                textTransform: "none",
                fontWeight: "bold",
                padding: 0,
              }}
              endIcon={<AddIcon />}
            >
              Create New Pool
            </Button>
          </Box>

          {/* Second Box */}
          <Box
            sx={{
              backgroundColor: "#ffffff",
              boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.05)",
              borderRadius: "8px",
              marginBottom: "16px",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Training Pools ({filteredPools.length})
            </Typography>

            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search"
              value={searchTraining}
              onChange={(e) => setSearchTraining(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  height: "40px",
                },
                height: "40px",
                mb: 2,
              }}
            />

            {filteredTrainingPools.map((pool, index) => (
              <Box
                key={index}
                sx={{
                  mb: 1,
                  backgroundColor:
                    activeTraining === index ? "#f2d0a9" : "#ffffff", // Active item background color
                  cursor: "pointer",
                  p: 1,
                  borderRadius: "8px",
                }}
                onClick={() => setActiveTraining(index)}
              >
                <Typography variant="h6">{pool.name}</Typography>
                <Typography variant="subtitle2" sx={{ fontSize: "0.8rem" }}>
                  {pool.people}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Right Column */}
        <Grid
          item
          xs={12}
          md={9}
          sx={{
            padding: "16px",
            borderRadius: "8px",
          }}
        >
          {/* First Box */}
          <Box
            sx={{
              backgroundColor: "#ffffff",
              boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.05)",
              borderRadius: "8px",
              padding: "16px",
              mb: 2,
            }}
          >
            {/* Top Section with Icon and Text */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: 50,
                  height: 35,
                  backgroundColor: "#f9dcc4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 1,
                }}
              >
                <PeopleOutlineIcon sx={{ color: "#000" }} />
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  sx={{
                    fontSize: "0.85rem",
                    color: "secondary.main",
                    mr: 0.5,
                  }}
                >
                  Since Last Week
                </Typography>
                <ArrowDropDownIcon sx={{ color: "secondary.main" }} />
              </Box>
            </Box>

            {/* Grid Content Below */}
            <Grid container spacing={2} sx={{ mt: 2.5 }}>
              <Grid item xs={4}>
                <Box
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "secondary.main",
                    mt: 0.5,
                    mb: 1,
                  }}
                >
                  Workers{" "}
                </Box>
                <Box sx={{ display: "flex", alignItems: "baseline" }}>
                  <Box
                    sx={{
                      fontSize: "1.5rem",
                      color: "#000",
                      mr: 1,
                    }}
                  >
                    207
                  </Box>
                  <Box
                    sx={{
                      fontSize: "0.95rem",
                      color: "green",
                    }}
                  >
                    +15.80%
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={4}>
                <Box
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "secondary.main",
                    mt: 0.5,
                    mb: 1,
                  }}
                >
                  Internal Workers{" "}
                </Box>
                <Box sx={{ display: "flex", alignItems: "baseline" }}>
                  <Box
                    sx={{
                      fontSize: "1.5rem",
                      color: "#000",
                      mr: 1,
                    }}
                  >
                    165
                  </Box>
                  <Box
                    sx={{
                      fontSize: "0.95rem",
                      color: "green",
                    }}
                  >
                    +85%
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={4}>
                <Box
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "secondary.main",
                    mt: 0.5,
                    mb: 1,
                  }}
                >
                  External Workers{" "}
                </Box>
                <Box sx={{ display: "flex", alignItems: "baseline" }}>
                  <Box
                    sx={{
                      fontSize: "1.5rem",
                      color: "#000",
                      mr: 1,
                    }}
                  >
                    55
                  </Box>
                  <Box
                    sx={{
                      fontSize: "0.95rem",
                      color: "red",
                    }}
                  >
                    -10%
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Second Box */}
          <Box
            sx={{
              backgroundColor: "#ffffff",
              boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.05)",
              borderRadius: "8px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <ButtonGroup
                sx={{
                  overflow: "hidden",
                  height: "34px",
                  width: "60%",
                  border: "none",
                }}
              >
                <Button
                  onClick={() => handleButtonClick("Internal")}
                  sx={{
                    backgroundColor:
                      activeButton === "Internal" ? "primary.main" : "#f5f5f5",
                    color:
                      activeButton === "Internal" ? "#fff" : "secondary.main",
                    borderRadius: "5px",
                    width: "180px",
                    border: "none",
                    "&:hover": {
                      backgroundColor:
                        activeButton === "Internal"
                          ? "primary.main"
                          : "#f5f5f5",
                      border: "none",
                    },
                  }}
                >
                  Internal{" "}
                </Button>
                <Button
                  onClick={() => handleButtonClick("External")}
                  sx={{
                    backgroundColor:
                      activeButton === "External" ? "primary.main" : "#f5f5f5",
                    color:
                      activeButton === "External" ? "#fff" : "secondary.main",
                    borderRadius: "5px",
                    width: "180px",
                    border: "none",
                    "&:hover": {
                      backgroundColor:
                        activeButton === "External"
                          ? "primary.main"
                          : "#f5f5f5",
                      border: "none",
                    },
                  }}
                >
                  External{" "}
                </Button>
              </ButtonGroup>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
              >
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
            {activeButton === "External" ? (
              <Box sx={{ height: 475, width: "100%" }}>
                <DataGrid
                  rows={filteredRows}
                  columns={columns}
                  pageSizeOptions={[5, 10, 20]}
                  initialPage={0}
                  initialPageSize={7}
                />
              </Box>
            ) : (
              <Typography>No data</Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Workers;
