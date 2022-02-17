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
import AuthService from '../../services/auth.service';
import UserService from '../../services/user.service';
import ProfileTab from './ProfileTab';
import AdminUserTable from './AdminUserTable';

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
          marginTop: 3,
          marginBottom: 3,
          display: 'flex',
          flexDirection: 'column',
          border: 1,
          borderRadius: 3,
          boxShadow: 10,
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '90%',
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
          <Rating readOnly value={userCredits} max={12} sx={{ marginLeft: 1 }} />
        </Box>
        {AuthService.getCurrentUser().roles.includes('ROLE_ADMIN') ? (
          <Box sx={{ marginTop: '2%', marginBottom: '2%' }}>
            <Typography sx={{ fontWeight: 'bold' }} align="center" variant="h6">Administrator User Overview</Typography>
            <AdminUserTable />
          </Box>
        ) : (
          <ProfileTab />
        )}
      </Box>
    </Container>
  );
};

export default Profile;
