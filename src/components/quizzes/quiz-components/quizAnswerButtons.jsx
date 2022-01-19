import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

export default function RowRadioButtonsGroup() {
  const [selectedAnswer, setSelectedAnswer] = React.useState(-1);
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('');

  const handleChange = (event) => {
    setSelectedAnswer(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedAnswer === 1) {
      setHelperText('You got it!');
      setError(false);
    } else if (selectedAnswer === 2) {
      setHelperText('Sorry, wrong answer!');
      setError(true);
    } else if (selectedAnswer === 3) {
      setHelperText('Sorry, wrong answer!');
      setError(true);
    } else if (selectedAnswer === 4) {
      setHelperText('Sorry, wrong answer!');
      setError(true);
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl error={error}>
        <FormLabel id="demo-row-radio-buttons-group-label">Answer</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={selectedAnswer}
          onChange={handleChange}
        >
          <FormControlLabel value="1" control={<Radio />} label="1" />
          <FormControlLabel value="2" control={<Radio />} label="2" />
          <FormControlLabel value="3" control={<Radio />} label="3" />
          <FormControlLabel value="4" control={<Radio />} label="4" />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button type="submit" variant="outlined">
          Check Answer
        </Button>
      </FormControl>
    </form>
  );
}
