import React from "react";
import { User } from "./types";

interface UserListProps {
  users: User[];
  onDelete: (id: string) => void;
  onEdit: (user: User) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onDelete, onEdit }) => {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <span>
            {user.firstName} {user.lastName}
          </span>
          <span>{user.emailAddress}</span>
          <span>{user.phone}</span>
          <button onClick={()=> onEdit(user)}>Edit</button>
          <button onClick={()=> onDelete(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
export default UserList;