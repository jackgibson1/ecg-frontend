import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FilterSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl variant="filled" sx={{ minWidth: 120 }}>
      <InputLabel>Filter</InputLabel>
      <Select
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={10}>Most Recent</MenuItem>
        <MenuItem value={20}>Highest Votes</MenuItem>
        <MenuItem value={30}>Most Comments</MenuItem>
      </Select>
    </FormControl>
  );
}
