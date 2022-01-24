import React from 'react';
import { CircularProgress, Typography } from '@mui/material';

export default function LoadingPage(props) {
  // eslint-disable-next-line react/prop-types
  const { text } = props;
  return (
    <div style={{
      display: 'flex', justifyContent: 'center', marginTop: '5%', textAlign: 'center',
    }}
    >
      <CircularProgress sx={{ position: 'absolute' }} />
      <Typography sx={{ position: 'absolute', marginTop: '5%' }} variant="h3">{`Loading your ${text}`}</Typography>
    </div>
  );
}
