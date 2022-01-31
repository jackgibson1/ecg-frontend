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
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  textAlign: 'center',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: 10,
  p: 4,
};

export default function CourseContentsList(props) {
  const {
    sections, currentSection, completedSections, overflow, handleClickSection,
  } = props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
                  if (index > completedSections + 1) {
                    handleOpen();
                  } else {
                    handleClickSection(index);
                  }
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
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={modalStyle}>
          <Typography variant="h6" component="h2">
            You haven&apos;t yet completed this section!
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Continue working your way through the course material to unlock this section.
          </Typography>
        </Box>
      </Modal>
    </nav>
  );
}
