"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  LOCALSTORAGE_KEYS,
  PRIVATE_URLS,
  PUBLIC_URLS,
  Routes,
} from "../../utils/constants";
import { Box, CircularProgress } from "@mui/material";

const AuthGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [forceChangePassword, setForceChangePassword] = useState<string | null>(
    null
  );

  const checkAuth = () => {
    const userRegistrationInfo = JSON.parse(
      localStorage.getItem(LOCALSTORAGE_KEYS.Registration_Info)
    );
    const passwordChangeString = localStorage.getItem(
      LOCALSTORAGE_KEYS.Force_Change_Password
    );
    const passwordChange = passwordChangeString === "true";
    const userId = userRegistrationInfo?.userId;
    let routeToRedirect = "";

    if (pathname === Routes.Home) {
      if (userId) {
        if (passwordChangeString != null && passwordChange) {
          routeToRedirect = Routes.Dashboard;
        } else {
          routeToRedirect = `${Routes.CreatePassword}/${userId}`;
        }
      } else {
        routeToRedirect = Routes.Signin;
      }
    } else {
      if (passwordChangeString != null && !passwordChange) {
        routeToRedirect = `${Routes.CreatePassword}/${userId}`;
      } else if (userId && passwordChange) {
        if (PUBLIC_URLS.includes(pathname)) {
          routeToRedirect = Routes.Dashboard;
        } else if (PRIVATE_URLS.includes(pathname)) {
          setLoading(false);
          return;
        }
      } else if (!PUBLIC_URLS.includes(pathname)) {
        routeToRedirect = Routes.Signin;
      }
    }

    if (routeToRedirect && routeToRedirect !== pathname) {
      router.push(routeToRedirect);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const passwordChange = localStorage.getItem(
        LOCALSTORAGE_KEYS.Force_Change_Password
      );
      setForceChangePassword(passwordChange);
    };
    window.addEventListener("storage", handleStorageChange);
    handleStorageChange();
    checkAuth();
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [router, pathname]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default AuthGuard;
