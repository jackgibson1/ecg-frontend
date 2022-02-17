/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AdminService from '../../services/admin.service';

const userColumns = [
  { field: 'id',
    headerName: 'ID',
    width: 20,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'username',
    headerName: 'Username',
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 250,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'createdAt',
    headerName: 'Active Since',
    width: 110,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'credits',
    headerName: 'Credits',
    width: 90,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'coursesComplete',
    headerName: 'Completed Courses',
    width: 160,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'quizzesComplete',
    headerName: 'Completed Quizzes',
    width: 160,
    headerAlign: 'center',
    align: 'center',
  },
];

export default function AdminUserTable() {
  // eslint-disable-next-line react/prop-types
  const [userRows, setUserRows] = useState([]);
  const [selectedUsers, setSelectedUsers] = React.useState([]);

  useEffect(() => {
    AdminService.getAllUsers()
      .then((res) => {
        const users = [];

        for (const usr of res.data) {
          const createdAt = new Date(usr.createdAt).toLocaleDateString();
          users.push({
            id: usr.id,
            username: usr.username,
            email: usr.email,
            createdAt,
            credits: usr.credits == null ? Math.floor(Math.random() * 12) : usr.credits,
            coursesComplete: usr.coursesComplete,
            quizzesComplete: usr.quizzesComplete,
          });
        }
        setUserRows(users);
      });
  }, []);

  return (
    <div style={{ height: 500, width: '95%', marginTop: '2%', marginBottom: '7%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
      <DataGrid
        sx={{ boxShadow: 1, borderRadius: 2 }}
        rows={userRows}
        columns={userColumns}
        checkboxSelection={false}
        components={{ Toolbar: GridToolbar }}
        onSelectionModelChange={(newSelectionUser) => {
          setSelectedUsers(newSelectionUser);
        }}
        selectionModel={selectedUsers}
      />
      <Button
        sx={{ color: '#EE3233', marginBottom: '2%', marginTop: '2%', boxShadow: 5 }}
        variant="outlined"
        align="center"
        endIcon={<DeleteForeverIcon />}
        disabled={selectedUsers.length === 0}
      >
        Delete Selected User
      </Button>
    </div>
  );
}
