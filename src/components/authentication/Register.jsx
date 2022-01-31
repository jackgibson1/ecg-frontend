/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Form from 'react-validation/build/form';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import { isEmail } from 'validator';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CircularProgress from '@mui/material/CircularProgress';
import AuthService from '../../services/auth.service';

function checkAllValid(username, email, password, setFieldValid) {
  if (!isEmail(email)) {
    setFieldValid((prevField) => ({ ...prevField, emailValid: false }));
    return { valid: false, message: 'Please enter a valid email address' };
  }
  if (username.length < 3 || username.length > 20) {
    setFieldValid((prevField) => ({ ...prevField, nameValid: false }));
    return { valid: false, message: 'The username must be between 3 and 20 characters.' };
  }
  if (password.length < 6 || password.length > 40) {
    setFieldValid((prevField) => ({ ...prevField, passValid: false }));
    return { valid: false, message: 'The password must be between 6 and 40 characters.' };
  }
  return { valid: true };
}

function AlreadyAccount(props) {
  return (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      Already have an account?
      {' '}
      <Link color="inherit" href="/login">
        Login here.
      </Link>
    </Typography>
  );
}

const Register = (props) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState('');
  const [fieldValid, setFieldValid] = useState(
    { nameValid: true, emailValid: true, passValid: true },
  );

  const onChangeUsername = (e) => {
    const usernameTarget = e.target.value;
    setUsername(usernameTarget);
    setFieldValid((prevField) => ({ ...prevField, nameValid: true }));
  };

  const onChangeEmail = (e) => {
    const emailTarget = e.target.value;
    setEmail(emailTarget);
    setFieldValid((prevField) => ({ ...prevField, emailValid: true }));
  };

  const onChangePassword = (e) => {
    const passwordTarget = e.target.value;
    setPassword(passwordTarget);
    setFieldValid((prevField) => ({ ...prevField, passValid: true }));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage('');
    setSuccessful(false);

    const isValid = checkAllValid(username, email, password, setFieldValid);
    if (!isValid.valid) {
      setSuccessful(false);
      setMessage(isValid.message);
      return;
    }

    // eslint-disable-next-line no-underscore-dangle
    AuthService.register(username, email, password).then(
      // eslint-disable-next-line no-unused-vars
      async () => {
        setMessage('Successfully registered!');
        setSuccessful(true);

        await new Promise((resolve) => setTimeout(resolve, 2000));

        // eslint-disable-next-line react/prop-types
        props.history.push('/courses');
        window.location.reload();
      },
      (error) => {
        const resMessage = (error.response
                        && error.response.data
                        && error.response.data.message)
                        || error.message
                        || error.toString();

        setMessage(resMessage);
        setSuccessful(false);
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
        <PersonAddAltIcon sx={{ transform: 'scale(3)', marginBottom: '10%' }} />
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>

        <Form onSubmit={handleRegister}>
          {!successful && (
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
              error={!fieldValid.nameValid}
            />
            <TextField
              required
              label="Email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
              onChange={onChangeEmail}
              error={!fieldValid.emailValid}
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
              }}
              onChange={onChangePassword}
              error={!fieldValid.passValid}
              type="password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Stack>
          )}
        </Form>
        {message && (
          <>
            <Alert sx={{ marginTop: '3%' }} severity={successful ? 'success' : 'error'}>{message}</Alert>
            {successful && (
            <>
              <Typography sx={{ marginTop: '4%' }} variant="body1">
                You are now being redirected.
              </Typography>
              <CircularProgress sx={{ marginTop: '4%' }} />
            </>
            )}
          </>

        )}
      </Box>
      {!successful && (
        <AlreadyAccount sx={{ mt: 6, mb: 4 }} />
      )}
    </Container>
  );
};

export default Register;
