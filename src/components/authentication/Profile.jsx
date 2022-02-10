import React from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import EmailIcon from '@mui/icons-material/Email';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AuthService from '../../services/auth.service';

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
    <Container>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          border: 1,
          borderRadius: 5,
          boxShadow: 15,
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '60%',
        }}
      >
        <Box sx={{ margin: 'auto', marginTop: '10%' }}>
          <AccountCircleIcon sx={{ transform: 'scale(3)', marginLeft: '25%' }} />
          <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', marginTop: '40%' }}>
            {currentUser.username}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', marginTop: 2, marginLeft: 2 }}>
          <EmailIcon />
          <Box>
            <Typography sx={{ ml: 1 }} variant="body">
              {' '}
              Email:
              {' '}
              {currentUser.email}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', marginTop: 2, marginLeft: 2 }}>
          <AssignmentIndIcon />
          <Box>
            <Typography sx={{ ml: 1 }} variant="body">
              {' '}
              Privileges:
              {' '}
              {currentUser.roles.map((role) => ` ${role} `)}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};

export default Profile;
