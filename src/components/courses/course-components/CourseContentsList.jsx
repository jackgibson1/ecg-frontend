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

export default function CourseContentsList(props) {
  const {
    sections, currentSection, completedSections, overflow, handleClickSection,
  } = props;

  function getIcon(index) {
    if (completedSections >= index) {
      return <CheckCircleIcon style={{ fill: 'green' }} />;
    } if (completedSections <= index) {
      return <AssignmentIcon style={{ fill: 'blue' }} />;
    }
    return null;
  }

  return (
    <nav aria-label="main mailbox folders">
      <List
        sx={{
          width: '100%',
          maxHeight: 510,
          maxWidth: '100%',
          paddingRight: '3%',
          position: 'relative',
          overflow: overflow ? 'auto' : '',
          '& ul': { padding: 0 },
        }}
        subheader={(
          <ListSubheader align="left">
            {`Course Contents (${sections.length}) `}
          </ListSubheader>
)}
      >
        {/* eslint-disable-next-line react/prop-types */}
        {sections.map((section, index) => (
          <>
            <ListItem
              selected={currentSection === index}
              disabled={completedSections + 1 < index}
              key={Math.random()}
              disablePadding
              onClick={() => {
                if (overflow) {
                  handleClickSection(index);
                }
              }}
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
