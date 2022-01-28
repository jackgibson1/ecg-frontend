/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef } from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import { isEmail } from 'validator';

import AuthService from '../services/auth.service';

const required = (value) => {
  if (!value) {
    return (
      <Alert severity="error">This field is required!</Alert>
    );
  }
  return null;
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <Alert severity="error">This is not a valid email!</Alert>
    );
  }
  return null;
};

const validUsername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <Alert severity="error">The username must be between 3 and 20 characters.</Alert>
    );
  }
  return null;
};

const validPassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <Alert severity="error">The password must be between 6 and 40 characters.</Alert>
    );
  }
  return null;
};

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
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState('');

  const onChangeUsername = (e) => {
    const usernameTarget = e.target.value;
    setUsername(usernameTarget);
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

    form.current.validateAll();

    // eslint-disable-next-line no-underscore-dangle
    if (checkBtn.current.context._errors.length === 0) {
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
    }
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
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>

        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
          <div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Input
                type="text"
                className="form-control"
                name="username"
                value={username}
                onChange={onChangeUsername}
                validations={[required, validUsername]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Input
                type="text"
                className="form-control"
                name="email"
                value={email}
                onChange={onChangeEmail}
                validations={[required, validEmail]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={onChangePassword}
                validations={[required, validPassword]}
              />
            </div>

            <div className="form-group">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
            </div>
          </div>
          )}

          {message && (
          <Alert severity={successful ? 'success' : 'error'}>{message}</Alert>
          )}
          <CheckButton style={{ display: 'none' }} ref={checkBtn} />
        </Form>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};

export default Register;
