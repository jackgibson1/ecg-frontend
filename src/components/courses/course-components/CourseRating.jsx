import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Typography } from '@mui/material';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#EE3233',
  },
  '& .MuiRating-iconHover': {
    color: '#EE3233',
  },
});

export default function CourseRating() {
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
        display: 'flex',
        textAlign: 'center',
      }}
    >
      <StyledRating
        readOnly
        defaultValue={3}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
      <Box>
        <Typography sx={{ ml: 2 }} style={{ color: '#808080' }} variant="body">(11 Reviews)</Typography>
      </Box>
    </Box>
  );
}
