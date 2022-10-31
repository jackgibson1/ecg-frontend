/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { styles } from '../styles';

export default function CourseRating(props) {
  const { lastUpdated, timeToComplete } = props;

  return (
    <>
      <Box sx={styles.courseTimeAndUpdated.box}>
        <CalendarTodayIcon />
        <Box>
          <Typography sx={styles.courseTimeAndUpdated.text} variant="body">{`Last Updated: ${lastUpdated}`}</Typography>
        </Box>
      </Box>
      <Box sx={styles.courseTimeAndUpdated.box}>
        <AccessTimeIcon />
        <Box>
          <Typography sx={styles.courseTimeAndUpdated.text} variant="body">{`${timeToComplete} (approx)`}</Typography>
        </Box>
      </Box>
    </>
  );
}
