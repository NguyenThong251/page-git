"use client";
import MenuPrimary from "@/components/nav/nav-primary/page";
import AddRepon from "@/components/ui/AddRepon";
import ModeToggle from "@/components/ui/ModeToggle";
import SearchInput from "@/components/ui/Search";
import AccountMenu from "@/components/ui/User";
import GitHubIcon from "@mui/icons-material/GitHub";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";

const HeaderPrimary = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            height: (theme) => theme.githubCustom.navBarHeght,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: "secondary.main",
            }}
          >
            <GitHubIcon sx={{ fontSize: "2rem" }} />
            <SearchInput />
            <MenuPrimary />
          </Box>

          <Box sx={{ display: "flex", gap: "", color: "secondary.main" }}>
            <ModeToggle />
            <AddRepon />
            <AccountMenu />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default HeaderPrimary;
