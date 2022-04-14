import { TextField } from '@mui/material';
import React from 'react';

export default function post() {
  return (
    <div>
      오늘 하루 어떤 느낌이세요?
      <TextField
        required
        id="filled-required"
        label="Required"
        defaultValue="Hello World"
        variant="filled"
      />
    </div>
  );
}
