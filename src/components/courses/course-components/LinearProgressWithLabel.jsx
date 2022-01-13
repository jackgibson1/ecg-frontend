/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import * as React from 'react';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import { Box } from '@mui/material';

export default function LinearProgressWithLabel(props) {
  return (
    <Box sx={{
      display: 'flex', alignItems: 'center', marginRight: '5%', marginLeft: '5%', marginTop: '5%', marginBottom: '5%',
    }}
    >
      <Box sx={{ width: '100%', mr: 1 }}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <LinearProgress variant="determinate" {...props} color="success" sx={{ height: 10, borderRadius: 5 }} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">
          {`${Math.round(
            props.value,
          )}%`}

        </Typography>
      </Box>
    </Box>
  );
}
