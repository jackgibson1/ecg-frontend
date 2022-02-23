/* eslint-disable react/prop-types */
import * as React from 'react';
import Stack from '@mui/material/Stack';
import { PeopleForItem } from '../styles';

export default function CoursePeopleFor(props) {
  const { whoFor } = props;

  return (
    <div>
      <Stack direction="row" spacing={2} justifyContent="center">
        {whoFor.map((who) => (
          <PeopleForItem>{who}</PeopleForItem>
        ))}
      </Stack>
    </div>
  );
}
