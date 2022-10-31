import * as React from 'react';
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ForumService from '../../services/forum.service';
import { styles } from './forum.styles';

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
      <Button sx={styles.deleteDialog.button} variant="outlined" endIcon={<DeleteForeverIcon />} onClick={handleClickOpen}>
        Delete
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
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
