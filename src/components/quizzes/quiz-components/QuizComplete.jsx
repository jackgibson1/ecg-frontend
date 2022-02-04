import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import UserService from '../../../services/user.service';
import AuthService from '../../../services/auth.service';

export default function QuizComplete() {
  // eslint-disable-next-line no-unused-vars
  const [quiz, setQuiz] = useState(UserService.getLocalQuiz());

  useEffect(() => {
    console.log(quiz);
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h3" sx={{ marginTop: '10px' }}>{`Congratulations ${AuthService.getCurrentUser().username}!`}</Typography>
      </Grid>
    </Grid>
  );
}
