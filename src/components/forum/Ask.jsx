import React, { useState, useEffect } from 'react';
import { Box, Typography, Pagination, Button, Divider } from '@mui/material';
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
      <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', marginTop: '5px' }}>
        <Typography variant="h6" sx={{ border: 2, borderRadius: 1, p: 1, boxShadow: 2 }}>
          Displaying All Questions ({postsData.numberOfResults})
        </Typography>
        <Button variant="outlined">Ask Question</Button>
      </div>
      <Divider sx={{ borderBottomWidth: '3px', marginTop: '15px', background: 'black', borderRadius: 3 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', marginTop: '10px' }}>
        <SearchBox />
        <FilterSelect filter={filter} setFilter={setFilter} />
      </div>
      <QuestionsList posts={postsData.results} history={props.history} />
      <Pagination sx={{ marginLeft: 'auto', marginRight: 'auto' }} count={postsData.numberOfPages} page={page} onChange={handlePageChange} color="primary" />
    </Box>
  );
}

export default Ask;
