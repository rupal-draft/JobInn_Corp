"use client";

import React, { useEffect, useState } from "react";
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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import StarIcon from "@mui/icons-material/Star";
import WorkIcon from "@mui/icons-material/Work";
import Paper from "@mui/material/Paper";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {
  BusinessSelection,
  LOCALSTORAGE_KEYS,
  IMAGES,
  shifts,
  templates,
} from "../../utils/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Jobs: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [activeButton, setActiveButton] = useState("External");
  const [activeHeading, setActiveHeading] = useState("Applicants");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchShift, setSearchShift] = useState("");
  const [selectedShiftIndex, setSelectedShiftIndex] = useState(0);
  const [searchTemplate, setSearchTemplate] = useState("");
  const [selectedTemplateIndex, setSelectedTemplateIndex] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/worker/polls");
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const headings = ["Applicants", "View Job Details", "Requirements"];
  function createData(
    name: string,
    rating: number,
    job: number,
    action: string[]
  ) {
    return { name, rating, job, action };
  }

  const rows = [
    createData("Jules Major", 4.7, 55, ["Chat", "Hire"]),
    createData("Jules Major", 4.7, 55, ["Chat", "Hire"]),
    createData("Jules Major", 4.7, 55, ["Chat", "Hire"]),
    createData("Jules Major", 4.7, 55, ["Chat", "Hire"]),
    createData("Jules Major", 4.7, 55, ["Chat", "Hire"]),
    createData("Jules Major", 4.7, 55, ["Chat", "Hire"]),
    createData("Jules Major", 4.7, 55, ["Chat", "Hire"]),
    createData("Jules Major", 4.7, 55, ["Chat", "Hire"]),
  ];
  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredShifts = shifts.filter((shift) =>
    shift.name.toLowerCase().includes(searchShift.toLowerCase())
  );
  const filteredTemplates = templates.filter((template) =>
    template.name.toLowerCase().includes(searchTemplate.toLowerCase())
  );

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
          onClick={handleNavigation}
        >
          Post New Shift
        </Button>
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
              Active Shifts ({filteredShifts.length})
            </Typography>

            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search"
              value={searchShift}
              onChange={(e) => setSearchShift(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  height: "40px",
                },
                height: "40px",
                mb: 2,
              }}
            />

            {filteredShifts.length > 0 ? (
              filteredShifts.map((shift, index) => (
                <Box
                  key={index}
                  onClick={() => setSelectedShiftIndex(index)} // Update selected shift on click
                  sx={{
                    mb: 1,
                    backgroundColor:
                      selectedShiftIndex === index ? "#f2d0a9" : "#ffffff", // Orange for selected, white for others
                    cursor: "pointer", // Indicate that the box is clickable
                    borderRadius: "8px",
                    p: 1,
                    "&:hover": {
                      backgroundColor:
                        selectedShiftIndex === index ? "#f2d0a9" : "#f5f5f5", // Slight hover effect
                    },
                  }}
                >
                  <Typography variant="h6">{shift.name}</Typography>
                  <Typography variant="subtitle2" sx={{ fontSize: "0.8rem" }}>
                    {shift.address}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontSize: "0.8rem" }}>
                    {shift.dateTime}
                  </Typography>
                </Box>
              ))
            ) : (
              <Typography variant="body2" sx={{ mb: 2 }}>
                No shifts found.
              </Typography>
            )}

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
              Post new job
            </Button>
          </Box>

          {/* Second Box */}
          <Box
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: "8px",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Saved Shift Template ({filteredTemplates.length})
            </Typography>

            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search"
              value={searchTemplate}
              onChange={(e) => setSearchTemplate(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  height: "40px",
                },
                height: "40px",
                mb: 2,
              }}
            />

            {filteredTemplates.length > 0 ? (
              filteredTemplates.map((template, index) => (
                <Box
                  key={index}
                  onClick={() => setSelectedTemplateIndex(index)}
                  sx={{
                    backgroundColor:
                      selectedTemplateIndex === index ? "#f2d0a9" : "#ffffff",
                    cursor: "pointer",
                    borderRadius: "8px",
                    p: 1,
                    "&:hover": {
                      backgroundColor:
                        selectedTemplateIndex === index ? "#f2d0a9" : "#f5f5f5",
                    },
                  }}
                >
                  <Typography variant="h6">{template.name}</Typography>
                  <Typography variant="subtitle2" sx={{ fontSize: "0.8rem" }}>
                    {template.certification}
                  </Typography>
                </Box>
              ))
            ) : (
              <Typography variant="body2" sx={{ mb: 2 }}>
                No templates found.
              </Typography>
            )}

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
              New template shift{" "}
            </Button>
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
                  in person
                </Typography>
                <Typography variant="subtitle2" sx={{ fontSize: "0.9rem" }}>
                  123th Manfield Street
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
                    55
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
                    19
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: "#757575" }}>
                    Applicants
                  </Typography>
                </Box>
              </Box>

              {/* Right section: Date, Time, and Buttons */}
              <Box sx={{ textAlign: "center" }}>
                {/* Date and Time */}
                <Typography variant="subtitle1" sx={{ mb: 2 }}>
                  March 12th - 11am - 2pm
                </Typography>

                {/* Buttons */}
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "primary.main",
                      color: "#fff",
                      padding: "8px 16px",
                      borderRadius: "8px",
                    }}
                  >
                    Edit Posting{" "}
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      backgroundColor: "#fff",
                      borderColor: "primary.main",
                      color: "primary.main",
                      padding: "8px 16px",
                      borderRadius: "8px",
                      borderWidth: "2px",
                    }}
                  >
                    Delete
                  </Button>
                </Box>
              </Box>
            </Box>
            <Divider sx={{ mt: 2, mb: 2 }} />
            {/* Grid Content Below */}
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
            </Box>
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
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <MenuItem onClick={handleClose}>Update</MenuItem>
                  <MenuItem onClick={handleClose}>Delete</MenuItem>
                </Menu>
              </Box>
            </Box>
            {activeButton === "External" ? (
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                        Name
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: "bold", fontSize: "1rem" }}
                        align="center"
                      >
                        Rating
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: "bold", fontSize: "1rem" }}
                        align="center"
                      >
                        Jobs Done
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: "bold", fontSize: "1rem" }}
                        align="center"
                      >
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredRows.length > 0 ? (
                      filteredRows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{
                              fontSize: "1rem",
                              display: "flex",
                              gap: 2,
                              alignItems: "center",
                            }}
                          >
                            <Image
                              src={IMAGES.Jobs.Avatar}
                              width={30}
                              height={32}
                              alt="Public"
                              style={{
                                borderRadius: "30%",
                                objectFit: "cover",
                              }}
                            />
                            {row.name}
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{
                              fontSize: "1rem",
                              color: "primary.main",
                              padding: "8px 16px",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "4px",
                              }}
                            >
                              <StarIcon sx={{ color: "orange" }} />
                              {row.rating}
                            </Box>
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{
                              fontSize: "1rem",
                              color: "secondary.main",
                              padding: "8px 16px",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "4px",
                              }}
                            >
                              <WorkIcon sx={{ color: "secondary.main" }} />
                              {row.job}
                            </Box>
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{
                              fontSize: "1rem",
                              padding: "8px 16px",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "4px",
                              }}
                            >
                              <Chip
                                style={{
                                  backgroundColor: "orange",
                                  color: "#fff",
                                }}
                                label={row.action[0]}
                              />
                              <Chip
                                style={{
                                  backgroundColor: "green",
                                  color: "#fff",
                                }}
                                label={row.action[1]}
                              />
                            </Box>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={4} align="center">
                          No results found
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <Typography>No data</Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Jobs;
