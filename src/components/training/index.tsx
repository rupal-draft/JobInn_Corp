"use client";
import React, { useEffect, useMemo, useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  Divider,
  Chip,
  Menu,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import StarIcon from "@mui/icons-material/Star";
import {
  BusinessSelection,
  LOCALSTORAGE_KEYS,
  TrainingData,
} from "../../utils/constants";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DataGrid from "../common/datagrid";

const Training: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [activeHeading, setActiveHeading] = useState("Description");
  const [searchQuery, setSearchQuery] = useState("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const headings = ["Description", "Certified Workers", "Next Training Shift"];
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const filteredRows = useMemo(
    () =>
      TrainingData.filter((row) =>
        Object.values(row).some((value) =>
          value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      ),
    [TrainingData, searchQuery]
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
      headerName: "Certification",
      width: 270,
      renderCell: (params) => (
        <Chip
          label={params.value}
          style={{ backgroundColor: "#fbde74", color: "#000" }}
        />
      ),
    },
    {
      field: "col5",
      headerName: "Completion",
      width: 270,
    },
    {
      field: "col6",
      headerName: "Approbation",
      width: 220,
      renderCell: (params) => (
        <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
          <Chip
            label={params.value[0]}
            style={{ backgroundColor: "green", color: "#fff" }}
          />
          <Chip
            label={params.value[1]}
            style={{ backgroundColor: "red", color: "#fff" }}
          />
        </div>
      ),
    },
  ];

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
  return (
    <Box sx={{ padding: "24px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              paddingY: "16px",
              borderRadius: "8px",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Training and Certification
            </Typography>
            <Select
              labelId="industry-select-label"
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              sx={{
                height: "35px",
                width: "53%",
                "& .MuiOutlinedInput-input": {
                  height: "35px",
                  width: "53%",
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
            {/* Search Bar */}

            <Box sx={{ display: "flex", gap: 3, py: 2 }}>
              <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                Organization Workers Polls (5)
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TextField
                variant="outlined"
                placeholder="Search"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    height: "40px",
                  },
                  maxWidth: "400px",
                  width: "100%",
                }}
              />
              {/* Button on the right */}
              <Button
                variant="text"
                sx={{
                  color: "primary.main",
                  textTransform: "none",
                  fontWeight: "bold",
                  padding: 0,
                  fontSize: "1rem",
                }}
                endIcon={<AddIcon />}
              >
                Create New Pool
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 4,
            }}
          >
            {/* Left section: Busboy and Address */}
            <Box sx={{ textAlign: "left" }}>
              <Typography variant="h4" color="black" sx={{ mb: 1 }}>
                Busboy
              </Typography>
              <Typography variant="subtitle2" sx={{ fontSize: "0.9rem" }}>
                Organization Certification
              </Typography>
            </Box>

            {/* Middle section: Numbers */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* Left section: 55 and Views */}
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: "semi-bold",
                    color: "#000",
                  }}
                >
                  3
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "#757575" }}>
                  Views
                </Typography>
              </Box>

              {/* Vertical line */}
              <Box
                sx={{
                  width: "1px",
                  height: "40px",
                  backgroundColor: "#e0e0e0",
                  mx: 2,
                }}
              />

              {/* Right section: 19 and Applicants */}
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: "semi-bold",
                    color: "#000",
                  }}
                >
                  105
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "#757575" }}>
                  Applicants
                </Typography>
              </Box>
            </Box>

            {/* Right section: Date, Time, and Buttons */}
            <Box sx={{ textAlign: "center" }}>
              {/* Date and Time */}

              {/* Buttons */}
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "primary.main",
                    color: "#fff",
                    padding: "5px 10px",
                    borderRadius: "8px",
                  }}
                >
                  Edit Certification{" "}
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: "#fff",
                    borderColor: "primary.main",
                    color: "primary.main",
                    padding: "5px 10px",
                    borderRadius: "10px",
                    borderWidth: "2px",
                  }}
                >
                  Delete
                </Button>
              </Box>
            </Box>
          </Box>
          <Divider sx={{ mt: 2, mb: 2 }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            {headings.map((heading, index) => (
              <Box
                key={heading}
                onClick={() => setActiveHeading(heading)}
                sx={{
                  position: "relative",
                  cursor: "pointer",
                  width: "30%",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: activeHeading === heading ? "bold" : "normal",
                    color:
                      activeHeading === heading ? "orange" : "secondary.main",
                  }}
                >
                  {heading}
                </Typography>

                {activeHeading === heading && (
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: -5,
                      left: 0,
                      right: 0,
                      height: "3px",
                      backgroundColor: "orange",
                      width: "80%",
                      margin: "0 auto",
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>{" "}
          {activeHeading === "Description" ? (
            <Box sx={{ mt: 2 }}>
              <Typography
                variant="body1"
                sx={{ color: "#000", fontWeight: "bold", mb: 1 }}
              >
                Certification Description:
              </Typography>
              <Typography variant="body1" sx={{ color: "secondary.main" }}>
                This Busboy Certfication provides essential skills for effective
                dining maintanance,including table setup, dish cleaning, and
                cleanliness. Trainees learn safety and teamwork, preparing for
                excellence in hospitality
              </Typography>
            </Box>
          ) : (
            <Typography>No data</Typography>
          )}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="body1"
              sx={{ color: "#000", fontWeight: "bold", mb: 1 }}
            >
              Certification Badge:
            </Typography>
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                width: 80,
                height: 80,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(0, 0, 0,0.4)",
              }}
            >
              <OutdoorGrillIcon
                sx={{ color: "primary.main", fontSize: "4rem" }}
              />{" "}
              {/* Icon color */}
            </Box>
          </Box>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#000" }}>
              Trainings
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ee9b00",
                color: "#ffffff",
                borderRadius: "12px",
                padding: "10px 20px",
                fontSize: "1rem",
              }}
              endIcon={<AddIcon />}
            >
              New Training
            </Button>
          </Box>

          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                defaultValue={dayjs()}
                sx={{
                  width: "100%",
                  "& .MuiPickersDay-root": {
                    flexGrow: 1,
                    fontSize: "1rem",
                  },
                  "& .MuiDayCalendar-header": {
                    gap: "70px",
                  },
                  "& .MuiDayCalendar-weekContainer": {
                    marginBottom: "10px",
                  },
                }}
              />
            </LocalizationProvider>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
        <Typography variant="h6">Certification Approbation</Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
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
      <Box sx={{ height: 370, width: "100%" }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSizeOptions={[5, 10, 20]}
          initialPage={0}
          initialPageSize={5}
        />
      </Box>
    </Box>
  );
};

export default Training;
