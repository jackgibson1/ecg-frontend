/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import PollIcon from '@mui/icons-material/Poll';
import CommentIcon from '@mui/icons-material/Comment';
import moment from 'moment';

export default function QuestionsListItem(props) {
  const { question, history } = props;

  const shortenedText = (text) => {
    if (text.length > 2500) {
      return `${text.substring(0, 160)}...'`;
    }
    return text;
  };
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={question.username.toUpperCase()} src="random.jpg" />
      </ListItemAvatar>
      <ListItemText>
        <Typography sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          <Link sx={{ cursor: 'pointer' }} onClick={() => history.push(`ask/posts/${question.id}`)} underline="hover">
            {shortenedText(question.title)}
          </Link>
        </Typography>
        <Typography sx={{ marginBottom: '5px', marginTop: '2px', color: 'text.secondary', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} variant="body2">
          {shortenedText(question.description)}
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'left' }}>
          <Box sx={{ display: 'flex', marginTop: 1 }}>
            <PollIcon />
            <Box>
              <Typography sx={{ ml: 1 }} variant="body2">4</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', marginTop: 1, ml: 2 }}>
            <CommentIcon />
            <Box>
              <Typography sx={{ ml: 1 }} variant="body2">{`${question.totalComments}`}</Typography>
            </Box>
          </Box>
          <div style={{ marginTop: '5px', marginLeft: '20px', display: 'inline' }}>
            <Typography sx={{ display: 'inline', color: 'text.primary' }} variant="body2">
              {question.username}
            </Typography>
            <Typography sx={{ display: 'inline', color: 'text.secondary' }} variant="body2">
              {' '} asked {moment(question.date).fromNow()}.
            </Typography>
          </div>
        </div>
      </ListItemText>
    </ListItem>
  );
}
