import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import moment from 'moment';
import CommentIcon from '@mui/icons-material/Comment';
import ForumService from '../../services/forum.service';

export default function PostPage(props) {
  // get post id from url parameter
  const { postId } = props.match.params;
  const [postData, setPostData] = useState('');
  const [postImgName, setPostImgName] = useState();

  useEffect(async () => {
    // retrieve post information
    await ForumService.getPost(postId).then((res) => setPostData(res.data));
    // retrieve image - if it exists
    await ForumService.getImageName(postId).then((res) => setPostImgName(res.data.imgName));
  }, []);

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
          {postData.username}
        </Typography>
        <Typography sx={{ display: 'inline', color: 'text.secondary' }} variant="body1">
          {' '} asked {moment(postData.date).fromNow()}:
        </Typography>
      </div>
      <Box sx={{ backgroundColor: '#E8E6E6', marginLeft: 'auto', marginRight: 'auto', width: '98%', borderRadius: 2, marginTop: '10px' }}>
        <div style={{ marginTop: '10px', marginLeft: '15px', marginRight: '15px', marginBottom: '10px', color: '#0000AA', textDecoration: 'underline' }}>
          <Typography variant="h5">
            {postData.title}
          </Typography>
        </div>
      </Box>
      <Box sx={{ backgroundColor: '#E8E6E6', marginLeft: 'auto', marginRight: 'auto', width: '98%', borderRadius: 2, marginTop: '10px' }}>
        <div style={{ marginTop: '10px', marginLeft: '15px', marginRight: '15px', marginBottom: '15px' }}>
          <Typography variant="body" sx={{ whiteSpace: 'pre-line' }}>
            {postData.description}
          </Typography>
        </div>
        {postImgName && (
        <Box sx={{ marginLeft: '15px', marginTop: '10px' }}>
          <Typography variant="body" sx={{ display: 'block', textDecoration: 'underline' }}>
            Attached Image:
          </Typography>
          <img style={{ maxWidth: '1200px', maxHeight: '1000px', marginTop: '10px', marginBottom: '10px', borderRadius: 10 }} src={`${process.env.REACT_APP_IMAGES_URL}/${postImgName}`} alt="user uplaoded" />
        </Box>
        )}
      </Box>
      <div style={{ marginLeft: '20px', display: 'inline', marginTop: '10px' }}>
        <Box sx={{ display: 'flex' }}>
          <CommentIcon />
          <Box>
            <Typography sx={{ ml: 1 }} variant="body1">4 Total Comments:</Typography>
          </Box>
        </Box>
      </div>
    </Box>

  );
}
