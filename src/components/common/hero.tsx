import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { IMAGES } from "../../utils/constants";
import Typography from "./typography";

interface CenteredTextBoxProps {
  text: string;
  bgcolor?: string;
  author?: string;
}

const Hero: React.FC<CenteredTextBoxProps> = ({
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
        <Image src={IMAGES.Text.logo} alt="Logo" width={200} height={50} />
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
            left: -60,
            zIndex: 0,
          }}
        >
          <Image
            src={IMAGES.Text.quotestart}
            alt="Quote Start"
            width={50}
            height={50}
          />
        </Box>

        <Typography
          variant="h6"
          sx={{
            lineHeight: "2",
            position: "relative",
            zIndex: 1,
          }}
          textlabel={text}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: -20,
            right: -60,
            zIndex: 0,
          }}
        >
          <Image
            src={IMAGES.Text.quoteend}
            alt="Quote End"
            width={50}
            height={50}
          />
        </Box>

        <Typography
          variant="subtitle1"
          sx={{
            mt: 2,
            position: "relative",
            zIndex: 1,
          }}
          textlabel={author}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: 200,
          right: 150,
        }}
      >
        <Image src={IMAGES.Text.dots} alt="Dots" width={100} height={100} />
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 16,
          left: 9,
        }}
      >
        <Image src={IMAGES.Text.circle} alt="Circle" width={100} height={100} />
      </Box>
    </Box>
  );
};

export default Hero;
