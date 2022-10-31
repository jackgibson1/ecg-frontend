import * as React from 'react';
import { List, Divider } from '@mui/material';
import QuestionsListItem from './QuestionsListItem';
import { styles } from './forum.styles';

export default function QuestionsList(props) {
  const { questions, history } = props;
  return (
    <List sx={styles.questions.list}>
      {questions.map((question) => (
        <div key={Math.random(10)}>
          <QuestionsListItem question={question} history={history} />
          <Divider variant="inset" component="li" />
        </div>
      ))}
    </List>
  );
}
