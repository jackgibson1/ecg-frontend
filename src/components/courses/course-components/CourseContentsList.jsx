import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

export default function CourseContentsList(props) {
  // eslint-disable-next-line react/prop-types
  const { sections, currentSection, completedSections } = props;

  function getIcon(index) {
    if (currentSection === index) {
      return <ArrowLeftIcon style={{ fill: 'blue' }} />;
    } if (completedSections >= index) {
      return <CheckCircleIcon style={{ fill: 'green' }} />;
    } if (completedSections < index) {
      return <AssignmentIcon style={{ fill: 'red' }} />;
    }
    return null;
  }

  return (
    <nav aria-label="main mailbox folders">
      <List
        sx={{
          width: '100%',
          maxHeight: 510,
          maxWidth: 360,
          position: 'relative',
          overflow: 'auto',
          '& ul': { padding: 0 },
        }}
        subheader={<ListSubheader align="left">Course Contents</ListSubheader>}
      >
        {/* eslint-disable-next-line react/prop-types */}
        {sections.map((section, index) => (
          <>
            <ListItem
              disabled={completedSections + 1 < index}
              key={Math.random()}
              disablePadding
            >
              <ListItemButton>
                <ListItemText primary={section} />
              </ListItemButton>
              {getIcon(index)}

            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </nav>
  );
}
