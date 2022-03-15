import React, { useState, useEffect } from 'react';
import { Box, Typography, Pagination } from '@mui/material';
import QuestionsList from './QuestionsList';
import { styles } from './forum.styles';
import SearchBox from './SearchBox';
import FilterSelect from './FilterSelect';
import ForumService from '../../services/forum.service';

function Ask(props) {
  const [postsData, setPostsData] = useState({ results: [], numberOfPages: 1, numberOfResults: 0 });
  const [filter, setFilter] = useState('most-recent');
  const [page, setPage] = useState(1);

  useEffect(async () => {
    await ForumService.getAllPosts(page, filter).then((res) => {
      setPostsData(res.data);
    });
  }, [filter, page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box sx={styles.askPage.outerBox}>
      <SearchBox />
      <div style={{ display: 'inline-block' }}>
        <Typography variant="h6" style={{ marginTop: '20px' }}>
          All Questions ({postsData.numberOfResults})
        </Typography>
      </div>
      <div style={{ display: 'inline-block', marginLeft: '10%' }}>
        <FilterSelect filter={filter} setFilter={setFilter} />
      </div>
      <QuestionsList posts={postsData.results} history={props.history} />
      <Pagination count={postsData.numberOfPages} page={page} onChange={handlePageChange} color="primary" />
    </Box>
  );
}

export default Ask;
