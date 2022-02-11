import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id',
    headerName: 'ID',
    width: 60,
  },
  {
    field: 'courseName',
    headerName: 'Course',
    width: 300,
  },
  {
    field: 'completed',
    headerName: 'Completed',
    width: 110,
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 110,
  },
];

const rows = [
  { id: 1, courseName: 'Snow', firstName: 'Jon', date: '02/02/1999' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function CourseTable() {
  return (
    <div style={{ height: 400, width: '95%', marginTop: '2%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection={false}
      />
    </div>
  );
}
