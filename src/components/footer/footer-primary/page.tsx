import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const Footer = () => {
  return (
    <Box>
      <Container sx={{ paddingBottom: 10 }} maxWidth="xl">
        <Grid container spacing={2}>
          <Grid xs={4}>
            <Box>
              <Typography
                variant="h4"
                fontWeight={600}
                color={"secondary.main"}
              >
                Github
              </Typography>
              <Typography
                marginTop={3}
                fontSize={14}
                fontWeight={550}
                color={"secondary.main"}
              >
                Subscribe to our developer newsletter
              </Typography>
              <Typography
                fontSize={14}
                fontWeight={500}
                color={"secondary.main"}
              >
                Get tips, technical guides, and best practices. Twice a month.
                Right in your inbox.
              </Typography>
              <Button
                sx={{
                  marginTop: 3,
                  color: "white",
                  width: "50%",
                  fontWeight: "550",
                  paddingY: 1,

                  fontSize: 18,
                  borderRadius: 2,
                  border: "1.5px solid #ffffff45",
                  "&:hover": {
                    backgroundColor: "#f0f6fc21",
                    border: "1.5px solid #ffffff",
                    transition: "background-color 0.3s ease",
                  },
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
          <Grid xs={8}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Box>
                  <Typography color={"secondary.main"} fontWeight={550}>
                    Product
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      marginTop: 2,
                    }}
                  >
                    <Typography color={"secondary.main"}>Features</Typography>
                    <Typography color={"secondary.main"}>
                      Compare GitHub
                    </Typography>
                    <Typography color={"secondary.main"}>Features</Typography>
                    <Typography color={"secondary.main"}>
                      Compare GitHub
                    </Typography>
                    <Typography color={"secondary.main"}>Features</Typography>
                    <Typography color={"secondary.main"}>
                      Compare GitHub
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box>
                  <Typography fontWeight={550} color={"secondary.main"}>
                    Platform
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      marginTop: 2,
                    }}
                  >
                    <Typography color={"secondary.main"}>Features</Typography>
                    <Typography color={"secondary.main"}>
                      Compare GitHub
                    </Typography>
                    <Typography color={"secondary.main"}>Features</Typography>
                    <Typography color={"secondary.main"}>
                      Compare GitHub
                    </Typography>
                    <Typography color={"secondary.main"}>Features</Typography>
                    <Typography color={"secondary.main"}>
                      Compare GitHub
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box>
                  <Typography fontWeight={550} color={"secondary.main"}>
                    Support
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      marginTop: 2,
                    }}
                  >
                    <Typography color={"secondary.main"}>Features</Typography>
                    <Typography color={"secondary.main"}>
                      Compare GitHub
                    </Typography>
                    <Typography color={"secondary.main"}>Features</Typography>
                    <Typography color={"secondary.main"}>
                      Compare GitHub
                    </Typography>
                    <Typography color={"secondary.main"}>Features</Typography>
                    <Typography color={"secondary.main"}>
                      Compare GitHub
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box>
                  <Typography fontWeight={550} color={"secondary.main"}>
                    Company
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      marginTop: 2,
                    }}
                  >
                    <Typography color={"secondary.main"}>Features</Typography>
                    <Typography color={"secondary.main"}>
                      Compare GitHub
                    </Typography>
                    <Typography color={"secondary.main"}>Features</Typography>
                    <Typography color={"secondary.main"}>
                      Compare GitHub
                    </Typography>
                    <Typography color={"secondary.main"}>Features</Typography>
                    <Typography color={"secondary.main"}>
                      Compare GitHub
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
