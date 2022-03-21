import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { Box, Typography } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import CommentsListItem from './CommentsListItem';

export default function CommentsList(props) {
  const { comments } = props;
  return (
    <div style={{ marginLeft: '15px', marginRight: '15px', marginTop: '15px' }}>
      <Box sx={{ display: 'flex', marginTop: '15px' }}>
        <CommentIcon />
        <Box>
          <Typography sx={{ ml: 1 }} variant="body1">
            {comments.length === 0 ? (
              'No comments on this question yet.'
            ) : (
              `${comments.length} Total Comments:`
            )}
          </Typography>
        </Box>
      </Box>
      {comments.length > 0 && (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {comments.map((comment) => (
              <div>
                <CommentsListItem comment={comment} />
                <Divider variant="inset" component="li" />
              </div>
            ))}
        </List>
      )}
    </div>
  );
}
