import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import QuestionsList from './QuestionsList';
import { styles } from './forum.styles';
import SearchBox from './SearchBox';
import FilterSelect from './FilterSelect';
import ForumService from '../../services/forum.service';

function Ask(props) {
  const [postsData, setPostsData] = useState({ results: [], numberOfPages: 0, numberOfResults: 0 });
  const [filter, setFilter] = useState('most-recent');
  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = useState(1);

  useEffect(async () => {
    await ForumService.getAllPosts(page, filter).then((res) => {
      setPostsData(res.data);
    });
  }, [filter]);

  return (
    <Box sx={styles.askPage.outerBox}>
      <Box sx={{ marginLeft: '5%', marginTop: '2%' }}>
        <SearchBox />
        <div style={{ display: 'inline-block' }}>
          <Typography variant="h6" style={{ marginTop: '20px' }}>
            All Questions
          </Typography>
        </div>
        <div style={{ display: 'inline-block', marginLeft: '10%' }}>
          <FilterSelect filter={filter} setFilter={setFilter} />
        </div>
        <QuestionsList posts={postsData.results} history={props.history} />
      </Box>
    </Box>
  );
}

export default Ask;
