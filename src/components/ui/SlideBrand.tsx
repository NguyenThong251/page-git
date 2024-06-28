import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import BrandDell from "../../images/brand/dell.svg";
import BrandDou from "../../images/brand/duolingo.svg";
import BrandFide from "../../images/brand/fidelity.svg";
import BrandMerca from "../../images/brand/mercado-libre.svg";
import BrandMerce from "../../images/brand/mercedes.svg";
import BrandStripe from "../../images/brand/stripe.svg";
const SlideBrand = () => {
  return (
    <>
      <Box width="100%" sx={{ marginBottom: 5, marginTop: 10 }}>
        <Box
          sx={{
            display: "grid",
            columnGap: 3,
            rowGap: 1,
            gridTemplateColumns: "repeat(6, 1fr)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Image width={100} src={BrandDell} alt="dell" height={100} />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Image src={BrandDou} alt="#" />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Image src={BrandFide} alt="#" />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Image src={BrandMerca} alt="#" />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Image src={BrandMerce} alt="#" />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Image src={BrandStripe} alt="#" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SlideBrand;
