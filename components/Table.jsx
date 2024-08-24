import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Table = ({ data, totalPages,onPageChange }) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    onPageChange(page);
  }, [page]);

  const handleChange = (_, value) => {
    setPage(value);
  };

  return (
    <>
      <table className='table'>
        <thead>
          <tr>
            <th>articleid</th>
            <th>subarticleid</th>
            <th>articlename</th>
            <th>external_str_id</th>
            <th>ecrlongname</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, index) => (
              <tr key={index}>
                <td>{row['articleid']}</td>
                <td>{row['subarticleid']}</td>
                <td>{row['articlename']}</td>
                <td>{row['external_str_id']}</td>
                <td>{row['ecrlongname']}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </Stack>
    </>
  );
};

 export default Table;