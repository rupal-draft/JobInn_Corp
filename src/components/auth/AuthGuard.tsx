"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  LOCALSTORAGE_KEYS,
  PRIVATE_URLS,
  PUBLIC_URLS,
} from "../../utils/constants";
import { Box, CircularProgress } from "@mui/material";

const AuthGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [forceChangePassword, setForceChangePassword] = useState<string | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedValue = localStorage.getItem(
        LOCALSTORAGE_KEYS.Force_Change_Password
      );
      setForceChangePassword(storedValue);
    };

    window.addEventListener("storage", handleStorageChange);

    handleStorageChange();

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    const storedRegistrationInfo = JSON.parse(
      localStorage.getItem(LOCALSTORAGE_KEYS.Registration_Info)
    );
    const userId = storedRegistrationInfo?.userId;
    let routeToRedirect = "";

    if (forceChangePassword === "false") {
      routeToRedirect = `/create-password/${userId}`;
    } else if (userId && PRIVATE_URLS.includes(pathname)) {
      routeToRedirect = pathname;
    } else if (forceChangePassword === "true") {
      routeToRedirect = "/dashboard";
    } else if (!PUBLIC_URLS.includes(pathname)) {
      routeToRedirect = "/signin";
    }

    if (routeToRedirect && routeToRedirect !== pathname) {
      setLoading(true);
      router.push(routeToRedirect);
      setTimeout(() => {
        setLoading(false);
      }, 250);
    }
  }, [router, pathname, forceChangePassword]);

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
