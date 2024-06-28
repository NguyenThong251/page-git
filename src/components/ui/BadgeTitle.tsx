import { Box, Button, Typography } from "@mui/material";
import React from "react";
type title = string;

interface BadgeTitleProps {
  title: title;
}
const BadgeTitle: React.FC<BadgeTitleProps> = ({ title }) => {
  return (
    <Box>
      <Button
        sx={{
          paddingY: 0.5,
          paddingX: 2,
          borderRadius: 10,
          fontSize: 13,
          border: "1px solid #505459",
          color: "secondary.main",
        }}
      >
        {title}
      </Button>
    </Box>
  );
};

export default BadgeTitle;
