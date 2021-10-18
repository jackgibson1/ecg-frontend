import React from 'react';
import {
  Grid, Stack, Typography, Box,
} from '@mui/material';
import animatedQuiz from '../assets/images/quizzesAnimation.gif';

function HomeSection2() {
  return (
    <>
      <Grid item xs={12} md={6} lg={6} spacing={2}>
        <Box sx={{ paddingLeft: '5%', paddingRight: '5%', paddingTop: '10%' }}>
          <Stack spacing={2}>
            <Typography variant="h2">
              <b>
                Test your
                <br />
                knowledge using
                <br />
                quizzes
              </b>
            </Typography>
            <img
              src={animatedQuiz}
              height="300px"
              width="300px"
              alt="animated quiz"
              style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '100%',
              }}
            />
          </Stack>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={6} spacing={2}>
        <Box sx={{ paddingLeft: '5%', paddingRight: '5%', paddingTop: '10%' }}>
          <Stack spacing={2}>
            <Typography variant="h4">
              <b>
                For everyone.
              </b>
            </Typography>
            <Typography variant="h6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book.
            </Typography>
            <Typography variant="h4">
              <b>
                Learn by doing.
              </b>
            </Typography>
            <Typography variant="h6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book.
            </Typography>
            <Typography variant="h4">
              <b>
                100s of conditions.
              </b>
            </Typography>
            <Typography variant="h6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book.
            </Typography>
          </Stack>
        </Box>
      </Grid>
    </>
  );
}
export default HomeSection2;
