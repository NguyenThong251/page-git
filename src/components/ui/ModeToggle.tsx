"use client";
import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import Brightness4Icon from "@mui/icons-material/Brightness4";

export default function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        color: "secondary.main",
        cursor: "pointer",
      }}
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? <Brightness2Icon /> : <Brightness4Icon />}
    </Box>
  );
}
