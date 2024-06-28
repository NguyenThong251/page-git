"use client";
import React from "react";

import Box from "@mui/material/Box";

import Container from "@mui/material/Container";
import NavSecondary from "@/components/nav/nav-secondary/page";

const HeaderSecondary = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            height: (theme) => theme.githubCustom.navBarHeght,
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <Box
            sx={{
              color: "secondary.main",
              fontSize: "20px",
              fontWeight: "bold",
              "&:hover": {
                transition: "all .2s linear",
                color: "#4493f8", // Change to blue when hovered
                cursor: "pointer", // Optional: change cursor to pointer
              },
            }}
          >
            Features
          </Box>
          <NavSecondary />
        </Box>
      </Container>
    </>
  );
};

export default HeaderSecondary;
