import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Cool Doggo",
      image:
        "https://images.unsplash.com/photo-1591946532546-4160f60a5311?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
