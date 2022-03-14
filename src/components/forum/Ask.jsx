import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import QuestionsList from './QuestionsList';
import { styles } from './forum.styles';
import ForumService from '../../services/forum.service';

function Ask(props) {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    await ForumService.getAllPosts().then((res) => {
      setPosts(res.data);
    });
  }, []);

  return (
    <Box sx={styles.askPage.outerBox}>
      <QuestionsList posts={posts} history={props.history} />
    </Box>
  );
}

export default Ask;
