/* eslint-disable react/prop-types */
import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

export default function QuizDifficultyRating(props) {
  const { difficulty } = props;
  return (
    <Box
      sx={{
        ml: 4,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        mb: 1,
      }}
    >
      <Rating
        name="text-feedback"
        value={difficulty}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        size="large"
      />
      <Typography sx={{ ml: 2 }} style={{ color: '#808080' }} variant="body">{`(${difficulty}/5 Difficulty)`}</Typography>
    </Box>
  );
}
