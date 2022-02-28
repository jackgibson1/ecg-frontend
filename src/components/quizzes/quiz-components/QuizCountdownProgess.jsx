import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styles } from '../quiz.styles';

export default function QuizCountdownProgess(props) {
  const { seconds } = props;

  return (
    <Box sx={styles.quizCountdownProgress.outerbox}>
      <Box sx={styles.quizCountdownProgress.innerbox}>
        <LinearProgress variant="determinate" value={10} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2">{seconds}</Typography>
      </Box>
    </Box>
  );
}
