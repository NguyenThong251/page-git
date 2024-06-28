import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const features = [
  "Unlimited messages and interactions",
  "Context-aware coding support and explanations",
  "Debugging and security remediation assistance",
  "Conversations tailored to your organization’s repositories",
  "Answers based on your organization’s knowledge base",
  "Access to knowledge from top open source repositories",
];

const plans = [
  {
    name: "Individual",
    price: "$10",
    features: [true, true, true, false, false, false],
  },
  {
    name: "Business",
    price: "$19",
    features: [true, true, true, true, true, false],
  },
  {
    name: "Enterprise",
    price: "$39",
    features: [true, true, true, true, true, true],
  },
];

const TableList = () => {
  return (
    <Box>
      <Box
        sx={{
          padding: 2,
          backgroundColor: "primary.main",
          color: "secondary.main",
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            position: "sticky",
            // top: 0,
            display: "flex",
            flexDirection: "row",
            mb: 2,
            borderBottom: "1px solid #a9a9a967",

            pb: 2,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h4"
              fontWeight={600}
              sx={{ color: "secondary.main" }}
            >
              Compare features
            </Typography>
          </Box>
          {plans.map((plan, index) => (
            <Box key={index} sx={{ flex: 1, textAlign: "center" }}>
              <Typography variant="h5" sx={{ color: "secondary.main" }}>
                {plan.name}
              </Typography>
              <Typography variant="h6" sx={{ color: "secondary.main" }}>
                {plan.price} per user per month
              </Typography>
            </Box>
          ))}
        </Box>
        {features.map((feature, featureIndex) => (
          <Box
            key={featureIndex}
            sx={{
              display: "flex",
              flexDirection: "row",
              mb: 1,
              borderTop: featureIndex !== 0 ? "1px solid #ccc" : "none",

              py: 2,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{ fontSize: "h6.fontSize", color: "secondary.main" }}
              >
                {feature}
              </Typography>
            </Box>
            {plans.map((plan, planIndex) => (
              <Box
                key={planIndex}
                sx={{
                  flex: 1,
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {plan.features[featureIndex] ? (
                  <CheckIcon sx={{ color: "#a371f7" }} />
                ) : (
                  <ClearIcon sx={{ color: "#ffffff" }} />
                )}
              </Box>
            ))}
          </Box>
        ))}
        <Grid container spacing={2}>
          <Grid item xs={3}></Grid>

          <Grid item xs={3}>
            <Button
              variant="contained"
              size="large"
              sx={{
                width: "100%",
                backgroundColor: "#a371f7",
                color: "white",
                fontWeight: 550,
                mt: 2,
                "&:hover": {
                  backgroundColor: "#9865e5",
                },
              }}
            >
              Start a free trial
              <ArrowForwardIcon sx={{ marginLeft: 2 }} />
            </Button>{" "}
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              size="large"
              sx={{
                width: "100%",
                backgroundColor: "#a371f7",
                color: "white",
                fontWeight: 550,
                mt: 2,
                "&:hover": {
                  backgroundColor: "#9865e5",
                },
              }}
            >
              Start a free trial
              <ArrowForwardIcon sx={{ marginLeft: 2 }} />
            </Button>{" "}
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              size="large"
              sx={{
                width: "100%",
                backgroundColor: "#a371f7",
                color: "white",
                fontWeight: 550,
                mt: 2,
                "&:hover": {
                  backgroundColor: "#9865e5",
                },
              }}
            >
              Start a free trial
              <ArrowForwardIcon sx={{ marginLeft: 2 }} />
            </Button>{" "}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TableList;
