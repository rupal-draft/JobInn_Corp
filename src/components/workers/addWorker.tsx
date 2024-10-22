import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import Dialog from "../common/dialog";
import { IMAGES } from "../../utils/constants";
import Image from "next/image";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const AddWorker: React.FC<ModalProps> = ({ open, onClose }) => {
  const [activeButton, setActiveButton] = useState<string>("External");

  const handleButtonClick = (type: string) => setActiveButton(type);

  const workers = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    name: "John Doe",
    lastActivity: "Last Activity",
    date: "12 August 2023",
    avatar: IMAGES.Jobs.Avatar,
  }));
  const [searchQuery, setSearchQuery] = useState("");
  const filteredWorkers = workers.filter((worker) =>
    worker.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderAddWorkerContent = () => (
    <React.Fragment>
      <Typography variant="subtitle1" sx={{ mb: 2, color: "secondary.main" }}>
        Search a name to add worker
      </Typography>

      {/* Button Group for Internal and External */}
      <ButtonGroup sx={{ mb: 2, width: "100%" }}>
        <Button
          onClick={() => handleButtonClick("Internal")}
          sx={{
            backgroundColor:
              activeButton === "Internal" ? "primary.main" : "#f5f5f5",
            color: activeButton === "Internal" ? "#fff" : "secondary.main",
            borderRadius: "5px",
            border: "none",
            width: "50%",
            "&:hover": {
              backgroundColor:
                activeButton === "Internal" ? "primary.main" : "#f5f5f5",
              border: "none",
            },
          }}
        >
          Internal
        </Button>
        <Button
          onClick={() => handleButtonClick("External")}
          sx={{
            backgroundColor:
              activeButton === "External" ? "primary.main" : "#f5f5f5",
            color: activeButton === "External" ? "#fff" : "secondary.main",
            borderRadius: "5px",
            border: "none",
            width: "50%",
            "&:hover": {
              backgroundColor:
                activeButton === "External" ? "primary.main" : "#f5f5f5",
              border: "none",
            },
          }}
        >
          External
        </Button>
      </ButtonGroup>

      {/* Search Bar */}
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Search for a worker"
        sx={{ mb: 2 }}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {activeButton === "External" ? (
        <List>
          {filteredWorkers.map((worker) => (
            <ListItem
              key={worker.id}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <ListItemAvatar sx={{ mr: 1 }}>
                <Image
                  src={worker.avatar}
                  width={50}
                  height={52}
                  alt="Public"
                  style={{
                    borderRadius: "30%",
                    objectFit: "cover",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 9,
                    left: 46,
                    transform: "translate(50%, -50%)",
                    width: 12,
                    height: 12,
                    bgcolor: "green",
                    borderRadius: "50%",
                    border: "2px solid white",
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={worker.name}
                secondary={
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="body2">
                      {worker.lastActivity}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {worker.date}
                    </Typography>
                  </Box>
                }
              />
              <Divider />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography>No data</Typography>
      )}
    </React.Fragment>
  );

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title="Add New Worker"
      element={renderAddWorkerContent()}
    />
  );
};

export default AddWorker;
