import { Button } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
type ButtonProps = {
  content: string;
  href: string;
};
const ButtonPrimary: React.FC<ButtonProps> = ({ content, href }) => {
  return (
    <Button
      component="a"
      href={href}
      sx={{
        display: "flex",
        alignItems: "center",

        gap: 1,
        fontWeight: "bold",
        fontSize: 15,
        backgroundColor: "white",
        paddingX: 4,
        paddingY: 1,
        borderRadius: 2,
        transition: "background-color 0.3s ease",
        "&:hover": {
          transition: "background-color 0.3s ease",
          backgroundColor: "#f0f6fc",
        },
      }}
    >
      {content}
      <KeyboardArrowRightIcon />
    </Button>
  );
};

export default ButtonPrimary;
