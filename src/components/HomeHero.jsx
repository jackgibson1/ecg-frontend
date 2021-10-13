import React from 'react';
import {
  Stack, Typography, Button,
} from '@mui/material';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

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
    <Stack style={styles.paperContainer}>
      <Typography color="white" align="center" variant="h2" marked="center">
        Learn Electrocardiography.
      </Typography>
      <Button
        size="large"
        color="primary"
        variant="contained"
        component="a"
        href="/below-section/"
        sx={{ mt: 10 }}
      >
        View sections
      </Button>
      <Typography variant="body2" align="center" color="white" sx={{ mt: 3 }}>
        Discover the learning tools below.
      </Typography>
      <ArrowDropDownCircleIcon fontSize="large" color="primary" align="center" sx={{ mt: 10 }} />
    </Stack>
  );
}
