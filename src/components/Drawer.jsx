import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer anchor="top" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/courses">Courses</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/quizzes">Quizzes</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/ask">Ask</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/login">Login</Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon style={!openDrawer ? { color: 'white' } : { color: 'black' }} />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
