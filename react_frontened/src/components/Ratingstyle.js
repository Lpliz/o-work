import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function Reviewcard({ratingvalue}) {
  return (
    <Stack spacing={1}>
      <Rating name="full-rating-read" style={{color:"red"}}defaultValue={ratingvalue} precision={1} readOnly />
    </Stack>
  );
}