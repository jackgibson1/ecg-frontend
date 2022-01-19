/* eslint-disable react/prop-types */
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function QuizQuestionsList(props) {
  const { totalQuestions, currentQuestion } = props;

  function getIcon(index) {
    if (currentQuestion >= index) {
      return <CheckCircleIcon style={{ fill: 'green' }} />;
    } if (currentQuestion <= index) {
      return <AssignmentIcon style={{ fill: 'red' }} />;
    }
    return null;
  }

  function displayList() {
    const listItems = [];
    for (let i = 0; i < totalQuestions; i += 1) {
      listItems.push(
        <>
          <ListItem
            selected={(currentQuestion - 1) === i}
            disabled={currentQuestion < i}
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
        subheader={<ListSubheader align="left">Course Contents</ListSubheader>}
      >
        {displayList()}
      </List>
    </nav>
  );
}
