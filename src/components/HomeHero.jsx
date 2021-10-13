import React from 'react';
import {
  Stack, Paper, Typography, Button,
} from '@mui/material';

const backgroundImage = 'https://ak.picdn.net/shutterstock/videos/1040456972/thumb/1.jpg';

const styles = {
  paperContainer: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default function HomeHero() {
  return (
    <Paper style={styles.paperContainer}>
      <Stack>
        <Typography color="white" align="center" variant="h2" marked="center">
          Learn Electrocardiography.
        </Typography>
        <Button
          size="large"
          color="secondary"
          variant="contained"
          component="a"
          href="/below-section/"
          sx={{ minWidth: 200, mt: 10 }}
        >
          View sections
        </Button>
        <Typography variant="body2" color="white" sx={{ mt: 2, alignText: 'center' }}>
          Discover the learning tools below.
        </Typography>
      </Stack>
    </Paper>
  );
}
