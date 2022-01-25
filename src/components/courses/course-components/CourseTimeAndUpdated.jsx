/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function CourseRating(props) {
  const { lastUpdated, timeToComplete } = props;

  return (
    <>
      <Box
        sx={{
          '& > legend': { mt: 2 },
          display: 'flex',
          marginTop: 2,
        }}
      >
        <CalendarTodayIcon />
        <Box>
          <Typography sx={{ ml: 2 }} style={{ color: '#808080' }} variant="body">{`Last Updated: ${lastUpdated}`}</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          '& > legend': { mt: 2 },
          display: 'flex',
          marginTop: 2,
        }}
      >
        <AccessTimeIcon />
        <Box>
          <Typography sx={{ ml: 2 }} style={{ color: '#808080' }} variant="body">{`${timeToComplete} (approx)`}</Typography>
        </Box>
      </Box>
    </>
  );
}
