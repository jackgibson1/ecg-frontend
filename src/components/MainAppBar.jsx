/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import {
  Typography, createTheme, useMediaQuery, useTheme,
} from '@mui/material';
import { withStyles } from '@mui/styles';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import ecgLogo from '../assets/images/ecglogo.png';
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
      color: '#EE3233',
      borderBottom: '1px solid white',
    },
  },
};

function MainAppBar(props) {
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
            <Link to="/">
              <img src={ecgLogo} alt="logo" style={{ marginTop: '1%' }} width="40px" height="40px" />
            </Link>
          </Typography>
          {isMobile ? (
            <DrawerComponent />
          ) : (
            <div style={styles.navlinks}>
              <Link to="/courses" className={props.classes.link}>
                Courses
              </Link>
              <Link to="/quizzes" className={props.classes.link}>
                Quizzes
              </Link>
              <Link to="/ask" className={props.classes.link}>
                Ask
              </Link>
              {currentUser ? (
                <>
                  {/* eslint-disable-next-line react/prop-types */}
                  <Link to="/profile" className={props.classes.link}>{currentUser.username}</Link>
                  <a href="/" className={props.classes.link} onClick={logOut}>Logout</a>
                </>
              ) : (

                <>
                  <Link to="/login" className={props.classes.link}>
                    Login
                  </Link>
                  <Link to="/register" className={props.classes.link}>
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

export default withStyles(styles)(MainAppBar);
