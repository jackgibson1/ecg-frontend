import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function CourseContentsList(props) {
  // eslint-disable-next-line react/prop-types
  const { sections, activeSection } = props;

  return (
    <nav aria-label="main mailbox folders">
      <List sx={{
        width: '100%',
        maxHeight: 510,
        maxWidth: 360,
        position: 'relative',
        overflow: 'auto',
        '& ul': { padding: 2 },
      }}
      >
        {/* eslint-disable-next-line react/prop-types */}
        {sections.map((section, index) => (
          <>
            <ListItem key={Math.random()} disablePadding>
              <ListItemButton>
                <ListItemText primary={section} />
              </ListItemButton>
              {activeSection > index
                ? <CheckCircleIcon style={{ fill: 'green' }} />
                : (
                  <AssignmentIcon style={{ fill: 'red' }} />

                )}

            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </nav>
  );
}
