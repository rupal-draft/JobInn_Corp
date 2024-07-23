import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import dots from "./../../../public/images/dot-group.png";
import logo from "./../../../public/images/logo.png";
import quotestart from "./../../../public/images/quote-start.png";
import quoteend from "./../../../public/images/quote-end.png";
import circle from "./../../../public/images/circle.png";

interface CenteredTextBoxProps {
  text: string;
  bgcolor?: string;
  author?: string;
}

const CenteredTextBox: React.FC<CenteredTextBoxProps> = ({
  text,
  bgcolor = "",
  author = "",
}) => {
  return (
    <Box
      sx={{
        backgroundColor: bgcolor,
        color: "#fff",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        p: 2,
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 16,
          left: 16,
        }}
      >
        <Image src={logo} alt="Logo" width={200} height={50} />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          p: 2,
          maxWidth: "70%",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: -60, // Adjust this value as needed
            zIndex: 0,
          }}
        >
          <Image src={quotestart} alt="Quote Start" width={50} height={50} />
        </Box>

        <Typography
          variant="h6"
          sx={{
            lineHeight: "2",
            position: "relative",
            zIndex: 1,
          }}
        >
          {text}
        </Typography>

        <Box
          sx={{
            position: "absolute",
            bottom: -20,
            right: -60,
            zIndex: 0,
          }}
        >
          <Image src={quoteend} alt="Quote End" width={50} height={50} />
        </Box>

        <Typography
          variant="subtitle1"
          sx={{
            mt: 2,
            position: "relative",
            zIndex: 1,
          }}
        >
          {author}
        </Typography>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: 200,
          right: 150,
        }}
      >
        <Image src={dots} alt="Dots" width={100} height={100} />
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 16,
          left: 9,
        }}
      >
        <Image src={circle} alt="Circle" width={100} height={100} />
      </Box>
    </Box>
  );
};

export default CenteredTextBox;
