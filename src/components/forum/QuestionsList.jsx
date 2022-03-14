import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import QuestionsListItem from './QuestionsListItem';

export default function QuestionsList(props) {
  const { posts, history } = props;
  return (
    <List sx={{ width: '75%', bgcolor: 'background.paper' }}>
      {posts.map((post) => (
        <QuestionsListItem post={post} history={history} />
      ))}

      <Divider variant="inset" component="li" />
    </List>
  );
}
