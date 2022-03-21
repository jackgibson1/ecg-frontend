import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import moment from 'moment';
import CommentArea from './CommentArea';
import ForumService from '../../services/forum.service';
import LoadingPage from '../misc/LoadingPage';

export default function DisplayQuestionPage(props) {
  // get post id from url parameter
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const { questionId } = props.match.params;
  const [questionData, setQuestionData] = useState('');
  const [questionImgName, setQuestionImgName] = useState();

  useEffect(async () => {
    // retrieve question information
    await ForumService.getQuestion(questionId).then((res) => setQuestionData(res.data))
      .catch(() => setError(true));
    // retrieve image - if it exists
    // once check for image is complete set loading to false (success or failure)
    await ForumService.getImageName(questionId).then((res) => {
      setQuestionImgName(res.data.imgName);
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <LoadingPage text="Loading question..." />;
  }

  if (error) {
    return <h1>The provided question either does not exist or something has went wrong.</h1>;
  }

  return (
    <Box sx={{
      marginTop: 2,
      marginBottom: 3,
      display: 'flex',
      flexDirection: 'column',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '95%',
      justifyContent: 'center',
      maxWidth: '1500px',
    }}
    >
      <div style={{ marginLeft: '20px', display: 'inline' }}>
        <Typography sx={{ display: 'inline', color: 'text.primary' }} variant="body1">
          {questionData.username}
        </Typography>
        <Typography sx={{ display: 'inline', color: 'text.secondary' }} variant="body1">
          {' '} asked {moment(questionData.date).fromNow()}:
        </Typography>
      </div>
      <Box sx={{ backgroundColor: '#E8E6E6', marginLeft: 'auto', marginRight: 'auto', width: '98%', borderRadius: 2, marginTop: '10px' }}>
        <div style={{ marginTop: '10px', marginLeft: '15px', marginRight: '15px', marginBottom: '10px', color: '#0000AA', textDecoration: 'underline' }}>
          <Typography variant="h5">
            {questionData.title}
          </Typography>
        </div>
      </Box>
      <Box sx={{ backgroundColor: '#E8E6E6', marginLeft: 'auto', marginRight: 'auto', width: '98%', borderRadius: 2, marginTop: '10px' }}>
        <div style={{ marginTop: '10px', marginLeft: '15px', marginRight: '15px', marginBottom: '15px' }}>
          <Typography variant="body" sx={{ whiteSpace: 'pre-line' }}>
            {questionData.description}
          </Typography>
        </div>
        {questionImgName && (
        <Box sx={{ marginLeft: '15px', marginTop: '10px' }}>
          <Typography variant="body" sx={{ display: 'block', textDecoration: 'underline' }}>
            Attached Image:
          </Typography>
          <img style={{ maxWidth: '1200px', maxHeight: '1000px', marginTop: '10px', marginBottom: '10px', borderRadius: 10 }} src={`${process.env.REACT_APP_IMAGES_URL}/${questionImgName}`} alt="user uplaoded" />
        </Box>
        )}
      </Box>
      <div style={{ marginLeft: '15px', marginRight: '15px', marginTop: '15px' }}>
        <CommentArea questionId={questionId} />
      </div>
    </Box>

  );
}
