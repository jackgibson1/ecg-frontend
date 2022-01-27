/* eslint-disable react/prop-types */
import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#EE3233',
  },
  '& .MuiRating-iconHover': {
    color: '#EE3233',
  },
});

export default function CourseUserRating(props) {
  const { userRating, setUserRating } = props;

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
        display: 'flex',
        textAlign: 'center',
      }}
    >
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
