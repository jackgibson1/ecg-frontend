/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Form from 'react-validation/build/form';
import { Typography, Container, Button, CssBaseline, Box, Link, Alert, CircularProgress, TextField, Stack, IconButton } from '@mui/material';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import LoginIcon from '@mui/icons-material/Login';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AuthService from '../../services/auth.service';

function NoAccount(props) {
  return (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      Don&apos;t have an account yet?
      {' '}
      <Link color="inherit" href="/register">
        Register here.
      </Link>
    </Typography>
  );
}

const Login = (props) => {
  const location = useLocation();
  const redirected = (typeof location.state !== 'undefined' && location.state.alert);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onChangeUsername = (e) => {
    const usernameTarget = e.target.value;
    setUsername(usernameTarget);
    setMessage('');
  };

  const onChangePassword = (e) => {
    const passwordTarget = e.target.value;
    setPassword(passwordTarget);
    setMessage('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    AuthService.login(username, password).then(
      () => {
        if (redirected) {
          props.history.push(location.state.from);
        } else {
          props.history.push('/profile');
        }

        window.location.reload();
      },
      (error) => {
        const resMessage = (error.response
          && error.response.data
          && error.response.data.message)
          || error.message
          || error.toString();

        setLoading(false);
        setMessage(resMessage);
      },
    );
  };

  return (
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
        {redirected && (
          <Alert sx={{ marginBottom: '8%' }} severity="info">
            {location.state.message}
          </Alert>
        )}
        <LoginIcon sx={{ transform: 'scale(3)', marginBottom: '10%' }} />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <Form onSubmit={handleLogin}>
          <Stack spacing={2} sx={{ marginTop: '5%' }}>
            <TextField
              required
              label="Username"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleIcon />
                  </InputAdornment>
                ),
              }}
              onChange={onChangeUsername}
              error={message === 'User Not found.'}
            />
            <TextField
              required
              label="Password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="toggle password visibility"
                  >
                    <InputAdornment position="end">
                      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </InputAdornment>
                  </IconButton>
                ),
              }}
              onChange={onChangePassword}
              error={message === 'Invalid Password!'}
              type={showPassword ? '' : 'password'}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            {loading && (
              <CircularProgress />
            )}
          </Stack>
        </Form>
        {message && (
          <Alert sx={{ marginTop: '3%' }} severity="error">{message}</Alert>
        )}
      </Box>
      <NoAccount sx={{ mt: 6, mb: 4 }} />
    </Container>

  );
};

export default Login;
