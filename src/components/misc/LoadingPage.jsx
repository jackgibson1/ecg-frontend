/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { CircularProgress, Typography } from '@mui/material';

export default function LoadingPage(props) {
  const { text } = props;

  useEffect(() => {
    window.history.replaceState({}, '');
  }, []);

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', marginTop: '5%', textAlign: 'center',
    }}
    >
      <CircularProgress sx={{ position: 'absolute' }} />
      <Typography sx={{ position: 'absolute', marginTop: '5%' }} variant="h3">{text}</Typography>
    </div>
  );
}
