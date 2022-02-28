import * as React from 'react';
import { Typography, Box } from '@mui/material';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { styles } from '../quiz.styles';

export default function QuizDifficultyRating(props) {
  const { difficulty } = props;
  return (
    <Box sx={styles.quizDifficulty.box}>
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
