"use client";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
type title = string;

interface ButtonLinkProps {
  title: title;
}
const ButtonLink: React.FC<ButtonLinkProps> = ({ title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
        color: "secondary.main",
      }}
    >
      <Link href="#" passHref>
        <Typography
          component="span"
          variant="body2"
          sx={{
            cursor: "pointer",
            textDecoration: "none",
            fontSize: "20px",
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>
      </Link>
      <ArrowForwardIosIcon sx={{ fontSize: "14px" }} />
    </Box>
  );
};

export default ButtonLink;
