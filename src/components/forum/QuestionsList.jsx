import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import QuestionsListItem from './QuestionsListItem';

export default function QuestionsList(props) {
  const { posts, history } = props;
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {posts.map((post) => (
        <div>
          <QuestionsListItem post={post} history={history} />
          <Divider variant="inset" component="li" />
        </div>
      ))}
    </List>
  );
}
