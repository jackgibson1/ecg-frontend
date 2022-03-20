import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import QuestionsListItem from './QuestionsListItem';

export default function QuestionsList(props) {
  const { questions, history } = props;
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {questions.map((question) => (
        <div>
          <QuestionsListItem question={question} history={history} />
          <Divider variant="inset" component="li" />
        </div>
      ))}
    </List>
  );
}
