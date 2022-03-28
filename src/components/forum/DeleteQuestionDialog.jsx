import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ForumService from '../../services/forum.service';

export default function DeleteQuestionDialog(props) {
  const { history, questionId } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = () => {
    ForumService.deleteQuestion(questionId).then(() => {
      history.push('/ask');
    }).catch(() => setOpen(false));
  };

  return (
    <div>
      <Button
        sx={{ color: '#EE3233', marginBottom: '2%', marginTop: '2%', boxShadow: 5 }}
        variant="outlined"
        endIcon={<DeleteForeverIcon />}
        onClick={handleClickOpen}
      >
        Delete
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">
          Are you sure you want to delete this question?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
