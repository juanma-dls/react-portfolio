import * as React from 'react';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

export default function TopBar() {

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <MuiAppBar position="fixed">
        <Toolbar>
          <Typography variant="h5" noWrap component="div">
            App Portfolio
          </Typography>
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
}