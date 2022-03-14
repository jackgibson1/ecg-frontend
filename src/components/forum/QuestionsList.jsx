import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function QuestionsList() {
  return (
    <List sx={{ width: '75%', bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Admin" src="random.jpg" />
        </ListItemAvatar>
        <ListItemText
          sx={{ color: 'blue' }}
          primary="Brunch this weekend?"
          secondary={(
            <>
              <Typography sx={{ marginBottom: '5px', marginTop: '2px', color: 'text.secondary' }} variant="body2">
                I'll be in your neighborhood doing errands this…
              </Typography>
              <Typography sx={{ marginTop: '15px', display: 'inline', color: 'text.primary' }} variant="body2">
                <u>4 Votes</u>
              </Typography>
              <Typography sx={{ marginTop: '5px', display: 'inline', marginLeft: '10px', color: 'text.primary' }} variant="body2">
                <u>5 Comments</u>
              </Typography>
              <div style={{ marginTop: '5px', marginLeft: '20px', display: 'inline' }}>
                <Typography sx={{ display: 'inline', color: 'text.primary' }} variant="body2">
                  Ali Connors
                </Typography>
                <Typography sx={{ display: 'inline' }} variant="body2" color="text.secondary">
                  {' '} asked 2 minutes ago.
                </Typography>
              </div>
            </>
          )}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
