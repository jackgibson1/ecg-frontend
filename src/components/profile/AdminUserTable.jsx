/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useConfirm } from 'material-ui-confirm';
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
  const confirm = useConfirm();
  const [userRows, setUserRows] = useState([]);
  const [selectedUsers, setSelectedUsers] = React.useState([]);
  const [deletions, setDeletions] = React.useState(0);

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
  }, [deletions]);

  const handleClick = () => {
    confirm({ description: 'You are permentely deleting this user.' })
      .then(() => {
        AdminService.deleteUser(selectedUsers[0]).then((res) => {
          if (res.data.success) {
            setSelectedUsers([]);
            // increment deletions to ensure useEffect is called again
            setDeletions((prev) => prev + 1);
          }
        }).catch(() => console.log('Error when trying to delete user.'));
      })
      .catch(() => setSelectedUsers([]));
  };

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
        onClick={handleClick}
      >
        Delete Selected User
      </Button>
    </div>
  );
}
