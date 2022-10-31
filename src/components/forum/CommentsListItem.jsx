/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { ListItem, ListItemText, ListItemAvatar, Typography, Avatar } from '@mui/material';
import moment from 'moment';
import { styles } from './forum.styles';

export default function CommentsListItem(props) {
  const { comment } = props;

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={comment.username.toUpperCase()} src="random.jpg" />
      </ListItemAvatar>
      <ListItemText>
        <Typography sx={styles.comments.description} variant="body2">
          {comment.description}
        </Typography>
        <div style={styles.comments.usernameDiv}>
          <Typography sx={styles.comments.usernameText} variant="body2">
            {comment.username}
          </Typography>
          <Typography sx={styles.comments.commented} variant="body2">
            {' '} commented {moment(comment.date).fromNow()}.
          </Typography>
        </div>
      </ListItemText>
    </ListItem>
  );
}
