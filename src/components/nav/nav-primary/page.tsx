import NavListPrimary from "@/components/ui/NavListPrimary";
import { Box } from "@mui/material";

export default function NavPrimary() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <NavListPrimary />
        <NavListPrimary />
        <NavListPrimary />
        <NavListPrimary />
      </Box>
    </>
  );
}
