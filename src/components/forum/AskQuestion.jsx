import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Form from 'react-validation/build/form';
import { Stack, TextField } from '@mui/material';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>Ask Question</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Form>
            <Stack spacing={2} sx={{ marginTop: '5%' }}>
              <TextField required label="Title" />
              <TextField required label="Body" />
              <Button type="submit" fullWidth variant="contained">
                Submit Question
              </Button>
            </Stack>
          </Form>
        </Box>
      </Modal>
    </>
  );
}
