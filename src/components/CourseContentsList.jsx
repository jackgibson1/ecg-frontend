import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import courseDetails from './courseDetails';

export default function CourseContentsList(props) {
  // eslint-disable-next-line react/prop-types
  const { pathname } = props;

  const course = courseDetails.find((cse) => cse.path === pathname);
  console.log(course);

  return (
    <nav aria-label="main mailbox folders">
      <List>
        {course.sections.map((section) => (
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
