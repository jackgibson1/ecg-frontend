import * as React from 'react';
import { List, Divider, Box, Typography } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import CommentsListItem from './CommentsListItem';
import { styles } from './forum.styles';

export default function CommentsList(props) {
  const { comments } = props;
  return (
    <div style={styles.comments.listDiv}>
      <Box sx={styles.comments.listBox}>
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
        <List sx={styles.comments.list}>
            {comments.map((comment) => (
              <div key={Math.random(1000)}>
                <CommentsListItem comment={comment} />
                <Divider variant="inset" component="li" />
              </div>
            ))}
        </List>
      )}
    </div>
  );
}
