/* eslint-disable react/prop-types */
import React from 'react';
import { Stack, Typography, Button } from '@mui/material';
import ExploreIcon from '@mui/icons-material/Explore';
import { styles } from './home.styles';

export default function HomeHero(props) {
  const { scrollRef } = props;
  return (
    <Stack style={styles.homeHero.paperContainer}>
      <Typography color="white" align="center" variant="h2" marked="center" sx={styles.homeHero.text}>
        Learn Electrocardiography.
      </Typography>
      <Button
        sx={styles.homeHero.button}
        endIcon={<ExploreIcon />}
        size="large"
        color="error"
        variant="outlined"
        onClick={() => scrollRef.current.scrollIntoView({ behavior: 'smooth' })}
      >
        Discover More
      </Button>
    </Stack>
  );
}
