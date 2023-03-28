import { useState } from 'react';
import { Backdrop, Box, Button, Fade, Modal, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const HomePage = () => {

  return (
    <>
      <Typography variant="h3">HomePage</Typography>

    </>
  );
};

export default HomePage;
