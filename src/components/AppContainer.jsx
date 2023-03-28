import { Box, Container, Grid, Paper, Toolbar } from '@mui/material';
import Copyright from './Copyrigth';


const AppContainer = ({ children }) => {
  return (
    <Box
      component="main"
    >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              {children}
            </Paper>
          </Grid>
        </Grid>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </Box>
  );
};

export default AppContainer