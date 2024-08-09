"use client";
import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Divider,
} from "@mui/material";
import Image from "next/image";

import { usePathname, useRouter } from "next/navigation";
import { IMAGES, SidebarMenu } from "../../utils/constants";
import Typography from "./typography";

const Sidebar: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 250,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 250,
          boxSizing: "border-box",
        },
      }}
    >
      <Box
        sx={{
          padding: "10px 16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          mb: 2,
          ml: 1.5,
        }}
      >
        <Image
          src={IMAGES.Sidebar.sidebarLogo}
          alt="Logo"
          width={170}
          height={50}
        />
      </Box>
      <List sx={{ padding: "8px 16px" }}>
        {SidebarMenu.slice(0, -2).map((item, index) => {
          const isActive = pathname === item.path;
          return (
            <ListItem
              key={index}
              sx={{
                borderRadius: 2,
                backgroundColor: isActive ? "primary.main" : "transparent",
                "&:hover": {
                  backgroundColor: "primary.main",
                  "& .MuiTypography-root": {
                    color: "white",
                  },
                },
                mb: 1,
                cursor: "pointer",
              }}
              onMouseEnter={() => setHoveredItem(item.text)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => {
                router.push(item.path);
              }}
            >
              <Image
                src={
                  hoveredItem === item.text || isActive
                    ? item.activeIcon
                    : item.icon
                }
                alt={item.text}
                width={24}
                height={24}
                style={{ marginRight: 8 }}
              />
              <ListItemText
                primary={
                  <Typography
                    variant="body2"
                    textlabel={item.text}
                    sx={{ color: isActive ? "white" : "black" }}
                  />
                }
              />
            </ListItem>
          );
        })}

        <Divider sx={{ my: 6, border: "none" }} />

        {SidebarMenu.slice(-2).map((item, index) => (
          <ListItem
            button
            key={index}
            sx={{
              borderRadius: 2,
              mt: 2,
              ...(item.text === "Contact Support" && {
                backgroundColor: "#D3D3D3",
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                  "& .MuiTypography-root": {
                    color: "white",
                  },
                },
              }),
              "&:hover": {
                backgroundColor: "primary.main",
                "& .MuiTypography-root": {
                  color: "white",
                },
              },
            }}
            onClick={() => {
              if (item.text === "Logout") {
                localStorage.clear();
                window.location.href = "/signin";
              }
            }}
          >
            <Image
              src={item.icon}
              alt={item.text}
              width={24}
              height={24}
              style={{ marginRight: 8 }}
            />
            <ListItemText
              primary={
                <Typography
                  variant="body2"
                  textlabel={item.text}
                  sx={{ color: "black" }}
                />
              }
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
