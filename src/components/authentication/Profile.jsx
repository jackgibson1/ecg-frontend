/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import EmailIcon from '@mui/icons-material/Email';

import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AuthService from '../../services/auth.service';
import UserService from '../../services/user.service';
import CourseTable from './CourseTable';

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
  const [userCredits, setUserCredits] = useState(0);
  const [dateCreated, setDateCreated] = useState('');

  useEffect(() => {
    Promise.all([UserService.getDateCreated(), UserService.getCredits()])
      .then((resolvedPromises) => {
        const date = resolvedPromises[0].data.created;
        const credits = resolvedPromises[1].data.credits;
        setDateCreated(date);
        setUserCredits(credits);
      });
  }, []);

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
          width: '70%',
        }}
      >
        <Box sx={{ display: 'flex', marginTop: 7, marginLeft: 'auto', marginRight: 'auto' }}>
          <AccountCircleIcon sx={{ transform: 'scale(4)' }} />
          <Box>
            <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', ml: 5 }}>
              {currentUser.username}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', marginTop: 7, marginLeft: 4 }}>
          <CalendarTodayIcon />
          <Box>
            <Typography sx={{ ml: 1 }} variant="body">
              {' '}
              <b>Member Since:</b>
              {' '}
              {dateCreated}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', marginTop: 3, marginLeft: 4 }}>
          <EmailIcon />
          <Box>
            <Typography sx={{ ml: 1 }} variant="body">
              {' '}
              <b>Email:</b>
              {' '}
              {currentUser.email}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', marginTop: 3, marginLeft: 4 }}>
          <AssignmentIndIcon />
          <Box>
            <Typography sx={{ ml: 1 }} variant="body">
              {' '}
              <b>Privileges:</b>
              {' '}
              {currentUser.roles.map((role) => ` ${role} `)}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            marginTop: 3,
            marginLeft: 4,
          }}
        >
          <StarBorderPurple500Icon />
          <Box>
            <Typography sx={{ ml: 1, fontWeight: 'bold' }} variant="body">Credits:</Typography>
          </Box>
          <Rating readOnly defaultValue={userCredits} max={12} sx={{ marginLeft: 1 }} />
        </Box>
        <Box
          sx={{
            marginTop: 3,
            marginLeft: 4,
          }}
        >
          <Typography sx={{ ml: 1, fontWeight: 'bold' }} variant="body">Completed Courses:</Typography>
          <CourseTable />
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};

export default Profile;
