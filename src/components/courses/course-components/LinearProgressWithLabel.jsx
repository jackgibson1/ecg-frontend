import * as React from 'react';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import { Box } from '@mui/material';
import { styles } from '../styles';

export default function LinearProgressWithLabel(props) {
  return (
    <Box sx={styles.linearProgress.box}>
      <Box sx={styles.linearProgress.innerBox}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <LinearProgress variant="determinate" {...props} color="success" sx={styles.linearProgress.progress} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}
