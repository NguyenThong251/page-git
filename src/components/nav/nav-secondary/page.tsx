import NavLink from "@/components/ui/NavLink";
import { Box } from "@mui/material";
import React from "react";

const NavSecondary = () => {
  return (
    <Box sx={{ display: "flex", gap: "20px" }}>
      <NavLink />
      <NavLink />
      <NavLink />
      <NavLink />
      <NavLink />
    </Box>
  );
};

export default NavSecondary;
