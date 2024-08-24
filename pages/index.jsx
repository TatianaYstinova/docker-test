import React, { useEffect, useState } from 'react';
import Table from '../components/Table';

const HomePage = () => {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const rowsPerPage = 15;

  useEffect(() => {
    const fetchData = async (page) => {
      const from = (page - 1) * rowsPerPage;
      const to = page * rowsPerPage;
      const response = await fetch(`/api/file?from=${from}&to=${to}`);
      const result = await response.json();
      setData(result.data);
      setTotalPages(result.totalPages);
    };
    fetchData(1); 
  }, []);

  const handlePageChange = (page) => {
    const fetchData = async (page) => {
      const from = (page - 1) * rowsPerPage;
      const to = page * rowsPerPage;
      const response = await fetch(`/api/file?from=${from}&to=${to}`);
      const result = await response.json();
      setData(result.data);
      console.log(result)
    };

    fetchData(page);
  };

  return (
    <div>
      <h1>Data from CSV</h1>
        <Table data={data} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default HomePage;
