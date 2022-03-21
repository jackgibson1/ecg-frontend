import React, { useState } from 'react';
import Form from 'react-validation/build/form';
import { TextField, Box, Typography, Alert } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import AuthService from '../../services/auth.service';
import ForumService from '../../services/forum.service';
import CommentLoadingButton from './CommentLoadingButton';

export default function CommentArea(props) {
  const { questionId } = props;
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [comment, setComment] = useState('');
  const [error, setError] = useState(false);
  const timer = React.useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (comment.trim().length === 0) {
      setError(true);
      setSuccess(false);
      return;
    }

    ForumService.createComment(questionId, comment).then((res) => {
      if (res.data.success) {
        if (!loading) {
          setSuccess(false);
          setLoading(true);
          timer.current = window.setTimeout(() => {
            setSuccess(true);
            setLoading(false);
            setComment('');
          }, 2000);
        }
      } else setError(true);
    });
  };

  const onChangeComment = (e) => {
    setError(false);
    setComment(e.target.value);
  };

  return (
    <div>
      {AuthService.isLoggedIn() ? (
        <Form onSubmit={handleSubmit}>
          <TextField
            placeholder="Type comment here.."
            multiline
            rows={2}
            fullWidth
            required
            onChange={onChangeComment}
            value={comment}
            error={error}
          />
          <CommentLoadingButton success={success} loading={loading} timer={timer} handleSubmit={handleSubmit} />
        </Form>

      ) : (
        <Alert severity="info">Please sign in to reply to this question.</Alert>
      )}
      <Box sx={{ display: 'flex', marginTop: '15px' }}>
        <CommentIcon />
        <Box>
          <Typography sx={{ ml: 1 }} variant="body1">4 Total Comments:</Typography>
        </Box>
      </Box>
    </div>
  );
}