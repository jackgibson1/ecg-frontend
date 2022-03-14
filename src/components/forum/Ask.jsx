import React from 'react';
import { Box } from '@mui/material';
import QuestionsList from './QuestionsList';
import { styles } from './forum.styles';

function Ask() {
  return (
    <Box sx={styles.askPage.outerBox}>
      <QuestionsList />
    </Box>
  );
}

export default Ask;
