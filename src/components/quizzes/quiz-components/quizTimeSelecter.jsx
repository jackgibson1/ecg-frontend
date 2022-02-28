import * as React from 'react';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function QuizTimeSelector(props) {
  const { timer, setTimer } = props;

  const handleSwitchChange = (event) => {
    setTimer((prevTimer) => ({
      ...prevTimer,
      on: event.target.checked,
    }));
  };

  const handleTimeChange = (event) => {
    setTimer((prevTimer) => ({
      ...prevTimer,
      seconds: event.target.value,
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
              onChange={handleSwitchChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          )}
          label="Timer (Off/On)"
          labelPlacement="start"
        />
      </FormGroup>
      <Box sx={{ minWidth: 120, marginTop: '5%' }}>
        <FormControl fullWidth disabled={!timer.on}>
          <InputLabel>Time</InputLabel>
          <Select
            value={timer.seconds}
            label="Time"
            onChange={handleTimeChange}
          >
            <MenuItem value={10}>10 seconds</MenuItem>
            <MenuItem value={20}>20 seconds</MenuItem>
            <MenuItem value={30}>30 seconds</MenuItem>
          </Select>
        </FormControl>
      </Box>

    </Box>
  );
}
