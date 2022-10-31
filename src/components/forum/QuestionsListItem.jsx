/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Box, ListItem, ListItemText, ListItemAvatar, Typography, Avatar, Link } from '@mui/material';
import PollIcon from '@mui/icons-material/Poll';
import CommentIcon from '@mui/icons-material/Comment';
import moment from 'moment';
import { styles } from './forum.styles';

export default function QuestionsListItem(props) {
  const { question, history } = props;

  const shortenedText = (text) => {
    if (text.length > 2500) return `${text.substring(0, 160)}...'`;
    return text;
  };

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={question.username.toUpperCase()} src="random.jpg" />
      </ListItemAvatar>
      <ListItemText>
        <Typography sx={styles.questions.title}>
          <Link sx={{ cursor: 'pointer' }} onClick={() => history.push(`ask/question/${question.id}`)} underline="hover">
            {shortenedText(question.title)}
          </Link>
        </Typography>
        <Typography sx={styles.questions.description} variant="body2">
          {shortenedText(question.description)}
        </Typography>
        <div style={styles.questions.divContainer}>
          <Box sx={styles.questions.box}>
            <PollIcon />
            <Box>
              <Typography sx={{ ml: 1 }} variant="body2">{`${question.totalVotes}`}</Typography>
            </Box>
          </Box>
          <Box sx={styles.questions.commentBox}>
            <CommentIcon />
            <Box>
              <Typography sx={{ ml: 1 }} variant="body2">{`${question.totalComments}`}</Typography>
            </Box>
          </Box>
          <div style={styles.questions.userDiv}>
            <Typography sx={styles.questions.username} variant="body2">
              {question.username}
            </Typography>
            <Typography sx={styles.questions.asked} variant="body2">
              {' '} asked {moment(question.date).fromNow()}.
            </Typography>
          </div>
        </div>
      </ListItemText>
    </ListItem>
  );
}
