/* eslint-disable no-unused-vars */
import * as React from 'react';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import UserService from '../../../services/user.service';
import CreditEarnedModal from './CreditEarnedModal';

export default function DelayingAppearance(props) {
  // eslint-disable-next-line react/prop-types
  const { courseId } = props;
  const [query, setQuery] = React.useState('idle');
  const [response, setResponse] = React.useState({ creditEarned: false, message: '' });
  const [openModal, setOpenModal] = React.useState(false);
  const timerRef = React.useRef();

  React.useEffect(
    () => () => {
      clearTimeout(timerRef.current);
    },
    [],
  );

  const handleClickQuery = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (query !== 'idle') {
      setQuery('idle');
      return;
    }

    setQuery('progress');

    timerRef.current = window.setTimeout(() => {
      UserService.completeCourse(courseId).then((res) => {
        if (res.data.creditEarned) setOpenModal(true);
        setResponse(res.data);
        setQuery('success');
      }).catch(() => {
        setQuery('error');
      });
    }, 2000);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ height: 40 }}>
        {query === 'success' ? (
          <Typography>{response.message}</Typography>
        ) : (
          <Fade
            in={query === 'progress'}
            style={{
              transitionDelay: query === 'progress' ? '10ms' : '0ms',
            }}
            unmountOnExit
          >
            <CircularProgress />
          </Fade>
        )}
      </Box>
      <Button sx={{ backgroundColor: '#A3D6F5', color: '#EE3233', borderRadius: 3, m: 2 }} onClick={handleClickQuery}>
        {query === 'idle' && 'Complete Course'}
      </Button>
      <CreditEarnedModal open={openModal} setOpen={setOpenModal} />
    </Box>
  );
}
