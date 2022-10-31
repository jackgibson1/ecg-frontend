import * as React from 'react';
import { Box, CircularProgress, Button } from '@mui/material';
import { green } from '@mui/material/colors';
import { styles } from './forum.styles';

export default function CommentLoadingButton(props) {
  const { loading, success, timer, handleSubmit } = props;

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };

  React.useEffect(() => () => {
    clearTimeout(timer.current);
  }, []);

  return (
    <Box sx={styles.commentLoadingButton.outerBox}>
      <Box sx={{ position: 'relative' }}>
        <Button
          variant="contained"
          sx={buttonSx}
          disabled={loading}
          onClick={handleSubmit}
        >
          Comment
        </Button>
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              color: green[500],
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        )}
      </Box>
    </Box>
  );
}
