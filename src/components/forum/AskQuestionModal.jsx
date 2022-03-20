/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Form from 'react-validation/build/form';
import { Stack, TextField, Typography, Alert } from '@mui/material';
import Modal from '@mui/material/Modal';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DeleteIcon from '@mui/icons-material/Delete';
import ForumService from '../../services/forum.service';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AskQuestionModal() {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');
  const [errors, setErrors] = React.useState({ title: false, body: false, submit: false });
  const [selectedFile, setSelectedFile] = React.useState();

  const saveFile = (e) => {
    console.log(e.target.files[0]);
    setSelectedFile(e.target.files[0]);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim().length === 0) {
      setErrors({ ...errors, title: true });
      return;
    }
    if (body.trim().length === 0) {
      setErrors({ ...errors, body: true });
      return;
    }

    const questionId = await ForumService.createQuestion(title, body).then((res) => {
      if (res.data.success) {
        handleClose();
        return res.data.postId;
      }
      setErrors({ ...errors, submit: true });
      return -1;
    }).catch(() => {
      setErrors({ ...errors, submit: true });
      return -1;
    });

    if (questionId !== -1 && selectedFile) {
      const formData = new FormData();
      formData.append('postId', questionId);
      formData.append('file', selectedFile);
      ForumService.uploadImage(formData).catch(() => setBody({ ...errors, submit: true }));
    }
  };

  const onChangeFields = (e) => {
    setErrors({ title: false, body: false, submit: false });
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else if (e.target.name === 'body') {
      setBody(e.target.value);
    }
  };

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>Ask Question</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6">What would you like help with?</Typography>
          <Form onSubmit={handleSubmit}>
            <Stack spacing={2} sx={{ marginTop: '20px' }}>
              <TextField
                name="title"
                required
                label="Title"
                placeholder="I am unsure what this ECG is presenting, can anyone suggest some findings?"
                onChange={onChangeFields}
                error={errors.title}
              />
              <TextField
                name="body"
                required
                label="Body"
                placeholder="It's of a 35 year old man presenting with palpitations. He has been drinking heavily with friends over the weekend. I have attached the ECG."
                multiline
                rows={10}
                onChange={onChangeFields}
                error={errors.body}
              />
              {!selectedFile && (
                <>
                  <input
                    accept="image/*"
                    hidden
                    id="raised-button-file"
                    type="file"
                    onChange={saveFile}
                  />
                  <label htmlFor="raised-button-file">
                    <Button variant="outlined" component="span" fullWidth startIcon={<UploadFileIcon />}>
                      Upload Image
                    </Button>
                  </label>
                </>
              )}
              {selectedFile && (
                <>
                  <h4>{selectedFile.name}</h4>
                  <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => setSelectedFile()}>
                    Unselect Image
                  </Button>
                </>
              )}
              <Button type="submit" variant="contained">
                Submit Question
              </Button>
            </Stack>
          </Form>
          {errors.submit && (
            <Alert severity="error">Something has went wrong while submitting your question.</Alert>
          )}
        </Box>
      </Modal>
    </>
  );
}
