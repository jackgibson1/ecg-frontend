import * as React from 'react';
import { Typography, Box } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { styles } from '../styles';

export default function QuizTopDialogContent(props) {
  const { lastUpdated, totalQuestions } = props;

  return (
    <>
      <Box sx={styles.quizDialog.topContent}>
        <CalendarTodayIcon />
        <Box>
          <Typography sx={{ ml: 2 }} style={{ color: '#808080' }} variant="body">{`Last Updated: ${lastUpdated}`}</Typography>
        </Box>
      </Box>
      <Box sx={styles.quizDialog.topContent}>
        <AccessTimeIcon />
        <Box>
          <Typography sx={{ ml: 2 }} style={{ color: '#808080' }} variant="body">{`${totalQuestions} Questions`}</Typography>
        </Box>
      </Box>
    </>
  );
}
