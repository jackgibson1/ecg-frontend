import * as React from 'react';
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';

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
