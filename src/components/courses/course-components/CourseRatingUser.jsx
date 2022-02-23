import React from 'react';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { styles, StyledRating } from '../styles';

export default function CourseUserRating(props) {
  const { userRating, setUserRating } = props;

  return (
    <Box sx={styles.courseRatingUser.box}>
      <StyledRating
        value={userRating}
        onChange={(event, newValue) => {
          setUserRating(newValue);
        }}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
    </Box>
  );
}
