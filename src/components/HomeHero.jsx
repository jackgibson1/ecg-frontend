import React from 'react';
import {
  Stack, Box, Typography, Button,
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
    <Box style={styles.paperContainer}>
      <Stack>
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
        <Typography variant="body2" align="center" color="white" marked="center" sx={{ mt: 2 }}>
          Discover the learning tools below.
        </Typography>
      </Stack>
    </Box>
  );
}
