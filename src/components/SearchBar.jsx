import React from 'react';
import { TextField } from '@mui/material';


const SearchBar = ({ value, onChange }) => {
  return (
    <TextField
      className="search-bar"
      label="Search Images"
      variant="outlined"
      fullWidth
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBar;
