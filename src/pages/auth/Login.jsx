import { Button, Typography } from '@mui/material'
import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {

  const navigate = useNavigate();

  return (
    <>
    
      <Button
        color="primary" 
        onClick={() => navigate(`/`)}
      >
        <ArrowBackIosNewIcon /> Volver
      </Button>
      <Typography variant='h3'>Login</Typography>
    </>
  )
}
