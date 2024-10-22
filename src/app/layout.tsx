import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../utils/theme";
import "./../../public/styles/index.css";
import { Inter } from "next/font/google";
import AuthGuard from "../components/auth/AuthGuard";

const inter = Inter({ subsets: ["latin"] });

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <AuthGuard>{children}</AuthGuard>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
