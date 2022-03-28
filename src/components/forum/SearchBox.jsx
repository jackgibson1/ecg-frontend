import * as React from 'react';
import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styles } from './forum.styles';

export default function SearchBox() {
  return (
    <Paper component="form" sx={styles.search.paper}>
      <InputBase sx={styles.search.input} placeholder="Search Questions" disabled />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
