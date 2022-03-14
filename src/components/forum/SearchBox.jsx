import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBox() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', marginTop: '10px', display: 'flex', width: 400, border: 1 }}
    >
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Questions" />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
