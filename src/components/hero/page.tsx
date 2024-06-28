import { Box, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import ButtonPrimary from "../ui/Button";
import VideoComponent from "../ui/VideoComponent ";
import Image from "next/image";
import GitImage from "../../images/git.png";
import SlideBrand from "../ui/SlideBrand";
const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        marginTop={10}
        marginBottom={5}
        sx={{
          color: "secondary.main",
          position: "relative",
          zIndex: 1,
          paddingY: 1,
          paddingX: 2,
          display: "flex",
          alignItems: "center",
          gap: 2,
          borderRadius: "20px", // Adjusted to 8px for better visibility
          //   overflow: "hidden", // Ensures the border-radius is applied
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: "inherit", // Inherit the parent border-radius
            border: "1px solid transparent",
            borderImage: "linear-gradient(45deg, #cbaaf7, #57d365) 1",
            zIndex: -1,
          },
        }}
      >
        <GitHubIcon />
        Copilot Enterprise now available
      </Box>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          width: "70%",
          color: "secondary.main",
          fontWeight: "bold",
        }}
      >
        The world’s most widely adopted AI developer tool.
      </Typography>
      <Box sx={{ marginTop: 5 }}>
        <ButtonPrimary content="Get Started With Copilot" href="/about" />
      </Box>
      <Box sx={{ position: "relative" }}>
        <VideoComponent path="https://github.githubassets.com/assets/hero-lg-6a98e47708e8.mp4" />
        <Box sx={{ position: "absolute", top: -60, right: -150 }}>
          <Image width={350} src={GitImage} alt="git-image" />
        </Box>
      </Box>
      <Box sx={{ marginTop: 5, marginBottom: 10 }}>
        <Typography
          sx={{
            textAlign: "center",
            color: "secondary.main",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Replay
        </Typography>
        <SlideBrand />
        <Typography
          sx={{
            textAlign: "center",
            color: "secondary.main",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Pause
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
