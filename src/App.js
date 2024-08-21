import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import  Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


export const App = () => {

  const [data, setData] = useState([]);
  const [page,setPage]=useState(1);
  const[rowsPerPage] = useState(15);

  useEffect(() => {
    Papa.parse('./data.csv.csv', {
      download: true, header: true, complete: (results) => {
        if (results.data.length > 0) {
          const filteredData = results.data.map(row => ({
            col1: row["articleid"],
            col2: row["subarticleid"],
            col3: row["articlename"],
            col4: row["external_str_id"],
            col5: row["ecrlongname"],
          }));
          setData(filteredData);
        } else {
          console.error("Нет ничего");
        }
      },
    });
  }, []);

  const totalPages=Math.ceil(data.length/rowsPerPage);

  const handleChange = (_,value)=>{setPage(value)};

  const startIndex = (page-1)  * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  return (<>
    <h1>Data from CSV</h1>
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
        {currentData.length > 0 ?
          (currentData.map((row, index) => (
            <tr key={index}>
              <td>{row.col1}</td>
              <td>{row.col2}</td>
              <td>{row.col3}</td>
              <td>{row.col4}</td>
              <td>{row.col5}</td>
            </tr>))) : (
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
      color="primary"/>
    </Stack>
  </>
  )
}
export default App;