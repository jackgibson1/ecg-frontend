import React, { useState, useEffect } from 'react';
import { Box, Typography, Pagination, Divider } from '@mui/material';
import QuestionsList from './QuestionsList';
import { styles } from './forum.styles';
import SearchBox from './SearchBox';
import FilterSelect from './FilterSelect';
import AskQuestionModal from './AskQuestionModal';
import ForumService from '../../services/forum.service';

function AskPage(props) {
  const [questionsData, setQuestionsData] = useState({ results: [], numberOfPages: 1, numberOfResults: 0 });
  const [filter, setFilter] = useState('most-recent');
  const [page, setPage] = useState(1);

  useEffect(async () => {
    await ForumService.getAllQuestions(page, filter).then((res) => {
      setQuestionsData(res.data);
    });
  }, [filter, page]);

  const handlePageChange = (event, value) => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    setPage(value);
  };

  return (
    <Box sx={styles.askPage.outerBox}>
      <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', marginTop: '5px' }}>
        <Typography variant="h6" sx={{ border: 2, borderRadius: 1, p: 1, boxShadow: 2 }}>
          Displaying All Questions ({questionsData.numberOfResults})
        </Typography>
        <AskQuestionModal />
      </div>
      <Divider sx={{ borderBottomWidth: '3px', marginTop: '15px', background: 'black', borderRadius: 3 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', marginTop: '10px' }}>
        <SearchBox />
        <FilterSelect filter={filter} setFilter={setFilter} />
      </div>
      <QuestionsList questions={questionsData.results} history={props.history} />
      <Pagination sx={{ marginLeft: 'auto', marginRight: 'auto' }} count={questionsData.numberOfPages} page={page} onChange={handlePageChange} color="primary" />
    </Box>
  );
}

export default AskPage;
