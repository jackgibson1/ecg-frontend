import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';

export default function CourseContentsList(props) {
  // eslint-disable-next-line react/prop-types
  const { sections } = props;

  return (
    <nav aria-label="main mailbox folders">
      <List>
        {/* eslint-disable-next-line react/prop-types */}
        {sections.map((section) => (
          <>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={section} />
              </ListItemButton>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </nav>
  );
}
