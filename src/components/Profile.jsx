import React from 'react';

import AccountBoxIcon from '@mui/icons-material/AccountBox';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AuthService from '../services/auth.service';

const theme = createTheme();

function Copyright(props) {
  return (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Electrocardiography
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AccountBoxIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {currentUser.username}
            {' '}
            Profile
          </Typography>
          <Typography component="body1" variant="body1" sx={{ mt: 2 }}>
            JWT Token:
            {' '}
            {currentUser.accessToken.substring(0, 20)}
          </Typography>
          <Typography component="body1" variant="body1" sx={{ mt: 2 }}>
            Id:
            {' '}
            {currentUser.id}
          </Typography>
          <Typography component="body1" variant="body1" sx={{ mt: 2 }}>
            Email:
            {' '}
            {currentUser.email}
          </Typography>

          <Typography component="body1" variant="body1" sx={{ mt: 2 }}>
            Authorities:
            {' '}
            <ul>
              {currentUser.roles
          // eslint-disable-next-line react/no-array-index-key
          && currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
            </ul>
          </Typography>

        </Box>

        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>

  );
};

export default Profile;
