import React from "react";

const users = [
  { id: "1", name: "User1" },
  { id: "2", name: "User2" },
  { id: "3", name: "User3" },
];

const UsersList = () => {
  return (
    <div className="users-container">
      <h2 className="section-title">Users</h2>
      <ul className="users-list">
        {users.map((user) => (
          <li key={user.id}>
            <a href={`/users/${user.id}`} className="user-link">
              <span className="user-avatar">{user.name[0]}</span>
              <span>{user.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;