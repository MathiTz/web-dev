import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Matheus",
      image: "https://github.githubassets.com/favicons/favicon.png",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
