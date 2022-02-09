/* eslint-disable react/prop-types */
import React from 'react';
import {
  Stack, Typography, Button,
} from '@mui/material';
import ExploreIcon from '@mui/icons-material/Explore';
import backgroundImage from '../../assets/images/home/heroimage1.jpg';

const styles = {
  paperContainer: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '95vh',
    display: 'flex',
    alignItems: 'center',
  },
};

export default function HomeHero(props) {
  const { scrollRef } = props;
  return (
    <Stack style={styles.paperContainer}>
      <Typography color="white" align="center" variant="h2" marked="center" sx={{ fontWeight: 'bold', marginTop: '15%' }}>
        Learn Electrocardiography.
      </Typography>
      <Button
        sx={{ color: '#FFFFFF', marginTop: '2%', fontWeight: 'bold', borderRadius: 3, boxShadow: 20, backdropFilter: 'blur(20px)', width: '400px' }}
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
