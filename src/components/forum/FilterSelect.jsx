import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FilterSelect(props) {
  const { filter, setFilter } = props;

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <FormControl variant="filled" sx={{ minWidth: 120 }}>
      <InputLabel>Filter</InputLabel>
      <Select
        value={filter}
        label="filter"
        onChange={handleChange}
      >
        <MenuItem value="most-recent">Most Recent</MenuItem>
        <MenuItem value="highest-votes">Highest Votes</MenuItem>
        <MenuItem value="most-comments">Most Comments</MenuItem>
      </Select>
    </FormControl>
  );
}
