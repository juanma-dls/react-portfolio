import { Typography } from '@mui/material';
import MuiLink from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://www.linkedin.com/in/juanmadls/">
        <LinkedInIcon/> Juan Manuel de los Santos
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Copyright;
