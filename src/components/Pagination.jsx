import React from 'react';
import { Pagination as MuiPagination } from '@mui/material';
import '../styles/Pagination.css';

const Pagination = ({ page, onChange, totalPages }) => {
  return (
    <MuiPagination
      className="pagination"
      count={totalPages}
      page={page}
      onChange={(e, value) => onChange(value)}
      variant="outlined"
      shape="rounded"
    />
  );
};

export default Pagination;
