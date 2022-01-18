import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import TimerIcon from '@mui/icons-material/Timer';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const Input = styled(MuiInput)`
  width: 42px;
`;

export default function QuizTimerSlider(props) {
  const [value, setValue] = React.useState(10);
  // eslint-disable-next-line react/prop-types
  const { timerOn, setTimerOn } = props;

  const handleChange = (event) => {
    setTimerOn(event.target.checked);
  };

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 10) {
      setValue(10);
    } else if (value > 60) {
      setValue(60);
    }
  };

  return (
    <Box sx={{ width: 250 }}>
      <FormGroup>
        <FormControlLabel
          sx={{ justifyContent: 'space-between' }}
          control={(
            <Switch
              checked={timerOn}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          )}
          label="Timer (Off/On)"
          labelPlacement="start"
        />
      </FormGroup>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <TimerIcon />
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            disabled={!timerOn}
          />
        </Grid>
        <Grid item>
          <Input
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
            disabled={!timerOn}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
