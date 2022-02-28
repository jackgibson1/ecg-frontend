import * as React from 'react';
import { List, ListItem, ListItemButton, ListItemText, ListSubheader, Divider } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DangerousIcon from '@mui/icons-material/Dangerous';
import QuizService from '../../../services/quiz.service';

export default function QuizQuestionsList(props) {
  const { totalQuestions, currentQuestion } = props;

  function getIcon(questionIndex) {
    const quizStorage = QuizService.getLocalQuiz();

    if (typeof quizStorage.answers[questionIndex] === 'undefined') {
      return <AssignmentIcon style={{ fill: 'blue' }} />;
    } if (quizStorage.answers[questionIndex]) {
      return <CheckCircleIcon style={{ fill: 'green' }} />;
    }
    return <DangerousIcon style={{ fill: 'red' }} />;
  }

  function displayList() {
    const listItems = [];
    for (let i = 0; i < totalQuestions; i += 1) {
      listItems.push(
        <>
          <ListItem
            selected={(currentQuestion - 1) === i}
            disabled={(currentQuestion - 1) < i}
            key={Math.random()}
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary={`Question ${i + 1}`} />
            </ListItemButton>
            {getIcon(i)}
          </ListItem>
          <Divider />
        </>,
      );
    }
    return listItems;
  }

  return (
    <nav aria-label="main mailbox folders">
      <List
        sx={{
          width: '100%',
          maxHeight: 510,
          maxWidth: '100%',
          position: 'relative',
          overflow: 'auto',
          '& ul': { padding: 0 },
        }}
        subheader={<ListSubheader align="left">Quiz Questions</ListSubheader>}
      >
        {displayList()}
      </List>
    </nav>
  );
}
