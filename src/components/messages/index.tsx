"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  InputAdornment,
  Divider,
  IconButton,
} from "@mui/material";
import { MESSAGES, users } from "../../utils/constants";
import SearchIcon from "@mui/icons-material/Search";
import StarRateIcon from "@mui/icons-material/StarRate";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";
import EmojiPicker from "emoji-picker-react";
import Typography from "../common/typography";

interface user {
  name: string;
  image: string;
  message: string;
  time: string;
  new: boolean;
}

const Messages: React.FC = () => {
  const [activeUser, setActiveUser] = useState<user | null>(users[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(MESSAGES);

  const onEmojiClick = (event, emojiObject) => {
    console.log(emojiObject);
    setMessage((prevMessage) => prevMessage + emojiObject.target);
  };
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      const newMessage = {
        text: message,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        sending: true,
      };

      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          pr: 2,
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "primary.main",
            fontSize: "1rem",
            color: "#fff",
            padding: "8px 30px",
            borderRadius: "15px",
            boxShadow: "none",
          }}
        >
          New Message
        </Button>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={3}>
          {" "}
          <Box
            sx={{
              borderRadius: "8px",
              padding: 1,
              height: "calc(100vh - 100px)",
              overflowY: "auto",
            }}
          >
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search Users"
              sx={{
                ml: 3.2,
                height: "40px",
                width: "340px",
                "& .MuiOutlinedInput-root": {
                  height: "40px",
                },
              }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />

            <Box sx={{ p: 2 }}>
              {filteredUsers.map((user, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                    borderRadius: "4px",
                    backgroundColor:
                      activeUser === user ? "#ffe8d1" : "transparent",
                    cursor: "pointer",
                    mb: 1,
                    position: "relative",
                    "&:hover": {
                      backgroundColor: "#FFE0B2",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      right: 0,
                      top: 0,
                      width: "4px",
                      height: "100%",
                      backgroundColor:
                        activeUser === user ? "primary.main" : "transparent",
                      borderRadius: "0 4px 4px 0",
                    },
                  }}
                  onClick={() => setActiveUser(user)}
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
                        top: 0,
                        right: 16,
                        transform: "translate(50%, -50%)",
                        width: 12,
                        height: 12,
                        bgcolor: "green",
                        borderRadius: "50%",
                        border: "2px solid white",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="body1" textlabel={user.name} />
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      textlabel={user.message}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                    }}
                  >
                    {user.new && (
                      <Box
                        sx={{
                          backgroundColor: "#FFCC80",
                          borderRadius: "12px",
                          padding: "2px 6px",
                          fontSize: "0.75rem",
                          marginBottom: "2px",
                        }}
                      >
                        New
                      </Box>
                    )}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      textlabel={user.time}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>

        <Grid item xs={9}>
          <Box
            sx={{
              borderRadius: "8px",
              padding: 2,
              height: "calc(100vh - 100px)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
              <img
                src={activeUser?.image}
                alt={activeUser?.name}
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "20%",
                  marginRight: "10px",
                }}
              />
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" textlabel={activeUser?.name} />
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <StarRateIcon sx={{ color: "primary.main", mr: 0.5 }} />
                  <Typography
                    variant="body2"
                    sx={{ color: "primary.main", mr: 1 }}
                    textlabel="4.5"
                  />
                </Box>
              </Box>
              <Button
                variant="outlined"
                sx={{
                  ml: 2,
                  fontSize: "1rem",
                  borderRadius: "10px",
                  height: "50px",
                  padding: "0 10px",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    color: "white",
                  },
                }}
              >
                View Profile
              </Button>
            </Box>

            <Divider sx={{ mt: 0 }} />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  overflowY: "auto",
                  padding: 2,
                  maxHeight: "calc(85vh - 240px)",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: 2,
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#F5F5F5",
                      padding: "2px 8px",
                      borderRadius: "8px",
                      textAlign: "center",
                      display: "inline-block",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "black" }}
                      textlabel="August 8, 2024"
                    />
                  </Box>
                </Box>

                {messages.map((message, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: message.sending ? "row-reverse" : "row",
                        alignItems: "flex-end",
                      }}
                    >
                      <Box
                        sx={{
                          backgroundColor: message.sending
                            ? "#ffe8d1"
                            : "#FFA726",
                          borderRadius: "12px 12px 0 12px",
                          padding: "10px",
                          maxWidth: "60%",
                          position: "relative",
                          wordWrap: "break-word",
                        }}
                      >
                        <Typography
                          variant="body1"
                          color={message.sending ? "black" : "white"}
                          textlabel={message.text}
                        />
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        textAlign: message.sending ? "right" : "left",
                        padding: message.sending ? "0 10px 0 0" : "0 0 0 10px",
                      }}
                    >
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        textlabel={message.time}
                      />
                    </Box>
                  </Box>
                ))}
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <TextField
                  variant="outlined"
                  placeholder="Your message"
                  fullWidth
                  sx={{
                    borderRadius: "20px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "20px",
                    },
                  }}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton
                          sx={{
                            backgroundColor: "#ffe8d1",
                            borderRadius: "8px",
                            padding: "5px",
                          }}
                        >
                          <AddIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() =>
                            setEmojiPickerVisible(!emojiPickerVisible)
                          }
                        >
                          <InsertEmoticonIcon sx={{ color: "#0077b6" }} />
                        </IconButton>
                        {emojiPickerVisible && (
                          <Box
                            sx={{
                              position: "absolute",
                              bottom: "60px",
                              right: "20px",
                            }}
                          >
                            <EmojiPicker onEmojiClick={onEmojiClick} />
                          </Box>
                        )}
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#ffe8d1",
                            padding: "5px 25px",
                            ml: 1,
                            boxShadow: "none",
                          }}
                          endIcon={<SendIcon />}
                          onClick={handleSendMessage}
                        >
                          Send
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Messages;
