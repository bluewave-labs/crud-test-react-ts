import React from "react";
import { User } from "./types";
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Button,Paper} from '@mui/material';

interface UserListProps {
  users: User[];
  onDelete: (id: string) => void;
  onEdit: (user: User) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onDelete, onEdit }) => {
  return (
    <TableContainer component={Paper} style={{ margin: "20px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Date of Birth</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.firstName}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.emailAddress}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.dateOfBirth}</TableCell>
              <TableCell>
                <Button color="primary" onClick={() => onEdit(user)}>
                  Edit
                </Button>
                <Button color="secondary" onClick={() => onDelete(user.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default UserList;