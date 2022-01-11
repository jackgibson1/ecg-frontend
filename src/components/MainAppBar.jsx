import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import {
  Typography, createTheme, useMediaQuery, useTheme,
} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import DrawerComponent from './Drawer';

const theme = createTheme();

const styles = {
  navlinks: {
    marginLeft: theme.spacing(10),
    display: 'flex',
    fontFamily: theme.typography,
  },
  logo: {
    flexGrow: '1',
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '20px',
    marginLeft: theme.spacing(2),
    '&:hover': {
      color: 'yellow',
      borderBottom: '1px solid white',
    },
  },
};

export default function MainAppBar(props) {
  // eslint-disable-next-line react/prop-types
  const { currentUser, logOut } = props;
  const theme2 = useTheme();
  const isMobile = useMediaQuery(theme2.breakpoints.down('md'));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="fixed" style={{ background: '#000000' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={styles.logo}>
            <Link to="/" style={styles.link}>
              ECGs
            </Link>
          </Typography>
          {isMobile ? (
            <DrawerComponent />
          ) : (
            <div style={styles.navlinks}>
              <Link to="/courses" style={styles.link}>
                Courses
              </Link>
              <Link to="/quizzes" style={styles.link}>
                Quizzes
              </Link>
              <Link to="/ask" style={styles.link}>
                Ask
              </Link>
              {currentUser ? (
                <>
                  {/* eslint-disable-next-line react/prop-types */}
                  <Link to="/profile" style={styles.link}>{currentUser.username}</Link>
                  <a href="/" style={styles.link} onClick={logOut}>Logout</a>
                </>
              ) : (

                <>
                  <Link to="/login" style={styles.link}>
                    Login
                  </Link>
                  <Link to="/register" style={styles.link}>
                    Register
                  </Link>
                </>
              )}

            </div>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}
