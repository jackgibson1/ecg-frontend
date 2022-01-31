/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Form from 'react-validation/build/form';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import { isEmail } from 'validator';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

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
  };

  const onChangePassword = (e) => {
    const passwordTarget = e.target.value;
    setPassword(passwordTarget);
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
        setMessage('Successfully registered');
        setSuccessful(true);

        await new Promise((resolve) => setTimeout(resolve, 3000));

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
        <PersonAddAltIcon sx={{ transform: 'scale(3)', marginBottom: '5%' }} />
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>

        <Form onSubmit={handleRegister}>
          {!successful && (
          <Stack spacing={2} sx={{ marginTop: '5%' }}>
            <TextField
              required
              label="Username"
              onChange={onChangeUsername}
              error={!fieldValid.nameValid}
            />
            <TextField
              required
              label="Email"
              onChange={onChangeEmail}
              error={!fieldValid.emailValid}
            />

            <TextField
              required
              label="Password"
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
          <Alert sx={{ marginTop: '3%' }} severity={successful ? 'success' : 'error'}>{message}</Alert>
        )}
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};

export default Register;
