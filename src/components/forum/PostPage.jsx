import React, { useEffect, useState } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import ForumService from '../../services/forum.service';

export default function PostPage(props) {
  const { postId } = props.match.params;
  // eslint-disable-next-line no-unused-vars
  const [postData, setPostData] = useState('');
  const [postImgName, setPostImgName] = useState();

  useEffect(async () => {
    await ForumService.getPost(postId).then((res) => {
      setPostData(res.data);
      console.log(res.data);
    });

    await ForumService.getImageName(postId).then((res) => {
      setPostImgName(res.data.imgName);
      console.log(`${process.env.REACT_APP_IMAGES_URL}/${res.data.imgName}`);
    });
  }, []);

  return (
    <Box sx={{
      marginTop: 3,
      marginBottom: 3,
      display: 'flex',
      flexDirection: 'column',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '90%',
      justifyContent: 'center',
      textAlign: 'center',
      maxWidth: '1500px',
    }}
    >
      <Typography variant="h6">
        {postData.title}
      </Typography>
      <Divider sx={{ borderBottomWidth: '3px', marginTop: '15px', background: 'black', borderRadius: 3 }} />
      <Typography variant="h6">
        {postData.description}
      </Typography>
      {postImgName && (
      <div>
        <h1>Image:</h1>
        <img src={`${process.env.REACT_APP_IMAGES_URL}/${postImgName}`} alt="user uplaoded" />
      </div>
      )}
    </Box>

  );
}
