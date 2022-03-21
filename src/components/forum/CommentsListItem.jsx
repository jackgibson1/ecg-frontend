/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import moment from 'moment';

export default function CommentsListItem(props) {
  const { comment } = props;

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={comment.username.toUpperCase()} src="random.jpg" />
      </ListItemAvatar>
      <ListItemText>
        <Typography sx={{ marginBottom: '5px', marginTop: '2px', whiteSpace: 'pre-line' }} variant="body2">
          {comment.description}
        </Typography>
        <div style={{ marginTop: '5px', display: 'inline' }}>
          <Typography sx={{ display: 'inline', color: 'text.primary' }} variant="body2">
            {comment.username}
          </Typography>
          <Typography sx={{ display: 'inline', color: 'text.secondary' }} variant="body2">
            {' '} asked {moment(comment.date).fromNow()}.
          </Typography>
        </div>
      </ListItemText>
    </ListItem>
  );
}
