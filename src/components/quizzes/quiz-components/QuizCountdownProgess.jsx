import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function QuizCountdownProgess(props) {
  // eslint-disable-next-line react/prop-types
  const { seconds } = props;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '50%', mr: 1 }}>
        <LinearProgress variant="determinate" value={10} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2">{seconds}</Typography>
      </Box>
    </Box>
  );
}
