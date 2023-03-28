import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from 'react-router-dom';
import AppContainer from '../AppContainer';
import TopBar from '../TopBar';

const PublicLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <TopBar />
      <AppContainer>
        <Outlet />
      </AppContainer>
    </Box>
  );
};

export default PublicLayout;

