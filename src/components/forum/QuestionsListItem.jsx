/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';

export default function QuestionsListItem(props) {
  const { post, history } = props;
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Admin" src="random.jpg" />
      </ListItemAvatar>
      <ListItemText>
        <Typography sx={{ color: 'blue' }} variant="h6">
          <Link onClick={() => history.push(`ask/posts/${post.id}`)} underline="hover">
            {post.title}
          </Link>
        </Typography>
        <Typography sx={{ marginBottom: '5px', marginTop: '2px', color: 'text.secondary' }} variant="body2">
          {post.description}
        </Typography>
        <Typography sx={{ marginTop: '15px', display: 'inline', color: 'text.primary' }} variant="body2">
          <u>4 Votes</u>
        </Typography>
        <Typography sx={{ marginTop: '5px', display: 'inline', marginLeft: '10px', color: 'text.primary' }} variant="body2">
          <u>{post.totalComments} Comments</u>
        </Typography>
        <div style={{ marginTop: '5px', marginLeft: '20px', display: 'inline' }}>
          <Typography sx={{ display: 'inline', color: 'text.primary' }} variant="body2">
            {post.username}
          </Typography>
          <Typography sx={{ display: 'inline' }} variant="body2" color="text.secondary">
            {' '} asked 2 minutes ago.
          </Typography>
        </div>
      </ListItemText>
    </ListItem>
  );
}
