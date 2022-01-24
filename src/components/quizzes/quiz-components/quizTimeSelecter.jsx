/* eslint-disable react/prop-types */
import * as React from 'react';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function QuizTimeSelector(props) {
  // eslint-disable-next-line react/prop-types
  const { timer, setTimer } = props;

  const handleChange = (event) => {
    setTimer((prevTimer) => ({
      ...prevTimer,
      on: event.target.checked,
    }));
  };

  return (
    <Box sx={{ width: 250 }}>
      <FormGroup>
        <FormControlLabel
          sx={{ justifyContent: 'space-between' }}
          control={(
            <Switch
              checked={timer.on}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          )}
          label="Timer (Off/On)"
          labelPlacement="start"
        />
      </FormGroup>

    </Box>
  );
}
