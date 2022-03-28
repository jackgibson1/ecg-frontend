import React, { useState, useEffect } from 'react';
import { Box, Typography, Pagination, Divider, Alert } from '@mui/material';
import QuestionsList from './QuestionsList';
import SearchBox from './SearchBox';
import FilterSelect from './FilterSelect';
import AskQuestionModal from './AskQuestionModal';
import LoadingPage from '../misc/LoadingPage';
import ForumService from '../../services/forum.service';
import AuthService from '../../services/auth.service';
import { styles } from './forum.styles';

function AskPage(props) {
  const [isLoading, setLoading] = useState(true);
  // question data that will set via API call
  const [questionsData, setQuestionsData] = useState({ results: [], numberOfPages: 1, numberOfResults: 0 });
  // defining three filters; most-recent, highest votes & most-comments
  const [filter, setFilter] = useState('most-recent');
  const [page, setPage] = useState(1);

  // trigger request everytime filter or page changes
  useEffect(async () => {
    await ForumService.getAllQuestions(page, filter).then((res) => {
      setQuestionsData(res.data);
      setLoading(false);
    });
  }, [filter, page]);

  const handlePageChange = (event, value) => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    setPage(value);
  };

  if (isLoading) {
    return <LoadingPage text="Loading all questions..." />;
  }

  return (
    <Box sx={styles.askPage.outerBox}>
      <div style={styles.askPage.topDiv}>
        <Typography variant="h6" sx={styles.askPage.allQuestionsText}>
          Displaying All Questions ({questionsData.numberOfResults})
        </Typography>
        {AuthService.isLoggedIn() ? (
          <AskQuestionModal history={props.history} />
        ) : (
          <Alert sx={{ borderRadius: 2, boxShadow: 2 }} severity="info">Please sign in to ask a question!</Alert>
        )}
      </div>
      <div style={styles.askPage.searchFilterDiv}>
        <SearchBox />
        <FilterSelect filter={filter} setFilter={setFilter} />
      </div>
      <Divider sx={styles.askPage.divider} />
      <QuestionsList questions={questionsData.results} history={props.history} />
      <Pagination sx={styles.askPage.pagination} count={questionsData.numberOfPages} page={page} onChange={handlePageChange} color="primary" />
    </Box>
  );
}

export default AskPage;
