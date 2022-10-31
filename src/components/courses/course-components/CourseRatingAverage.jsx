/* eslint-disable react/prop-types */
import * as React from 'react';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Typography } from '@mui/material';
import { styles, StyledRating } from '../styles';

export default function CourseRating(props) {
  const { rating } = props;

  return (
    <Box sx={styles.courseRatingAverage.box}>
      <StyledRating
        readOnly
        defaultValue={typeof rating === 'undefined' ? 0 : rating.rating}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
      <Box>
        <Typography sx={{ ml: 2 }} style={{ color: '#808080' }} variant="body">{`(${typeof rating === 'undefined' ? 0 : rating.totalRatings} Reviews)`}</Typography>
      </Box>
    </Box>
  );
}
