/* eslint-disable react/prop-types */
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CoursePeopleFor(props) {
  const { whoFor } = props;

  return (
    <div>
      <Stack direction="row" spacing={2} justifyContent="center">
        {whoFor.map((who) => (
          <Item>{who}</Item>
        ))}
      </Stack>
    </div>
  );
}
