/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { ButtonGroup, Button } from '@mui/material';
import courseDetails from './courseDetails';
import CourseContentsList from './CourseContentsList';
import CourseBackground from '../assets/images/courses/coursebackground.jpeg';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '500px',
}));

const NavigationArea = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '10%',
  marginTop: '1%',
}));

export default function CourseLayout(props) {
  // eslint-disable-next-line react/prop-types
  const { pathname } = props.location;

  const course = courseDetails.find((cse) => cse.path === pathname);

  return (
    <Grid sx={{ paddingTop: '2%', paddingLeft: '2%', paddingRight: '2%' }} fluid container justify="center">
      <Grid item xs={2}>
        <Item>
          <CourseContentsList sections={course.sections} />
        </Item>
      </Grid>
      <Grid item xs={10}>
        <Item>
          <Box sx={{
            borderColor: 'grey.500', border: 5, borderRadius: 5, width: '100%', height: '100%', backgroundImage: `url(${CourseBackground})`, backgroundSize: 'cover',
          }}
          >
            {course.components[1]}
          </Box>
        </Item>
        <NavigationArea>
          <ButtonGroup disableElevation variant="contained">
            <Button>Previous</Button>
            <Button>Next</Button>
          </ButtonGroup>
        </NavigationArea>
      </Grid>
    </Grid>
  );
}
