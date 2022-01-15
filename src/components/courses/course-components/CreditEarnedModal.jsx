import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CourseBackgroundImage from '../../../assets/images/courses/earnedCredit.gif';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: 8,
  boxShadow: 24,
  p: 4,
  backgroundImage: `url(${CourseBackgroundImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
};

export default function BasicModal(props) {
  // eslint-disable-next-line react/prop-types
  const { open, setOpen } = props;
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography sx={{ fontWeight: 'bold' }} id="modal-modal-title" variant="h6" component="h2" textAlign="center">
          You have earned 1 credit!
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2, fontWeight: 'bold' }} textAlign="center">
          Continue completing courses and quizzes to earn more credits!
        </Typography>
      </Box>
    </Modal>
  );
}
