import { Box, CssBaseline } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import AppContainer from "../AppContainer";
import InteractiveMenu from "../InteractiveMenu";


const PrivateLayout = () => {

  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <InteractiveMenu />
      <AppContainer open={open} toggleDrawer={toggleDrawer}>
        <Outlet />
      </AppContainer>
    </Box>
  );
};

export default PrivateLayout;