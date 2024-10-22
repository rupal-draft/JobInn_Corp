"use client";
import React, { useEffect, useState } from "react";
import { Box, Divider, IconButton } from "@mui/material";
import Typography from "../common/typography";
import Image from "next/image";
import { IMAGES, LOCALSTORAGE_KEYS } from "../../utils/constants";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HomeIcon from "@mui/icons-material/Home";
import Sidebar from "../common/sidebar";
import { usePathname } from "next/navigation";

interface RegistrationInfo {
  firstName: string;
  lastName: string;
  businessName: string;
  Settings_Profile_Image: string;
}

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<RegistrationInfo>(null);
  const pathname = usePathname();
  const formatPathname = (path) => {
    const parts = path.split("/").filter((part) => part);
    return parts
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  };
  useEffect(() => {
    const updateInfo = () => {
      const userRegistrationInfo = JSON.parse(
        localStorage.getItem(LOCALSTORAGE_KEYS.Registration_Info)
      );
      setUserInfo(userRegistrationInfo);
    };
    updateInfo();
  }, []);
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 1, ml: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" textlabel={formatPathname(pathname)} />
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <IconButton sx={{ color: "primary.main" }}>
              <NotificationsIcon />
            </IconButton>

            {userInfo?.Settings_Profile_Image ? (
              <img
                src={userInfo.Settings_Profile_Image}
                alt="Profile"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "30%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "30%",
                  backgroundColor: "gray",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  alt="profile"
                  src={IMAGES.Headers.profileLogo}
                  width={40}
                  height={40}
                />{" "}
              </Box>
            )}

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="body1"
                textlabel={`${userInfo?.firstName || ""} ${
                  userInfo?.lastName || ""
                }`}
              />
              <Typography variant="body2" textlabel={userInfo?.businessName} />
            </Box>

            <IconButton>
              <ArrowDropDownIcon />
            </IconButton>
          </Box>
        </Box>

        <Divider sx={{ mt: 0.5 }} />

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton sx={{ color: "primary.main" }}>
            <HomeIcon />
          </IconButton>
          <Typography variant="body2" textlabel="/" />
          <Typography variant="body2" textlabel={formatPathname(pathname)} />
        </Box>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
