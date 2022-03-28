import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import moment from 'moment';
import CommentArea from './CommentArea';
import CommentsList from './CommentsList';
import ForumService from '../../services/forum.service';
import LoadingPage from '../misc/LoadingPage';
import QuestionVoting from './QuestionVoting';
import DeleteQuestionDialog from './DeleteQuestionDialog';
import AuthService from '../../services/auth.service';
import { styles } from './forum.styles';

export default function DisplayQuestionPage(props) {
  // get question id from url parameter
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const { questionId } = props.match.params;
  const [questionData, setQuestionData] = useState('');
  const [questionImgName, setQuestionImgName] = useState();
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    await ForumService.getAllComments(questionId).then((res) => {
      setComments(res.data);
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  };

  useEffect(async () => {
    // retrieve question information
    await ForumService.getQuestion(questionId).then((res) => setQuestionData(res.data))
      .catch(() => setError(true));
    // retrieve image - if it exists
    await ForumService.getImageName(questionId).then((res) => {
      setQuestionImgName(res.data.imgName);
    }).catch((err) => console.log(err));
    // retrive comments
    getComments();
  }, []);

  if (isLoading) {
    return <LoadingPage text="Loading question..." />;
  }
  const canDelete = () => {
    if (!AuthService.isLoggedIn()) return false;
    if ((questionData.username === AuthService.getCurrentUser().username) || (AuthService.getCurrentUser().username === 'admin')) return true;
    return false;
  };

  if (error) {
    return <h1>The provided question either does not exist or something has went wrong.</h1>;
  }

  return (
    <Box sx={styles.displayQuestion.outerBox}>
      <div style={styles.displayQuestion.topDiv}>
        <div style={{ marginTop: '8px' }}>
          <Typography sx={styles.displayQuestion.username} variant="body1">
            {questionData.username}
          </Typography>
          <Typography sx={styles.displayQuestion.asked} variant="body1">
            {' '} asked {moment(questionData.date).fromNow()}:
          </Typography>
        </div>
        {canDelete() && (
          <DeleteQuestionDialog history={props.history} questionId={questionId} />
        )}
        <QuestionVoting questionId={questionId} />
      </div>
      <Box sx={styles.displayQuestion.titleBox}>
        <div style={styles.displayQuestion.titleDiv}>
          <Typography variant="h5">
            {questionData.title}
          </Typography>
        </div>
      </Box>
      <Box sx={styles.displayQuestion.descriptionBox}>
        <div style={styles.displayQuestion.descriptionDiv}>
          <Typography variant="body" sx={{ whiteSpace: 'pre-line' }}>
            {questionData.description}
          </Typography>
        </div>
        {questionImgName && (
        <Box sx={styles.displayQuestion.imageBox}>
          <Typography variant="body" sx={styles.displayQuestion.imageText}>
            Attached Image:
          </Typography>
          <img style={styles.displayQuestion.image} src={`${process.env.REACT_APP_IMAGES_URL}/${questionImgName}`} alt="user uplaoded" />
        </Box>
        )}
      </Box>
      <CommentArea questionId={questionId} getComments={getComments} />
      <CommentsList comments={comments} />
    </Box>

  );
}
