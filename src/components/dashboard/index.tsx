"use client";
import React from "react";
import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { users } from "../../utils/constants";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FolderIcon from "@mui/icons-material/Folder";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LineChart } from "@mui/x-charts";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import dayjs from "dayjs";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import RestaurantIcon from "@mui/icons-material/Restaurant";

const Dashboard: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={7}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box
              sx={{
                height: 100,
                backgroundColor: "#FFFFFF",
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "left",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  width: 50,
                  height: 100,
                  backgroundColor: "#f9dcc4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 1,
                }}
              >
                <TextFieldsIcon sx={{ color: "#000" }} />
              </Box>

              <Box sx={{ textAlign: "left" }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    color: "primary.main",
                    mb: 1,
                  }}
                >
                  Microsoft Montreal
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Box
                      sx={{
                        fontSize: "1rem",
                        fontWeight: "bold",
                        color: "secondary.main",
                        mt: 0.5,
                        mb: 1,
                      }}
                    >
                      Role
                    </Box>
                    <Box
                      sx={{
                        fontSize: "0.95rem",
                        color: "#000",
                      }}
                    >
                      Administrator
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                      sx={{
                        fontSize: "1rem",
                        fontWeight: "bold",
                        color: "secondary.main",
                        mt: 0.5,
                        mb: 1,
                      }}
                    >
                      Team Members
                    </Box>
                    <Box
                      sx={{
                        fontSize: "0.95rem",
                        color: "#000",
                      }}
                    >
                      5
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>

            <Box
              sx={{
                height: 250,
                backgroundColor: "#fff",
                p: 2,
                mt: 2,
                borderRadius: "8px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography variant="h6">Messages</Typography>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "12px",
                    p: "4px 18px",
                    cursor: "pointer",
                    fontSize: "0.95rem",
                    color: "#ee9b00",
                    border: "2px solid #ee9b00",
                  }}
                >
                  View All
                </Box>
              </Box>

              <Box>
                {users.slice(0, 3).map((user, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 2,
                      p: 1,
                      backgroundColor: "#ffffff",
                      borderRadius: "8px",
                    }}
                  >
                    <Box sx={{ position: "relative", display: "inline-block" }}>
                      <img
                        src={user.image}
                        alt={user.name}
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "20%",
                          marginRight: "10px",
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          right: 14,
                          transform: "translate(50%, -50%)",
                          width: 12,
                          height: 12,
                          bgcolor: "green",
                          borderRadius: "50%",
                          border: "2px solid white",
                        }}
                      />
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          color: "#000",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        {user.name}
                        {user.new && (
                          <Chip
                            label="New"
                            size="small"
                            sx={{
                              backgroundColor: "primary.main",
                              color: "#fff",
                              fontWeight: "bold",
                              ml: 1,
                            }}
                          />
                        )}
                      </Typography>
                      <Typography sx={{ color: "#000", mt: 0.5 }}>
                        {user.message}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box
              sx={{
                height: 120,
                backgroundColor: "#fff",
                p: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
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
                    This Week
                  </Typography>
                  <ArrowDropDownIcon sx={{ color: "secondary.main" }} />
                </Box>
              </Box>

              <Grid container spacing={2} sx={{ mt: 2.5 }}>
                <Grid item xs={6}>
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
                      187
                    </Box>
                    <Box
                      sx={{
                        fontSize: "0.95rem",
                        color: "green",
                      }}
                    >
                      +18.50%
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      color: "secondary.main",
                      mt: 0.5,
                      mb: 1,
                    }}
                  >
                    Requests{" "}
                  </Box>
                  <Box
                    sx={{
                      fontSize: "1.5rem",
                      color: "#000",
                    }}
                  >
                    13
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Box
              sx={{
                height: 120,
                backgroundColor: "#ee9b00",
                p: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: "8px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <FolderIcon sx={{ color: "#FFF" }} />
                <Box
                  sx={{
                    backgroundColor: "#ee9b00",
                    borderRadius: "12px",
                    p: "4px 18px",
                    cursor: "pointer",
                    fontSize: "0.95rem",
                    color: "#fff",
                    border: "2px solid #ffffff",
                  }}
                >
                  View All
                </Box>
              </Box>

              <Grid container spacing={2} sx={{ mt: 2.5 }}>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      color: "#ffffff",
                      mt: 0.5,
                      mb: 1,
                    }}
                  >
                    Invoice{" "}
                  </Box>
                  <Box
                    sx={{
                      fontSize: "1.5rem",
                      color: "#ffffff",
                      mr: 1,
                    }}
                  >
                    187
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      color: "#ffffff",
                      mt: 0.5,
                      mb: 1,
                    }}
                  >
                    Pending{" "}
                  </Box>
                  <Box
                    sx={{
                      fontSize: "1.5rem",
                      color: "#ffffff",
                    }}
                  >
                    15
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Box
              sx={{
                height: 100,
                backgroundColor: "#fff",
                p: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <FitnessCenterIcon sx={{ color: "#000" }} />

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    sx={{
                      fontSize: "0.85rem",
                      color: "secondary.main",
                      mr: 0.5,
                    }}
                  >
                    This Week
                  </Typography>
                  <ArrowDropDownIcon sx={{ color: "secondary.main" }} />
                </Box>
              </Box>

              <Grid container spacing={2} sx={{ mt: 2.5 }}>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      color: "secondary.main",
                      mt: 0.5,
                      mb: 1,
                    }}
                  >
                    Available Trainings{" "}
                  </Box>
                  <Box
                    sx={{
                      fontSize: "1.5rem",
                      color: "#000",
                      mr: 1,
                    }}
                  >
                    2
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      color: "secondary.main",
                      mt: 0.5,
                      mb: 1,
                    }}
                  >
                    Completed{" "}
                  </Box>
                  <Box
                    sx={{
                      fontSize: "1.5rem",
                      color: "#000",
                    }}
                  >
                    9
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            height: 400,
            backgroundColor: "#fff",
            mt: 2,
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#000" }}>
              Complete Task Rate
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <ArrowDropDownIcon sx={{ color: "#000" }} />

              <Typography variant="body2" sx={{ color: "#000", mr: 1 }}>
                Last 7 days
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box>
              <LineChart
                width={700}
                height={400}
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                  {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                  },
                ]}
              />
            </Box>
            <Box
              sx={{
                width: "200px",
                ml: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Typography variant="h3" sx={{ color: "#000", mb: 0 }}>
                  49
                </Typography>
                <Box
                  sx={{
                    backgroundColor: "#ee9b00",
                    borderRadius: "50%",
                    width: 40,
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 0,
                  }}
                >
                  <ArrowUpwardIcon sx={{ color: "#fff" }} />{" "}
                </Box>
              </Box>

              <Typography variant="body1" sx={{ color: "#000", mb: 1 }}>
                Total Task Closed
              </Typography>
              <Typography variant="body1" sx={{ color: "secondary.main" }}>
                <span style={{ color: "#ee9b00" }}>5.4%</span> than last day
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={5}>
        <Box
          sx={{
            height: 800,
            backgroundColor: "#fff",
            p: 2,
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#000" }}>
              Calendar
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
              Post New Shift
            </Button>
          </Box>
          <Box
            sx={{
              height: "calc(50% - 64px)",
              backgroundColor: "#fff",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
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
                    gap: "50px",
                  },
                  "& .MuiDayCalendar-weekContainer": {
                    marginBottom: "10px",
                  },
                }}
              />
            </LocalizationProvider>
          </Box>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              mt: 4,
            }}
          >
            {["8:00", "8:30", "9:00", "9:14", "9:30", "10:00"].map((time) => (
              <Box
                key={time}
                sx={{ display: "flex", alignItems: "center", mb: 10 }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    flexShrink: 0,
                    width: "50px",
                    backgroundColor:
                      time === "9:14" ? "#ee9b00" : "transparent",
                    borderRadius: time === "9:14" ? "4px" : "0",
                    padding: time === "9:14" ? "4px 8px" : "0",
                    color: time === "9:14" ? "#fff" : "#adb5bd",
                  }}
                >
                  {time}
                </Typography>
                <Box
                  sx={{
                    flexGrow: 1,
                    height: "2px",
                    backgroundColor: time === "9:14" ? "#ee9b00" : "#e9ecef",
                  }}
                ></Box>
              </Box>
            ))}
            <Box
              sx={{
                position: "absolute",
                top: "2%",
                left: "100px",
                right: "50px",
                bottom: "48%",
                backgroundColor: "rgba(238, 155, 0, 0.2)",
                borderRadius: "25px",
                padding: "4px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxSizing: "border-box",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 8,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    textAlign: "flex-start",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="h6" sx={{ color: "#e67e22", mb: 0.2 }}>
                    Clean Windows
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#e67e22", mb: 0.2, textAlign: "left" }}
                  >
                    122 Clarite St.
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#e67e22", textAlign: "left" }}
                  >
                    1 Worker
                  </Typography>
                </Box>
                <MoreVertIcon sx={{ color: "#e67e22", mt: 1 }} />
              </Box>
            </Box>

            <Box
              sx={{
                position: "absolute",
                top: "70%",
                left: "95px",
                right: "50px",
                bottom: "16%",
                backgroundColor: "rgba(212, 237, 218, 0.5)",
                borderRadius: "25px",
                padding: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxSizing: "border-box",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 40,
                    height: 40,
                    backgroundColor: "#57cc99",
                    borderRadius: "50%",
                    mr: 3,
                  }}
                >
                  <RestaurantIcon sx={{ color: "#fff" }} />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    textAlign: "flex-start",
                    flexDirection: "column",
                    mr: 8,
                  }}
                >
                  <Typography variant="h6" sx={{ color: "#57cc99", mb: 0.2 }}>
                    Clean Windows
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#57cc99", mb: 0.2, textAlign: "left" }}
                  >
                    122 Clarite St.
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#57cc99", textAlign: "left" }}
                  >
                    1 Worker
                  </Typography>
                </Box>
                <MoreVertIcon sx={{ color: "#57cc99", mt: 1 }} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
