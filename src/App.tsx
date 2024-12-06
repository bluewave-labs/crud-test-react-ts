import { useEffect, useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";
import { User } from "./types";
import {Container, Typography} from '@mui/material';

import "./App.css";

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>(() => {
    //local storage
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });
  const [editingUser, setEditingUser] = useState<User | null>(null);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  //add user first checking duplicate
  const addUser = (user: User) => {
    //unique users
    const isDuplicate = users.some(
      (u) =>
        (u.firstName === user.firstName &&
          u.lastName === user.lastName &&
          u.dateOfBirth === user.dateOfBirth &&
          u.phone === user.phone) ||
        u.emailAddress === user.emailAddress ||
        u.phone === user.phone
    );
    if (isDuplicate) {
      alert("User with this information already exists");
      return;
    }
    user.id = Date.now().toString();
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  //update user
  const updateUser = (updateUser: User) => {
    setUsers((prevUsers) =>
      prevUsers.map((u) => (u.id === updateUser.id ? updateUser : u))
    );
    setEditingUser(null);
  };

  //delete user
  const deleteUser = (userId: string) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  return (
   <Container>
    <Typography variant="h3" gutterBottom>
      Crud React App
    </Typography>
    <UserForm onSave={addUser} editingUser={editingUser} onEditSave={updateUser}></UserForm>
    <UserList users={users} onDelete={deleteUser} onEdit={setEditingUser}></UserList>
   </Container>
  );
};
export default App;
